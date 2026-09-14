import express from "express";
import helmet from "helmet";
import { createHash, timingSafeEqual } from "node:crypto";

import env from "./config/index.js";

import { corsHandler } from "./middlewares/cors.js";
import logger from "./lib/logger.js";
import db from "./config/db.js";
import emailTransporter from "./config/emailTransporter.js";
import { waitlist } from "./models/waitlist.js";
import { generateUniqueID } from "./utils/generateId.js";
import {
  MissingMailingListIdError,
  UnknownWaitlistSourceError,
  buildLoopsContactPayload,
} from "./utils/loopsContact.js";
import { toSafeLogError } from "./utils/safeLogError.js";
import { Inquiry } from "./interfaces/Inquiry.js";
import Mail from "nodemailer/lib/mailer/index.js";
import axios from "axios";
import { DatabaseError } from "pg";
import { EmailPayload, SponsorshipPayload } from "./interfaces/EmailPayload.js";

const dbClient = await db();
const emailClient = emailTransporter();
const app = express();

// Compare secrets in constant time by hashing both sides first, so the
// comparison does not leak the token through timing and length differences.
// An unset expected token (config missing `EMAIL_TOKEN`) always fails closed.
const tokensMatch = (provided: string | undefined, expected: string | undefined): boolean => {
  if (!provided || !expected) return false;
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
};

// Basic shape/size validation for free-text fields forwarded to the mailer
// and the database. Prevents unbounded payloads from being persisted or sent.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_TEXT_LENGTH = 5000;

const clampText = (value: unknown, max = 200): string =>
  typeof value === "string" ? value.slice(0, max) : "";

// Preserve undefined when optional fields are omitted or empty, allowing downstream
// handlers (such as buildLoopsContactPayload) to safely fall back to defaults.
const clampOptionalText = (value: unknown, max = 100): string | undefined =>
  typeof value === "string" && value.trim().length > 0 ? value.slice(0, max) : undefined;

// Extracts the raw email address from either a bare address ("user@example.com")
// or an RFC 2822 display-name format ("Display Name <user@example.com>").
const extractEmail = (input: string): string => {
  const match = input.match(/<([^>]+)>/);
  return match ? match[1].trim() : input.trim();
};

// Validates whether an email header contains a valid email address while
// supporting both bare addresses and display names accepted by Nodemailer.
const isValidEmailHeader = (input: unknown): boolean => {
  if (typeof input !== "string" || !input.trim()) return false;
  const rawEmail = extractEmail(input);
  return EMAIL_RE.test(rawEmail) && rawEmail.length <= 320;
};

// Middleware
app.set("trust proxy", true);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(express.json());
app.use(corsHandler);

// Routes
app.get("/", async (_, res) => {
  res.send("API is running...");
});

app.post("/api/waitlist", async (req, res) => {
  const { email, firstName, lastName, source } = req.body;
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 320) {
    res.status(400).json({ error: "A valid email is required!" });
    return;
  }

  try {
    const safeFirstName = clampText(firstName);
    const safeLastName = clampText(lastName);
    const safeSource = clampOptionalText(source, 100);

    const loopsContact = buildLoopsContactPayload(
      {
        email,
        firstName: safeFirstName,
        lastName: safeLastName,
        source: safeSource,
      },
      env.newsletter.mailingListIds,
    );

    await axios.put(
      `${env.newsletter.baseUrl}/contacts/update`,
      loopsContact,
      {
        headers: {
          Authorization: `Bearer ${env.newsletter.apiToken}`,
        },
      },
    );

    try {
      await dbClient
        .insert(waitlist)
        .values({ id: generateUniqueID(), email, lastName: safeLastName, firstName: safeFirstName });
    } catch (err) {
      if (!(err instanceof DatabaseError && err.code === "23505")) {
        throw err;
      }
    }

    res.status(201).json({ message: "Success adding to newsletter.", email });
  } catch (err) {
    if (err instanceof UnknownWaitlistSourceError) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (err instanceof MissingMailingListIdError) {
      res.status(500).json({ error: err.message });
      return;
    }

    logger.error({
      message: "Failed adding waitlist contact",
      error: toSafeLogError(err),
    });
    res.status(500).json({ error: "Unknown internal server error" });
  }
});

app.post("/api/inquiries", async (req, res) => {
  const { email, message, name } = req.body as Inquiry;

  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required!" });
    return;
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 320) {
    res.status(400).json({ error: "A valid email is required!" });
    return;
  }
  if (!message || typeof message !== "string" || message.length > MAX_TEXT_LENGTH) {
    res.status(400).json({ error: "Message is required (max 5000 characters)!" });
    return;
  }

  const contactUsMailOptions: Mail.Options = {
    from: `Hello Quantus <${env.email.sender}>`,
    to: env.email.receiver,
    subject: "Quantus New Contact",
    text: `${name.slice(0, 200)} is contacting, \n\nemail: ${email}\nmessage:${message.slice(0, MAX_TEXT_LENGTH)}`,
  };

  try {
    // Await the send so failures surface as an HTTP error instead of an
    // unhandled promise rejection after a false "Success" response.
    await emailClient.sendMail(contactUsMailOptions);

    res.status(200).json({ message: "Success sending!", email });
  } catch (error) {
    logger.error({
      message: "Failed sending contact email",
      error: toSafeLogError(error),
    });
    res.status(400).json({ error: "Failed sending." });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { from, to, subject, html } = req.body as EmailPayload;

  const token = req.headers.authorization?.split(" ")[1];
  if (!tokensMatch(token, env.email.token)) {
    res.status(401).json({ error: "Unauthorized!" });
    return;
  }

  // Allow both bare email addresses and RFC 2822 display-name formats supported by Nodemailer.
  if (!isValidEmailHeader(from)) {
    res.status(400).json({ error: "A valid From address is required!" });
    return;
  }
  if (!isValidEmailHeader(to)) {
    res.status(400).json({ error: "A valid To address is required!" });
    return;
  }
  if (!subject || typeof subject !== "string" || subject.length > 500) {
    res.status(400).json({ error: "Subject is required (max 500 characters)!" });
    return;
  }
  if (!html || typeof html !== "string" || html.length > 200_000) {
    res.status(400).json({ error: "HTML is required (max 200000 characters)!" });
    return;
  }

  const sendMailOptions: Mail.Options = {
    from,
    to,
    subject,
    html,
  };

  try {
    // Await the send so failures surface as an HTTP error instead of an
    // unhandled promise rejection after a false "Success" response.
    await emailClient.sendMail(sendMailOptions);

    res.status(200).json({ message: "Success sending!" });
  } catch (error) {
    logger.error({
      message: "Failed sending send-email request",
      error: toSafeLogError(error),
    });
    res.status(400).json({ error: "Failed sending." });
  }
});

app.post("/api/sponsorships", async (req, res) => {
  const {
    name,
    email,
    phone,
    designation,
    organization,
    investmentTier,
    additionalInfo,
  } = req.body as SponsorshipPayload;

  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required!" });
    return;
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 320) {
    res.status(400).json({ error: "A valid email is required!" });
    return;
  }
  if (!designation || typeof designation !== "string") {
    res.status(400).json({ error: "Designation is required!" });
    return;
  }
  if (!organization || typeof organization !== "string") {
    res.status(400).json({ error: "Organization is required!" });
    return;
  }
  if (!investmentTier || typeof investmentTier !== "string") {
    res.status(400).json({ error: "Investment tier is required!" });
    return;
  }

  let text = `${name.slice(0, 200)} is inquiring for a sponsorship, \n\nemail: ${email}\ndesignation: ${designation.slice(0, 200)}\norganization: ${organization.slice(0, 200)}\ninvestment tier: ${investmentTier.slice(0, 100)}`;
  if (phone && typeof phone === "string") text += `\nphone: ${phone.slice(0, 100)}`;
  if (additionalInfo && typeof additionalInfo === "string") text += `\nadditional info: ${additionalInfo.slice(0, MAX_TEXT_LENGTH)}`;

  const sponsorshipMailOptions: Mail.Options = {
    from: `Sponsorship Request - Q.Day <${env.email.sender}>`,
    to: env.email.sponsorshipReceiver,
    subject: "New Sponsorship Request",
    text,
  };

  try {
    // Await the send so failures surface as an HTTP error instead of an
    // unhandled promise rejection after a false "Success" response.
    await emailClient.sendMail(sponsorshipMailOptions);

    res.status(200).json({ message: "Success sending!" });
  } catch (error) {
    logger.error({
      message: "Failed sending sponsorship email",
      error: toSafeLogError(error),
    });
    res.status(400).json({ error: "Failed sending." });
  }
});

// Listener
app.listen(process.env.PORT, () => {
  logger.info(`Server is running at http://localhost:${process.env.PORT}`);
});

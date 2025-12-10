import express from "express";
import helmet from "helmet";

import env from "./config/index.js";

import { corsHandler } from "./middlewares/cors.js";
import logger from "./lib/logger.js";
import db from "./config/db.js";
import emailTransporter from "./config/emailTransporter.js";
import { waitlist } from "./models/waitlist.js";
import { generateUniqueID } from "./utils/generateId.js";
import { Inquiry } from "./interfaces/Inquiry.js";
import Mail from "nodemailer/lib/mailer/index.js";
import axios from "axios";
import { DatabaseError } from "pg";

const dbClient = await db();
const emailClient = emailTransporter();
const app = express();

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
  const { email, firstName, lastName } = req.body;
  if (!email) res.status(400).json({ error: "Email is required!" });
  if (!firstName) res.status(400).json({ error: "First name is required!" });

  try {
    await dbClient
      .insert(waitlist)
      .values({ id: generateUniqueID(), email, lastName, firstName });

    await axios.post(
      `${env.newsletter.baseUrl}/subscribers`,
      { email, lastname: lastName, firstname: firstName },
      {
        headers: {
          Authorization: `Bearer ${env.newsletter.apiToken}`,
        },
      }
    );

    res.status(201).json({ message: "Success adding to newsletter.", email });
  } catch (err) {
    if (err instanceof DatabaseError && err.code === "23505") {
      const column = err.detail?.split(")=")[0]?.slice(5);

      res.status(409).json({ error: `${column} is already used.` });

      return;
    }

    res.status(500).json({ error: "Unknown internal server error" });
  }
});
app.post("/api/inquiries", async (req, res) => {
  const { email, message, name } = req.body as Inquiry;

  if (!name) {
    res.status(400).json({ error: "Name is required!" });
    return;
  }
  if (!email) {
    res.status(400).json({ error: "Email is required!" });
    return;
  }
  if (!message) {
    res.status(400).json({ error: "Message is required!" });
    return;
  }

  const contactUsMailOptions: Mail.Options = {
    from: `Hello Quantus <${env.email.sender}>`,
    to: env.email.receiver,
    subject: "Quantus New Contact",
    text: `${name} is contacting, \n\nemail: ${email}\nmessage:${message}`,
  };

  try {
    emailClient.sendMail(contactUsMailOptions);

    res.status(200).json({ message: "Success sending!", email });
  } catch (error) {
    res.status(400).json({ error: "Failed sending." });
  }
});

// Listener
app.listen(process.env.PORT, () => {
  logger.info(`Server is running at http://localhost:${process.env.PORT}`);
});

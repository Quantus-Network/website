import nodemailer from "nodemailer";
import env from "@/config/index.js";

export default () => {
  const emailClient = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    auth: env.email.auth,
  });

  return emailClient;
};

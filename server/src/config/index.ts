import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  corsWhitelist: [
    "http://localhost:5500",
    "http://localhost:4321",
    "http://127.0.0.1:5500",
    "https://www.resonancenetwork.io",
    "https://resonancenetwork.io",
    "http://www.resonancenetwork.io",
    "http://resonancenetwork.io",
    "http://quantus.com",
    "https://quantus.com",
    "http://www.quantus.com",
    "https://www.quantus.com",
  ],
  apiBaseUrl: process.env.API_BASE_URL,
  webBaseUrl: process.env.WEB_BASE_URL,
  databaseURI: process.env.DATABASE_URI,
  databaseURL: process.env.DATABASE_BASE_URL,
  appName: "Resonance_Network",
  nodeEnv: process.env.NODE_ENV,
  email: {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    sender: process.env.EMAIL_SENDER,
    receiver: process.env.EMAIL_RECEIVER,
  },
  newsletter: {
    baseUrl: process.env.NEWSLETTER_BASE_URL,
    apiToken: process.env.NEWSLETTER_API_TOKEN,
  },
};

import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  corsWhitelist: [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://www.resonancenetwork.io",
    "https://resonancenetwork.io",
    "http://www.resonancenetwork.io",
    "http://resonancenetwork.io",
  ],
  apiBaseUrl: process.env.API_BASE_URL,
  webBaseUrl: process.env.WEB_BASE_URL,
  databaseURI: process.env.DATABASE_URI,
  databaseURL: process.env.DATABASE_BASE_URL,
  appName: "Resonance_Network",
  nodeEnv: process.env.NODE_ENV,
};

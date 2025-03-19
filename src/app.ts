import express from "express";
import helmet from "helmet";

import { corsHandler } from "./middlewares/cors.js";
import logger from "./lib/logger.js";
import db from "./config/db.js";
import { waitlist } from "./models/waitlist.js";
import { generateUniqueID } from "./utils/generateId.js";

const dbClient = await db();
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
  const { email } = req.body;
  if (!email) res.status(400).json({ error: "Email is required!" });

  try {
    await dbClient.insert(waitlist).values({ id: generateUniqueID(), email });

    res.status(201).json({ message: "Success adding to waitlist.", email });
  } catch (error) {
    res.status(400).json({ error: "Failed adding to waitlist." });
  }
});

// Listener
app.listen(process.env.PORT, () => {
  logger.info(`Server is running at http://localhost:${process.env.PORT}`);
});

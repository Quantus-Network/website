import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import env from "@/config/index.js";
import * as schemas from "../models/index.js";
import logger from "@/lib/logger.js";

export default async () => {
  const pool = new pg.Pool({
    connectionString: env.databaseURI,
  });

  pool.on("error", (err) => {
    logger.error("Postgres error: ", err.message);
  });

  const db = drizzle(pool, { schema: schemas });

  return db;
};

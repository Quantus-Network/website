import "dotenv/config";
import fs from "fs";
import { format } from "fast-csv";
import { waitlist } from "../waitlist.js";
import db from "@/config/db.js";

const dbClient = await db();

async function fetchWaitlist() {
  return await dbClient.select().from(waitlist);
}

async function exportCSV(outputFile: string) {
  console.log("Fetching waitlist...");
  const rows = await fetchWaitlist();

  console.log(`Exporting ${rows.length} contacts to CSV...`);

  const ws = fs.createWriteStream(outputFile);

  const csvStream = format({
    headers: true,
    quoteColumns: true,
  });

  csvStream.pipe(ws);

  rows.forEach((row) => {
    csvStream.write({
      Email: row.email,
      "First name": row.firstName ?? "",
      "Last name": row.lastName ?? "",
    });
  });

  csvStream.end();

  ws.on("finish", () => {
    console.log(`CSV export completed → ${outputFile}`);
    process.exit();
  });
}

const outputFile = "waitlist-export.csv";

exportCSV(outputFile);

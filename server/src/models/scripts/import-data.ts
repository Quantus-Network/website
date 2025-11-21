import fs from "fs";
import csv from "csv-parser";
import { waitlist } from "../waitlist.js";
import db from "@/config/db.js";
import { generateUniqueID } from "@/utils/generateId.js";

const dbClient = await db();

async function importCSV(filePath: string) {
  const rows: any[] = [];

  return new Promise<any[]>((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

async function insertRows(rows: any[]) {
  for (const row of rows) {
    const firstName = row["First Name"] || null;
    const lastName = row["Last Name"] || null;
    const email = row["Email"];

    try {
      await dbClient
        .insert(waitlist)
        .values({
          id: generateUniqueID(),
          firstName,
          lastName,
          email,
        })
        .onConflictDoNothing();
    } catch (err: any) {
      console.error("Insert error:", err.message);
    }
  }
}

async function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error("Usage: node import-waitlist.js <contacts.csv>");
    process.exit(1);
  }

  console.log("Reading CSV:", csvPath);
  const rows = await importCSV(csvPath);
  console.log(`Loaded ${rows.length} rows`);

  await insertRows(rows);
  console.log("Import finished");

  process.exit();
}

main();

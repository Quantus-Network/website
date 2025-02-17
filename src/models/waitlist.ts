import { timestamp, pgTable, bigint, varchar, index } from "drizzle-orm/pg-core";

export const waitlist = pgTable(
  "waitlist",
  {
    id: bigint("id", { mode: "bigint" }).unique().primaryKey(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [
    {
      mailIdx: index("user_mail_idx").on(table.email),
    },
  ]
);

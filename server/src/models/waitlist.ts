import {
  timestamp,
  pgTable,
  bigint,
  varchar,
  index,
  unique,
} from "drizzle-orm/pg-core";

export const waitlist = pgTable(
  "waitlist",
  {
    id: bigint("id", { mode: "bigint" }).unique().primaryKey(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    firstName: varchar("first_name", { length: 255 }),
    lastName: varchar("last_name", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [
    index("user_mail_idx").on(table.email),
    index("first_name_idx").on(table.firstName),
    index("last_name_idx").on(table.lastName),
    unique("full_name_idx").on(table.firstName, table.lastName),
  ]
);

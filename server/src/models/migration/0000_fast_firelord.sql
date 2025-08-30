CREATE TABLE "waitlist" (
	"id" bigint PRIMARY KEY NOT NULL,
	"email" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "waitlist_id_unique" UNIQUE("id"),
	CONSTRAINT "waitlist_email_unique" UNIQUE("email")
);

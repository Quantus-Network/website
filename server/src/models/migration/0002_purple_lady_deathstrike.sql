ALTER TABLE "waitlist" ADD COLUMN "first_name" varchar(255);--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "last_name" varchar(255);--> statement-breakpoint
CREATE INDEX "user_mail_idx" ON "waitlist" USING btree ("email");--> statement-breakpoint
CREATE INDEX "first_name_idx" ON "waitlist" USING btree ("first_name");--> statement-breakpoint
CREATE INDEX "last_name_idx" ON "waitlist" USING btree ("last_name");--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "full_name_idx" UNIQUE("first_name","last_name");
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { waitlist } from "../models/waitlist.js";

export interface Waitlist extends InferSelectModel<typeof waitlist> {}
export interface CreateWaitlist extends InferInsertModel<typeof waitlist> {}

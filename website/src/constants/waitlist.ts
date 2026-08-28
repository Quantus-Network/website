/**
 * Identifies which Loops mailing list a POST /waitlist submission belongs to.
 *
 * Newsletter forms send NEWSLETTER; the launch squeeze page sends LAUNCH.
 * Switching a form to a different list is a one-line change at the call site.
 */
export const WAITLIST_SOURCE = {
  NEWSLETTER: "newsletter",
  LAUNCH: "launch",
} as const;

export type WaitlistSource =
  (typeof WAITLIST_SOURCE)[keyof typeof WAITLIST_SOURCE];

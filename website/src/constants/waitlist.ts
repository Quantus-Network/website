/**
 * Identifies which list a POST /waitlist submission belongs to.
 *
 * The site newsletter omits this and keeps the original payload shape; the
 * launch squeeze page sends LAUNCH. Switching the launch page to a different
 * list is a one-line change here.
 *
 * NOTE: the API does not read this field yet. Until it does, launch signups
 * land in the same list as the newsletter — the field is inert, not wrong.
 */
export const WAITLIST_SOURCE = {
  LAUNCH: "launch",
} as const;

export type WaitlistSource =
  (typeof WAITLIST_SOURCE)[keyof typeof WAITLIST_SOURCE];

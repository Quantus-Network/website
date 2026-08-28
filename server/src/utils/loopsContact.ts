export const WAITLIST_SOURCE = {
  NEWSLETTER: "newsletter",
  LAUNCH: "launch",
} as const;

export type WaitlistSource =
  (typeof WAITLIST_SOURCE)[keyof typeof WAITLIST_SOURCE];

const WAITLIST_SOURCES = new Set<string>(Object.values(WAITLIST_SOURCE));

export class UnknownWaitlistSourceError extends Error {
  constructor(source: string) {
    super(`Unknown waitlist source: ${source}`);
    this.name = "UnknownWaitlistSourceError";
  }
}

export class MissingMailingListIdError extends Error {
  constructor(source: WaitlistSource) {
    super(`Missing Loops mailing list ID for source "${source}"`);
    this.name = "MissingMailingListIdError";
  }
}

export type LoopsMailingListIds = {
  newsletter?: string;
  launch?: string;
};

export type LoopsContactPayload = {
  email: string;
  source: WaitlistSource;
  mailingLists: Record<string, true>;
  firstName?: string;
  lastName?: string;
};

function resolveWaitlistSource(source: string | null | undefined): WaitlistSource {
  if (source == null) {
    return WAITLIST_SOURCE.NEWSLETTER;
  }

  if (!WAITLIST_SOURCES.has(source)) {
    throw new UnknownWaitlistSourceError(source);
  }

  return source as WaitlistSource;
}

export function buildLoopsContactPayload(
  contact: {
    email: string;
    firstName?: string;
    lastName?: string;
    source?: string | null;
  },
  mailingListIds: LoopsMailingListIds,
): LoopsContactPayload {
  const source = resolveWaitlistSource(contact.source);
  const listId = mailingListIds[source];

  if (!listId) {
    throw new MissingMailingListIdError(source);
  }

  const payload: LoopsContactPayload = {
    email: contact.email,
    source,
    mailingLists: { [listId]: true },
  };

  if (contact.firstName) {
    payload.firstName = contact.firstName;
  }
  if (contact.lastName) {
    payload.lastName = contact.lastName;
  }

  return payload;
}

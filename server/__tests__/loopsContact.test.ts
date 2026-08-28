import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  MissingMailingListIdError,
  UnknownWaitlistSourceError,
  WAITLIST_SOURCE,
  buildLoopsContactPayload,
} from "../src/utils/loopsContact.js";

const listIds = {
  newsletter: "list_newsletter",
  launch: "list_launch",
};

describe("buildLoopsContactPayload", () => {
  it("puts omitted source on the newsletter list with camelCase names", () => {
    const payload = buildLoopsContactPayload(
      {
        email: "alex@company.com",
        firstName: "Alex",
        lastName: "Rivera",
      },
      listIds,
    );

    assert.deepEqual(payload, {
      email: "alex@company.com",
      firstName: "Alex",
      lastName: "Rivera",
      source: WAITLIST_SOURCE.NEWSLETTER,
      mailingLists: { list_newsletter: true },
    });
  });

  it("puts launch source on the launch waitlist", () => {
    const payload = buildLoopsContactPayload(
      {
        email: "sam@company.com",
        source: WAITLIST_SOURCE.LAUNCH,
      },
      listIds,
    );

    assert.deepEqual(payload, {
      email: "sam@company.com",
      source: WAITLIST_SOURCE.LAUNCH,
      mailingLists: { list_launch: true },
    });
  });

  it("omits empty names so a launch signup does not wipe existing Loops names", () => {
    const payload = buildLoopsContactPayload(
      {
        email: "sam@company.com",
        firstName: "",
        lastName: "",
        source: WAITLIST_SOURCE.LAUNCH,
      },
      listIds,
    );

    assert.equal("firstName" in payload, false);
    assert.equal("lastName" in payload, false);
  });

  it("rejects an unknown source", () => {
    assert.throws(
      () =>
        buildLoopsContactPayload(
          { email: "alex@company.com", source: "sponsors" },
          listIds,
        ),
      UnknownWaitlistSourceError,
    );
  });

  it("fails when the mailing list ID for that source is missing", () => {
    assert.throws(
      () =>
        buildLoopsContactPayload(
          { email: "alex@company.com", source: WAITLIST_SOURCE.LAUNCH },
          { newsletter: "list_newsletter" },
        ),
      MissingMailingListIdError,
    );
  });
});

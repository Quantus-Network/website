import { describe, expect, test } from "bun:test";
import {
  resolveBlogAuthor,
  resolveTwitterCreator,
  SITE_TWITTER_HANDLE,
  WEEKLY_UPDATE_AUTHOR,
} from "./resolve-blog-author";

describe("resolveBlogAuthor", () => {
  test("explicit author wins", () => {
    expect(resolveBlogAuthor("joe-mattia", "weekly-update")).toBe("joe-mattia");
    expect(resolveBlogAuthor("jonathan-angle", "education")).toBe(
      "jonathan-angle",
    );
  });

  test("weekly-update category defaults to the weekly author without using tags", () => {
    expect(resolveBlogAuthor(undefined, "weekly-update")).toBe(
      WEEKLY_UPDATE_AUTHOR,
    );
    expect(resolveBlogAuthor(undefined, "education")).toBeUndefined();
  });
});

describe("resolveTwitterCreator", () => {
  test("weekly-update posts use the author handle; others use the site handle", () => {
    expect(resolveTwitterCreator("aj", "weekly-update")).toBe("aj");
    expect(resolveTwitterCreator("aj", "education")).toBe(SITE_TWITTER_HANDLE);
    expect(resolveTwitterCreator(undefined, "weekly-update")).toBe(
      SITE_TWITTER_HANDLE,
    );
  });
});

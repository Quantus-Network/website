export type BlogAuthorId =
  | "christopher-smith"
  | "joe-mattia"
  | "jonathan-angle";

export const WEEKLY_UPDATE_TAG = "weekly-update";
export const WEEKLY_UPDATE_AUTHOR = "christopher-smith" as const;
export const SITE_TWITTER_HANDLE = "@QuantusNetwork";

export function resolveTwitterCreator(
  authorUsername: string | undefined,
  tags: readonly string[],
): string {
  if (authorUsername && tags.includes(WEEKLY_UPDATE_TAG)) {
    return authorUsername;
  }
  return SITE_TWITTER_HANDLE;
}

export function resolveBlogAuthor(
  author: BlogAuthorId | undefined,
  tags: readonly string[],
): BlogAuthorId | undefined {
  if (author) return author;
  if (tags.includes(WEEKLY_UPDATE_TAG)) return WEEKLY_UPDATE_AUTHOR;
  return undefined;
}

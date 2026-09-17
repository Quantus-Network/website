import type { BlogCategory } from "./blog-categories";

export type BlogAuthorId =
  | "christopher-smith"
  | "joe-mattia"
  | "jonathan-angle";

export const WEEKLY_UPDATE_AUTHOR = "christopher-smith" as const;
export const SITE_TWITTER_HANDLE = "@QuantusNetwork";

export function resolveTwitterCreator(
  authorUsername: string | undefined,
  category: BlogCategory,
): string {
  if (authorUsername && category === "weekly-update") {
    return authorUsername;
  }
  return SITE_TWITTER_HANDLE;
}

export function resolveBlogAuthor(
  author: BlogAuthorId | undefined,
  category: BlogCategory,
): BlogAuthorId | undefined {
  if (author) return author;
  if (category === "weekly-update") return WEEKLY_UPDATE_AUTHOR;
  return undefined;
}

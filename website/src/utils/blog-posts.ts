import type { CollectionEntry } from "astro:content";

/** Must match `DEFAULT_LOCALE` in i18n.ts. Kept local so unit tests do not load site config. */
const BLOG_PUBLISH_LOCALE = "en-US";

export type BlogPostLike = {
  id: string;
  data: { published?: boolean };
};

export function blogSlugFromId(id: string): string {
  return id.split("/").slice(1).join("/");
}

function isDefaultLocaleBlogId(id: string): boolean {
  return id.toLowerCase().startsWith(`${BLOG_PUBLISH_LOCALE.toLowerCase()}/`);
}

function publishedSlugsFromEnglish(posts: readonly BlogPostLike[]): Set<string> {
  const slugs = new Set<string>();
  for (const post of posts) {
    if (isDefaultLocaleBlogId(post.id) && post.data.published === true) {
      slugs.add(blogSlugFromId(post.id));
    }
  }
  return slugs;
}

export function isBlogSlugPublished(
  posts: readonly BlogPostLike[],
  id: string,
): boolean {
  return publishedSlugsFromEnglish(posts).has(blogSlugFromId(id));
}

export function filterPublishedBlogPosts<T extends BlogPostLike>(
  posts: readonly T[],
  includeUnpublished: boolean,
): T[] {
  if (includeUnpublished) return [...posts];

  const publishedSlugs = publishedSlugsFromEnglish(posts);
  return posts.filter((post) => publishedSlugs.has(blogSlugFromId(post.id)));
}

export async function getBlogPosts(
  filter?: (post: CollectionEntry<"blog">) => boolean,
): Promise<CollectionEntry<"blog">[]> {
  const { getCollection } = await import("astro:content");
  const all = await getCollection("blog");
  const visible = filterPublishedBlogPosts(all, import.meta.env.DEV);
  return filter ? visible.filter(filter) : visible;
}

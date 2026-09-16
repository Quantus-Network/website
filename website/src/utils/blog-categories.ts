import { BLOG_CATEGORIES } from "@/constants/blog-categories";

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const ALL_BLOG_CATEGORY = "all" as const;
export type BlogCategoryFilter = typeof ALL_BLOG_CATEGORY | BlogCategory;

export function isBlogCategory(value: string): value is BlogCategory {
  return (BLOG_CATEGORIES as readonly string[]).includes(value);
}

export function parseBlogCategoryFilter(
  value: string | null,
): BlogCategoryFilter {
  if (value === null || value === ALL_BLOG_CATEGORY) {
    return ALL_BLOG_CATEGORY;
  }
  if (isBlogCategory(value)) return value;
  throw new Error(`Unknown blog category "${value}"`);
}

export function filterPostsByCategory<
  T extends { data: { category: BlogCategory } },
>(posts: readonly T[], category: BlogCategoryFilter): T[] {
  if (category === ALL_BLOG_CATEGORY) return [...posts];
  return posts.filter((post) => post.data.category === category);
}

export function blogCategoryListHref(
  blogIndexPath: string,
  category: BlogCategoryFilter,
): string {
  if (category === ALL_BLOG_CATEGORY) return blogIndexPath;
  return `${blogIndexPath}?category=${category}`;
}

export function relatedBlogPosts<
  T extends { id: string; data: { category: BlogCategory; tags: string[] } },
>(posts: readonly T[], current: T, limit: number): T[] {
  return posts
    .filter(
      (post) =>
        post.id !== current.id && post.data.category === current.data.category,
    )
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag) => current.data.tags.includes(tag))
        .length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.post);
}

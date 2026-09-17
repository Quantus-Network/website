import {
  BLOG_TAG_ALIASES,
  BLOG_TAGS,
  type BlogTag,
} from "@/constants/blog-tags";

export { BLOG_TAG_ALIASES, BLOG_TAGS, type BlogTag };

export function isBlogTag(value: string): value is BlogTag {
  return (BLOG_TAGS as readonly string[]).includes(value);
}

export function canonicalizeBlogTag(tag: string): BlogTag | null {
  if (isBlogTag(tag)) return tag;
  if (Object.hasOwn(BLOG_TAG_ALIASES, tag)) {
    return BLOG_TAG_ALIASES[tag as keyof typeof BLOG_TAG_ALIASES];
  }
  return null;
}

export function canonicalizeBlogTags(tags: readonly string[]): BlogTag[] {
  const seen = new Set<BlogTag>();
  const result: BlogTag[] = [];
  for (const tag of tags) {
    const canonical = canonicalizeBlogTag(tag);
    if (canonical === null || seen.has(canonical)) continue;
    seen.add(canonical);
    result.push(canonical);
  }
  return result;
}

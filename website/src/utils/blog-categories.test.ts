import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { BLOG_CATEGORIES } from "@/constants/blog-categories";
import {
  ALL_BLOG_CATEGORY,
  blogCategoryFilterFromSearch,
  blogCategoryListHref,
  filterPostsByCategory,
  parseBlogCategoryFilter,
  relatedBlogPosts,
} from "./blog-categories";

const blogsRoot = join(import.meta.dir, "../contents/blogs");

type Post = {
  id: string;
  data: {
    category: (typeof BLOG_CATEGORIES)[number];
    tags: string[];
  };
};

const weeklyA: Post = {
  id: "en-US/weekly-update-a",
  data: { category: "weekly-update", tags: ["mining"] },
};
const weeklyB: Post = {
  id: "en-US/weekly-update-b",
  data: { category: "weekly-update", tags: ["wallet"] },
};
const educationA: Post = {
  id: "en-US/what-is-q-day",
  data: { category: "education", tags: ["q-day", "mining"] },
};
const educationB: Post = {
  id: "en-US/what-is-crqc",
  data: { category: "education", tags: ["q-day"] },
};

describe("filterPostsByCategory", () => {
  const posts = [weeklyA, educationA, weeklyB];

  test("all returns every post in the original order", () => {
    expect(filterPostsByCategory(posts, ALL_BLOG_CATEGORY)).toEqual(posts);
  });

  test("education excludes weekly updates", () => {
    expect(filterPostsByCategory(posts, "education")).toEqual([educationA]);
  });

  test("weekly-update excludes education", () => {
    expect(filterPostsByCategory(posts, "weekly-update")).toEqual([
      weeklyA,
      weeklyB,
    ]);
  });
});

describe("parseBlogCategoryFilter", () => {
  test("missing or all selects every category", () => {
    expect(parseBlogCategoryFilter(null)).toBe(ALL_BLOG_CATEGORY);
    expect(parseBlogCategoryFilter("all")).toBe(ALL_BLOG_CATEGORY);
  });

  test("accepts a known category id", () => {
    expect(parseBlogCategoryFilter("education")).toBe("education");
    expect(parseBlogCategoryFilter("weekly-update")).toBe("weekly-update");
  });

  test("rejects unknown category ids instead of coercing them", () => {
    expect(() => parseBlogCategoryFilter("podcast")).toThrow(
      'Unknown blog category "podcast"',
    );
    expect(() => parseBlogCategoryFilter("")).toThrow(
      'Unknown blog category ""',
    );
  });
});

describe("blogCategoryFilterFromSearch (blog list deep-link query)", () => {
  test("missing category keeps every post visible", () => {
    expect(blogCategoryFilterFromSearch("")).toBe(ALL_BLOG_CATEGORY);
    expect(blogCategoryFilterFromSearch("?q=wallet")).toBe(ALL_BLOG_CATEGORY);
  });

  test("a known category id is applied", () => {
    expect(blogCategoryFilterFromSearch("?category=education")).toBe(
      "education",
    );
    expect(blogCategoryFilterFromSearch("?category=weekly-update")).toBe(
      "weekly-update",
    );
    expect(blogCategoryFilterFromSearch("?category=all")).toBe(
      ALL_BLOG_CATEGORY,
    );
  });

  test("empty or unknown category does not throw and selects all", () => {
    expect(blogCategoryFilterFromSearch("?category=")).toBe(ALL_BLOG_CATEGORY);
    expect(blogCategoryFilterFromSearch("?category")).toBe(ALL_BLOG_CATEGORY);
    expect(blogCategoryFilterFromSearch("?category=podcast")).toBe(
      ALL_BLOG_CATEGORY,
    );
  });
});

describe("blogCategoryListHref", () => {
  test("all has no query string", () => {
    expect(blogCategoryListHref("/blog", ALL_BLOG_CATEGORY)).toBe("/blog");
  });

  test("a category is expressed as a query param", () => {
    expect(blogCategoryListHref("/zh-CN/blog", "education")).toBe(
      "/zh-CN/blog?category=education",
    );
  });
});

describe("relatedBlogPosts", () => {
  test("only returns same-category posts, ranked by shared tags", () => {
    expect(
      relatedBlogPosts(
        [weeklyA, weeklyB, educationA, educationB],
        educationA,
        5,
      ),
    ).toEqual([educationB]);
  });

  test("does not mix weekly updates into education related posts", () => {
    const related = relatedBlogPosts(
      [weeklyA, weeklyB, educationA],
      educationA,
      5,
    );
    expect(related.every((post) => post.data.category === "education")).toBe(
      true,
    );
    expect(related).toEqual([]);
  });
});

describe("blog frontmatter categories", () => {
  test("every post uses a canonical category id", () => {
    const allowed = new Set<string>(BLOG_CATEGORIES);
    const files = readdirSync(blogsRoot, { recursive: true, encoding: "utf8" })
      .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
      .map((name) => join(blogsRoot, name));

    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const source = readFileSync(file, "utf8");
      const match = source.match(/^---\n([\s\S]*?)\n---/);
      expect(match, `${file} is missing frontmatter`).toBeTruthy();
      const categoryMatch = match![1].match(/^category:\s*(.+)$/m);
      expect(categoryMatch, `${file} is missing category`).toBeTruthy();
      const category = categoryMatch![1].trim();
      expect(
        allowed.has(category),
        `${file} has unknown category "${category}"`,
      ).toBe(true);
    }
  });
});

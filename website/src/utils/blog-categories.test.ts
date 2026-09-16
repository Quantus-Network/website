import { describe, expect, test } from "bun:test";
import {
  ALL_BLOG_CATEGORY,
  BLOG_CATEGORIES,
  blogCategoryListHref,
  filterPostsByCategory,
  parseBlogCategoryFilter,
  relatedBlogPosts,
} from "./blog-categories";

type Post = {
  id: string;
  data: {
    category: (typeof BLOG_CATEGORIES)[number];
    tags: string[];
  };
};

const weeklyA: Post = {
  id: "en-US/weekly-update-a",
  data: { category: "weekly-update", tags: ["weekly-update", "mining"] },
};
const weeklyB: Post = {
  id: "en-US/weekly-update-b",
  data: { category: "weekly-update", tags: ["weekly-update", "wallet"] },
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

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import {
  ALL_BLOG_CATEGORY,
  blogCategoryFilterFromSearch,
} from "@/utils/blog-categories";

const blogListSource = readFileSync(
  join(import.meta.dir, "BlogList.tsx"),
  "utf8",
);

describe("BlogList deep-link category query", () => {
  test("applies untrusted location.search through blogCategoryFilterFromSearch", () => {
    expect(blogListSource).toContain(
      "blogCategoryFilterFromSearch(window.location.search)",
    );
    expect(blogListSource).not.toContain("parseBlogCategoryFilter(");
  });

  test("initial load and popstate keep the list usable for unknown query values", () => {
    expect(blogCategoryFilterFromSearch("?category=")).toBe(ALL_BLOG_CATEGORY);
    expect(blogCategoryFilterFromSearch("?category=podcast")).toBe(
      ALL_BLOG_CATEGORY,
    );
    expect(blogCategoryFilterFromSearch("?category=education")).toBe(
      "education",
    );
  });
});

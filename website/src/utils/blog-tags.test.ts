import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { BLOG_CATEGORIES } from "@/constants/blog-categories";
import { BLOG_TAGS } from "@/constants/blog-tags";
import { canonicalizeBlogTags } from "./blog-tags";

const blogsRoot = join(import.meta.dir, "../contents/blogs");

function frontmatterTags(source: string): string[] {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error("Missing frontmatter");
  }
  const tagsMatch = match[1].match(/^tags:\s*(\[[\s\S]*?\])/m);
  if (!tagsMatch) {
    throw new Error("Missing tags");
  }
  return [...tagsMatch[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function blogFiles(dir: string): string[] {
  return readdirSync(dir, { recursive: true, encoding: "utf8" })
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => join(dir, name));
}

describe("canonical blog tags", () => {
  test("includes tags introduced by the CRQC education article", () => {
    expect(BLOG_TAGS).toEqual(
      expect.arrayContaining(["crqc", "ecdsa", "nist", "ai"]),
    );
  });

  test("weekly-update is a category, never a tag", () => {
    expect(BLOG_CATEGORIES).toContain("weekly-update");
    expect(BLOG_TAGS).not.toContain("weekly-update");
    expect(canonicalizeBlogTags(["weekly-update", "bitcoin"])).toEqual([
      "bitcoin",
    ]);
  });

  test("maps duplicate names onto the canonical set and drops the rest", () => {
    expect(
      canonicalizeBlogTags([
        "post-quantum",
        "pqc",
        "quantum-safe",
        "quantum-resistant",
        "zk-proofs",
        "zero-knowledge-proofs",
        "gpu-mining",
        "miner",
        "miner-app",
        "gui-miner",
        "mobile-wallet",
        "hardware-wallet",
        "mobile",
        "dilithium",
        "security",
        "audit",
        "immunefi",
        "bug-bounty",
        "quantum",
        "poseidon",
        "weekly-update",
      ]),
    ).toEqual([
      "post-quantum-cryptography",
      "zero-knowledge-proofs",
      "mining",
      "wallet",
      "ml-dsa",
      "protocol-security",
      "quantum-computing",
    ]);
  });
});

describe("blog tag i18n", () => {
  const i18nDir = join(import.meta.dir, "../i18n");

  test("every locale labels exactly the canonical tag ids", () => {
    const locales = readdirSync(i18nDir).filter((name) =>
      name.endsWith(".json"),
    );
    expect(locales.length).toBeGreaterThan(0);

    for (const file of locales) {
      const tags = JSON.parse(readFileSync(join(i18nDir, file), "utf8")).blog
        .tags as Record<string, string>;
      expect(Object.keys(tags), file).toEqual([...BLOG_TAGS]);
      expect("weekly-update" in tags, file).toBe(false);
    }
  });
});

describe("blog frontmatter tags", () => {
  test("articles do not use weekly-update as a tag", () => {
    const sample = readFileSync(
      join(blogsRoot, "en-US/weekly-update-01-21-2026.md"),
      "utf8",
    );
    expect(frontmatterTags(sample)).not.toContain("weekly-update");
  });

  test("every post uses only canonical tag ids", () => {
    const allowed = new Set<string>(BLOG_TAGS);
    for (const file of blogFiles(blogsRoot)) {
      for (const tag of frontmatterTags(readFileSync(file, "utf8"))) {
        expect(allowed.has(tag), `${file} has unknown tag "${tag}"`).toBe(true);
      }
    }
  });
});

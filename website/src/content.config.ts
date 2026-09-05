import { defineCollection } from "astro:content";
import { z } from 'astro/zod'
import { glob } from "astro/loaders";
import { resolveBlogAuthor } from "./utils/resolve-blog-author";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/contents/blogs" }),
  schema: z
    .object({
      title: z.string(),
      metaTitle: z.string().min(1).optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      heroAlt: z.string().optional(),
      featured: z.boolean().optional(),
      published: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      author: z
        .enum(["christopher-smith", "joe-mattia", "jonathan-angle"])
        .optional(),
    })
    .transform((data) => ({
      ...data,
      author: resolveBlogAuthor(data.author, data.tags),
    })),
});

const tocHeadingItem = z.object({
  slug: z.string(),
  text: z.string(),
  depth: z.number().optional(),
});

/** Merges with Astro `render().headings` so JSX/custom `<h2>` (e.g. ChapterHeading) appear in the TOC. */
const whitepaperToc = z.object({
  insertBefore: z.record(z.string(), z.array(tocHeadingItem)).optional(),
  insertAfter: z.record(z.string(), z.array(tocHeadingItem)).optional(),
});

const whitepaper = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/contents/whitepapers",
  }),
  schema: z.object({
    title: z.string(),
    version: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).default(["Quantus Labs"]),
    changelog: z.array(z.string()).default([]),
    /** When true, PDF/print output includes a dedicated cover page and hides the in-page header. */
    pdfCover: z.boolean().optional(),
    toc: whitepaperToc.optional(),
  }),
});

export const collections = { blog, whitepaper };

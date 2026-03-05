import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/contents/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).default([]),
  }),
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
    abstract: z.string(),
    authors: z.array(z.string()).default(["Quantus Labs"]),
    changelog: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, whitepaper };

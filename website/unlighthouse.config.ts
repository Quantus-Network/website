import { defineUnlighthouseConfig } from "unlighthouse/config";

export default defineUnlighthouseConfig({
  site: "http://localhost:3000",
  // Fail the build if SEO score is below 100
  // Other categories (performance, accessibility, best-practices) will be audited but won't fail the build
  ci: {
    buildStatic: true,
    budget: {
      seo: 100,
    },
  },
  puppeteerClusterOptions: {
    maxConcurrency: 2,
  },
  scanner: {
    device: false,
    throttle: true,
    include: [
      "/",
      "/blog",
      "/blog/podcast-episode-1",
      "/blog/tags/podcast",
      "/quests/raid",
      "/404",
      "/about",
      "/account",
      "/app",
      "/contact",
      "/invite",
      "/quantum-risk-checker",
      "/terms-and-privacy",
    ],
  },
});

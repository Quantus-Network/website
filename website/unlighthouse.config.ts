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
      "/technology",
      "/wallet",
      "/community",
      "/whitepaper",
      "/blog",
      "/blog/weekly-update-10-14-2025",
      "/404",
      "/about",
      "/account",
      "/quantum-risk-checker",
      "/privacy-policy",
      "/terms",
    ],
  },
});

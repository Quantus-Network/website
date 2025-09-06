// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      "en", // English (default)
      "cn", // Chinese (Simplified)
      "kr", // Korean
    ],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      cn: "en",
      kr: "en",
    },
  },

  site: "https://www.quantus.com",
  integrations: [sitemap()],
});
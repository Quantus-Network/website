// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/utils/i18n";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
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
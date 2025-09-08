// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { DEFAULT_LOCALE, HOMEPAGE_LINK, LOCALES_MAP } from "@/utils/i18n";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.quantus.com",
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
      i18n: { defaultLocale: DEFAULT_LOCALE, locales: LOCALES_MAP },
      serialize: (item) => {
        if (HOMEPAGE_LINK.includes(item.url)) {
          item.priority = 1;
        }
        return item;
      }
    }),
  ],
});

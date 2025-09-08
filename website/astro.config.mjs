// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE_BASE_URL = "https://www.quantus.com";
const DEFAULT_LOCALE = "en-US";
const SUPPORTED_LOCALES = [
  "en-US",
  "zh-CN",
  "ko-KR",
  "id-ID",
  "ja-JP",
  "ru-RU",
  "es-ES",
  "de-DE",
  "hi-IN",
];
const LOCALES_MAP = {
  "en-US": "en-US",
  "zh-CN": "zh-CN",
  "ko-KR": "ko-KR",
  "id-ID": "id-ID",
  "ja-JP": "ja-JP",
  "ru-RU": "ru-RU",
  "es-ES": "es-ES",
  "de-DE": "de-DE",
  "hi-IN": "hi-IN",
};

const HOMEPAGE_LINK = SUPPORTED_LOCALES.map((locale) => {
  if (locale === "en-US") return `${SITE_BASE_URL}/`;
  return `${SITE_BASE_URL}/${locale}`;
});

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
      },
    }),
  ],
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import rehypeExternalLinks from "./src/utils/rehype-external-links.ts";

const SITE_BASE_URL = process.env.SITE_BASE_URL || "https://www.quantus.com";
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

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
  site: SITE_BASE_URL,
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  image: {
    domains: ['i.ytimg.com'],
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
      i18n: { defaultLocale: DEFAULT_LOCALE, locales: LOCALES_MAP },
      serialize: (item) => {
        // Read environment variable at runtime (during build)
        // The serialize function runs during sitemap generation, so process.env should be available
        const envBaseUrl =
          typeof process !== "undefined" && process.env?.SITE_BASE_URL;
        const baseUrl = envBaseUrl || SITE_BASE_URL;

        // Replace production URLs with the correct base URL if env var is set
        if (envBaseUrl && item.url) {
          item.url = item.url.replace(/^https?:\/\/[^/]+/, baseUrl);
        }

        // Check if this is a homepage link using the current base URL
        const homepageLinks = SUPPORTED_LOCALES.map((locale) => {
          if (locale === DEFAULT_LOCALE) return `${baseUrl}/`;
          return `${baseUrl}/${locale}`;
        });

        if (homepageLinks.includes(item.url)) {
          item.priority = 1;
        }
        return item;
      },
    }),
    react(),
  ],
});

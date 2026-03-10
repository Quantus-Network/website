import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

export type WhitepaperEntry = CollectionEntry<"whitepaper">;

function compareVersions(a: string, b: string): number {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] ?? 0;
    const nb = pb[i] ?? 0;
    if (na !== nb) return na - nb;
  }
  return 0;
}

export async function getWhitepapersForLocale(
  locale: Locale,
  fallbackLocale: Locale = "en-US",
): Promise<WhitepaperEntry[]> {
  const allEntries = await getCollection("whitepaper");
  const localePrefix = locale.toLowerCase() + "/";
  let entries = allEntries.filter((e) =>
    e.id.toLowerCase().startsWith(localePrefix),
  );

  if (entries.length === 0 && locale !== fallbackLocale) {
    const fallbackPrefix = fallbackLocale.toLowerCase() + "/";
    entries = allEntries.filter((e) =>
      e.id.toLowerCase().startsWith(fallbackPrefix),
    );
  }

  return entries.sort((a, b) =>
    compareVersions(a.data.version, b.data.version),
  );
}

export async function getLatestWhitepaper(
  locale: Locale,
): Promise<WhitepaperEntry | undefined> {
  const entries = await getWhitepapersForLocale(locale);
  return entries[entries.length - 1];
}

export async function getWhitepaperByVersion(
  locale: Locale,
  version: string,
): Promise<WhitepaperEntry | undefined> {
  const entries = await getWhitepapersForLocale(locale);
  const cleanVersion = version.replace(/^v/, "");
  return entries.find((e) => e.data.version === cleanVersion);
}

export function getWhitepaperPdfPath(locale: Locale, version: string): string {
  return `/whitepaper/pdf/${locale}/whitepaper-v${version}.pdf`;
}

export function getAllVersions(
  entries: WhitepaperEntry[],
): { version: string; date: Date }[] {
  return entries.map((e) => ({
    version: e.data.version,
    date: e.data.updatedDate ?? e.data.publishedDate,
  }));
}

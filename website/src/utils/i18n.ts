// Types for our translation structure
export type TranslationKey = string;
export type TranslationParams = Record<string, string | number>;

// Supported locales
export type Locale = "en" | "cn" | "kr" | "id" | "jp" | "ru" | "es" | "de" | "in";
export const SUPPORTED_LOCALES: Locale[] = ["en", "cn", "kr","id" , "jp" , "ru" , "es" , "de" , "in"];

// Default locale
export const DEFAULT_LOCALE: Locale = "en";

// Translation cache
const translationCache = new Map<Locale, Record<string, any>>();

/**
 * Load translations for a specific locale
 */
export async function loadTranslations(
  locale: Locale,
): Promise<Record<string, any>> {
  // Check cache first
  if (translationCache.has(locale)) {
    return translationCache.get(locale)!;
  }

  try {
    // Dynamically import the translation file
    const translations = await import(`../i18n/${locale}.json`);
    const translationData = translations.default;

    // Cache the translations
    translationCache.set(locale, translationData);

    return translationData;
  } catch (error) {
    console.warn(`Failed to load translations for locale: ${locale}`, error);

    // Fallback to default locale if not already trying it
    if (locale !== DEFAULT_LOCALE) {
      return loadTranslations(DEFAULT_LOCALE);
    }

    return {};
  }
}

/**
 * Get a nested value from an object using dot notation
 */
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => {
    return current && typeof current === "object" ? current[key] : undefined;
  }, obj);
}

/**
 * Replace placeholders in a string with provided parameters
 */
function replacePlaceholders(
  text: string,
  params: TranslationParams = {},
): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * Get translation for a specific key and locale
 */
export async function getTranslation(
  locale: Locale,
  key: TranslationKey,
  params: TranslationParams = {},
): Promise<string> {
  try {
    const translations = await loadTranslations(locale);
    const value = getNestedValue(translations, key);

    if (typeof value === "string") {
      return replacePlaceholders(value, params);
    }

    if (value === undefined || value === null) {
      console.warn(`Translation missing for key: ${key} in locale: ${locale}`);

      // Try fallback to default locale if not already using it
      if (locale !== DEFAULT_LOCALE) {
        const defaultTranslations = await loadTranslations(DEFAULT_LOCALE);
        const fallbackValue = getNestedValue(defaultTranslations, key);

        if (typeof fallbackValue === "string") {
          return replacePlaceholders(fallbackValue, params);
        }
      }

      // Return the key itself as last resort
      return key;
    }

    // If value is not a string (e.g., object or array), convert to string
    return String(value);
  } catch (error) {
    console.error(`Error getting translation for key: ${key}`, error);
    return key;
  }
}

/**
 * Create a translation function for a specific locale
 */
export async function createTranslator(locale: Locale) {
  const translations = await loadTranslations(locale);

  return function t(
    key: TranslationKey,
    params: TranslationParams = {},
  ): string {
    try {
      const value = getNestedValue(translations, key);

      if (typeof value === "string") {
        return replacePlaceholders(value, params);
      }

      if (value === undefined || value === null) {
        console.warn(
          `Translation missing for key: ${key} in locale: ${locale}`,
        );
        return key;
      }

      return value;
    } catch (error) {
      console.error(`Error getting translation for key: ${key}`, error);
      return key;
    }
  };
}

export function getLocalizedPath(locale: Locale, pathname: string): string {
  if (pathname.includes("http") ) return pathname

  // If it's the default language, don't add a prefix.
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }

  // For other languages, add the language prefix.
  // Make sure the path starts with a slash for consistency.
  const finalPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `/${locale}${finalPath}`;
}

/**
 * Get the locale from URL pathname
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const potentialLocale = segments[0] as Locale;

  if (SUPPORTED_LOCALES.includes(potentialLocale)) {
    return potentialLocale;
  }

  return DEFAULT_LOCALE;
}

/**
 * Remove locale from URL pathname
 */
export function removeLocaleFromUrl(pathname: string): string {
  const locale = getLocaleFromUrl(pathname);

  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }

  return pathname.replace(`/${locale}`, "") || "/";
}

/**
 * Add locale to URL pathname
 */
export function addLocaleToUrl(pathname: string, locale: Locale): string {
  // Don't add locale for default locale
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }

  const cleanPath = removeLocaleFromUrl(pathname);
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * Get alternate URLs for all locales
 */
export function getAlternateUrls(pathname: string): Record<Locale, string> {
  const cleanPath = removeLocaleFromUrl(pathname);
  const alternates: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    alternates[locale] = addLocaleToUrl(cleanPath, locale);
  });

  return alternates as Record<Locale, string>;
}

/**
 * Get locale-specific metadata
 */
export async function getLocalizedMetadata(locale: Locale) {
  const translations = await loadTranslations(locale);

  return {
    title: getNestedValue(translations, "site.title") || "Quantus Network",
    description:
      getNestedValue(translations, "site.description") ||
      "Quantum-secure Layer 1 blockchain",
  };
}

/**
 * Validate if a string is a supported locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Get the direction (LTR/RTL) for a locale
 */
export function getTextDirection(locale: Locale): "ltr" | "rtl" {
  // Add RTL locales here if needed in the future
  const rtlLocales: Locale[] = [];

  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

/**
 * Format numbers according to locale
 */
export function formatNumber(
  number: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions,
): string {
  const localeMap: Record<Locale, string> = {
    en: "en-US",
    cn: "zh-CN",
    kr: "ko-KR",
    id: "id-ID",
    jp: "ja-JP",
    ru: "ru-RU",
    es: "es-ES",
    de: "de-DE",
    in: "hi-IN",
  };

  try {
    return new Intl.NumberFormat(localeMap[locale], options).format(number);
  } catch (error) {
    console.warn(`Failed to format number for locale ${locale}:`, error);
    return number.toString();
  }
}

/**
 * Format dates according to locale
 */
export function formatDate(
  date: Date,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  const localeMap: Record<Locale, string> = {
    en: "en-US",
    cn: "zh-CN",
    kr: "ko-KR",
    id: "id-ID",
    jp: "ja-JP",
    ru: "ru-RU",
    es: "es-ES",
    de: "de-DE",
    in: "hi-IN",
  };

  try {
    return new Intl.DateTimeFormat(localeMap[locale], options).format(date);
  } catch (error) {
    console.warn(`Failed to format date for locale ${locale}:`, error);
    return date.toISOString();
  }
}
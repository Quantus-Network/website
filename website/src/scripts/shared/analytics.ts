declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsParams = Record<string, string | number | boolean>;

type PageType =
  | "home"
  | "wallet"
  | "about"
  | "community"
  | "whitepaper"
  | "risk_checker"
  | "blog"
  | "technology"
  | "other";

let delegationInitialized = false;

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && /^[a-z]{2}-[A-Z]{2}$/.test(segments[0])) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname === "" ? "/" : pathname;
}

export function getPageType(pathname = window.location.pathname): PageType {
  const path = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";

  if (path === "/") return "home";
  if (path.startsWith("/wallet")) return "wallet";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/community")) return "community";
  if (path.startsWith("/whitepaper")) return "whitepaper";
  if (
    path.startsWith("/quantum-risk-checker") ||
    path.startsWith("/risk-checker")
  )
    return "risk_checker";
  if (path.startsWith("/blog") || path.startsWith("/blogs")) return "blog";
  if (path.startsWith("/technology")) return "technology";
  return "other";
}

export function storeFromHref(href: string): "ios" | "android" | undefined {
  try {
    const url = new URL(href, window.location.origin);
    if (url.hostname.includes("apple.com")) return "ios";
    if (
      url.hostname.includes("play.google.com") ||
      url.hostname.includes("google.com")
    )
      return "android";
  } catch {
    // ignore invalid URLs
  }
  return undefined;
}

/**
 * Fire a GA4 event when gtag is loaded.
 * Automatically attaches language_code and page_type.
 */
export function trackEvent(name: string, params: AnalyticsParams = {}): void {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, {
    language_code: document.documentElement.lang || "en-US",
    page_type: getPageType(),
    ...params,
  });
}

function datasetKeyToParam(key: string): string | null {
  // data-track-cta-location → cta_location; data-track → skip (event name)
  if (key === "track") return null;
  if (!key.startsWith("track")) return null;
  const rest = key.slice("track".length); // e.g. "CtaLocation" or "Store"
  if (!rest) return null;
  return rest
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}

function paramsFromElement(el: HTMLElement): AnalyticsParams {
  const params: AnalyticsParams = {};
  for (const [key, value] of Object.entries(el.dataset)) {
    if (value === undefined) continue;
    const param = datasetKeyToParam(key);
    if (param) params[param] = value;
  }
  return params;
}

function handleDelegatedClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const el = target.closest<HTMLElement>("[data-track]");
  if (!el) return;

  const eventName = el.dataset.track;
  if (!eventName) return;

  trackEvent(eventName, paramsFromElement(el));
}

/**
 * Attach a single document-level click listener for [data-track] elements.
 * Safe to call multiple times (idempotent).
 */
export function initAnalyticsDelegation(): void {
  if (delegationInitialized || typeof document === "undefined") return;
  document.addEventListener("click", handleDelegatedClick, true);
  delegationInitialized = true;
}

/**
 * Build HTML data-track* attributes for Astro/markup spreads.
 * e.g. trackAttrs("community_click", { channel: "x" })
 *   → { "data-track": "community_click", "data-track-channel": "x" }
 */
export function trackAttrs(
  track?: string,
  params?: Record<string, string>,
): Record<string, string> {
  if (!track) return {};
  const attrs: Record<string, string> = { "data-track": track };
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      attrs[`data-track-${key.replace(/_/g, "-")}`] = value;
    }
  }
  return attrs;
}

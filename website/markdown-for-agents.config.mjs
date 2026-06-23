/** @type {import('astro-markdown-for-agents').MarkdownForAgentsOptions} */
export const markdownForAgentsOptions = {
  excludePrefixes: ["/api/", "/_astro/", "/.well-known/", "/_markdown-cache/"],
  contentSignals: {
    aiTrain: true,
    search: true,
    aiInput: true,
  },
};

/** Resolved options for edge middleware (runtime-safe, no Node imports). */
export const resolvedMarkdownOptions = {
  include: [],
  exclude: [],
  excludePrefixes: markdownForAgentsOptions.excludePrefixes ?? [],
  excludeExtensions: [
    ".css",
    ".js",
    ".mjs",
    ".map",
    ".json",
    ".xml",
    ".txt",
    ".ico",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".svg",
    ".gif",
    ".pdf",
    ".zip",
    ".woff",
    ".woff2",
  ],
  markdownDir: markdownForAgentsOptions.markdownDir ?? "_markdown-cache",
  contentSignalHeader: "ai-train=yes, search=yes, ai-input=yes",
  maxExtractedChars: Infinity,
  preferPlainText: markdownForAgentsOptions.preferPlainText ?? true,
};

export const MARKDOWN_NEGOTIATION_BYPASS_HEADER =
  "x-markdown-negotiation-bypass";

function extensionOf(value) {
  const dotIndex = value.lastIndexOf(".");
  if (dotIndex === -1) {
    return "";
  }
  return value.slice(dotIndex).toLowerCase();
}

function matches(pathname, matcher) {
  if (typeof matcher === "function") {
    return matcher(pathname);
  }
  if (matcher instanceof RegExp) {
    return matcher.test(pathname);
  }
  if (!matcher.includes("*")) {
    return pathname === matcher;
  }
  const regex = new RegExp(
    `^${matcher.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")}$`,
  );
  return regex.test(pathname);
}

function matchesAny(pathname, matchers) {
  return matchers.some((matcher) => matches(pathname, matcher));
}

/** Edge-safe mirror of astro-markdown-for-agents route matching. */
export function isNegotiablePath(pathname, options) {
  if (!pathname) {
    return false;
  }
  if (matchesAny(pathname, options.exclude)) {
    return false;
  }
  if (options.include.length > 0 && !matchesAny(pathname, options.include)) {
    return false;
  }
  if (options.excludePrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return false;
  }
  const lastSegment = pathname.split("/").pop() ?? "";
  const ext = extensionOf(lastSegment);
  if (ext && options.excludeExtensions.includes(ext)) {
    return false;
  }
  return !lastSegment.includes(".") || ext === "";
}

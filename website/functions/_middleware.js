import {
  applyMarkdownHeaders,
  ensureVaryAccept,
  markdownAssetPath,
  prefersMarkdown,
} from "astro-markdown-for-agents/runtime";
import {
  MARKDOWN_NEGOTIATION_BYPASS_HEADER,
  isNegotiablePath,
  resolvedMarkdownOptions,
} from "../markdown-for-agents.config.mjs";

/**
 * Serve pre-built markdown from dist/_markdown-cache when clients negotiate
 * Accept: text/markdown. HTML remains the default for browsers.
 */
export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  if (method !== "GET" && method !== "HEAD") {
    return context.next();
  }

  if (request.headers.get(MARKDOWN_NEGOTIATION_BYPASS_HEADER) === "1") {
    return context.next();
  }

  const accept = request.headers.get("Accept") ?? "";
  if (!prefersMarkdown(accept, resolvedMarkdownOptions.preferPlainText)) {
    return context.next();
  }

  const pathname = new URL(request.url).pathname;
  if (!isNegotiablePath(pathname, resolvedMarkdownOptions)) {
    return context.next();
  }

  const mdPath = markdownAssetPath(
    pathname,
    resolvedMarkdownOptions.markdownDir,
  );
  const mdRequest = new Request(new URL(mdPath, request.url), {
    method,
    headers: {
      [MARKDOWN_NEGOTIATION_BYPASS_HEADER]: "1",
    },
  });

  const mdResponse = env.ASSETS
    ? await env.ASSETS.fetch(mdRequest)
    : await fetch(mdRequest);

  if (!mdResponse.ok) {
    return context.next();
  }

  const markdown = await mdResponse.text();
  const headers = new Headers(mdResponse.headers);
  applyMarkdownHeaders(headers, markdown, resolvedMarkdownOptions);
  ensureVaryAccept(headers);

  if (method === "HEAD") {
    return new Response(null, { status: mdResponse.status, headers });
  }

  return new Response(markdown, { status: mdResponse.status, headers });
}

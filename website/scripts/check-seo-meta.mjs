#!/usr/bin/env node
/**
 * Validates SEO title/description lengths for i18n page meta and blog frontmatter.
 *
 * Latin locales: title 30–60, description 120–160
 * CJK locales (ja-JP, ko-KR, zh-CN): title 20–60, description 70–160
 * Whitepaper titles max 52 (room for " - vX.Y.Z" suffix)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(__dirname, "..");
const i18nDir = path.join(websiteRoot, "src/i18n");
const blogsDir = path.join(websiteRoot, "src/contents/blogs");

const CJK = new Set(["ja-JP", "ko-KR", "zh-CN"]);

const TITLE_MAX = 60;
const WHITEPAPER_TITLE_MAX = 52;
const DESC_MAX = 160;

function limitsFor(locale) {
  if (CJK.has(locale)) {
    return { titleMin: 20, descMin: 70 };
  }
  return { titleMin: 30, descMin: 120 };
}

function walkJson(obj, prefix = "") {
  const out = [];
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      const next = prefix ? `${prefix}.${k}` : k;
      out.push(...walkJson(v, next));
    }
  } else {
    out.push([prefix, obj]);
  }
  return out;
}

function checkLength(kind, locale, key, value, errors) {
  const text = String(value ?? "");
  const len = [...text].length; // code-point length
  const { titleMin, descMin } = limitsFor(locale);

  if (kind === "title") {
    const max = key.includes("whitepaper") ? WHITEPAPER_TITLE_MAX : TITLE_MAX;
    if (len < titleMin || len > max) {
      errors.push(
        `[title] ${locale} ${key} len=${len} (want ${titleMin}-${max}): ${text}`,
      );
    }
  } else {
    if (len < descMin || len > DESC_MAX) {
      errors.push(
        `[description] ${locale} ${key} len=${len} (want ${descMin}-${DESC_MAX}): ${text.slice(0, 100)}`,
      );
    }
  }
}

function checkI18n(errors) {
  for (const file of fs.readdirSync(i18nDir).filter((f) => f.endsWith(".json"))) {
    const locale = path.basename(file, ".json");
    const data = JSON.parse(fs.readFileSync(path.join(i18nDir, file), "utf8"));
    for (const [key, value] of walkJson(data)) {
      if (key.endsWith(".meta.title")) {
        checkLength("title", locale, key, value, errors);
      } else if (key.endsWith(".meta.description")) {
        checkLength("description", locale, key, value, errors);
      }
    }
  }
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("---", 3);
  if (end === -1) return null;
  const fm = raw.slice(3, end);
  const titleMatch = fm.match(/^title:\s*(.*)$/m);
  const descMatch = fm.match(/^description:\s*(.*)$/m);
  if (!titleMatch || !descMatch) return null;

  const unquote = (s) => {
    const t = s.trim();
    if (
      (t.startsWith('"') && t.endsWith('"')) ||
      (t.startsWith("'") && t.endsWith("'"))
    ) {
      return t.slice(1, -1);
    }
    return t;
  };

  return {
    title: unquote(titleMatch[1]),
    description: unquote(descMatch[1]),
  };
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else if (/\.(md|mdx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function checkBlogs(errors) {
  for (const file of walkFiles(blogsDir)) {
    const locale = path.basename(path.dirname(file));
    const raw = fs.readFileSync(file, "utf8");
    const meta = parseFrontmatter(raw);
    if (!meta) {
      errors.push(`[parse] ${path.relative(websiteRoot, file)}: missing title/description`);
      continue;
    }
    const rel = path.relative(websiteRoot, file);
    checkLength("title", locale, rel, meta.title, errors);
    checkLength("description", locale, rel, meta.description, errors);
  }
}

function checkDefaultMetadata(errors) {
  const file = path.join(websiteRoot, "src/constants/default-metadata.ts");
  const raw = fs.readFileSync(file, "utf8");
  const title = raw.match(/default:\s*"([^"]+)"/)?.[1];
  const desc = raw.match(/const description =\s*\n?\s*"([^"]+)"/)?.[1];
  if (title) checkLength("title", "en-US", "default-metadata.title", title, errors);
  if (desc)
    checkLength("description", "en-US", "default-metadata.description", desc, errors);
}

const errors = [];
checkI18n(errors);
checkBlogs(errors);
checkDefaultMetadata(errors);

if (errors.length) {
  console.error(`SEO meta check failed (${errors.length} issue(s)):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log("SEO meta check passed.");

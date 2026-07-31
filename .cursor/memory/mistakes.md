# Project Memory — Mistakes & Corrections

Persistent lessons from user corrections. All agents must read this before feature work and must not repeat listed mistakes.

## Entry format

When appending, use the next `MEM-###` ID and this structure:

```markdown
### MEM-001 — YYYY-MM-DD

- **Category:** e.g. state-management, navigation, styling, workflow
- **Mistake:** What the agent did wrong (one sentence)
- **Do instead:** The correct behavior or pattern
- **Context:** When this applies (feature type, file, stack area)
- **Source:** user | review-loop
```

## Entries

<!-- New entries are appended below. Do not delete past entries unless the user asks. -->

### MEM-001 — 2026-07-31

- **Category:** seo, content
- **Mistake:** Shipping meta titles/descriptions outside SEO length targets, or “fixing” length by truncating existing titles/descriptions mid-phrase.
- **Do instead:** Keep titles 30–60 chars (CJK min 20) and descriptions 120–160 chars (CJK min 70). Whitepaper base titles ≤52 for ` - vX.Y.Z`. Always **rewrite** meta from page/post substance so the result is a complete, natural phrase—never chop an old title/description to fit. After meta changes, run `npm run check:seo-meta` in `website/`.
- **Context:** i18n `*.meta.title` / `*.meta.description`, blog frontmatter `title`/`description`, `default-metadata.ts`, any new page SEO
- **Source:** user

### MEM-002 — 2026-07-31

- **Category:** branding, content
- **Mistake:** Using the brand form “Quantus Network” (or localized equivalents like “Jaringan Quantus”, “Quantusネットワーク”, “Сеть Quantus”) in site copy.
- **Do instead:** Use **Quantus** only. When shortening meta titles, rewrite to stay within SEO length targets (MEM-001) without reintroducing “Network”.
- **Context:** Especially `website/src/i18n/*.json` meta and UI strings; avoid the phrase in new copy
- **Source:** user

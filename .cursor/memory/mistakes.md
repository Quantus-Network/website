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

### MEM-003 — 2026-09-16

- **Category:** content, blog
- **Mistake:** Using `weekly-update` as a blog tag after it already exists as a category, so article pages still showed “Weekly Update” as a tag.
- **Do instead:** Keep `weekly-update` as a **category only**. Never put a category id in frontmatter `tags`. Weekly-update author/Twitter defaults must key off `category`, not tags.
- **Context:** Blog frontmatter, `BlogPost.astro` tag pills, `content.config.ts`, `resolve-blog-author.ts`
- **Source:** user

### MEM-004 — 2026-09-16

- **Category:** content, blog
- **Mistake:** Letting blog tags proliferate (PQC/quantum-safe/Dilithium/GPU mining/mobile wallet/security/audit, plus one-off names) instead of a small canonical set.
- **Do instead:** Use only these tag ids: `q-day`, `quantum-computing`, `post-quantum-cryptography`, `cryptography`, `bitcoin`, `mining`, `pow`, `privacy`, `zero-knowledge-proofs`, `wallet`, `mainnet`, `ml-dsa`, `wormhole`, `protocol-security`, `governance`, `tokenomics`. Map aliases: Post-Quantum / PQC / Quantum-Safe / Quantum-Resistant → `post-quantum-cryptography`; ZK-Proofs → `zero-knowledge-proofs`; GPU Mining / miner / miner-app / gui-miner → `mining`; Mobile Wallet / hardware-wallet / mobile → `wallet`; Dilithium → `ml-dsa`; Security / Audit / Immunefi / bug-bounty → `protocol-security`; quantum → `quantum-computing`. Drop any other tag. Add `blog.tags.<id>` in every i18n file when adding an id to `BLOG_TAGS`. Schema must reject unknown tags rather than coercing them.
- **Context:** `website/src/constants/blog-tags.ts`, blog frontmatter `tags`, `blog.tags` i18n, tag pages
- **Source:** user

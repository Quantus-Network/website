/** Add an id here, then add `blog.tags.<id>` in every i18n file. */
export const BLOG_TAGS = [
  "q-day",
  "quantum-computing",
  "post-quantum-cryptography",
  "cryptography",
  "bitcoin",
  "mining",
  "pow",
  "privacy",
  "zero-knowledge-proofs",
  "wallet",
  "mainnet",
  "ml-dsa",
  "wormhole",
  "protocol-security",
  "governance",
  "tokenomics",
  "crqc",
  "ecdsa",
  "nist",
  "ai",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

/**
 * Legacy or duplicate names. Not valid in frontmatter — rewrite to the
 * canonical id. `weekly-update` is a category, not a tag, so it is omitted.
 */
export const BLOG_TAG_ALIASES = {
  "post-quantum": "post-quantum-cryptography",
  pqc: "post-quantum-cryptography",
  "quantum-safe": "post-quantum-cryptography",
  "quantum-resistant": "post-quantum-cryptography",
  "zk-proofs": "zero-knowledge-proofs",
  "gpu-mining": "mining",
  miner: "mining",
  "miner-app": "mining",
  "gui-miner": "mining",
  "mobile-wallet": "wallet",
  "hardware-wallet": "wallet",
  mobile: "wallet",
  dilithium: "ml-dsa",
  security: "protocol-security",
  audit: "protocol-security",
  immunefi: "protocol-security",
  "bug-bounty": "protocol-security",
  quantum: "quantum-computing",
} as const satisfies Record<string, BlogTag>;

---
title: "Quantus Weekly: Spring Cleaning, Eiger Audits, and the Compact Aggregator"
description: "Audit items cleared with Eiger, CLI refactored, miner and indexer fixes, wormhole tests on the 2x8 compact aggregator, mobile wallet 1.3.4–1.3.5, miner v3.1.0, docs for mining through rewards, and the first Planck testnet miner workshop at Network School."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: Spring Cleaning, Eiger Audits, and the Compact Aggregator"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Spring cleaning week.

We cleared audit items with Eiger, refactored the CLI, fixed bugs across the miner and indexer, and ran wormhole integration tests on the new compact aggregator.

On ZK, wormhole flow now runs cleanly through the 2x8 compact aggregator we shipped last week. That's the architecture that doubled prover performance, which means faster, more scalable, private transactions. On the user side, we shipped two mobile wallet releases (1.3.4 and 1.3.5) and Quantus miner v3.1.0 with a GPU bug fix. We also updated our docs to cover the full mining-to-claiming-rewards flow.

We hosted our first Planck testnet miner workshop at Network School.

Here's everything we built this week:

### GitHub Activity (26 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Addressed multiple audit items from Eiger.
- Ran wormhole integration tests on the 2x8 compact aggregator.
- Refactored the Quantus CLI to address compatibility, transaction lifecycle, and fee estimation issues.

### Network & Infra

- Ran stress tests on the Planck testnet.
- Improved Subsquid indexer performance and fixed a CPU usage spike. Subsquid caused issues with the mobile app UX this week (balances not loading), now resolved.
- Shipped Quantus miner v3.1.0 fixing a GPU mining bug.

### Web & Mobile App Updates

- Shipped mobile wallet 1.3.4 and 1.3.5.
- Mobile wallet design improvements. Onboarding flow lands next.
- Designed Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State, and Miner Rewards flows for the wallet.
- Mapped Wormhole flow UX for the wallet.
- Updated [docs.quantus.com](https://docs.quantus.com) to cover end-to-end mining through claiming rewards.
- Refreshed deepwikis across the CLI, monitoring, chain, website, and ZK circuits repos.

### Mobile Wallet Analytics

- Total users: 2,252
- MAU: 1,048

### Content & Partnerships

- Hosted our first Planck testnet miner workshop at Network School. 4+ people went zero to mining.
- Pitched at the EthKL meetup.
- Confirmed Q-Day sponsors.
- Sponsored the NS Marathon with Quantus coconuts.
- Released a new podcast [about Quantus architecture](https://x.com/QuantusNetwork/status/2047178654396862837).

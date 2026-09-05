---
published: true
title: "Quantus Weekly: Audits और Compact Aggregator"
description: "Spring cleaning: Eiger audit items clear, CLI refactor, miner और indexer fixes, compact aggregator पर wormhole tests — prover speed दोगुनी।"
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: Audits और Compact Aggregator"
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

Spring cleaning week।

Eiger के साथ audit items clear किए, CLI refactor, miner और indexer bugs fix, और नए compact aggregator पर wormhole integration tests run किए।

ZK पर, wormhole flow अब cleanly 2x8 compact aggregator से होकर चलता है जो पिछले सप्ताह ship किया — वही architecture जिसने prover performance दोगुनी की, यानी faster, scalable, private transactions। User side पर, दो mobile wallet releases (1.3.4 और 1.3.5) और GPU bug fix के साथ Quantus miner v3.1.0 ship। Docs भी full mining-to-claiming-rewards flow cover करने update किए।

Network School में हमारा पहला Planck testnet miner workshop host किया।

इस सप्ताह सब कुछ जो build किया:

### GitHub Activity (26 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Eiger से multiple audit items address।
- 2x8 compact aggregator पर wormhole integration tests run।
- Compatibility, transaction lifecycle, और fee estimation issues के लिए Quantus CLI refactor।

### Network & Infra

- Planck testnet stress tests run।
- Subsquid indexer performance improve और CPU usage spike fix। Subsquid ने इस सप्ताह mobile app UX issues cause किए (balances load नहीं हो रहे), अब resolved।
- GPU mining bug fix के साथ Quantus miner v3.1.0 ship।

### Web & Mobile App Updates

- Mobile wallet 1.3.4 और 1.3.5 ship।
- Mobile wallet design improvements। Onboarding flow अगला।
- Wallet के लिए Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State, और Miner Rewards flows design।
- Wallet के लिए Wormhole flow UX map।
- End-to-end mining through claiming rewards cover करने [docs.quantus.com](https://docs.quantus.com) update।
- CLI, monitoring, chain, website, और ZK circuits repos में deepwikis refresh।

### Mobile Wallet Analytics

- Total users: 2,252
- MAU: 1,048

### Content & Partnerships

- Network School में पहला Planck testnet miner workshop host — 4+ लोग zero to mining।
- EthKL meetup पर pitch।
- Q-Day sponsors confirm।
- NS Marathon Quantus coconuts sponsor।
- Quantus architecture पर नया podcast [release](https://x.com/QuantusNetwork/status/2047178654396862837)।

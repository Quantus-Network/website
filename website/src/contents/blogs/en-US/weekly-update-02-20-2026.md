---
title: "Quantus Weekly: Open Research and the Post-Quantum Standard"
description: "Weekly update covering the launch of research.quantus.com, ZK proof aggregation, multisig pallet merge, and mobile wallet updates."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Weekly: Open Research and the Post-Quantum Standard"
featured: false
tags:
  [
    "weekly-update",
    "research",
    "post-quantum-cryptography",
    "multisig",
    "zk-proofs",
    "mobile-wallet",
    "notification-system",
  ]
---

Post-quantum cryptography is too new to ship in a blockchain behind closed doors.

This week we launched [research.quantus.com](https://research.quantus.com/).

It's a public forum for cryptographers and developers to pick apart any protocol decision we've ever made. Researchers are already stress-testing Poseidon2 attack surfaces.

NIST finalized the post-quantum standards last year. That was step one. Step two is every protocol team in crypto actually implementing them. There's no established playbook for building a quantum-secure chain, so we're building the standard.

If you're working on post-quantum security, the door is open.

Here's what else we built this week.

### GitHub Activity (4 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Core Tech & ZK

- Updated ZK circuits to support multi-machine proof aggregation with onchain verification.
- Merged the multisig pallet, delivering full multisig support with high-security accounts.

### Network & Infra

- Developed the Senoti notification system: device registrar service, blockchain watcher service, and core worker with CI and deployment setup.
- Improved faucet bot in Telegram to better respond to increased activity.
- Added release management workflows for qp-plonky2 and qp-zk-circuits.

### Web & Mobile App Updates

- Launched [research.quantus.com](https://research.quantus.com/), a Discourse-based forum for cryptographic research and technical discussion.
- Updated the Quantus website: refreshed whitepaper page, added token allocation pie chart to /launch, added CoinGecko integration, and published all weekly updates as blog posts.
- Updated wallet design and shipped to TestFlight. New version coming to the App Store soon.
- Bug and UX fixes in the mobile wallet.
- Integrated FCM base for push notification handling in the mobile wallet.

### Content & Partnerships

- Chris appeared on the [Bad Crypto podcast](https://x.com/QuantusNetwork/status/2023752636387012675) and [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831).
- Team arrived at Network School & setting up an office.

### Industry Updates

- Quantum Canary: Can Quantum Computers Break Monero? [Link](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: How Decentralized is DeFi? [Link](https://x.com/QuantumCanary_/status/2021846672834539665)

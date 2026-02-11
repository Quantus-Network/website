---
title: "Quantus Weekly: Native Assets, ZK Aggregation, and Bitcoin's Quantum Risk"
description: "Weekly update featuring our decision on native-only assets for quantum security, Dilithium threshold signatures, and progress on ZK aggregation and custom multisig pallets."
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Native Assets, ZK Aggregation, and Bitcoin's Quantum Risk"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

If you're wondering why Gold is ripping and Bitcoin is struggling read this. There's nothing mysterious about it.

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Capital allocators are discounting Bitcoin in proportion to the odds of a cryptographically relevant quantum computer (CRQC) shipping before Bitcoin upgrades to post-quantum cryptography. Whether the Bitcoin community accepts this or not, the market already has.

Some chains will upgrade in time. Bitcoin probably won't. For example, recently Vitalik urged a PQC upgrade.

We have no way of knowing precisely when the deadline is, or which chains will upgrade in time. Which means we had to make tough design decisions around supporting external assets on @QuantusNetwork.

If a wrapped asset's origin chain gets compromised, so do the wrapped asset holders. So we decided @QuantusNetwork couldn't support any wrapped assets.

We're building infrastructure to allow permissionless bridging from anywhere into the most resilient quantum-secure money ever created. Once you're on our chain holding native QUAN, you're protected by ML-DSA-87 (NIST's highest security level) with face melting throughput via ZK aggregation.

I don't want to announce anything here, but you could always open our GitHub and check 👀

Here's what else we shipped this week, so when Q-day comes, we're ready:

### Github Activity (7 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK

- Integrated Dilithium threshold signatures into another protocol's MPC system.
- Built POC for custom treasury management using Parity multisig pallet.
- Implemented first iteration of custom multisig pallet with tests and benchmarks.
- Patched bug preventing ZK-enabled circuit binaries on ZK-aggregator pallet.
- Updated onchain ZK-aggregator verifier to support quantized output amounts.
- Fixed end-to-end ZK-aggregator example script for new field element serializers.

### Web & Mobile App Updates

- Built mobile UX to support fixed delay and intercept features for high-security accounts (still testing).
- Block scanner and high-security features added to CLI with improved error handling.
- Subsquid (indexer) updates for high-security handling and hasher fix for latest Poseidon.
- Shipped blog section on Quantus website with tag support and began uploading backlog of weekly updates.
- Whitepaper updated to v3.1, fixed tokenomic chart distribution values.

### Content & Partnerships

- Podcasts now being uploaded to Apple Podcasts.
- Started conversation with 2 token launchpads.
- Quantum Canary blockchain comparison page improvements.
- Podcast with AJ on biohacking and self optimization: https://x.com/QuantusNetwork/status/2012526120869286161

### Industry Updates

- Quantum Canary article discussing how CRQCs threaten Satoshi's Coins: https://x.com/QuantumCanary_/status/2011706634868047982

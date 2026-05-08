---
title: "Quantus Weekly: The Killer App is Money"
description: "This week we rewrote Dilithium DKG for Mithril, shipped threshold signature fixes, exposed Wormhole SDK helpers, and released a beautified wallet v1.4.0 on TestFlight."
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: The Killer App is Money"
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
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

There is something I believe that the market is slowly waking up to.

One killer crypto app will create and capture more value than any other.

It's not stablecoins, prediction markets, or defi.

It's definitely not web3, social networks, or pfp collections.

It's money. The idea that spawned the industry.

First thought is a pure thought. Peer-to-peer electronic cash.

Secure, private, and scalable money is the multi-trillion dollar opportunity.

This week, we rewrote Quantus's distributed key generation for Dilithium keys to match the updated Mithril paper and shipped fixes across our threshold signature implementation.

So you'll be able to shard a Quantus key across multiple parties. Important for our secure integrations.

We addressed an audit item in the Wormhole specification and exposed helpers in the public Quantus CLI SDK, opening private transaction support to external developers. Wormhole is how we achieve scalable post-quantum privacy.

We also released wallet v1.4.0 with a full reskin simplifying and beautifying the mobile app experience (currently on testflight).

### Github Activity (16 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Rewrote distributed key generation for Dilithium keys to match the updated Mithril paper.
- Hardened the threshold signature implementation against three audit findings.
- Updated the Wormhole spec to address an audit item on change outputs.
- Exposed Wormhole helpers in the public Quantus CLI SDK and added end-to-end deposit-to-mint example workflows.
- Refactored the CLI transaction lifecycle with distinct submitted, included, and finalized states, exact decimal fee parsing, stricter version compatibility checks, and overflow-aware batch transfers.
- Built a benchmarking tool to improve the difficulty adjustment algorithm.
- Investigated and benchmarked different aggregation tree topologies and their CPU usage.
- Fixed spelling errors in the human checkphrase.

### Network & Infra:

- Extended the stress-test suite with wormhole mode and ran it many times on the Planck testnet.
- Moved the Subsquid blockchain indexer to a production-grade server and added account and chain statistics data.
- Benchmarked Explorer queries and removed the expensive ones.
- Updated all VPS operating systems and documented infrastructure.
- Updated the miner-stack and tested the miner-app on Windows.

### Web & Mobile App Updates:

- Shipped GUI miner for Planck (v0.4.1) with claim functionality.
- Released wallet v1.4.0 (currently on TestFlight) with a full UI reskin and real exchange rates.
- Wallet bug fixes: homepage balance styling, activity component styling, and the receive screen.
- Task Master: added an exchange rates endpoint and updated the checksum dependency.
- Updated the Quantus website: pointed the docs link to docs (dot) quantus (dot) com, updated the TPS display, and posted the weekly update.

### Content & Partnerships:

- Updated podcast branding across Spotify, Apple, and YouTube.
- Sold the first pair of Quantus Glasses for [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) at Network School.
- Quantus had a booth at the NS fair, onboarding app users and Q-day registrants.

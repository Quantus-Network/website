---
title: "Quantus Weekly: Lattice Crypto Audit and Keystone Integration"
description: "Weekly update covering the successful audit of our lattice crypto library, networking updates for Polkadot SDK, and new hardware wallet support on Keystone."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Lattice Crypto Audit and Keystone Integration"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

Last week, the team addressed all issues raised in the audit of our lattice crypto library (rusty-crystals) and shipped networking updates to align with the latest Polkadot SDK. We also implemented Quantus address support on the open-source Keystone hardware wallet firmware and got our profile listed on the market intelligence platform “The Quantum Insider”.

Weekly Github activity report including 17 merged pull requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech

- Resolved all findings in the audit of the core lattice cryptography library (qp-rusty-crystals).
- Completed ZK-Aggregation proof preparation (circuits, benchmarks, and QIP documentation) for the upcoming audit.
- Found optimizations in the plonky2 poseidon2 gate and zk-trie for increasing proving speed.
- Rolled back qp-header and updated sc-network to align with the latest Polkadot SDK standards.

## Network & Infra

- Released the Desktop UI Miner for Windows, bug fixes for Linux and MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest
- Patched a potential P2P security vulnerability related to peer broadcasting to prevent malicious peers from overloading the network.
- Implemented Quantus address support on the open-source Keystone hardware wallet firmware (currently in simulator).

## Web & Mobile App Updates

- Released Mobile Wallet v1.1.2 to App Stores, resolving issues with polling, transaction flows, and notifications.
- Built a Rust SDK for the X API (rusx) and added endpoints to associate X and ETH accounts for user quests.

## Content & Partnerships

- Secured a listing on The Quantum Insider, improving backlinks and visibility to quantum analysts.
- Launched the podcast on Apple, Spotify, and RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- Sent the inaugural newsletter to email subscribers.
- Community X Space scheduled for this Thursday: https://x.com/i/spaces/1mnGeNXoZOZJX
- Podcast with Brian Chau, ML Researcher: https://www.youtube.com/watch?v=m_FPbzAcXEk

## Industry Updates

- Quantum Canary published a strategic guide on mitigating "Harvest Now, Crack Later" threats, outlining a pragmatic migration path using the newly finalized NIST post-quantum standards: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive

---
title: "Quantus Weekly: Threshold Dilithium Signatures and Distributed Coordination"
description: "Weekly update covering threshold signatures, ZK circuit improvements, mobile wallet updates, and community content."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Threshold Dilithium Signatures and Distributed Coordination"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

Power and authority split between multiple parties. Distributed coordination.

But post quantum signatures are 20x - 80x larger than Bitcoin signatures. A traditional multisig solution has its place but adds overhead which is unacceptable for certain use cases.

This week we shipped threshold dilithium signatures. This enables a distributed group to sign transactions and generate a single signature on-chain. Basically, sharding a private key.

That's necessary for custodians, cross-network applications, and secure automated usage of the chain.

Weekly Github activity report including 4 merged pull requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core Tech & ZK

- Implemented threshold signatures, enabling secure distributed signing.
- Reduced ZK circuit overhead.
- Added proof aggregation support to the wormhole example binary, ongoing integration into the chain and CLI.
- Upgraded our ZK circuits and Poseidon hashing algorithm to universally handle all data types (generic storage hashing), now integrated into the chain and CLI.
- Added support for proof aggregation over asset IDs within the ZK circuits.
- Optimized the CLI for faster transaction processing and added high-security recovery scripts.

## Web & Mobile App Updates

- Released a new version of the UI Mining App with granular sliders for CPU and GPU usage, alongside fixes for hashrate reporting.
- Finalized and merged full hardware wallet support into the mobile app.
- Added support for managing multiple accounts within a single mobile wallet instance.
- Implemented high-security screens and began development on "Guardian" recovery flows.
- Refined the "send" screen UX, improved error handling, fixed authentication timer bugs, and unified app icons.
- Configured daily database backups, fixed system services, and cleaned up the Task Master code (wallet app event tracking).

## Content & Partnerships

- Updated the whitepaper with the latest protocol details and established a GitHub versioning system: https://github.com/Quantus-Network/whitepaper
- Lore dropped our origin story, "From the Ground Up": https://x.com/JoeMattia/status/2010619972398297164
- Podcast with Sina (@hubsmoke) on restoring trust in science: https://x.com/QuantusNetwork/status/2009929397579723213

## Industry Updates

- Quantum Canary published a guide on Quantum-Safe Crypto Wallets: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

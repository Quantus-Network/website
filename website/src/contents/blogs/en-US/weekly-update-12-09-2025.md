---
title: "Quantus Weekly: Poseidon2 Optimization and Chain Architecture Refactor"
description: "Weekly update featuring 8.3x faster Poseidon2 gates, a major chain architecture refactor removing 9,000 lines of code, and updates from Binance Blockchain Week."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Poseidon2 Optimization and Chain Architecture Refactor"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

You probaly saw [this interview with @EliBenSasson and Scott Aaronson](https://x.com/Starknet/status/1995865652377395421)

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

In the interview, Scott said “we decided to base so much of the world’s cybersecurity infrastructure on cryptographic codes like RSA, diffie-hellman, and elliptic curve cryptography which just so happen to have these mathematical properties that a quantum computer is able to exploit.”

That is a difficult pill to swallow.

Especially for Bitcoin, which by design lacks the ability to easily plan and execute large protocol upgrades.

Which means the path of least resistance for the Bitcoin community has been to deny that the problem exists.

![Charles Edwards on Quantum Threat](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

But with recent breakthroughs in error correction, qubit scaling, and fidelity, denial of quantum computing progress represents an existential risk to Bitcoin and therefore human property rights.

So we must face the fog of the quantum future, and accept that when Q day arrives many blockchains will have failed to act.

Our duty is to act.

Here’s what we did to build quantum secure Bitcoin this week:

Weekly Github activity report including 8 merged pull requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK

- Optimized the posiedon2 gate. Reduced circuit trace rows per permutation from 31 to 1. This makes the gate 8.3x faster and results in a 4.5x total speedup for the larger wormhole prover.
- Refactored the chain architecture to use transaction extensions for recording wormhole proofs. This eliminated the need for a custom fork of the balances pallet, removing about 9,000 lines of code.
- Added Asset ID support to wormhole transfers
- Resolved issues raised in qp-rusty-crystals audit

## Network & Infra

- Improved the GPU miner implementation
- Updated and merged sc-network, including a fix for peer broadcasting for smoother node synchronization.
- Archived the Schrodinger (old testnet) network history.
- Debugged and improved our subsquid architecture. Added a new monitor script and restart protocols to improve data uptime to explorer and wallet.

## Web & Mobile App Updates

- Improved keystone integration, added PIN cache wiping and QR code with PIN safety.
- Published our rusx repo for connecting X OAuth to mobile app and upgraded the backend to support tweet querying and searching.
- Released update fixing various bugs, including integer handling issues and false-positive failure notifications

## Content & Partnerships

- We’re in Dubai for Binance Blockchain Week and Solana Breakpoint meeting with advisors, KOLs, and onboarding users.
- Keep an eye out for our weekly X Space scheduled Thursday
- Podcast with Quantus team: https://www.youtube.com/watch?v=konWKWrl5hs

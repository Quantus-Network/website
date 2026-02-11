---
title: "Quantus Weekly: GPU Mining and Dirac Stress Testing"
description: "Weekly update covering the release of Quantus Miner v2.0.2 with GPU support, Dirac network stress testing, and chain architecture updates."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPU Mining and Dirac Stress Testing"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

This week, we officially released Quantus Miner v2.0.2 with GPU support and successfully stress-tested the Dirac network.

We also updated the chain architecture to support a 21M coin supply cap and cleaned up the codebase by removing legacy vesting and treasury pallets.

Weekly Github activity report including 6 merged pull requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- Updated the chain specification to reflect the new 21M coin supply cap.
- Simplified the core chain architecture by removing the vesting and treasury pallets.
- Completed generic Poseidon storage hashing support to prevent panic in the runtime.
- Added Asset ID support to our ZK circuits and the CLI.

## Network & Infra

- Stress tested Dirac to observe how overloading the chain impacted block times.
- Published Quantus Miner v2.0.2, which now officially supports GPU mining: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- Finalized the hardware wallet signing flow on mobile, including QR code signature transmission, multiple-wallet support and unlinking functionality.
- Implemented "Raid Quests" with telegram, website, and internal tracking via Task Master to incentivize community engagement on X. Wallet implementation in progress.
- Resolved backend CORS errors and improved data tracking for social interactions.
- Fixed block explorer bugs affecting miner rewards reporting and network switching.

## Content & Partnerships

- Secured investment from two strategic partners met at the Peer Summit.
- Concluded meetings regarding launch strategy and drafted an updated whitepaper reflecting new tokenomics and GTM.
- Episode with Cezary, veteran software architect and systems engineer: https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- Article from Quantum Canary analyzing risk of a state-level attack on Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

---
title: "Quantus Weekly: ZK Transaction Aggregation and Miner App Release"
description: "Weekly update covering the first step of ZK transaction aggregation, the release of Miner App v0.1.0, and progress on the GPU mining implementation."
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZK Transaction Aggregation and Miner App Release"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

This week the team completed the first step of ZK transaction aggregation for both the chain and CLI, replacing mock tests with actual transfer verification. We also released the Miner App v0.1.0 binary, now available.

## Development News
- Weekly Github activity report including 150+ total events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech
- Created a new qp-header primitive on the chain that is field-aligned with our wormhole circuits, replacing Substrate's generic header.
- Updated the aggregation circuit to support block header verification and connections between adjacent blocks.
- The GPU implementation of the mining algorithm is roughly 80% complete. 
- Completed first phase of rusty-crystals audit, issues have been mostly addressed.
- Conducted an internal audit for panics in the runtime (inspired by the recent Cloudflare unwrap bug).
- Added vesting commands to the CLI for the standard Substrate pallet.

## Network & Infra
- Streamlined Subsquid deployment to only one script.
- Created Docker image & release process for Quantus-Miner.
- Deployed Miner-stack (Docker Compose + monitoring stack + documentation).
- Added monitoring dashboards & alerts for Explorer & Task Master.

## Web & Mobile App Updates
- Launched in-app referral system and user-facing event tracking metrics (Quantus Quests). 
- Released miner app binary for all platforms: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 only mac has been thoroughly tested tho.
- Fixed migration issues and various other bug reports in the mobile wallet.
- Refactored the send screen widget to be testable and added unit/widget tests.
- Updated the Quests page on the website with search functionality.
- Updated the Task Master leaderboard endpoint to support search and added rank in results.

## Content & Partnerships
- First community AMA via X space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast with James, Founder of Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Acquired two new advisors / KOLs.

## Industry Updates
- Scott Anderson updates his timelines for fault-tolerant quantum computer running Shor’s algorithm to “before the next US presidential election”: https://scottaaronson.blog/?p=9325

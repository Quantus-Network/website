---
title: "Quantus Weekly: Dirac Testnet Release and Lattice Crypto Audit"
description: "Weekly update featuring the release of the Dirac testnet, finalizing updates to the PoW algorithm and lattice cryptography library, and new infrastructure improvements."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Dirac Testnet Release and Lattice Crypto Audit"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

This week the team released the Dirac testnet, finalizing the chain-wide update to the proof of work algorithm and lattice cryptography library, qp-rusty-crystals. This core library is now under external audit and includes constant-time signatures. The update is now integrated into the mobile wallet and libp2p.

**IF YOU ARE A MINER YOU SHOULD UPDATE TO THE NEW DIRAC TESTNET**

## Development News
- Weekly Github activity report including 12 pull requests and 3 merged: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech
- Full reference implementation for qp-rusty-crystals with constant time key generation and signatures released and merged.
- Resolved all KAT tests for rusty crystals, made it constant time and fixed outstanding release script issues.
- Initiated audit of qp-rusty-crystals.
- Finished the implementation of the block header verification circuit.
- Updated the block header hasher to a new version that eliminates circuit padding.
- Investigated and resolved a bug related to missing digest logs in block headers.
- Added a caching feature to the wormhole example binary to save the latest proof for easier debugging.
- Began implementation of GHOSTDAG consensus paper.

## Network & Infra
- Release Dirac 0.4.0 on all servers.
- Release external miner build 1.0.0.
- Update chain for rusty crystals update.
- New Prometheus & Grafana dashboards, now configured with working email notifications for alerts.
- New updated telemetry service.
- Created a reference setup for Fedora machines.
- Deployed 2 new secured VPS servers for new Dirac testnet.
- Secured the Quantus.cat domain and configured Cloudflare tunnels for all machines.
- Upgraded the Subsquid deployment process to support blue-green deployments for zero-downtime updates.
- Created workflows to auto-generate and publish Docker images to GitHub.
- Fixed indexing issues at http://quantu.se/ and updated metadata to point to the correct node URL.

## Web & Mobile App Updates
- Finished mobile app notification feature.
- Refactored route intent handling to improve deep linking performance and reliability.
- The miner dashboard layout is now fully responsive.
- Fixed a Quantus Explorer bug where the search function was still using an old GraphQL endpoint.
- Refactored Quantus Explorer API client to use modern hooks for better performance.

## Content & Partnerships
- Podcast with Remus Boroiu, a 9-time bodybuilding champion, entrepreneur, and creator: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Press release via Chainwire.

## Quantum Canary
- An analysis of quantum stocks: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- A deep dive into the RAND Corporation’s influential role in shaping global policy and accelerating the timeline for PQC migration: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton researches triple coherence times for 45 tantalum-on-sapphire qubits: https://www.nature.com/articles/s41586-025-09687-4

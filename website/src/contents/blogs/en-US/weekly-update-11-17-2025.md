---
title: "Quantus Weekly: PoW Audit Completed and Dirac Testnet Launch"
description: "Weekly update featuring the completion of our PoW and Poseidon hash audit by Equilibrium, ZK proof generation for block headers, and the launch of the Dirac testnet."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW Audit Completed and Dirac Testnet Launch"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

This week the team completed the audit from Equilibrium of our proof of work algorithm and Poseidon hash function and shipped updated apps to both app stores.

## Development News
- Weekly Github activity report including 147 total events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Review the audit of our PoW algorithm and Poseidon hash function with all issues resolved here: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech
- Updated the command-line interface (CLI) to work with dirac testnet
- ZK proof generation for block header provenance, a major milestone as it proves our circuit logic works with dynamic data not just static dummy proofs.
- Resolved issues with the node command line.

## Network & Infra
- Fixed the multi-arch docker workflow for the chain.
- Finalized the Dirac release by updating all nodes, removing old testnets, and rolling out new dashboards and alerts. See grafana.quantus.cat and telemetry.quantus.cat
- Updated the Faucet with new libraries, a new server, and added metrics, new /king command for referral leaderboard.
- Enhanced network monitoring with a PostgreSQL backend for Grafana, adding various fixes and optimizations.
- Set up IaC (infrastructure as code) on a new server, connecting all Heisenberg & Dirac nodes.
- Updated the Subsquid indexing service to support the Dirac testnet and added Prometheus metrics.

## Web & Mobile App Updates
- Released Mobile Wallet version 1.1.1 to the App Stores. Apple is requiring more info, but that should be resolved soon.
- Updated the Mobile Wallet to connect to the Dirac testnet.
- Fixed several Mobile Wallet bugs, including issues with scheduled notifications, updating account names, and biometric authentication.
- Updated the Miner App to use the new Dirac chain and fixed stats reporting.
- Added a new settings screen and an in-app binary update feature to the Miner App.
- Migrated the Task Master application to the Dirac testnet and added Prometheus metrics.
- Added a new command to the Faucet bot for checking the leaderboard for our upcoming referral feature.

## Content & Partnerships
- We have several fundraising contracts out and $250k verbally committed.
- Hired The Quantum Insider to handle SEO for both Quantum Canary and Quantus.
- Created a new n8n flow for tracking social media growth (we just crossed 500 podcast subscribers).
- Podcast with Jangle, DeFi builder: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Industry Updates
- Quantum Canary published an interview with quantum cryptographer Dr. Or Sattath on unclonable cryptography and quantum money, exploring its potential to upgrade Bitcoin's speed, security, and privacy: https://www.quantumcanary.org/insights/or-sattath-interview
- 448 Qubit Neutral-Atom computer achieves fault tolerance https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces
- We will be discussing Quantum FUD and Quantus on X on Thurs 11a HK time https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

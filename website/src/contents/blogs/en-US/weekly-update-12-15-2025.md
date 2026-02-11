---
title: "Quantus Weekly: GPU Mining Breakthrough and ZK Refactor"
description: "Weekly update covering a 9x performance boost in GPU mining, ZK-aggregation circuit refactor, and strategic meetings in the UAE."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: GPU Mining Breakthrough and ZK Refactor"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

This week the team achieved a breakthrough in mining performance. Our new GPU miner is now running ~9x faster than the CPU version.

We also completed a refactor of our ZK-aggregation circuit, allowing us to delete thousands of lines of code.

While in UAE, the team met with advisors and investors. These meetings solidified our product vision and clarified tokenomics and token launch strategy. There was also meaningful BD progress made to support the token launch.

Weekly Github activity report including 10 merged pull requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- Migrated our ZK-aggregator transfer proofs to a dedicated pallet including updates to the CLI, circuits, and Poseidon logic. This refactor enabled us to delete thousands of lines of code.
- Designed a solution to make the Poseidon storage hasher generic.
- Merged pending changes and resolved code quality issues related to reversible transfers.

## Network & Infra

- GPU miner now ~9x faster than CPU miner.
- Released CLI v0.3.1, finalization flag unified and improved address formatting.
- Executed a runtime upgrade and updated the chain specification.
- Deployed a new BootNode.
- Completed security checks and updates across all servers.
- Deployed containerized health checks for the Subsquid indexing service.

## Web & Mobile App Updates

- Advanced the hardware wallet integration. Now parsing QR codes in Keystone and signing dummy messages.
- Began implementing multi-wallet (mnemonic) hardware wallet functionality into the mobile app.
- Updated website forms and integrated them with our email provider.
- Optimized rusx to batch queries, preventing rate-limiting issues.

## Content & Partnerships

- Attended Solana Breakpoint and tested our "Quantum Secure Bitcoin" positioning/memes.
- Met with advisors in the UAE to discuss the token launch, tokenomics, and the Quantus GTM strategy.
- Episode with Tom Howard is live: https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canary released a comprehensive "Quantum Ready" blockchain comparison page: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

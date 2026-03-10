---
title: "Quantus Weekly: Wormhole Transactions"
description: "Weekly update covering wormhole transactions, private block rewards for miners, consensus bug fixes, and wallet updates."
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: Wormhole Transactions"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

You burn coins to an unspendable address.

A ZK proof mints them somewhere new.

The trail is gone.

[@QuantusNetwork](https://x.com/@QuantusNetwork) calls these "wormhole" transactions.

You send coins to a wormhole address that looks identical to any other account on the ledger. But the address is mathematically unspendable. To withdraw, you prove knowledge of a secret with a ZK proof, and the chain mints equivalent coins to a fresh exit address.

No one can connect the entry to the exit.

Here's where it gets interesting for miners.

The protocol requires miners to submit a 32-byte preimage for their reward address. The chain hashes it to create the address.

Dilithium public keys are massive. They can't fit in 32 bytes. So the preimage can't be a real public key, and the resulting address is guaranteed to be an unspendable wormhole address.

Privacy is enforced by the protocol, with no opt-in required.

This week, we built this into the miner app. In the next testnet, all block rewards route through wormhole addresses by default.

Here's what else we built this week.

### Github Activity (11 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Built wormhole withdrawals into the miner app, giving miners private block rewards by default.
- Fixed heaviest/longest chain consensus bug and several other chain bugs.
- Released updated core libraries: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Network & Infra:

- Updated Substrate dependencies from stable2506 to stable2512-2.
- Updated CLI, sc-network fork, and NEAR fork with new dependencies.
- Tested Heisenberg nodes with updated codebase and tech collective governance.
- Senoti notification system: fixed RabbitMQ startup glitch, removed auth layer from device registrar, fixed failover connection handling.

### Web & Mobile App Updates:

- Shipped wallet v1.2.0 and v1.2.1 to all app stores with updated graphics.
- Pushed a version of the mobile app with a "swap" button to the app store to begin review process.
- Shipped happy checkphrase with more positive word list across wallet and explorer.
- Android edge-to-edge display fix.
- Recovery phrase UI update, button component fixes, standardized icon buttons, and reset sheet update.
- Updated remote notification integration and expanded notification support to all wallets.

### Content & Partnerships:

- Hosted a panel discussion on privacy and quantum security with [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman), and [Kenbak](https://x.com/k6nb4k) (Cipherscan) at Network School.

### Industry Updates:

- [Quantum Canary Article](https://x.com/QuantumCanary_/status/2027639894944956645) on ZK & Quantum Computing

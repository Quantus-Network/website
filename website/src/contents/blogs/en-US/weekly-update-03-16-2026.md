---
title: "Quantus Weekly: Quantum-Safe Signatures, ZK Scaling, and 2x Faster Wormhole Proofs"
description: "Weekly update on ML-DSA signature scaling, ZK aggregation, wormhole proof speedup, security reviews, testnet nodes, and Quantum Canary content."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Quantum-Safe Signatures, ZK Scaling, and 2x Faster Wormhole Proofs"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

A Bitcoin signature is 65 bytes.

A single ML-DSA-87 signature is 4,627 bytes.

That's 70x larger.

Multiply that across every transaction and that's a scaling problem.

But no worries, I'm sure increasing Bitcoin block sizes won't be that controversial.

(that was a joke)

Quantum-safe signatures are so fat, if they were implemented today Bitcoin throughput would plummet well below 1 TPS.

[@QuantusNetwork](https://x.com/QuantusNetwork) would achieve around 685 transactions per block without any scaling techniques.

But we use ZK to aggregate these larger transactions into smaller proofs that end up onchain.

It also offers privacy protection to our users by breaking the link between sender and receiver [(covered in last update)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS becomes an encrypted 3,500 TPS.

The new blockchain trilemma is quantum security, scalability, and privacy.

We're solving it with ZK.

This week we cut our proving time in half.

Wormhole aggregation proofs now settle 2x faster.

The signatures are still enormous. The chain doesn't care.

Here's what else we built this week:

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Wormhole aggregation proofs are now 2x faster, using a serialized prover instead of rebuilding dynamically.
- Finished circuits builder/prover refactor split for qp-zk-circuits.
- Redesigned aggregator API from dynamic prover/circuit builder to orchestration and artifact management.
- Updated quantus-cli with the new aggregator API.
- Fixed wormhole verifier blobs that lacked a cryptographic/reproducible-build tie to qp-zk-circuits in the chain.
- Several security reviews completed across all substrate pallets, merged 8 PRs of fixes.
- Kicked off formal audit of substrate pallets.
- Multisig and Treasury pallet improvements.

### Network & Infra:

- Deployed two new Planck testnet nodes with a new testnet profile.
- Substrate state pruning investigation and fixes.
- Connected testnet faucet to [@QuantusNetwork](https://x.com/QuantusNetwork) Twitter account.
- Subsquid: added per-user event mapping for improved query performance.
- Subsquid: updated reversible transfers aggregation for historical accuracy.
- Built bridging infrastructure: Rosetta API implementation with integration tests and MPC signing updates.

### Web & Mobile App Updates:

- Mobile wallet build 82: code cleanup and UI standardization (sheets, scaffold, icon buttons, accounts refactor).
- Updated mobile wallet chain history service and transaction history UI to support latest Subsquid data model.
- Website: optimized page indexing, added weekly updates as blog posts, fixed blog search to include titles.
- Explorer: overhauled reversible transaction views into separate event types (scheduled, executed, cancelled).
- Quantum Canary website: made article tables mobile-friendly.

### Content & Partnerships:

- Podcast with physicist and entrepreneur Steve Hsu on quantum computing, AI, and the quantum threat timeline.
- Added two marketing hires.
- Hosted crypto onboarding and privacy/OPSEC security events at Network School.

### Industry Updates:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

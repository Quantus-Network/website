---
title: "Quantus Weekly: Mapping the Quantum-Secure Future"
description: "Weekly update covering our CoinGecko listing, multisig optimizations, ZK-aggregator refactoring, and mobile app v1.1.5 release."
pubDate: "2026-02-13"
heroImage: "/blog/covers/weekly-update-02-13-2026.webp"
heroAlt: "Quantus Weekly: Mapping the Quantum-Secure Future"
featured: false
tags:
  [
    "weekly-update",
    "coingecko",
    "multisig",
    "plonky2",
    "plonky3",
    "quantum-resistant",
    "zk-proofs",
  ]
---

Fra Mauro spent years inside a monastery near Venice drawing a map of the entire known world.

He never sailed anywhere.

Merchants and sailors visited the monastery and described what they'd seen. Fra Mauro cross-referenced every account against every other. He rejected claims that didn't hold up, and revised constantly.

The result showed places most Europeans had never heard of. East Africa. The Indian Ocean. Southeast Asia. Territory that existed but wasn't real to anyone who hadn't been there.

Quantus sets the standard for quantum-secure money.

But we've got to be on the map.

This week, Quantus got listed on [@coingecko](https://x.com/@coingecko).

There is a category called "quantum resistant", and it's less than $5B in market cap.

Soon the entire crypto market cap will be "quantum resistant", because every chain will either upgrade or go to zero.

But for now the category is small, and even amongst the chains on the list, there is plenty of work to be done.

So here's what else we shipped this week.

### GitHub Activity (7 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-13-2026.webp)

### Core Tech & ZK

- Implemented and tested the final simplified version of multisig with optimization and weight accuracy fixes.
- Refactored qp-plonky2 to cleanly separate the verifier from the prover.
- Fixed ZK-aggregation and added additional privacy and flexibility to it.
- Updated qp-zk-circuit release workflow.
- Improved check-phrase word selection for better usability.
- Added random-partition multisend to the CLI.
- Benchmarked Plonky3's prover against our Poseidon2 implementation.

### Web & Mobile App Updates

- Shipped Mobile app v1.1.5 to both app stores.
- Implemented new quests screens with bugfixes for rank display.
- Published launch page at [quantus.com/launch](https://quantus.com/launch).
- Simplified UX design for ZK-aggregator, now called "encrypted accounts."

### Content & Partnerships

- Listed on CoinGecko.
- Podcast with Jangle and Chris on our Youtube.

### Industry Updates

- Quantum Canary: "[Stop Arguing About Filters: What Vitalik's Accelerated Quantum Timeline Means For Investors](https://x.com/QuantumCanary_/status/2021092653891486027)".

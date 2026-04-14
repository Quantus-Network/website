---
title: "Quantus Weekly: Q-Day Estimates, On-Spend Risk, and Permanent Economic Freedom"
description: "Google and Oratomic qubit estimates for breaking ECC, on-spend attacks vs Bitcoin’s 10-minute blocks, Google’s 2029 PQC deadline, and Quantus’s rebrand around Permanent Economic Freedom—plus ZK, infra, and app shipping notes."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day Estimates, On-Spend Risk, and Permanent Economic Freedom"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

The number of physical qubits needed to break Bitcoin's cryptography just dropped from 20 million to under 500,000.

Google published their new figure last week. That's why quantum was all over your timeline.

A separate paper from Oratomic puts it at 19,000.

Four orders of magnitude in one year.

Google's team estimated a 9-minute attack window with precomputation.

Bitcoin confirms a block every 10 minutes.

That means an attacker could intercept a transaction in flight, crack the sender's key, and broadcast a fraudulent replacement before the network confirms the original. These are called on-spend attacks.

When on-spend attacks become a reality, even hiding your public key from quantum attackers will not be enough to prevent your sats from being stolen.

Google moved their own post-quantum migration deadline to 2029. What's even more interesting is that they published resource estimates (qubit counts, timing) for breaking ECC-256, but withheld the detailed technical blueprint for executing the cryptographic break itself.

The last time scientists self-censored at this scale was before the Manhattan Project.

Just like in 1945, there won't be a public roadmap or period of incremental progress announcements that make it obvious we are X months away. There won't be any notification when Q-day arrives. It will be a State secret.

In the paper's words, breaking 32-bit elliptic curves is "not substantially harder" than breaking 256-bit elliptic curves. When someone demonstrates a small-key break, the migration window for public blockchains has already closed.

Bitcoin has shipped three major protocol updates in the last decade. An emergency post-quantum migration needs at least 1-3 years. An orderly one needs more than 5.

The window for an orderly migration is closing as we speak, and may have already passed. Now it's existential.

This is why we locked our north star this week: Permanent Economic Freedom. Three words at the foundation of everything Quantus builds. The new [quantus.com](https://quantus.com) went live with a full rebrand and a visual identity built around that mission.

Permanent, because the cryptography is NIST Level 5 post-quantum.

Economic, because that's what crypto is for. Disrupting the central banks.

Freedom, because we're resisting the people who seek to control you.

[@QuantusNetwork](https://x.com/QuantusNetwork) is quantum-secure encrypted money. Here's what else we shipped this week.

### GitHub Activity (13 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- New blinding strategy for qp-plonky2 makes ZK-enabled leaf proofs 6x faster without increasing native trace size.
- Refactored CLI so mobile app and miner app share the same ZK code.
- Got miner app working on the new testnet with the updated ZK system.
- Addressed issues found in security audits.
- Fixed key generation on chain and CLI.

### Network & Infra

- Extended monitoring with new dashboards and refreshed alert channels with Telegram notifications.
- Updated log stack with history rotation.
- Dependency updates and new releases across repositories.
- Telemetry and Grafana rebranding to match new brand identity.
- CLI build/release fix.

### Web & Mobile App Updates

- Launched redesigned [quantus.com](https://quantus.com), rebuilt on Astro with localization support.
- New logos and splash screens for the mobile app.
- Improved mobile app send performance.
- Shipped mobile app versions 1.2.3, 1.3.0, and 1.3.1.

### Content & Partnerships

- Published rebrand announcement on [@QuantusNetwork](https://x.com/QuantusNetwork).
- Published whitepaper announcement on [@QuantusNetwork](https://x.com/QuantusNetwork).
- Scaling & Privacy with Post-Quantum ZK-Proofs, whiteboard session video with Ethan and Chris on Quantus Youtube.
- Represented Quantus at Network School's April opening, including a booth at the NS Fair and a Crypto Payments & Privacy workshop.

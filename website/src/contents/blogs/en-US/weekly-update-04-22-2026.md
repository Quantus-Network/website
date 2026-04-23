---
title: "Quantus Weekly: Planck Testnet, CLI Reward Claims, and 2x Prover Throughput"
description: "Planck is live as our first testnet for post-quantum private transactions—miners are migrating, rewards are claimable to the mobile wallet via CLI, docs.quantus.com ships a mining guide, and aggregated prover speed doubles on a 2x8 split architecture."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck Testnet, CLI Reward Claims, and 2x Prover Throughput"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Planck is our first testnet supporting Quantus's post-quantum private transactions.

More than half our miners migrated to Planck this week.

While other chains argue about whether the quantum threat is real, we're stress-testing the solution in public.

You can now claim your mining rewards through the CLI to a transparent address in the mobile wallet.

We've validated mining end-to-end on Apple Silicon and Linux.

Currently our mobile UI only supports our transparent address type. More on that soon.

[docs.quantus.com](https://docs.quantus.com) is live, and you can find a mining guide there that walks you through setting up a node, running a miner, and claiming rewards to your mobile wallet.

If you've been mining or using previous Quantus testnet versions, the app will prompt you to migrate when you update.

Your balance resets, but if you view "mining rewards" in settings, you still have credit for every block you mined on previous testnets.

We're also tracking how many blocks each account mines for Planck.

Our aggregated prover speed also doubled this week via a 2x8 split architecture.

And more shipped this week.

### GitHub Activity (27 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- Doubled aggregated prover performance via a 2x8 split proving architecture (no ZK on each 8-leaf bundle, ZK wrapper applied to the root proof).
- Submitted our ZK research paper for preprint.
- Discovered and patched a privacy-leak bug in the new split mask ZK option on qp-plonky2.
- Addressed audit items on threshold Dilithium.
- Made mining rewards claimable via CLI.
- Updated CLI hasher to use blake2-256.
- Shipped a CLI wormhole balance recovery fix.
- Tech Collective members successfully executed a runtime update.

### Network & Infra

- Planck: new changes merged and released; internal Planck testnet running.
- Stress tests: new strategy implemented, multiple runs executed.
- Faucet: improved exception handling for Twitter, extended metrics for detailed monitoring.
- Refreshed and extended monitoring dashboards for Planck and the faucet.
- Implemented more selective alerting.
- Moved A1-Planck node to Germany; A2-Planck node to the US.
- Updated Subsquid for Planck testnet: fixed balance movement, reverted hasher to blake2b, added mining rewards display.
- Updated the Explorer to Planck testnet and properly merged the wormhole branch.
- Ran MVP miner end-to-end on Apple Silicon and Linux; still troubleshooting GPU mining on Linux.
- Built an AI mining skill (SKILL.md); got mining running in under two minutes during testing.

### Web & Mobile App Updates

- [docs.quantus.com](https://docs.quantus.com) is live.
- Deployed the [q.day](https://q.day) landing page.
- Shipped mobile wallet v1.3.2 and v1.3.3 with fixes for the new testnet.
- Mining rewards now display in the wallet.
- Implemented redesigned transaction details, receive, and activity screens in the wallet.
- Updated the mining guide.

### Content & Partnerships

- Q-Day registrations crossed 100. Learn more at [q.day](https://q.day).
- Received and implemented comments from outside contributors on our State of Quantum Report.

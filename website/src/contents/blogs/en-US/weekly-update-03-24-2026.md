---
title: "Quantus Weekly: Second Halving — 4x Faster ZK Proofs in Two Weeks"
description: "Another 2x cut to prover time, Poseidon hashing, mining fix, Senoti rate limits, whitepaper launch, iOS swap review, and Quantum Canary on Solana quantum security."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: Second Halving — 4x Faster ZK Proofs in Two Weeks"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 is a special number.

2+2 is 4. 2x2 is 4. 2² is 4.

It's the only number where addition, multiplication, and exponentiation all give you the same answer.

Two weeks ago we made significant progress optimizing our ZK proving pipeline.

Last week we cut prover time in half (dividing it by 2).

This week we cut it in half again (the second halving).

4x faster in 14 days.

Every millisecond in the proving pipeline matters for the speed and UX of our private transactions.

When a user hits send, they want the receiver to see their funds immediately.

Our wormhole transactions, the ones that break the link between sender and receiver, require a ZK proof.

The ZK proof adds additional time before settlement. Every second that goes by and every time the receiver refreshes their screen without seeing their funds is failure.

There are UI tricks that can improve the experience, and those are great.

But settlement needs to both feel and be extremely fast.

We're grinding those seconds down.

Here's what else shipped this week.

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- Another 50% reduction in prover time through ZK-friendly database optimizations. Second consecutive week of 2x improvement to the proving pipeline.
- Non-injective hashing implemented in Poseidon, with new versioned releases for qp-poseidon-constants.
- Difficulty adjustment fix for an edge case in the mining algorithm.
- AI-driven review of all pallets and main crates, with bug reports filed on flagged issues.
- Cleanup PRs merged for issues identified during the codebase review.

### Network & Infra:

- Added rate limiting to the Senoti notification service device registrar.
- Explorer updated: merged latest changes, resolved conflicts, and adjusted API.

### Web & Mobile App Updates:

- Published the new whitepaper on the website with updated styling and content.
- Published last weekly update as blog post on [quantus.com/blog](https://quantus.com/blog).
- Transaction pool peek subscription feature implemented and tested end to end.
- Began Apple review process for our swap feature in iOS app.

### Content & Partnerships:

- Completed a 20 page draft of our "State of Quantum" industry report and have begun distributing for comments. Reach out if you are interested.
- Added a marketing hire for social media.
- Q-Day event date confirmed: April 25th at Network School.

### Industry Updates:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

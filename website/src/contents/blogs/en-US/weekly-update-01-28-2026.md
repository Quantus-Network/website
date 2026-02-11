---
title: "Quantus Weekly: Deniable RPCs and Neodyme Security Audit"
description: "Weekly update featuring our new Deniable RPCs for enhanced privacy, the completion of the Neodyme security audit for Rusty Crystals, and private ZK addresses for all tokens."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Deniable RPCs and Neodyme Security Audit"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

Your wallet is snitching on you.

99% of privacy infrastructure is a LARP. It's leaking your info somewhere in the stack. Your wallet talks to a server called an RPC. That RPC server sends info back to your wallet. But in order to do that the RPC typically needs to know some information about you.

For example, to pull your balance it may need your transaction history. It probably associates that with your IP address, approximate location, usage habits, etc. All so you can see your balance in your wallet.

So while your favorite onchain privacy tool's new marketing hire Stacy is flexing on an X space about how "private and secure" they are, the suits are just eavesdropping on the RPC connection.

You're pwned.

We built something different. Deniable RPCs use a hash prefix filter similar to oblivious lookup. You can ask the server for your transactions without it knowing what you're looking for. The RPC cannot determine which specific transactions you're requesting.

So [@QuantusNetwork](https://x.com/@QuantusNetwork) preserves privacy onchain & in wallet/RPC infrastructure. We're keeping secret what you want to keep secret at every layer of the stack.

This week we also [announced](https://x.com/QuantusNetwork/status/2016390125626773871) the completed [@Neodyme](https://x.com/@Neodyme) security audit for our Rusty Crystals Dilithium signature library. All issues resolved & hardening techniques applied. Rusty Crystals is the best Dilithium signature library in Rust, with full HD wallet support.

That's the highlights. Here's what else we shipped in the last week:

### GitHub Activity (19 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- Completed [@Neodyme](https://x.com/@Neodyme) audit with all issues resolved. Hardening techniques applied including memory zeroing after use. [Post here](https://x.com/QuantusNetwork/status/2016390125626773871).
- Shipped Deniable RPCs via prefix hashing. Users now have plausible deniability when connecting to RPC nodes (oblivious lookup).
- Enabled private ZK addresses for all tokens at genesis.
- Continuous block-building reduces average time until transaction inclusion by over 50%.
- Removed unnecessary pallets, simplifying the runtime.
- Multisig pallet feature-complete with updated documentation. Chain and CLI integration awaiting review.
- Revamped fuzzer for ZK-aggregator circuits and expanded test coverage for miner fees and burned fees.

### Web & Mobile App Updates

- Shipped Mobile App v1.1.5 (build 65) with high security pull feature.
- Created demo videos for high security features.
- Explorer and faucet improvements: added error and high security events to block details, search by error type, and enhanced group message filtering.
- Task Master bug fixes for leaderboard, raid submission, and metrics.
- Fixed Subsquid dockerfile and GitHub action for docker image generation.
- Updated website blog UX and fixed SEO issues.

### Content & Partnerships

- Crossed 1,000 members on Telegram.
- Booked venue for side event at Token2049 Dubai.
- The team has decided to return to [@ns](https://x.com/@ns) for our next sprint.
- Hired a new designer for mobile app redesign.
- Hired our first medium-sized content creator for video collabs. Building our roster of creators.

### Industry Updates

- [@QuantumCanary\_](https://x.com/@QuantumCanary_) article [diving into Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) published their "[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)".

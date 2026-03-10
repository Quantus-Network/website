---
title: "Quantus Weekly: The Wallet Should Be Simple"
description: "Weekly update covering the release of Wallet v1.2.0, Treasury with multisig, Heisenberg testnet updates, and performance improvements."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: The Wallet Should Be Simple"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Every major crypto wallet is adding garbage features I do not want.

I don't want a social media app that also holds my money.

Ever notice how there is no highly opinionated, easy to use, self custody, "official" bitcoin wallet?

Same goes for Ethereum and Solana.

The foundations build the chain and leave the interface to third parties. Third parties need revenue. Revenue means features. Features mean noise.

So now your wallet has a swap aggregator, a social feed, trending tokens, NFT galleries, and push notifications about coins you've never heard of.

We built Quantus and we built the wallet.

Same team, same product. The app we shipped to the App Store this week has no ads, no token feeds, no social features, no claimable usernames.

Open it, you see your balance, send or receive.

We redesigned the interface from scratch to be highly opinionated with defaults that remove as much cognitive load from the user as possible.

We also reduced load time for wallet transaction history dramatically. No more hanging around waiting for your balance and previous transactions to load after you open the app.

Quantum-secure private money should be simple to use and ideally boring.

We'll leave the excitement to the pre-quantum chains on Qday.

Everything is open source. Anyone can build their own wallet. But there will always be an official one that just works.

### GitHub Activity (4 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Core Tech & ZK

- Treasury with multisig merged and included in the new Heisenberg testnet release.
- All pending changes merged and released. New Heisenberg genesis created, released, and deployed.
- Legacy governance rules related to Treasury management removed.
- CLI extended with new Multisig and Treasury commands. High-security account details now visible in wallet view.
- Added proof shuffling and zeroing out of duplicate exit accounts to increase privacy of aggregated wormhole transactions.
- Split wormhole into circuit builder and prover to speed up proof aggregation.
- ZK circuits release workflow updated and new artifacts published.
- Revive pallet dependency issue resolved.

### Network & Infra

- Notification system (Senoti): added failover to block watcher for best network selection.
- Updated Senoti to handle multiple addresses per device.
- RPC failover added for Subsquid server.
- Monitoring alerts updated and redirected to appropriate channels.

### Web & Mobile App Updates

- Shipped Wallet v1.2.0 to iOS App Store.
- Reduced average transaction history load time from over 1 minute to under 5 seconds.
- Shipped Wallet builds 75, 76, 77 with Android splash screen fix and other bugfixes.
- Added release artifact workflow for wallet builds.
- Updated toaster component and cleaned up legacy version.
- Added remote notification support for registering existing addresses, FCM device unregistration on reset, and new wallet address notification removal.
- Added happy words list for check-phrases.
- Refactored Subsquid to be more extrinsics-focused with support for privacy score calculation and wormhole transactions.
- Refactored explorer to reflect the updated Subsquid architecture.

### Content & Partnerships

- Podcast with Nik Heger, "Building A New Sound Money System"

### Industry Updates

- Quantum Canary analysis on whether [Stripe's Tempo blockchain will be quantum secure.](https://x.com/QuantumCanary_/status/2024797352616509754)

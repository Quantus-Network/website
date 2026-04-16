---
title: "Quantus Weekly: Planck Testnet Launch and Early Mining Rewards"
description: "Why early hashrate matters, Planck testnet is live for miners, app migration on TestFlight and stores, GPU mining on the new chain—and Core, infra, wallet, and community updates from the week."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Planck Testnet Launch and Early Mining Rewards"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Early hashrate matters.

Half of the 21M Bitcoin supply was emitted in the first four years, back when nobody was paying attention.

Anyone could mine, and early block rewards were 50 BTC.

A few compute cycles could have retired the bloodline.

Quantus is proof of work. Max supply of 21M QUAN.

Just like Bitcoin, early miners get more of the rewards for bootstrapping the network.

Today we launched our Planck testnet.

We're stress testing Quantus before mainnet.

If you're using the app on TestFlight, you'll be prompted for one-click migration.

If you've downloaded the app from the iOS or Google Play store, the update will be rolling out in the next couple of days.

If you're mining Quantus, you can start mining the Planck testnet now.

Check out the chain repo wiki for an updated mining guide including our GPU implementation (which is more efficient than the CPU miner).

The simple UI miner app is still being upgraded, but if you're a more technical miner you should be able to start mining the new testnet now. Let us know if you run into any trouble.

This testnet is the rehearsal. The hashrate will climb fast once the chain is live, and you want your setup dialed for day one.

Here's what else we shipped this week:

### Core Tech & ZK

- Launched a new testnet.
- Removed the sudo pallet in preparation for mainnet.
- Fixed network sync.
- Fixed single state mem pool.
- Updated Poseidon to the latest version.

### Network & Infra

- Updated node documentation with minimum network requirements.
- Updated the Subsquid indexer to the latest chain version, fixed reversible and cancelled event extrinsic types, and released Docker image v0.6.0.
- Added rate limiting to the Task Master risk checker endpoint and updated the CORS policy.

### Web & Mobile App Updates

- Restored high-security flow in the mobile app and shipped UX fixes.
- Redesigned the wallet homepage, updated buttons, icons, and transaction list components, and integrated the new GraphQL query for the latest Subsquid indexer.
- Fixed mobile wallet page animation, homepage hero banner bug, and navbar darken-on-scroll on non-homepage routes.

### Content & Partnerships

- Chris on [@mobymedia](https://x.com/mobymedia) podcast: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- Published Post-Quantum zero-knowledge proofs podcast with [@ethan_t_c_](https://x.com/ethan_t_c_) and [@YuviLightman](https://x.com/YuviLightman): [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- Attended GitEx in Singapore.
- Hosted a full-house session with Dr. [@zina_cinker](https://x.com/zina_cinker) at Network School: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris joining [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 live Thursday April 16, 2pm UTC / 10pm Singapore: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- Continued distributing the State of Quantum report and implementing comments.

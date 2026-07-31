---
title: "Quantus Weekly: Wallet सरल होना चाहिए"
description: "Wallet v1.2.0 release, Treasury with multisig, Heisenberg testnet updates और performance improvements—इस सप्ताह की shipping highlights।"
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: Wallet सरल होना चाहिए"
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

हर major crypto wallet garbage features add कर रहा है जो मुझे नहीं चाहिए।

मुझे social media app नहीं चाहिए जो money भी hold करे।

Notice किया है कि highly opinionated, easy to use, self custody, "official" Bitcoin wallet क्यों नहीं?

Ethereum और Solana पर same।

Foundations chain build करते हैं और interface third parties पर छोड़ देते हैं। Third parties को revenue चाहिए। Revenue means features। Features means noise।

अब wallet में swap aggregator, social feed, trending tokens, NFT galleries, और coins के बारे में push notifications हैं जिनके बारे में कभी सुना नहीं।

हमने Quantus build किया और wallet build किया।

Same team, same product। App Store पर इस सप्ताह ship किया—no ads, no token feeds, no social features, no claimable usernames।

Open करो, balance दिखता है, send या receive।

Interface scratch से redesign किया—highly opinionated defaults जो cognitive load जितना हो सके कम करें।

Wallet transaction history load time dramatically reduce किया। App open करने के बाद balance और previous transactions load होने का wait नहीं।

Quantum-secure private money use करना simple होना चाहिए, ideally boring।

Excitement pre-quantum chains के लिए Qday पर छोड़ देंगे।

Everything open source। कोई अपना wallet build कर सकता है। लेकिन हमेशा official wallet होगा जो just works।

### GitHub Activity (4 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Core Tech & ZK

- Treasury with multisig merge और new Heisenberg testnet release में include।
- सभी pending changes merge और release। New Heisenberg genesis create, release और deploy।
- Treasury management से related legacy governance rules remove।
- CLI extend किया new Multisig और Treasury commands के साथ। High-security account details अब wallet view में visible।
- Aggregated wormhole transactions की privacy बढ़ाने के लिए proof shuffling और duplicate exit accounts zero out add किया।
- Proof aggregation speed up करने के लिए wormhole को circuit builder और prover में split किया।
- ZK circuits release workflow update और new artifacts publish।
- Revive pallet dependency issue resolve।

### Network & Infra

- Notification system (Senoti): best network selection के लिए block watcher में failover add।
- Multiple addresses per device handle करने के लिए Senoti update।
- Subsquid server के लिए RPC failover add।
- Monitoring alerts update और appropriate channels redirect।

### Web & Mobile App Updates

- Wallet v1.2.0 iOS App Store पर ship।
- Average transaction history load time 1 minute से कम करके 5 seconds under।
- Android splash screen fix और other bugfixes के साथ Wallet builds 75, 76, 77 ship।
- Wallet builds के लिए release artifact workflow add।
- Toaster component update और legacy version clean up।
- Existing addresses register, reset पर FCM device unregistration, new wallet address notification removal के लिए remote notification support add।
- Check-phrases के लिए happy words list add।
- Privacy score calculation और wormhole transactions support के साथ Subsquid extrinsics-focused refactor।
- Updated Subsquid architecture reflect करने के लिए explorer refactor।

### Content & Partnerships

- Nik Heger के साथ podcast, "Building A New Sound Money System"

### Industry Updates

- Quantum Canary analysis: क्या [Stripe's Tempo blockchain quantum secure होगा।](https://x.com/QuantumCanary_/status/2024797352616509754)

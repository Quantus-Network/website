---
title: "Quantus Weekly: Fat Signatures, तेज़ Wormholes"
description: "ML-DSA signatures Bitcoin से 70x बड़े — इस सप्ताह quantum-safe signing scale की, wormhole proofs 2x तेज़ हुए, और ZK aggregation में आगे बढ़े।"
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Fat Signatures, तेज़ Wormholes"
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

एक Bitcoin signature 65 bytes का होता है।

एक ML-DSA-87 signature 4,627 bytes का है।

यानी 70x बड़ा।

हर transaction में multiply करें — scaling problem।

पर कोई बात नहीं, Bitcoin block sizes बढ़ाना इतना controversial नहीं होगा।

(यह joke था)

Quantum-safe signatures इतने fat हैं कि अगर आज implement किए जाएँ तो Bitcoin throughput बिना scaling techniques के 1 TPS से काफी नीचे गिर जाएगा।

[@QuantusNetwork](https://x.com/QuantusNetwork) बिना scaling techniques के प्रति block लगभग 685 transactions achieve करेगा।

लेकिन हम ZK से इन बड़े transactions को छोटे proofs में aggregate करते हैं जो onchain जाते हैं।

यह users को privacy protection भी देता है — sender और receiver के बीच link टूट जाता है [(पिछले update में covered)](https://x.com/YuviLightman/status/2030162754544525495)।

57 TPS encrypted 3,500 TPS बन जाता है।

Blockchain trilemma अब quantum security, scalability, और privacy है।

हम इसे ZK से solve कर रहे हैं।

इस सप्ताह हमने proving time आधा कर दिया।

Wormhole aggregation proofs अब 2x तेज़ settle होते हैं।

Signatures अभी भी enormous हैं। Chain को farak नहीं पड़ता।

इस सप्ताह हमने और क्या build किया:

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Wormhole aggregation proofs अब 2x तेज़ — serialized prover use करते हैं, dynamically rebuild नहीं।
- qp-zk-circuits के circuits builder/prover refactor split पूरा।
- Aggregator API redesign — dynamic prover/circuit builder से orchestration और artifact management की ओर।
- quantus-cli को नए aggregator API के साथ update किया।
- Wormhole verifier blobs fix किए जिनमें chain में qp-zk-circuits से cryptographic/reproducible-build tie नहीं था।
- सभी substrate pallets पर security reviews पूरी, 8 PRs fixes merge।
- Substrate pallets का formal audit शुरू।
- Multisig और Treasury pallet improvements।

### Network & Infra:

- नए testnet profile के साथ दो नए Planck testnet nodes deploy।
- Substrate state pruning investigation और fixes।
- Testnet faucet [@QuantusNetwork](https://x.com/QuantusNetwork) Twitter account से connect।
- Subsquid: improved query performance के लिए per-user event mapping।
- Subsquid: historical accuracy के लिए reversible transfers aggregation update।
- Bridging infrastructure: Rosetta API implementation, integration tests, और MPC signing updates।

### Web & Mobile App Updates:

- Mobile wallet build 82: code cleanup और UI standardization (sheets, scaffold, icon buttons, accounts refactor)।
- Latest Subsquid data model support के लिए mobile wallet chain history service और transaction history UI update।
- Website: page indexing optimize, weekly updates blog posts के रूप में add, blog search में titles include fix।
- Explorer: reversible transaction views को separate event types में overhaul (scheduled, executed, cancelled)।
- Quantum Canary website: article tables mobile-friendly।

### Content & Partnerships:

- Physicist और entrepreneur Steve Hsu के साथ podcast — quantum computing, AI, और quantum threat timeline।
- दो marketing hires add।
- Network School में crypto onboarding और privacy/OPSEC security events host।

### Industry Updates:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

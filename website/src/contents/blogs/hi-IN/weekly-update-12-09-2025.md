---
title: "Quantus Weekly: तेज़ Poseidon2, हल्की Chain"
description: "Poseidon2 gates ऑप्टिमाइज़ेशन के बाद 8.3x तेज़, chain refactor ने ~9,000 लाइनें हटाईं और टीम ने Binance Blockchain Week से नोट्स साझा किए।"

pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: तेज़ Poseidon2, हल्की Chain"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

शायद आपने [@EliBenSasson और Scott Aaronson के साथ यह interview](https://x.com/Starknet/status/1995865652377395421) देखा

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

interview में Scott ने कहा "we decided to base so much of the world's cybersecurity infrastructure on cryptographic codes like RSA, diffie-hellman, and elliptic curve cryptography which just so happen to have these mathematical properties that a quantum computer is able to exploit."

यह निगलना मुश्किल है।

खासकर Bitcoin के लिए, जिसमें design के अनुसार बड़े protocol upgrades plan और execute करने की ability नहीं है।

इसका मतलब Bitcoin community के लिए least resistance का path यह रहा है कि problem exist ही नहीं करती, इसे deny करें।

![Charles Edwards on Quantum Threat](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

लेकिन error correction, qubit scaling, और fidelity में recent breakthroughs के साथ, quantum computing progress को deny करना Bitcoin और इसलिए human property rights के लिए existential risk है।

इसलिए हमें quantum future के fog का सामना करना होगा, और accept करना होगा कि Q day आने पर कई blockchains act करने में fail हो जाएँगी।

हमारा कर्तव्य act करना है।

इस सप्ताह quantum secure Bitcoin बनाने के लिए हमने यह किया:

साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 8 merged pull requests शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## कोर टेक और ZK

- poseidon2 gate optimize किया। circuit trace rows per permutation 31 से 1 तक घटाए। इससे gate 8.3x तेज़ हुआ और बड़े wormhole prover के लिए 4.5x total speedup मिला।
- wormhole proofs record करने के लिए transaction extensions का उपयोग करने हेतु chain architecture refactor किया। इससे balances pallet के custom fork की ज़रूरत खत्म हुई, लगभग 9,000 lines of code हटीं।
- wormhole transfers में Asset ID support जोड़ा
- qp-rusty-crystals audit में उठाए issues resolve किए

## नेटवर्क और इंफ्रा

- GPU miner implementation improve किया
- peer broadcasting fix सहित sc-network अपडेट और merge किया, smoother node synchronization के लिए।
- Schrodinger (पुराना testnet) network history archive की।
- subsquid architecture debug और improve की। explorer और wallet तक data uptime बेहतर करने के लिए नया monitor script और restart protocols जोड़े।

## वेब और मोबाइल ऐप अपडेट

- keystone integration improve किया, PIN cache wiping और PIN safety के साथ QR code जोड़ा।
- mobile app से X OAuth connect करने के लिए rusx repo publish किया और tweet querying और searching support के लिए backend upgrade किया।
- integer handling issues और false-positive failure notifications सहित विभिन्न bugs fix करते हुए update रिलीज़

## कंटेंट और पार्टनरशिप

- हम Binance Blockchain Week और Solana Breakpoint के लिए Dubai में हैं, advisors, KOLs से मिल रहे हैं, और users onboard कर रहे हैं।
- गुरुवार scheduled हमारे weekly X Space पर नज़र रखें
- Quantus team के साथ पॉडकास्ट: https://www.youtube.com/watch?v=konWKWrl5hs

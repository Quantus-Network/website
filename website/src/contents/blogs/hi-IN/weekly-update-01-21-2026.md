---
title: "Quantus Weekly: Native Assets और Quantum Risk"
description: "Bitcoin पर quantum risk का असर, native-only assets का फैसला, Dilithium threshold work और ZK aggregation पर इस सप्ताह की प्रगति।"
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Native Assets और Quantum Risk"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

अगर आप सोच रहे हैं कि Gold क्यों rip कर रहा है और Bitcoin struggle कर रहा है, तो इसे पढ़ें। इसमें कुछ भी mysterious नहीं है।

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Capital allocators Bitcoin को उस probability के अनुपात में discount कर रहे हैं कि Bitcoin post-quantum cryptography में upgrade होने से पहले cryptographically relevant quantum computer (CRQC) ship हो जाए। चाहे Bitcoin community इसे accept करे या न करे, market पहले ही कर चुका है।

कुछ chains समय पर upgrade हो जाएंगी। Bitcoin शायद नहीं होगा। उदाहरण के लिए, हाल ही में Vitalik ने PQC upgrade का urge किया।

हमारे पास यह precisely जानने का कोई तरीका नहीं है कि deadline कब है, या कौन सी chains समय पर upgrade होंगी। जिसका मतलब है कि हमें @QuantusNetwork पर external assets support करने के बारे में tough design decisions लेने पड़े।

अगर wrapped asset की origin chain compromise हो जाती है, तो wrapped asset holders भी compromise हो जाते हैं। इसलिए हमने decide किया कि @QuantusNetwork किसी भी wrapped assets support नहीं कर सकता।

हम infrastructure बना रहे हैं जो anywhere से permissionless bridging allow करे—अब तक बने सबसे resilient quantum-secure money में। एक बार जब आप हमारी chain पर native QUAN hold करते हैं, तो आप ML-DSA-87 (NIST का highest security level) से protected होते हैं, ZK aggregation के through face-melting throughput के साथ।

मैं यहाँ कुछ announce नहीं करना चाहता, लेकिन आप हमेशा हमारा GitHub खोलकर check कर सकते हैं 👀

यहाँ और क्या है जो हमने इस सप्ताह ship किया, ताकि Q-day आने पर हम ready रहें:

### GitHub Activity (7 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK

- Dilithium threshold signatures को दूसरे protocol के MPC system में integrate किया।
- Parity multisig pallet use करके custom treasury management के लिए POC build किया।
- Tests और benchmarks के साथ custom multisig pallet का first iteration implement किया।
- ZK-aggregator pallet पर ZK-enabled circuit binaries को block करने वाले bug patch किया।
- Quantized output amounts support करने के लिए onchain ZK-aggregator verifier update किया।
- New field element serializers के लिए end-to-end ZK-aggregator example script fix किया।

### Web & Mobile App Updates

- High-security accounts के लिए fixed delay और intercept features support करने वाला mobile UX build किया (अभी भी testing)।
- Improved error handling के साथ CLI में block scanner और high-security features add किए।
- High-security handling के लिए Subsquid (indexer) updates और latest Poseidon के लिए hasher fix।
- Tag support के साथ Quantus website पर blog section ship किया और weekly updates का backlog upload करना शुरू किया।
- Whitepaper v3.1 में update किया, tokenomic chart distribution values fix किए।

### Content & Partnerships

- Podcasts अब Apple Podcasts पर upload हो रहे हैं।
- 2 token launchpads के साथ conversation शुरू हुई।
- Quantum Canary blockchain comparison page improvements।
- Biohacking और self optimization पर AJ के साथ podcast.

### Industry Updates

- Quantum Canary article discuss कर रहा है कि CRQCs Satoshi's Coins को कैसे threaten करते हैं: https://x.com/QuantumCanary_/status/2011706634868047982

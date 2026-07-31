---
title: "Quantus Weekly: Dilithium Threshold हस्ताक्षर"
description: "इस सप्ताह हमने distributed coordination के लिए Dilithium threshold signatures शिप किए, साथ में ZK circuits, mobile wallet updates और community content।"
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Dilithium Threshold हस्ताक्षर"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

शक्ति और अधिकार कई पक्षों के बीच विभाजित। वितरित समन्वय।

लेकिन post-quantum signatures Bitcoin signatures की तुलना में 20x - 80x बड़े होते हैं। एक traditional multisig solution का अपना स्थान है, लेकिन यह ऐसा overhead जोड़ता है जो कुछ use cases के लिए अस्वीकार्य है।

इस सप्ताह हमने threshold Dilithium signatures शिप किए। यह एक distributed group को transactions पर sign करने और on-chain एक single signature generate करने में सक्षम बनाता है। मूल रूप से, private key को shard करना।

यह custodians, cross-network applications और chain के secure automated usage के लिए ज़रूरी है।

4 merged pull requests सहित साप्ताहिक GitHub activity report: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core Tech & ZK

- Threshold signatures implement किए, जिससे secure distributed signing enable हुआ।
- ZK circuit overhead कम किया।
- Wormhole example binary में proof aggregation support जोड़ा, chain और CLI में ongoing integration।
- सभी data types (generic storage hashing) को universally handle करने के लिए हमारे ZK circuits और Poseidon hashing algorithm को upgrade किया, अब chain और CLI में integrated।
- ZK circuits के भीतर asset IDs पर proof aggregation के लिए support जोड़ा।
- Faster transaction processing के लिए CLI optimize किया और high-security recovery scripts जोड़ीं।

## Web & Mobile App Updates

- CPU और GPU usage के लिए granular sliders के साथ UI Mining App का नया version release किया, साथ ही hashrate reporting fixes।
- Mobile app में full hardware wallet support finalize और merge किया।
- Single mobile wallet instance के भीतर multiple accounts manage करने के लिए support जोड़ा।
- High-security screens implement कीं और "Guardian" recovery flows पर development शुरू हुआ।
- "Send" screen UX refine किया, error handling improve की, authentication timer bugs fix किए, और app icons unify किए।
- Daily database backups configure किए, system services fix किए, और Task Master code (wallet app event tracking) clean up किया।

## Content & Partnerships

- Latest protocol details के साथ whitepaper update किया और GitHub versioning system establish किया: https://github.com/Quantus-Network/whitepaper
- Lore ने हमारी origin story "From the Ground Up" drop की: https://x.com/JoeMattia/status/2010619972398297164
- Science में trust restore करने पर Sina (@hubsmoke) के साथ podcast: https://x.com/QuantusNetwork/status/2009929397579723213

## Industry Updates

- Quantum Canary ने Quantum-Safe Crypto Wallets पर guide publish की: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

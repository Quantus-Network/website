---
title: "Quantus Weekly: GPU Mining और ZK Refactor"
description: "GPU mining में ~9x प्रदर्शन बढ़ोतरी, ZK-aggregation circuit refactor और UAE में रणनीतिक मीटिंग्स — इस सप्ताह की Quantus अपडेट।"
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: GPU Mining Breakthrough और ZK Refactor"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

इस सप्ताह टीम ने mining performance में breakthrough हासिल किया। हमारा नया GPU miner अब CPU version से ~9x तेज़ चल रहा है।

हमने अपने ZK-aggregation circuit का refactor भी पूरा किया, जिससे हज़ारों lines of code delete कर सके।

UAE में रहते हुए, टीम ने advisors और investors से मुलाकात की। इन meetings ने हमारी product vision को solidify किया और tokenomics और token launch strategy clarify की। token launch support के लिए meaningful BD progress भी हुआ।

साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 10 merged pull requests शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## कोर टेक और ZK

- CLI, circuits, और Poseidon logic अपडेट सहित ZK-aggregator transfer proofs को dedicated pallet में migrate किया। इस refactor ने हज़ारों lines of code delete करने में सक्षम बनाया।
- Poseidon storage hasher को generic बनाने का solution design किया।
- pending changes merge किए और reversible transfers से जुड़े code quality issues resolve किए।

## नेटवर्क और इंफ्रा

- GPU miner अब CPU miner से ~9x तेज़।
- CLI v0.3.1 रिलीज़, finalization flag unified और address formatting improve।
- runtime upgrade execute किया और chain specification अपडेट की।
- नया BootNode deploy किया।
- सभी servers पर security checks और updates complete।
- Subsquid indexing service के लिए containerized health checks deploy किए।

## वेब और मोबाइल ऐप अपडेट

- hardware wallet integration advance किया। अब Keystone में QR codes parse कर रहे हैं और dummy messages sign कर रहे हैं।
- mobile app में multi-wallet (mnemonic) hardware wallet functionality implement करना शुरू किया।
- website forms अपडेट किए और email provider के साथ integrate किए।
- rate-limiting issues रोकने के लिए rusx को batch queries के लिए optimize किया।

## कंटेंट और पार्टनरशिप

- Solana Breakpoint attend किया और हमारी "Quantum Secure Bitcoin" positioning/memes test की।
- token launch, tokenomics, और Quantus GTM strategy discuss करने के लिए UAE में advisors से मिले।
- Tom Howard के साथ episode live: https://x.com/QuantusNetwork/status/2000585749914427684

## उद्योग अपडेट

- Quantum Canary ने comprehensive "Quantum Ready" blockchain comparison page रिलीज़ की: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

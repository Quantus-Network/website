---
title: "Quantus Weekly: GPU Mining और Dirac Stress Test"
description: "Quantus Miner v2.0.2 GPU सपोर्ट के साथ रिलीज़, Dirac नेटवर्क stress testing और chain architecture अपडेट — इस सप्ताह की Quantus अपडेट।"
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPU Mining और Dirac Stress Testing"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

इस सप्ताह, हमने GPU support के साथ Quantus Miner v2.0.2 officially रिलीज़ किया और Dirac network का stress test सफलतापूर्वक किया।

हमने chain architecture को 21M coin supply cap support करने के लिए अपडेट किया और legacy vesting और treasury pallets हटाकर codebase clean up किया।

साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 6 merged pull requests शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## कोर टेक और ZK

- नए 21M coin supply cap को reflect करने के लिए chain specification अपडेट की।
- vesting और treasury pallets हटाकर core chain architecture simplify की।
- runtime में panic रोकने के लिए generic Poseidon storage hashing support complete किया।
- ZK circuits और CLI में Asset ID support जोड़ा।

## नेटवर्क और इंफ्रा

- chain overload होने पर block times पर impact observe करने के लिए Dirac stress test किया।
- Quantus Miner v2.0.2 publish किया, जो अब officially GPU mining support करता है: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## वेब और मोबाइल ऐप अपडेट

- mobile पर hardware wallet signing flow finalize किया, QR code signature transmission, multiple-wallet support, और unlinking functionality सहित।
- X पर community engagement incentivize करने के लिए telegram, website, और Task Master के ज़रिए internal tracking के साथ "Raid Quests" implement किए। Wallet implementation progress में है।
- backend CORS errors resolve किए और social interactions के लिए data tracking improve की।
- miner rewards reporting और network switching affect करने वाले block explorer bugs fix किए।

## कंटेंट और पार्टनरशिप

- Peer Summit में मिले दो strategic partners से investment secure की।
- launch strategy पर meetings conclude कीं और नई tokenomics और GTM reflect करते updated whitepaper draft किया।
- veteran software architect और systems engineer Cezary के साथ episode: https://www.youtube.com/watch?v=2TDMR7bECR8

## उद्योग अपडेट

- Quantum Canary का Bitcoin पर state-level attack के risk का विश्लेषण: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

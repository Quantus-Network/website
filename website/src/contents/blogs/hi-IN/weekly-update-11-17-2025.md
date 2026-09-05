---
published: true
title: "Quantus Weekly: PoW Audit और Dirac Launch"
description: "Equilibrium ने PoW और Poseidon ऑडिट पूरा किया, block header के ZK proofs आए और Dirac testnet इस सप्ताह Quantus पर लॉन्च हुआ।"

pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW Audit और Dirac Launch"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

इस सप्ताह टीम ने हमारे proof of work algorithm और Poseidon hash function के Equilibrium audit को पूरा किया और दोनों app stores पर updated apps ship किए।

## विकास समाचार

- साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 147 total events शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- सभी issues resolve होने के साथ हमारे PoW algorithm और Poseidon hash function के audit की समीक्षा यहाँ करें: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## कोर टेक

- dirac testnet के साथ काम करने के लिए command-line interface (CLI) अपडेट किया
- block header provenance के लिए ZK proof generation — एक major milestone क्योंकि यह साबित करता है कि हमारी circuit logic static dummy proofs के अलावा dynamic data के साथ काम करती है।
- node command line के issues resolve किए।

## नेटवर्क और इंफ्रा

- chain के लिए multi-arch docker workflow fix किया।
- सभी nodes अपडेट करके, पुराने testnets हटाकर, और नए dashboards और alerts rollout करके Dirac release finalize किया। grafana.quantus.cat और telemetry.quantus.cat देखें
- Faucet को नई libraries, नए server के साथ अपडेट किया, metrics जोड़े, referral leaderboard के लिए नया /king command।
- Grafana के लिए PostgreSQL backend के साथ network monitoring enhance किया, विभिन्न fixes और optimizations जोड़े।
- नए server पर IaC (infrastructure as code) setup किया, सभी Heisenberg और Dirac nodes connect किए।
- Dirac testnet support और Prometheus metrics के लिए Subsquid indexing service अपडेट किया।

## वेब और मोबाइल ऐप अपडेट

- App Stores पर Mobile Wallet version 1.1.1 रिलीज़। Apple अधिक info माँग रहा है, लेकिन यह जल्द resolve होना चाहिए।
- Mobile Wallet को Dirac testnet से connect करने के लिए अपडेट किया।
- scheduled notifications, account names अपडेट करने, और biometric authentication सहित कई Mobile Wallet bugs fix किए।
- Miner App को नई Dirac chain का उपयोग करने और stats reporting fix करने के लिए अपडेट किया।
- Miner App में नया settings screen और in-app binary update feature जोड़ा।
- Task Master application को Dirac testnet पर migrate किया और Prometheus metrics जोड़े।
- upcoming referral feature के leaderboard check करने के लिए Faucet bot में नया command जोड़ा।

## कंटेंट और पार्टनरशिप

- हमारे पास कई fundraising contracts बाहर हैं और $250k verbally committed।
- Quantum Canary और Quantus दोनों के लिए SEO handle करने हेतु The Quantum Insider को hire किया।
- social media growth track करने के लिए नया n8n flow बनाया (हमने अभी 500 podcast subscribers पार किए)।
- DeFi builder Jangle के साथ पॉडकास्ट: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## उद्योग अपडेट

- Quantum Canary ने quantum cryptographer Dr. Or Sattath के साथ unclonable cryptography और quantum money पर interview publish की, Bitcoin की speed, security, और privacy upgrade करने की potential explore करते हुए: https://www.quantumcanary.org/insights/or-sattath-interview
- 448 Qubit Neutral-Atom computer ने fault tolerance हासिल की https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- हम गुरुवार HK time 11a पर X पर Quantum FUD और Quantus discuss करेंगे https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

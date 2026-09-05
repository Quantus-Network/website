---
published: true
title: "Quantus Weekly: Dirac Testnet और Lattice Audit"
description: "Dirac testnet अपडेट PoW और lattice crypto के साथ शिप हुआ, qp-rusty-crystals बाहरी ऑडिट में है। माइनर्स को अपग्रेड करना चाहिए; वॉलेट और libp2p में इंटिग्रेट है।"

pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Dirac Testnet और Lattice Audit"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

इस सप्ताह टीम ने Dirac testnet रिलीज़ किया, proof of work algorithm और lattice cryptography library qp-rusty-crystals में chain-wide अपडेट को finalize किया। यह core library अब external audit में है और constant-time signatures शामिल हैं। अपडेट अब mobile wallet और libp2p में integrate है।

**यदि आप माइनर हैं तो आपको नए DIRAC TESTNET पर अपडेट करना चाहिए**

## विकास समाचार

- साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 12 pull requests और 3 merged शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## कोर टेक

- constant time key generation और signatures के साथ qp-rusty-crystals का full reference implementation रिलीज़ और merge किया।
- rusty crystals के सभी KAT tests resolve किए, constant time बनाया और outstanding release script issues fix किए।
- qp-rusty-crystals का audit शुरू किया।
- block header verification circuit का implementation पूरा किया।
- block header hasher को नए version पर अपडेट किया जो circuit padding हटाता है।
- block headers में missing digest logs से जुड़े bug की जाँच और समाधान किया।
- wormhole example binary में caching feature जोड़ा ताकि latest proof save हो और debugging आसान हो।
- GHOSTDAG consensus paper का implementation शुरू किया।

## नेटवर्क और इंफ्रा

- सभी servers पर Dirac 0.4.0 रिलीज़।
- external miner build 1.0.0 रिलीज़।
- rusty crystals update के लिए chain अपडेट।
- नए Prometheus और Grafana dashboards, alerts के लिए working email notifications के साथ configure।
- नई updated telemetry service।
- Fedora machines के लिए reference setup बनाया।
- नए Dirac testnet के लिए 2 नए secured VPS servers deploy किए।
- Quantus.cat domain secure किया और सभी machines के लिए Cloudflare tunnels configure किए।
- zero-downtime updates के लिए blue-green deployments support करने हेतु Subsquid deployment process अपग्रेड किया।
- GitHub पर Docker images auto-generate और publish करने के workflows बनाए।
- http://quantu.se/ पर indexing issues fix किए और metadata को सही node URL पर point करने के लिए अपडेट किया।

## वेब और मोबाइल ऐप अपडेट

- mobile app notification feature पूरा किया।
- deep linking performance और reliability बेहतर करने के लिए route intent handling refactor किया।
- miner dashboard layout अब fully responsive है।
- Quantus Explorer bug fix किया जहाँ search function अभी भी पुराने GraphQL endpoint का उपयोग कर रहा था।
- बेहतर performance के लिए Quantus Explorer API client को modern hooks का उपयोग करने के लिए refactor किया।

## कंटेंट और पार्टनरशिप

- 9-time bodybuilding champion, entrepreneur, और creator Remus Boroiu के साथ पॉडकास्ट.
- Chainwire के ज़रिए press release।

## Quantum Canary

- quantum stocks का विश्लेषण: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- global policy shape करने और PQC migration timeline तेज़ करने में RAND Corporation की influential भूमिका पर deep dive: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton researchers ने 45 tantalum-on-sapphire qubits के लिए coherence times तीन गुना बढ़ाए: https://www.nature.com/articles/s41586-025-09687-4

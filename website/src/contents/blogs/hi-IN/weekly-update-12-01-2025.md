---
published: true
title: "Quantus Weekly: Lattice Audit और Keystone"
description: "Rusty Crystals lattice ऑडिट findings बंद हुईं, Polkadot SDK नेटवर्किंग अपडेट हुई और Quantus पते Keystone open-source hardware firmware पर आए।"

pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Lattice Audit और Keystone Wallet"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

पिछले सप्ताह, टीम ने हमारी lattice crypto library (rusty-crystals) के audit में उठाए गए सभी issues address किए और latest Polkadot SDK के साथ align करने के लिए networking updates ship किए। हमने open-source Keystone hardware wallet firmware पर Quantus address support implement किया और market intelligence platform "The Quantum Insider" पर अपनी profile list करवाई।

साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 17 merged pull requests शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## कोर टेक

- core lattice cryptography library (qp-rusty-crystals) के audit में सभी findings resolve किए।
- upcoming audit के लिए ZK-Aggregation proof preparation (circuits, benchmarks, और QIP documentation) पूरा किया।
- proving speed बढ़ाने के लिए plonky2 poseidon2 gate और zk-trie में optimizations पाए।
- qp-header rollback किया और latest Polkadot SDK standards के साथ align करने के लिए sc-network अपडेट किया।

## नेटवर्क और इंफ्रा

- Windows के लिए Desktop UI Miner रिलीज़, Linux और MacOS के bug fixes: https://github.com/Quantus-Network/quantus-apps/releases/latest
- malicious peers द्वारा network overload से बचने के लिए peer broadcasting से जुड़ी potential P2P security vulnerability patch की।
- open-source Keystone hardware wallet firmware पर Quantus address support implement किया (वर्तमान में simulator में)।

## वेब और मोबाइल ऐप अपडेट

- polling, transaction flows, और notifications के issues resolve करते हुए App Stores पर Mobile Wallet v1.1.2 रिलीज़।
- X API (rusx) के लिए Rust SDK build किया और user quests के लिए X और ETH accounts associate करने के endpoints जोड़े।

## कंटेंट और पार्टनरशिप

- The Quantum Insider पर listing secure की, quantum analysts तक backlinks और visibility बेहतर।
- Apple, Spotify, और RSS पर पॉडकास्ट launch: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- email subscribers को inaugural newsletter भेजा।
- इस गुरुवार community X Space scheduled: https://x.com/i/spaces/1mnGeNXoZOZJX
- ML Researcher Brian Chau के साथ पॉडकास्ट: https://www.youtube.com/watch?v=m_FPbzAcXEk

## उद्योग अपडेट

- Quantum Canary ने "Harvest Now, Crack Later" threats mitigate करने पर strategic guide publish की, newly finalized NIST post-quantum standards का उपयोग कर pragmatic migration path outline करते हुए: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive

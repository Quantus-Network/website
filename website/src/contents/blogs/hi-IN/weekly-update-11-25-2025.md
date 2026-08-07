---
title: "Quantus Weekly: ZK Aggregation और Miner App"
description: "Chain और CLI के लिए पहली ZK transaction aggregation आई, mock टेस्ट की जगह वास्तविक transfer verification; Miner App v0.1.0 रिलीज़ और GPU mining जारी।"

pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZK Aggregation और Miner App"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

इस सप्ताह टीम ने chain और CLI दोनों के लिए ZK transaction aggregation का पहला चरण पूरा किया, mock tests को actual transfer verification से replace किया। हमने Miner App v0.1.0 binary भी रिलीज़ किया, अब उपलब्ध है।

## विकास समाचार

- साप्ताहिक Github गतिविधि रिपोर्ट, जिसमें 150+ total events शामिल हैं: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## कोर टेक

- chain पर नया qp-header primitive बनाया जो हमारे wormhole circuits के साथ field-aligned है, Substrate के generic header को replace करता है।
- block header verification और adjacent blocks के बीच connections support करने के लिए aggregation circuit अपडेट किया।
- mining algorithm का GPU implementation लगभग 80% complete है।
- rusty-crystals audit का पहला phase पूरा, issues का अधिकांश हिस्सा address हो चुका।
- runtime में panics के लिए internal audit (हाल के Cloudflare unwrap bug से inspired)।
- standard Substrate pallet के लिए CLI में vesting commands जोड़े।

## नेटवर्क और इंफ्रा

- Subsquid deployment को केवल एक script तक streamline किया।
- Quantus-Miner के लिए Docker image और release process बनाया।
- Miner-stack deploy किया (Docker Compose + monitoring stack + documentation)।
- Explorer और Task Master के लिए monitoring dashboards और alerts जोड़े।

## वेब और मोबाइल ऐप अपडेट

- in-app referral system और user-facing event tracking metrics (Quantus Quests) launch किए।
- सभी platforms के लिए miner app binary रिलीज़: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 — mac को ही thoroughly test किया गया है।
- mobile wallet में migration issues और विभिन्न अन्य bug reports fix किए।
- send screen widget को testable बनाने के लिए refactor किया और unit/widget tests जोड़े।
- website पर Quests page को search functionality के साथ अपडेट किया।
- search support और results में rank के लिए Task Master leaderboard endpoint अपडेट किया।

## कंटेंट और पार्टनरशिप

- X space के ज़रिए पहला community AMA: https://x.com/QuantusNetwork/status/1991341042390692210
- Ârc के Founder James के साथ पॉडकास्ट.
- दो नए advisors / KOLs acquire किए।

## उद्योग अपडेट

- Scott Anderson ने fault-tolerant quantum computer running Shor's algorithm के timelines को "before the next US presidential election" पर अपडेट किया: https://scottaaronson.blog/?p=9325

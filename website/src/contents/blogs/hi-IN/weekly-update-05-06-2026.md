---
title: "Quantus Weekly: असली Killer App पैसा है"
description: "इस सप्ताह Dilithium DKG Mithril के लिए rewrite, threshold signature fixes, Wormhole SDK helpers expose, और wallet v1.4.0 TestFlight पर रिलीज़।"

pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: असली Killer App पैसा है"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

मैं एक बात पर विश्वास करता हूँ जिसे बाज़ार धीरे-धीरे समझ रहा है।

एक killer crypto app किसी भी दूसरे app से ज़्यादा value create और capture करेगी।

वो stablecoins, prediction markets, या defi नहीं है।

यह निश्चित रूप से web3, social networks, या pfp collections भी नहीं है।

यह पैसा है। वही विचार जिसने पूरे industry को जन्म दिया।

पहला विचार एक शुद्ध विचार होता है। Peer-to-peer electronic cash।

Secure, private, और scalable money एक multi-trillion dollar opportunity है।

इस सप्ताह, हमने updated Mithril paper के अनुसार Dilithium keys के लिए Quantus की distributed key generation rewrite की और threshold signature implementation में fixes ship किए।

अब आप Quantus key को multiple parties में shard कर सकेंगे। हमारी secure integrations के लिए यह महत्वपूर्ण है।

हमने Wormhole specification में एक audit item address किया और public Quantus CLI SDK में helpers expose किए, जिससे private transaction support external developers के लिए खुल गया। Wormhole scalable post-quantum privacy achieve करने का हमारा तरीका है।

हमने wallet v1.4.0 भी रिलीज़ किया — mobile app experience को simplify और beautify करने वाला full reskin (अभी testflight पर)।

### Github गतिविधि (16 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### कोर टेक और ZK:

- Dilithium keys के लिए distributed key generation को updated Mithril paper के अनुसार rewrite किया।
- Threshold signature implementation को तीन audit findings के खिलाफ harden किया।
- Change outputs पर audit item address करने के लिए Wormhole spec अपडेट किया।
- Public Quantus CLI SDK में Wormhole helpers expose किए और end-to-end deposit-to-mint example workflows जोड़े।
- CLI transaction lifecycle को distinct submitted, included, और finalized states, exact decimal fee parsing, stricter version compatibility checks, और overflow-aware batch transfers के साथ refactor किया।
- Difficulty adjustment algorithm improve करने के लिए benchmarking tool बनाया।
- अलग-अलग aggregation tree topologies और उनके CPU usage की investigation और benchmarking की।
- Human checkphrase में spelling errors fix किए।

### नेटवर्क और इंफ्रा:

- Stress-test suite में wormhole mode extend किया और Planck testnet पर कई बार run किया।
- Subsquid blockchain indexer को production-grade server पर move किया और account व chain statistics data जोड़ा।
- Explorer queries benchmark किए और expensive ones remove किए।
- सभी VPS operating systems अपडेट किए और infrastructure document की।
- Miner-stack अपडेट किया और Windows पर miner-app test किया।

### वेब और मोबाइल ऐप अपडेट:

- Planck के लिए GUI miner (v0.4.1) claim functionality के साथ ship किया।
- Wallet v1.4.0 (अभी TestFlight पर) full UI reskin और real exchange rates के साथ रिलीज़ किया।
- Wallet bug fixes: homepage balance styling, activity component styling, और receive screen।
- Task Master: exchange rates endpoint जोड़ा और checksum dependency अपडेट की।
- Quantus website अपडेट: docs link docs (dot) quantus (dot) com पर point किया, TPS display अपडेट किया, और weekly update post किया।

### कंटेंट और पार्टनरशिप:

- Spotify, Apple, और YouTube पर podcast branding अपडेट किया।
- Network School पर [$QTC](https://x.com/search?q=%24QUAN&src=cashtag_click) के लिए Quantus Glasses की पहली pair बेची।
- Quantus का NS fair में booth था, app users और Q-day registrants onboard किए।

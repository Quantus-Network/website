---
title: "Quantus Weekly: Q-Day Estimates, On-Spend Risk"
description: "Google और Oratomic ने ECC तोड़ने के qubit estimates घटाए, Bitcoin के 10-minute blocks पर on-spend risk, और economic freedom पर Quantus rebrand।"
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day Estimates, On-Spend Risk"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

Bitcoin की cryptography तोड़ने के लिए ज़रूरी physical qubits की संख्या 20 million से 500,000 से कम हो गई।

Google ने पिछले सप्ताह अपना नया figure publish किया। इसीलिए quantum आपके timeline पर everywhere था।

Oratomic की अलग paper इसे 19,000 पर रखती है।

एक साल में चार orders of magnitude।

Google की team ने precomputation के साथ 9-minute attack window estimate किया।

Bitcoin हर 10 minutes में block confirm करता है।

इसका मतलब attacker in-flight transaction intercept कर सकता है, sender की key crack कर सकता है, और network original confirm करने से पहले fraudulent replacement broadcast कर सकता है। इन्हें on-spend attacks कहते हैं।

जब on-spend attacks reality बनेंगे, quantum attackers से public key छुपाना भी आपके sats चोरी होने से नहीं बचाएगा।

Google ने अपनी post-quantum migration deadline 2029 पर move की। और interesting यह कि उन्होंने ECC-256 तोड़ने के resource estimates (qubit counts, timing) publish किए, लेकिन cryptographic break execute करने का detailed technical blueprint withhold किया।

Scientists ने last time इस scale पर self-censor 1945 के Manhattan Project से पहले किया था।

1945 की तरह, public roadmap या incremental progress announcements नहीं होंगे जो obvious कर दें कि हम X months दूर हैं। Q-day आने पर कोई notification नहीं होगी। State secret रहेगी।

Paper के शब्दों में, 32-bit elliptic curves तोड़ना 256-bit elliptic curves से "not substantially harder" है। जब कोई small-key break demonstrate करे, public blockchains के migration window पहले ही close हो चुका होगा।

Bitcoin ने last decade में तीन major protocol updates ship किए। Emergency post-quantum migration को कम से कम 1-3 years चाहिए। Orderly migration को 5 से ज़्यादा।

Orderly migration का window अभी close हो रहा है, शायद पहले ही close हो चुका। अब यह existential है।

इसीलिए हमने इस सप्ताह north star lock किया: Permanent Economic Freedom। तीन शब्द जो Quantus की हर चीज़ की foundation हैं। नया [quantus.com](https://quantus.com) full rebrand और उस mission पर built visual identity के साथ live हुआ।

Permanent, क्योंकि cryptography NIST Level 5 post-quantum है।

Economic, क्योंकि crypto central banks disrupt करने के लिए है।

Freedom, क्योंकि हम उन लोगों का विरोध कर रहे हैं जो आपको control करना चाहते हैं।

[@QuantusNetwork](https://x.com/QuantusNetwork) quantum-secure encrypted money है। इस सप्ताह और क्या ship हुआ।

### GitHub Activity (13 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- qp-plonky2 के लिए नई blinding strategy से ZK-enabled leaf proofs 6x तेज़, native trace size बढ़े बिना।
- CLI refactor ताकि mobile app और miner app same ZK code share करें।
- Updated ZK system पर नए testnet पर miner app चल रहा।
- Security audits में मिले issues address।
- Chain और CLI पर key generation fix।

### Network & Infra

- नए dashboards और Telegram notifications के साथ monitoring extend।
- Log stack history rotation के साथ update।
- Repositories में dependency updates और नए releases।
- Telemetry और Grafana rebrand के साथ match।
- CLI build/release fix।

### Web & Mobile App Updates

- Localization support के साथ redesigned [quantus.com](https://quantus.com) launch — Astro पर rebuild।
- Mobile app के लिए नए logos और splash screens।
- Mobile app send performance improve।
- Mobile app versions 1.2.3, 1.3.0, और 1.3.1 ship।

### Content & Partnerships

- Rebrand announcement [@QuantusNetwork](https://x.com/QuantusNetwork) पर publish।
- Whitepaper announcement [@QuantusNetwork](https://x.com/QuantusNetwork) पर publish।
- Scaling & Privacy with Post-Quantum ZK-Proofs — Ethan और Chris के साथ Quantus Youtube whiteboard session video।
- Network School के April opening में Quantus represent — NS Fair booth और Crypto Payments & Privacy workshop।

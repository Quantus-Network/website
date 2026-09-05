---
published: true
title: "Quantus Weekly: Planck Testnet Mining Rewards"
description: "Planck testnet early miners के लिए live। App migration TestFlight और stores पर, GPU mining नई chain पर — Core, infra और wallet updates।"
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Planck Testnet Mining Rewards"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Early hashrate matter करता है।

21M Bitcoin supply का आधा पहले चार सालों में emit हुआ, जब किसी ने ध्यान नहीं दिया।

कोई भी mine कर सकता था, और early block rewards 50 BTC थे।

कुछ compute cycles bloodline retire कर सकते थे।

Quantus proof of work है। Max supply 21M QTC।

Bitcoin की तरह, early miners network bootstrap करने के लिए rewards का ज़्यादा हिस्सा पाते हैं।

आज हमने Planck testnet launch किया।

Mainnet से पहले Quantus stress test कर रहे हैं।

TestFlight पर app use कर रहे हैं तो one-click migration prompt मिलेगा।

iOS या Google Play store से app download किया है तो update अगले couple of days में roll out होगा।

Quantus mine कर रहे हैं तो अभी Planck testnet mine करना शुरू कर सकते हैं।

Updated mining guide के लिए chain repo wiki देखें — GPU implementation included (CPU miner से ज़्यादा efficient)।

Simple UI miner app अभी upgrade हो रहा है, लेकिन technical miners नए testnet पर mine शुरू कर सकते हैं। Trouble हो तो बताएं।

यह testnet rehearsal है। Chain live होते ही hashrate तेज़ी से climb करेगा, और day one के लिए setup dialed होना चाहिए।

इस सप्ताह और क्या ship हुआ:

### Core Tech & ZK

- नया testnet launch।
- Mainnet preparation के लिए sudo pallet remove।
- Network sync fix।
- Single state mem pool fix।
- Poseidon latest version पर update।

### Network & Infra

- Minimum network requirements के साथ node documentation update।
- Latest chain version के लिए Subsquid indexer update, reversible और cancelled event extrinsic types fix, Docker image v0.6.0 release।
- Task Master risk checker endpoint पर rate limiting और CORS policy update।

### Web & Mobile App Updates

- Mobile app में high-security flow restore और UX fixes ship।
- Wallet homepage redesign, buttons, icons, transaction list components update, latest Subsquid indexer के लिए नया GraphQL query integrate।
- Mobile wallet page animation fix, homepage hero banner bug fix, non-homepage routes पर navbar darken-on-scroll fix।

### Content & Partnerships

- Chris [@mobymedia](https://x.com/mobymedia) podcast पर: [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- Post-Quantum zero-knowledge proofs podcast publish — [@ethan*t_c*](https://x.com/ethan_t_c_) और [@YuviLightman](https://x.com/YuviLightman) के साथ: [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- Singapore में GitEx attend।
- Network School में Dr. [@zina_cinker](https://x.com/zina_cinker) के साथ full-house session: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 live Thursday April 16, 2pm UTC / 10pm Singapore: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- State of Quantum report distribute और comments implement जारी।

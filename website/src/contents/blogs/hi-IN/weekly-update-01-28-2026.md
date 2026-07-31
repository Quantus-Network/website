---
title: "Quantus Weekly: Deniable RPCs और Security Audit"
description: "Deniable RPCs से मजबूत privacy, Rusty Crystals का Neodyme security audit पूरा, और सभी tokens के लिए private ZK addresses—इस सप्ताह।"
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Deniable RPCs और Security Audit"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

आपका wallet आपकी जासूसी कर रहा है।

99% privacy infrastructure एक LARP है। Stack में कहीं न कहीं आपकी info leak हो रही है। आपका wallet RPC नामक server से बात करता है। वह RPC server info आपके wallet को वापस भेजता है। लेकिन ऐसा करने के लिए RPC को typically आपके बारे में कुछ information जाननी पड़ती है।

उदाहरण के लिए, balance pull करने के लिए उसे transaction history चाहिए हो सकती है। शायद वह इसे आपके IP address, approximate location, usage habits आदि से associate करता है। यह सब इसलिए ताकि आप wallet में balance देख सकें।

तो जब आपके favorite onchain privacy tool की नई marketing hire Stacy X space पर flex कर रही है कि वे कितने "private and secure" हैं, suits बस RPC connection पर eavesdrop कर रहे हैं।

You're pwned.

हमने कुछ different build किया। Deniable RPCs oblivious lookup जैसा hash prefix filter use करते हैं। आप server से अपने transactions पूछ सकते हैं बिना यह बताए कि आप क्या ढूंढ रहे हैं। RPC determine नहीं कर सकता कि आप किन specific transactions request कर रहे हैं।

तो [@QuantusNetwork](https://x.com/@QuantusNetwork) onchain और wallet/RPC infrastructure में privacy preserve करता है। Stack की हर layer पर हम secret रख रहे हैं जो आप secret रखना चाहते हैं।

इस सप्ताह हमने अपनी Rusty Crystals Dilithium signature library के लिए complete [@Neodyme](https://x.com/@Neodyme) security audit की भी [announcement](https://x.com/QuantusNetwork/status/2016390125626773871) की। सभी issues resolve और hardening techniques apply। Rusty Crystals full HD wallet support के साथ Rust में best Dilithium signature library है।

ये highlights थे। यहाँ वह सब कुछ है जो हमने पिछले सप्ताह ship किया:

### GitHub Activity (19 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- [@Neodyme](https://x.com/@Neodyme) audit सभी issues resolve के साथ complete। Use के बाद memory zeroing सहित hardening techniques apply। [Post here](https://x.com/QuantusNetwork/status/2016390125626773871)।
- Prefix hashing के through Deniable RPCs ship किए। RPC nodes (oblivious lookup) से connect करते समय users के पास plausible deniability है।
- Genesis पर सभी tokens के लिए private ZK addresses enable किए।
- Continuous block-building transaction inclusion तक average time 50% से अधिक कम करती है।
- Unnecessary pallets remove किए, runtime simplify हुआ।
- Multisig pallet updated documentation के साथ feature-complete। Chain और CLI integration review await कर रहे हैं।
- ZK-aggregator circuits के लिए fuzzer revamp किया और miner fees और burned fees के लिए test coverage expand की।

### Web & Mobile App Updates

- High security pull feature के साथ Mobile App v1.1.5 (build 65) ship किया।
- High security features के लिए demo videos create किए।
- Explorer और faucet improvements: block details में error और high security events add किए, error type से search, enhanced group message filtering।
- Leaderboard, raid submission और metrics के लिए Task Master bug fixes।
- Subsquid dockerfile और docker image generation के लिए GitHub action fix किया।
- Website blog UX update किया और SEO issues fix किए।

### Content & Partnerships

- Telegram पर 1,000 members cross किए।
- Token2049 Dubai side event के लिए venue book किया।
- Team ने next sprint के लिए [@ns](https://x.com/@ns) return करने का decide किया।
- Mobile app redesign के लिए नया designer hire किया।
- Video collabs के लिए first medium-sized content creator hire किया। Creators roster build कर रहे हैं।

### Industry Updates

- [@QuantumCanary\_](https://x.com/@QuantumCanary_) article [Zcash में dive](https://x.com/QuantumCanary_/status/2016327421797294286)।
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) ने "[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)" publish की।

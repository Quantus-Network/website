---
title: "Quantus Weekly: Planck Claims, 2x Prover Speed"
description: "Planck post-quantum private transactions का पहला testnet। Miners migrate, CLI reward claims wallet में, prover throughput फिर दोगुना — साप्ताहिक अपडेट।"
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck Claims, 2x Prover Speed"
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
  ]
---

Planck Quantus के post-quantum private transactions support करने वाला हमारा पहला testnet है।

इस सप्ताह हमारे miners का आधे से ज़्यादा Planck पर migrate हुआ।

दूसरी chains quantum threat real है या नहीं पर argue कर रही हैं, हम public में solution stress-test कर रहे हैं।

अब CLI से mobile wallet में transparent address पर mining rewards claim कर सकते हैं।

Apple Silicon और Linux पर end-to-end mining validate किया।

Currently mobile UI सिर्फ transparent address type support करता है। जल्द और।

[docs.quantus.com](https://docs.quantus.com) live है — node setup, miner run, और mobile wallet में rewards claim करने का mining guide वहाँ मिलेगा।

Previous Quantus testnet versions mine या use कर रहे थे तो update पर app migration prompt देगा।

Balance reset होता है, लेकिन settings में "mining rewards" देखें तो previous testnets पर mine किए हर block का credit बना रहता है।

Planck पर हर account कितने blocks mine करता है, वो भी track कर रहे हैं।

Aggregated prover speed इस सप्ताह 2x8 split architecture से दोगुनी हुई।

और इस सप्ताह ship हुआ।

### GitHub Activity (27 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- 2x8 split proving architecture से aggregated prover performance दोगुनी (हर 8-leaf bundle पर ZK नहीं, root proof पर ZK wrapper)।
- ZK research paper preprint submit।
- qp-plonky2 पर नए split mask ZK option में privacy-leak bug discover और patch।
- Threshold Dilithium audit items address।
- CLI से mining rewards claimable।
- CLI hasher blake2-256 use करने update।
- CLI wormhole balance recovery fix ship।
- Tech Collective members ने runtime update successfully execute किया।

### Network & Infra

- Planck: नए changes merge और release; internal Planck testnet running।
- Stress tests: नई strategy implement, multiple runs execute।
- Faucet: Twitter exception handling improve, detailed monitoring metrics extend।
- Planck और faucet monitoring dashboards refresh और extend।
- Selective alerting implement।
- A1-Planck node Germany; A2-Planck node US move।
- Planck testnet Subsquid update: balance movement fix, hasher blake2b revert, mining rewards display add।
- Explorer Planck testnet update, wormhole branch properly merge।
- Apple Silicon और Linux पर MVP miner end-to-end; Linux GPU mining troubleshoot जारी।
- AI mining skill (SKILL.md) build; testing में दो minutes से कम में mining चालू।

### Web & Mobile App Updates

- [docs.quantus.com](https://docs.quantus.com) live।
- [q.day](https://q.day) landing page deploy।
- नए testnet fixes के साथ mobile wallet v1.3.2 और v1.3.3 ship।
- Wallet में mining rewards display।
- Wallet में redesigned transaction details, receive, और activity screens implement।
- Mining guide update।

### Content & Partnerships

- Q-Day registrations 100 cross। [q.day](https://q.day) पर और जानें।
- State of Quantum Report पर outside contributors के comments receive और implement।

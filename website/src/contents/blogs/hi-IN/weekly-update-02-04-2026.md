---
title: "Quantus Weekly: High-Security Accounts"
description: "Customizable time locks और guardians वाले high-security accounts, multisig integration testing, और recover-funds feature—इस सप्ताह हमारी shipping।"
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: High-Security Accounts"
featured: false
tags:
  [
    "weekly-update",
    "security",
    "guardian",
    "time-lock",
    "fraud-prevention",
    "multisig",
    "plonky2",
  ]
---

Chainalysis estimated $17B crypto 2025 में stolen हुआ। Pitch था "be your own bank." दूसरा half है "be your own security team." Clear रहें—"a Swiss bank account in your pocket, but only for cybersecurity experts" अभी भी insanely badass है। लेकिन industry ने innocent normies के साथ disservice किया जिन्होंने asymmetric cryptography क्या है यह जाने बिना net worth onchain move करके rekt हो गए।

तो जब आप "be your own bank" कहते हैं, mention करना चाहिए कि banks के fraud departments, transaction monitoring और reversal periods होते हैं। वे suspicious activity catch करते हैं, accounts freeze करते हैं, malicious transactions intercept करते हैं। Keys की custody लेते समय आप यह सब पीछे छोड़ देते हैं।

Unfortunately, "use a hardware wallet and verify exactly everything you sign every time" unhelpful advice है। अगर Bybit cold storage multisig पर yolo blind signing कर रहा है, शायद कोई enough नहीं कर रहा। Users से high enough security level operate करने की expectation unreasonable है। App use करने का outcome "losing all your money" होना untenable है।

तो क्या worse है—losing all your money या trust assumption? Trust assumption पर depend करता है, right? "Trust no one" और "trust a bank" के बीच middle ground है। किसी पर trust करें जिसे आप choose करते हैं: friend, family member, lawyer या tech savvy nephew के साथ multisig, dead man's switch।

हमने उसे [@QuantusNetwork](https://x.com/@QuantusNetwork) में build किया। Quantus पर high-security accounts में हर outgoing transaction पर customizable time lock होता है। उस window के दौरान designated guardian transaction intercept और cancel कर सकता है। Guardian आपकी ओर से sign नहीं कर सकता, लेकिन outbound transaction shut down कर सकता है।

अगर thief के पास keys हैं, necessarily everything लेने की ability नहीं है। Guardian choose करते हैं और window set करते हैं। शायद $1,000 से बड़े transaction के लिए spouse के साथ 24-hour delay। शायद safe deposit box में hardware wallet। शायद professional service real time में potential fraud monitor करती है।

इस सप्ताह हमने guardian accounts के लिए multisig integration testing शुरू की। Chain में recover funds functionality add की, ताकि intercepted transactions original owner को claw back हो सकें।

यहाँ और क्या ship किया इस सप्ताह:

### GitHub Activity (5 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Core Tech & ZK

- CLI commands के साथ high-security accounts के लिए multisig pallet testing phase में।
- High-security accounts के लिए chain में recover funds functionality add की।
- qp-plonky2 को original plonky2 repo changes के साथ up to date किया।

### Web & Mobile App Updates

- Gradients और wallet integration के साथ quests screens UI refactor किया।
- App में unused assets clean up किए।

### Content & Partnerships

- [@QuantusNetwork](https://x.com/@QuantusNetwork) और [@YuviLightman](https://x.com/@YuviLightman) accounts दोनों 1k+ followers cross किए।
- AI और productivity पर Henry Love के साथ podcast (हमारे Youtube पर)।

### Industry Updates

- Quantum Canary: ["Will Zcash Replace Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)

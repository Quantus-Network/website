---
published: true
title: "Quantus Weekly: Wormhole ट्रांज़ैक्शन"
description: "Wormhole ट्रांज़ैक्शन, माइनर्स के निजी ब्लॉक रिवॉर्ड, consensus बग फिक्स और wallet अपडेट — इस सप्ताह Quantus में क्या-क्या शिप हुआ, पूरी जानकारी यहाँ।"
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: Wormhole ट्रांज़ैक्शन"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

आप coins को एक unspendable address पर burn करते हैं।

एक ZK proof उन्हें कहीं नए स्थान पर mint कर देता है।

Trail गायब।

[@QuantusNetwork](https://x.com/@QuantusNetwork) इन्हें "wormhole" transactions कहते हैं।

आप coins को wormhole address पर भेजते हैं जो ledger पर किसी भी दूसरे account जैसा दिखता है। लेकिन यह address mathematically unspendable है। Withdraw करने के लिए, आप ZK proof से secret का ज्ञान साबित करते हैं, और chain equivalent coins को एक fresh exit address पर mint कर देता है।

कोई entry को exit से connect नहीं कर सकता।

यहीं miners के लिए बात दिलचस्प हो जाती है।

Protocol miners से अपने reward address के लिए 32-byte preimage submit करने की मांग करता है। Chain उसे hash करके address बनाता है।

Dilithium public keys बहुत बड़े हैं। वे 32 bytes में fit नहीं हो सकते। इसलिए preimage एक real public key नहीं हो सकता, और resulting address guaranteed unspendable wormhole address होता है।

Privacy protocol द्वारा enforce होती है — opt-in की जरूरत नहीं।

इस सप्ताह हमने इसे miner app में build किया। अगले testnet में, सभी block rewards default रूप से wormhole addresses से होकर जाते हैं।

इस सप्ताह हमने और क्या build किया, वो यहाँ है।

### GitHub Activity (11 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Miner app में wormhole withdrawals build किए, miners को default रूप से private block rewards मिलते हैं।
- Heaviest/longest chain consensus bug और कई अन्य chain bugs fix किए।
- Updated core libraries release की: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2।

### Network & Infra:

- Substrate dependencies stable2506 से stable2512-2 तक update की।
- CLI, sc-network fork, और NEAR fork को नई dependencies के साथ update किया।
- Updated codebase और tech collective governance के साथ Heisenberg nodes test किए।
- Senoti notification system: RabbitMQ startup glitch fix, device registrar से auth layer हटाया, failover connection handling fix।

### Web & Mobile App Updates:

- Updated graphics के साथ wallet v1.2.0 और v1.2.1 सभी app stores पर ship किए।
- App store review शुरू करने के लिए "swap" button वाला mobile app version push किया।
- Wallet और explorer में positive word list के साथ happy checkphrase ship किया।
- Android edge-to-edge display fix।
- Recovery phrase UI update, button component fixes, standardized icon buttons, और reset sheet update।
- Remote notification integration update और सभी wallets के लिए notification support expand।

### Content & Partnerships:

- Network School में privacy और quantum security पर panel discussion host की — [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman), और [Kenbak](https://x.com/k6nb4k) (Cipherscan) के साथ।

### Industry Updates:

- [Quantum Canary Article](https://x.com/QuantumCanary_/status/2027639894944956645) ZK & Quantum Computing पर

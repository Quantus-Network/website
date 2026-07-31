---
title: "Quantus Weekly: दूसरा Halving, 4x तेज़ Proofs"
description: "Prover time में दूसरी कट — दो हफ्तों में ZK proofs 4x तेज़। Poseidon काम, mining fixes, Senoti limits, whitepaper launch और Quantum Canary।"
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: दूसरा Halving, 4x तेज़ Proofs"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 एक special number है।

2+2 = 4। 2×2 = 4। 2² = 4।

यही एक number है जहाँ addition, multiplication, और exponentiation — तीनों same answer देते हैं।

दो हफ्ते पहले हमने ZK proving pipeline optimize करने में significant progress की।

पिछले सप्ताह prover time आधा किया (2 से divide)।

इस सप्ताह फिर आधा (दूसरा halving)।

14 दिनों में 4x तेज़।

Proving pipeline में हर millisecond private transactions की speed और UX के लिए matter करती है।

User send दबाता है, receiver तुरंत funds देखना चाहता है।

हमारे wormhole transactions — जो sender और receiver के बीच link तोड़ते हैं — ZK proof require करते हैं।

ZK proof settlement से पहले extra time add करता है। हर second जो गुज़रता है और हर बार receiver screen refresh करके funds नहीं देखता, वो failure है।

UI tricks experience improve कर सकते हैं, और वे अच्छे हैं।

लेकिन settlement feel और actually दोनों extremely fast होना चाहिए।

हम उन seconds को grind कर रहे हैं।

इस सप्ताह और क्या ship हुआ।

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- ZK-friendly database optimizations से prover time में 50% और कमी। Proving pipeline में second consecutive week 2x improvement।
- Poseidon में non-injective hashing implement, qp-poseidon-constants के नए versioned releases।
- Mining algorithm में edge case के लिए difficulty adjustment fix।
- सभी pallets और main crates का AI-driven review, flagged issues पर bug reports file।
- Codebase review के दौरान identify issues के cleanup PRs merge।

### Network & Infra:

- Senoti notification service device registrar में rate limiting add।
- Explorer update: latest changes merge, conflicts resolve, API adjust।

### Web & Mobile App Updates:

- Website पर नया whitepaper publish — updated styling और content।
- पिछला weekly update [quantus.com/blog](https://quantus.com/blog) पर blog post के रूप में publish।
- Transaction pool peek subscription feature implement और end to end test।
- iOS app में swap feature के लिए Apple review process शुरू।

### Content & Partnerships:

- "State of Quantum" industry report का 20 page draft complete, comments के लिए distribute शुरू। Interested हों तो reach out करें।
- Social media के लिए marketing hire add।
- Q-Day event date confirm: April 25th, Network School।

### Industry Updates:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

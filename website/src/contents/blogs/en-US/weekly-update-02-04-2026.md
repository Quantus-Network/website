---
title: "Quantus Weekly: High-Security Accounts and Fraud Prevention"
description: "Weekly update featuring our new high-security accounts with customizable time locks and guardians, multisig integration testing, and the new recover funds functionality."
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: High-Security Accounts and Fraud Prevention"
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

Chainalysis estimated $17B in crypto was stolen in 2025. The pitch was "be your own bank." The other half is "be your own security team." To be clear, "a Swiss bank account in your pocket, but only for cybersecurity experts" is still insanely badass. But the industry did a disservice to innocent normies who got rekt by moving their net worth onchain without even knowing what asymmetric cryptography is.

So when you say "be your own bank" you should also mention that banks have fraud departments, transaction monitoring, and reversal periods. They catch suspicious activity, freeze accounts, and intercept malicious transactions. You leave all that behind when you take custody of your own keys.

Unfortunately, "use a hardware wallet and verify exactly everything you sign every time" is unhelpful advice. If Bybit is yolo blind signing on their cold storage multisig, probably nobody is doing enough. It's unreasonable to expect users to operate at a high enough security level. It's untenable for "losing all your money" to be an outcome of using your app.

So what's worse, losing all your money or a trust assumption? Depends on the trust assumption, right? There is a middle ground between "trust no one" and "trust a bank." Trust someone you choose: a friend, a family member, a multisig with your lawyer or tech savvy nephew, a dead man's switch.

We've built that into [@QuantusNetwork](https://x.com/@QuantusNetwork). High-security accounts on Quantus have a customizable time lock on every outgoing transaction. During that window, a designated guardian can intercept and cancel the transaction. A guardian can't sign on your behalf, but they can shut down any outbound transaction.

So if a thief has your keys. They don't necessarily have the ability to take everything you own. You pick the guardian and you set the window. Maybe it's a 24-hour delay with your spouse for any transaction larger than $1,000. Maybe it's a hardware wallet you keep in a safe deposit box. Maybe it's a professional service that monitors activity for potential fraud in real time.

This week we started testing multisig integration for guardian accounts. We also added recover funds functionality to the chain, so intercepted transactions can be clawed back to the original owner.

Here's what else we shipped this week:

### GitHub Activity (5 merged pull requests):
![Github Stats](/blog/assets/github-stats-weekly-update-02-04-2026.png)

### Core Tech & ZK
- Multisig pallet for high-security accounts in testing phase with CLI commands.
- Added recover funds functionality to chain for high-security accounts.
- Brought qp-plonky2 up to date with changes made to the original plonky2 repo.

### Web & Mobile App Updates
- Refactored quests screens UI with gradients and wallet integration.
- Cleaned up unused assets in the app.

### Content & Partnerships
- [@QuantusNetwork](https://x.com/@QuantusNetwork) and [@YuviLightman](https://x.com/@YuviLightman) accounts both crossed 1k+ followers.
- Podcast with Henry Love on AI and productivity (on our Youtube).

### Industry Updates
- Quantum Canary: ["Will Zcash Replace Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)

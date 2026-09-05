---
published: true
title: "Quantus Weekly: Audits und der Compact Aggregator"
description: "Frühjahrsputz: Eiger-Audit erledigt, CLI refaktoriert, Miner- und Indexer-Fixes, Wormhole-Tests am Compact Aggregator mit doppelter Prover-Geschwindigkeit."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: Audits und der Compact Aggregator"
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

Frühjahrsputz-Woche.

Wir haben Audit-Items mit Eiger abgearbeitet, die CLI refaktoriert, Bugs in Miner und Indexer behoben und Wormhole-Integrationstests am neuen Compact Aggregator durchgeführt.

Bei ZK läuft der Wormhole-Flow jetzt sauber durch den 2×8 Compact Aggregator, den wir letzte Woche ausgeliefert haben. Das ist die Architektur, die die Prover-Performance verdoppelt hat — schnellere, skalierbarere, private Transaktionen. Auf der Nutzerseite haben wir zwei Mobile-Wallet-Releases (1.3.4 und 1.3.5) und Quantus Miner v3.1.0 mit GPU-Bugfix ausgeliefert. Unsere Docs decken jetzt den kompletten Flow von Mining bis Reward-Claim ab.

Wir haben unseren ersten Planck-Testnet-Miner-Workshop bei Network School ausgerichtet.

Das haben wir diese Woche alles gebaut:

### GitHub-Aktivität (26 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Mehrere Audit-Items von Eiger adressiert.
- Wormhole-Integrationstests am 2×8 Compact Aggregator durchgeführt.
- Quantus CLI refaktoriert — Kompatibilität, Transaction Lifecycle und Fee Estimation behoben.

### Netzwerk & Infra

- Stress Tests auf dem Planck-Testnet durchgeführt.
- Subsquid-Indexer-Performance verbessert und CPU-Usage-Spike behoben. Subsquid verursachte diese Woche UX-Probleme in der Mobile App (Balances laden nicht) — jetzt behoben.
- Quantus Miner v3.1.0 mit GPU-Mining-Bugfix ausgeliefert.

### Web- & Mobile-App-Updates

- Mobile Wallet 1.3.4 und 1.3.5 ausgeliefert.
- Mobile-Wallet-Design-Verbesserungen. Onboarding-Flow kommt als Nächstes.
- Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State und Miner Rewards Flows für die Wallet designed.
- Wormhole-Flow-UX für die Wallet gemappt.
- [docs.quantus.com](https://docs.quantus.com) aktualisiert — end-to-end von Mining bis Reward-Claim.
- Deepwikis über CLI, Monitoring, Chain, Website und ZK-Circuits-Repos aktualisiert.

### Mobile-Wallet-Analysen

- Gesamtnutzer: 2.252
- MAU: 1.048

### Content & Partnerschaften

- Unseren ersten Planck-Testnet-Miner-Workshop bei Network School ausgerichtet. 4+ Personen von null auf Mining.
- Pitch beim EthKL Meetup.
- Q-Day-Sponsoren bestätigt.
- NS Marathon mit Quantus-Kokosnüssen gesponsert.
- Neuer Podcast [über die Quantus-Architektur](https://x.com/QuantusNetwork/status/2047178654396862837) veröffentlicht.

---
title: "Quantus Weekly: Frühjahrsputz, Eiger-Audits und der Kompakt-Aggregator"
description: "Audit-Themen mit Eiger abgearbeitet, CLI refaktoriert, Bugs bei Miner und Indexer behoben sowie Wormhole-Integrationstests auf dem neuen Kompakt-Aggregator gefahren. Der Wormhole-Flow in ZK läuft sauber durch den 2x8-Kompakt-Aggregator vom Vorgang. Mobile Wallet 1.3.4/1.3.5, Miner v3.1.0 mit GPU-Fix, Docs für Mining bis Reward-Claim und der erste Planck-Testnet-Miner-Workshop bei der Network School."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: Frühjahrsputz, Eiger-Audits und der Kompakt-Aggregator"
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

Wir haben Audit-Themen mit Eiger abgearbeitet, die CLI refaktoriert, Bugs bei Miner und Indexer behoben und Wormhole-Integrationstests auf dem neuen Kompakt-Aggregator ausgeführt.

Auf der ZK-Seite läuft der Wormhole-Flow nun sauber durch den 2x8-Kompakt-Aggregator, den wir letzte Woche ausgeliefert haben—die Architektur, die die Prover-Performance verdoppelt hat und damit schnellere, skalierbarere private Transaktionen ermöglicht. Für Nutzer haben wir zwei Mobile-Wallet-Releases (1.3.4 und 1.3.5) sowie Quantus Miner v3.1.0 mit GPU-Bugfix ausgeliefert. Außerdem haben wir die Docs aktualisiert, um den kompletten Weg vom Mining bis zum Einfordern der Rewards abzudecken.

Wir haben unseren ersten Planck-Testnet-Miner-Workshop bei der Network School veranstaltet.

Das haben wir diese Woche gebaut:

### GitHub-Aktivität (26 zusammengeführte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Mehrere Audit-Punkte von Eiger bearbeitet.
- Wormhole-Integrationstests auf dem 2x8-Kompakt-Aggregator ausgeführt.
- Quantus CLI refaktoriert für Kompatibilität, Transaktionslebenszyklus und Gebührenschätzung.

### Netzwerk & Infra

- Stresstests auf dem Planck-Testnet durchgeführt.
- Subsquid-Indexer-Performance verbessert und CPU-Spike behoben. Subsquid hat diese Woche die Mobile-App-UX gestört (Salden luden nicht)—jetzt behoben.
- Quantus Miner v3.1.0 mit Fix für GPU-Mining ausgeliefert.

### Web- & Mobile-App-Updates

- Mobile Wallet 1.3.4 und 1.3.5 ausgeliefert.
- Design-Verbesserungen im Mobile Wallet; Onboarding-Flow folgt als Nächstes.
- Flows für Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State und Miner Rewards für das Wallet designed.
- Wormhole-Flow-UX fürs Wallet kartiert.
- [docs.quantus.com](https://docs.quantus.com) aktualisiert für End-to-End-Mining bis zum Einfordern der Rewards.
- Deepwikis in den Repos für CLI, Monitoring, Chain, Website und ZK-Schaltungen aufgefrischt.

### Mobile-Wallet-Analytik

- Nutzer gesamt: 2.252
- MAU: 1.048

### Content & Partnerschaften

- Erster Planck-Testnet-Miner-Workshop bei der Network School; mehr als vier Personen von null bis Mining.
- Pitch beim EthKL-Meetup.
- Q-Day-Sponsoren bestätigt.
- NS Marathon mit Quantus-Kokosnüssen gesponsort.
- Neuer Podcast [über die Quantus-Architektur](https://x.com/QuantusNetwork/status/2047178654396862837).

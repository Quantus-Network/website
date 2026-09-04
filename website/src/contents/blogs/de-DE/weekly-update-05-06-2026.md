---
title: "Quantus Weekly: Die Killer-App ist Geld"
description: "Diese Woche: Dilithium-DKG für Mithril, Threshold-Signaturen, Wormhole-SDK und Wallet v1.4.0 auf TestFlight ausgeliefert."

pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: Die Killer-App ist Geld"
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
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

Es gibt etwas, woran wir glauben – und der Markt wacht langsam auf.

Eine einzige Killer-Krypto-App wird mehr Wert schaffen und einfangen als alle anderen zusammen.

Es sind nicht Stablecoins, Prediction Markets oder DeFi.

Ganz sicher nicht Web3, soziale Netzwerke oder PFP-Sammlungen.

Es ist Geld. Die Idee, aus der die Branche entstanden ist.

Der erste Gedanke ist ein reiner Gedanke. Peer-to-Peer-Electronic Cash.

Sicheres, privates und skalierbares Geld ist die Multi-Billionen-Dollar-Chance.

Diese Woche haben wir die verteilte Schlüsselgenerierung von Quantus für Dilithium-Schlüssel neu geschrieben, damit sie dem aktualisierten Mithril-Paper entspricht, und Fixes in unserer Threshold-Signature-Implementierung ausgeliefert.

So könnt ihr einen Quantus-Schlüssel auf mehrere Parteien aufteilen. Wichtig für unsere sicheren Integrationen.

Wir haben einen Audit-Punkt in der Wormhole-Spezifikation adressiert und Helfer im öffentlichen Quantus-CLI-SDK bereitgestellt – private Transaktionen stehen externen Entwicklern damit offen. Wormhole ist unser Weg zu skalierbarer Post-Quantum-Privacy.

Außerdem haben wir Wallet v1.4.0 mit einem vollständigen Reskin veröffentlicht, das die Mobile-App-Erfahrung vereinfacht und verschönert (derzeit auf TestFlight).

### Github-Aktivität (16 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Verteilte Schlüsselgenerierung für Dilithium-Schlüssel neu geschrieben, passend zum aktualisierten Mithril-Paper.
- Threshold-Signature-Implementierung gegen drei Audit-Funde gehärtet.
- Wormhole-Spec aktualisiert, um einen Audit-Punkt zu Change-Outputs zu adressieren.
- Wormhole-Helfer im öffentlichen Quantus-CLI-SDK bereitgestellt und End-to-End-Beispiel-Workflows von Deposit bis Mint hinzugefügt.
- CLI-Transaktionslebenszyklus refaktoriert mit getrennten Zuständen submitted, included und finalized, exaktem Dezimal-Fee-Parsing, strengeren Versions-Kompatibilitätsprüfungen und overflow-sicheren Batch-Transfers.
- Benchmarking-Tool gebaut, um den Difficulty-Adjustment-Algorithmus zu verbessern.
- Verschiedene Aggregationsbaum-Topologien und deren CPU-Nutzung untersucht und gebenchmarkt.
- Rechtschreibfehler in der Human-Checkphrase behoben.

### Netzwerk & Infra:

- Stress-Test-Suite um Wormhole-Modus erweitert und viele Male auf dem Planck-Testnet ausgeführt.
- Subsquid-Blockchain-Indexer auf einen Production-Grade-Server verschoben und Account- sowie Chain-Statistikdaten hinzugefügt.
- Explorer-Queries gebenchmarkt und teure entfernt.
- Alle VPS-Betriebssysteme aktualisiert und Infrastruktur dokumentiert.
- Miner-Stack aktualisiert und Miner-App unter Windows getestet.

### Web- & Mobile-App-Updates:

- GUI-Miner für Planck (v0.4.1) mit Claim-Funktionalität ausgeliefert.
- Wallet v1.4.0 veröffentlicht (derzeit auf TestFlight) mit vollständigem UI-Reskin und echten Wechselkursen.
- Wallet-Bugfixes: Homepage-Balance-Styling, Activity-Component-Styling und Receive-Screen.
- Task Master: Exchange-Rates-Endpoint hinzugefügt und Checksum-Dependency aktualisiert.
- Quantus-Website aktualisiert: Docs-Link auf docs (dot) quantus (dot) com gesetzt, TPS-Anzeige aktualisiert und Weekly Update veröffentlicht.

### Content & Partnerschaften:

- Podcast-Branding auf Spotify, Apple und YouTube aktualisiert.
- Erstes Paar Quantus Glasses für [$QTC](https://x.com/search?q=%24QUAN&src=cashtag_click) bei Network School verkauft.
- Quantus hatte einen Stand auf der NS-Fair, onboardete App-Nutzer und Q-Day-Registrierungen.

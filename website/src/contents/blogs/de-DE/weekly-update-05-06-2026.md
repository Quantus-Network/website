---
title: "Quantus Weekly: Die Killer-App ist Geld"
description: "Diese Woche haben wir Dilithium DKG für Mithril neu geschrieben, Threshold-Signatur-Fixes ausgeliefert, Wormhole SDK-Helper freigegeben und eine verschönerte Wallet v1.4.0 auf TestFlight veröffentlicht."
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

Es gibt etwas, von dem ich glaube, dass der Markt langsam aufwacht.

Eine Killer-Crypto-App wird mehr Wert schaffen und erfassen als jede andere.

Es sind nicht Stablecoins, Prognosemärkte oder DeFi.

Es sind definitiv nicht Web3, soziale Netzwerke oder PFP-Kollektionen.

Es ist Geld. Die Idee, die die Branche hervorgebracht hat.

Der erste Gedanke ist ein reiner Gedanke. Elektronisches Peer-to-Peer-Bargeld.

Sicheres, privates und skalierbares Geld ist die Multi-Billionen-Dollar-Chance.

Diese Woche haben wir die verteilte Schlüsselgenerierung von Quantus für Dilithium-Schlüssel neu geschrieben, um sie an das aktualisierte Mithril-Paper anzupassen, und Fixes für unsere Threshold-Signatur-Implementierung ausgeliefert.

So können Sie einen Quantus-Schlüssel auf mehrere Parteien aufteilen. Wichtig für unsere sicheren Integrationen.

Wir haben einen Audit-Punkt in der Wormhole-Spezifikation adressiert und Helper im öffentlichen Quantus CLI SDK freigegeben, wodurch die Unterstützung für private Transaktionen für externe Entwickler geöffnet wurde. Wormhole ist der Weg, wie wir skalierbare Post-Quantum-Privatsphäre erreichen.

Wir haben außerdem die Wallet v1.4.0 mit einem kompletten Reskin veröffentlicht, der das Erlebnis der mobilen App vereinfacht und verschönert (derzeit auf TestFlight).

### Github-Aktivität (16 zusammengeführte Pull-Requests):

![Github-Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Die verteilte Schlüsselgenerierung für Dilithium-Schlüssel wurde neu geschrieben, um sie an das aktualisierte Mithril-Paper anzupassen.
- Die Threshold-Signatur-Implementierung wurde gegen drei Audit-Ergebnisse gehärtet.
- Die Wormhole-Spezifikation wurde aktualisiert, um einen Audit-Punkt zu Change-Outputs zu adressieren.
- Wormhole-Helper wurden im öffentlichen Quantus CLI SDK freigegeben und End-to-End-Beispiel-Workflows für Deposit-to-Mint hinzugefügt.
- Der CLI-Transaktionslebenszyklus wurde mit den Zuständen „eingereicht“, „enthalten“ und „finalisiert“, exakter Dezimalgebühren-Analyse, strengeren Versionskompatibilitätsprüfungen und Overflow-bewussten Batch-Transfers refakturiert.
- Ein Benchmarking-Tool wurde entwickelt, um den Schwierigkeitsanpassungsalgorithmus zu verbessern.
- Verschiedene Aggregationsbaum-Topologien und deren CPU-Auslastung wurden untersucht und benchmarked.
- Rechtschreibfehler in der menschlichen Checkphrase wurden behoben.

### Netzwerk & Infra:

- Die Stress-Test-Suite wurde um den Wormhole-Modus erweitert und mehrfach auf dem Planck-Testnet ausgeführt.
- Der Subsquid-Blockchain-Indexer wurde auf einen produktionsreifen Server verschoben und um Konto- und Kettenstatistikdaten ergänzt.
- Explorer-Abfragen wurden benchmarked und die teuren entfernt.
- Alle VPS-Betriebssysteme wurden aktualisiert und die Infrastruktur dokumentiert.
- Der Miner-Stack wurde aktualisiert und die Miner-App auf Windows getestet.

### Web & Mobile App Updates:

- GUI-Miner für Planck (v0.4.1) mit Claim-Funktionalität ausgeliefert.
- Wallet v1.4.0 (derzeit auf TestFlight) mit einem kompletten UI-Reskin und echten Wechselkursen veröffentlicht.
- Wallet-Bugfixes: Styling des Homepage-Guthabens, Styling der Aktivitätskomponente und der Empfangsbildschirm.
- Task Master: Ein Endpunkt für Wechselkurse wurde hinzugefügt und die Checksum-Abhängigkeit aktualisiert.
- Die Quantus-Website wurde aktualisiert: Der Docs-Link weist nun auf docs (dot) quantus (dot) com hin, die TPS-Anzeige wurde aktualisiert und das wöchentliche Update wurde veröffentlicht.

### Content & Partnerschaften:

- Das Podcast-Branding wurde auf Spotify, Apple und YouTube aktualisiert.
- Das erste Paar Quantus-Brillen wurde für [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) an der Network School verkauft.
- Quantus hatte einen Stand auf der NS-Messe, um App-Nutzer und Q-Day-Registranten zu gewinnen.

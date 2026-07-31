---
title: "Quantus Weekly: Die Wallet soll einfach sein"
description: "Weekly Update: Wallet v1.2.0, Treasury mit Multisig, Heisenberg-Testnet-Updates und Performance-Verbesserungen – das war diese Woche bei Quantus."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: Die Wallet soll einfach sein"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Jede große Krypto-Wallet packt Müll-Features rein, die ich nicht will.

Ich will keine Social-Media-App, die nebenbei mein Geld hält.

Ist Ihnen schon aufgefallen, dass es keine klar positionierte, einfach zu bedienende, selbstverwahrte „offizielle“ Bitcoin-Wallet gibt?

Gleiches gilt für Ethereum und Solana.

Die Foundations bauen die Chain und überlassen die Oberfläche Dritten. Dritte brauchen Umsatz. Umsatz bedeutet Features. Features bedeuten Lärm.

Jetzt hat Ihre Wallet einen Swap-Aggregator, einen Social Feed, Trending Tokens, NFT-Galerien und Push-Benachrichtigungen über Coins, von denen Sie nie gehört haben.

Wir haben Quantus gebaut – und wir haben die Wallet gebaut.

Gleiches Team, gleiches Produkt. Die App, die wir diese Woche in den App Store gebracht haben, hat keine Werbung, keine Token-Feeds, keine Social Features, keine claimbaren Usernames.

Öffnen, Guthaben sehen, senden oder empfangen.

Wir haben die Oberfläche von Grund auf neu designt – klar positioniert, mit Defaults, die so viel kognitive Last wie möglich vom Nutzer nehmen.

Außerdem haben wir die Ladezeit der Wallet-Transaktionshistorie drastisch reduziert. Kein Warten mehr auf Guthaben und frühere Transaktionen nach dem Öffnen der App.

Quantensicheres privates Geld soll einfach zu nutzen sein – idealerweise langweilig.

Die Aufregung überlassen wir den Pre-Quanten-Chains am Q-Day.

Alles ist Open Source. Jeder kann seine eigene Wallet bauen. Aber es wird immer eine offizielle geben, die einfach funktioniert.

### GitHub-Aktivität (4 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Core-Tech & ZK

- Treasury mit Multisig gemergt und im neuen Heisenberg-Testnet-Release enthalten.
- Alle ausstehenden Änderungen gemergt und released. Neue Heisenberg-Genesis erstellt, released und deployed.
- Legacy-Governance-Regeln für Treasury-Management entfernt.
- CLI um neue Multisig- und Treasury-Befehle erweitert. High-Security-Kontodetails jetzt in der Wallet-Ansicht sichtbar.
- Proof Shuffling und Zeroing duplizierter Exit-Accounts ergänzt, um die Privatsphäre aggregierter Wormhole-Transaktionen zu erhöhen.
- Wormhole in Circuit Builder und Prover aufgeteilt, um Proof-Aggregation zu beschleunigen.
- ZK-Circuits-Release-Workflow aktualisiert und neue Artifacts veröffentlicht.
- Revive-Pallet-Dependency-Issue behoben.

### Netzwerk & Infra

- Benachrichtigungssystem (Senoti): Failover zum Block Watcher für beste Netzwerkauswahl ergänzt.
- Senoti aktualisiert, um mehrere Adressen pro Gerät zu verarbeiten.
- RPC-Failover für Subsquid-Server ergänzt.
- Monitoring-Alerts aktualisiert und an passende Kanäle umgeleitet.

### Web- & Mobile-App-Updates

- Wallet v1.2.0 im iOS App Store ausgeliefert.
- Durchschnittliche Ladezeit der Transaktionshistorie von über 1 Minute auf unter 5 Sekunden reduziert.
- Wallet-Builds 75, 76, 77 mit Android-Splash-Screen-Fix und weiteren Bugfixes ausgeliefert.
- Release-Artifact-Workflow für Wallet-Builds ergänzt.
- Toaster-Komponente aktualisiert und Legacy-Version bereinigt.
- Remote-Notification-Support für Registrierung bestehender Adressen, FCM-Device-Unregistration bei Reset und Entfernung von Wallet-Adress-Benachrichtigungen ergänzt.
- Happy-Words-Liste für Check-Phrases ergänzt.
- Subsquid extrinsics-fokussiert refaktoriert, mit Support für Privacy-Score-Berechnung und Wormhole-Transaktionen.
- Explorer refaktoriert, um die aktualisierte Subsquid-Architektur widerzuspiegeln.

### Content & Partnerschaften

- Podcast mit Nik Heger: „Building A New Sound Money System“

### Branchen-Updates

- Quantum-Canary-Analyse, ob [Stripes Tempo-Blockchain quantensicher sein wird.](https://x.com/QuantumCanary_/status/2024797352616509754)

---
published: true
title: "Quantus Weekly: Fette Signaturen, schnellere Wormholes"
description: "ML-DSA-Signaturen sind 70× größer als bei Bitcoin. Diese Woche: quantensichere Signierung skaliert, Wormhole-Proofs 2× schneller, ZK-Aggregation voran."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Fette Signaturen, schnellere Wormholes"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

Eine Bitcoin-Signatur ist 65 Bytes.

Eine einzelne ML-DSA-87-Signatur ist 4.627 Bytes.

Das ist 70× größer.

Multipliziert man das über jede Transaktion, entsteht ein Skalierungsproblem.

Aber keine Sorge — größere Bitcoin-Blöcke werden bestimmt nicht kontrovers.

(das war ein Scherz)

Quantensichere Signaturen sind so fett, dass Bitcoin bei heutiger Implementierung weit unter 1 TPS fallen würde.

[@QuantusNetwork](https://x.com/QuantusNetwork) käme ohne Skalierungstechniken auf rund 685 Transaktionen pro Block.

Wir nutzen ZK, um diese größeren Transaktionen in kleinere Proofs zu aggregieren, die onchain landen.

Das schützt auch die Privatsphäre unserer Nutzer, indem die Verbindung zwischen Sender und Empfänger getrennt wird [(im letzten Update behandelt)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS werden zu verschlüsselten 3.500 TPS.

Das neue Blockchain-Trilemma lautet: Quantensicherheit, Skalierbarkeit und Privatsphäre.

Wir lösen es mit ZK.

Diese Woche haben wir unsere Proof-Zeit halbiert.

Wormhole-Aggregations-Proofs finalisieren jetzt 2× schneller.

Die Signaturen sind immer noch riesig. Der Chain ist das egal.

Das haben wir diese Woche sonst noch gebaut:

### GitHub-Aktivität (12 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Wormhole-Aggregations-Proofs sind jetzt 2× schneller — dank serialisiertem Prover statt dynamischem Neuaufbau.
- Refactor-Split von Circuits Builder/Prover für qp-zk-circuits abgeschlossen.
- Aggregator-API neu designt: von dynamischem Prover/Circuit Builder zu Orchestrierung und Artifact Management.
- quantus-cli mit der neuen Aggregator-API aktualisiert.
- Wormhole-Verifier-Blobs behoben, denen ein kryptografischer/reproducible-build-Tie zu qp-zk-circuits in der Chain fehlte.
- Mehrere Security Reviews über alle Substrate-Pallets abgeschlossen, 8 PRs mit Fixes gemergt.
- Formales Audit der Substrate-Pallets gestartet.
- Multisig- und Treasury-Pallet-Verbesserungen.

### Netzwerk & Infra:

- Zwei neue Planck-Testnet-Nodes mit neuem Testnet-Profil deployed.
- Substrate-State-Pruning untersucht und behoben.
- Testnet-Faucet mit dem [@QuantusNetwork](https://x.com/QuantusNetwork)-Twitter-Account verbunden.
- Subsquid: per-User-Event-Mapping für bessere Query-Performance hinzugefügt.
- Subsquid: reversible Transfers-Aggregation für historische Genauigkeit aktualisiert.
- Bridging-Infrastruktur gebaut: Rosetta-API-Implementierung mit Integrationstests und MPC-Signing-Updates.

### Web- & Mobile-App-Updates:

- Mobile-Wallet Build 82: Code-Cleanup und UI-Standardisierung (Sheets, Scaffold, Icon-Buttons, Accounts-Refactor).
- Mobile-Wallet Chain-History-Service und Transaction-History-UI für das neueste Subsquid-Datenmodell aktualisiert.
- Website: Page-Indexing optimiert, Weekly Updates als Blogposts hinzugefügt, Blog-Suche um Titel erweitert.
- Explorer: reversible Transaktionsansichten in separate Event-Typen überarbeitet (scheduled, executed, cancelled).
- Quantum-Canary-Website: Artikel-Tabellen mobilfreundlich gemacht.

### Content & Partnerschaften:

- Podcast mit Physiker und Unternehmer Steve Hsu über Quantencomputing, KI und die Quantenbedrohungs-Timeline.
- Zwei Marketing-Neueinstellungen.
- Crypto-Onboarding- und Privatsphäre/OPSEC-Security-Events bei Network School ausgerichtet.

### Branchen-Updates:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

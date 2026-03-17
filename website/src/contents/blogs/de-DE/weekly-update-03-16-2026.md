---
title: "Quantus Weekly: Quantensichere Signaturen, ZK-Skalierung und 2x schnellere Wormhole-Beweise"
description: "Wöchentliches Update zu ML-DSA-Signatur-Skalierung, ZK-Aggregation, Wormhole-Beweis-Beschleunigung, Sicherheitsprüfungen, Testnet-Knoten und Quantum Canary-Inhalten."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Quantensichere Signaturen, ZK-Skalierung und 2x schnellere Wormhole-Beweise"
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

Eine Bitcoin-Signatur hat 65 Bytes.

Eine einzelne ML-DSA-87-Signatur hat 4.627 Bytes.

Das ist 70-mal größer.

Übertragen auf jede Transaktion wird das zu einem Skalierungsproblem.

Aber keine Sorge, die Erhöhung der Bitcoin-Blockgröße wird sicher nicht so kontrovers sein.

(das war ein Witz)

Quantensichere Signaturen sind so voluminös, dass die Bitcoin-Throughput bei einer Implementierung heute weit unter 1 TPS fallen würde.

[@QuantusNetwork](https://x.com/QuantusNetwork) würde ohne Skalierungstechniken etwa 685 Transaktionen pro Block schaffen.

Wir nutzen aber ZK, um diese größeren Transaktionen in kleinere Beweise zu aggregieren, die onchain landen.

Außerdem schützen wir die Privatsphäre unserer Nutzer, indem die Verbindung zwischen Sender und Empfänger aufgebrochen wird [(im letzten Update beschrieben)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS werden zu verschlüsselten 3.500 TPS.

Das neue Blockchain-Trilemma heißt: Quantensicherheit, Skalierbarkeit und Privatsphäre.

Wir lösen es mit ZK.

Diese Woche haben wir unsere Beweiszeit halbiert.

Wormhole-Aggregationsbeweise werden jetzt 2x schneller abgewickelt.

Die Signaturen sind weiterhin riesig. Der Chain ist es egal.

Das haben wir diese Woche außerdem gebaut:

### GitHub-Aktivität (12 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Wormhole-Aggregationsbeweise sind jetzt 2x schneller durch einen serialisierten Prover statt dynamischem Neuaufbau.
- Refactor-Split von Circuit-Builder/Prover für qp-zk-circuits abgeschlossen.
- Aggregator-API von dynamischem Prover/Circuit-Builder auf Orchestrierung und Artefaktverwaltung umgestellt.
- quantus-cli an die neue Aggregator-API angepasst.
- Wormhole-Verifier-Blobs behoben, denen die kryptografische/reproduzierbare Bindung an qp-zk-circuits in der Chain fehlte.
- Mehrere Sicherheitsprüfungen aller Substrate-Pallets abgeschlossen, 8 Fix-PRs gemerged.
- Formales Audit der Substrate-Pallets gestartet.
- Verbesserungen an Multisig- und Treasury-Pallet.

### Netzwerk & Infrastruktur:

- Zwei neue Planck-Testnet-Knoten mit neuem Testnet-Profil deployed.
- Substrate-State-Pruning untersucht und angepasst.
- Testnet-Faucet mit [@QuantusNetwork](https://x.com/QuantusNetwork)-Twitter-Account verbunden.
- Subsquid: Event-Mapping pro Nutzer für bessere Abfrageperformance ergänzt.
- Subsquid: Aggregation reversibler Transfers für historische Genauigkeit aktualisiert.
- Bridging-Infrastruktur: Rosetta-API-Implementierung mit Integrationstests und MPC-Signing-Updates.

### Web- & Mobile-App-Updates:

- Mobile-Wallet Build 82: Code-Cleanup und UI-Vereinheitlichung (Sheets, Scaffold, Icon-Buttons, Accounts-Refactor).
- Chain-History-Service und Transaktionshistorie-UI des Mobile Wallets für aktuelles Subsquid-Datenmodell angepasst.
- Website: Seitenindexierung optimiert, wöchentliche Updates als Blog-Posts, Blog-Suche um Titel erweitert.
- Explorer: reversible Transaktionsansichten in getrennte Event-Typen überführt (geplant, ausgeführt, storniert).
- Quantum-Canary-Website: Artikeltabellen mobilfreundlich gemacht.

### Content & Partnerschaften:

- Podcast mit Physiker und Unternehmer Steve Hsu zu Quantencomputing, KI und dem Zeitplan der Quantenbedrohung.
- Zwei neue Marketing-Mitarbeiter eingestellt.
- Crypto-Onboarding- und Privacy-/OPSEC-Sicherheitsveranstaltungen bei Network School.

### Branchen-Updates:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

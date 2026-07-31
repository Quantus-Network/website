---
title: "Quantus Weekly: GPU-Mining-Durchbruch und ZK-Refactor"
description: "GPU-Miner ~9× schneller als CPU, ZK-Aggregation-Circuit refactoriert, strategische Meetings in den VAE – im Wochenrückblick."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: GPU-Mining-Durchbruch und ZK-Refactor"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

Diese Woche hat das Team einen Durchbruch bei der Mining-Performance erzielt. Unser neuer GPU-Miner läuft jetzt etwa 9× schneller als die CPU-Version.

Außerdem haben wir unseren ZK-Aggregation-Circuit refactoriert und konnten tausende Zeilen Code löschen.

In den VAE traf sich das Team mit Advisors und Investoren. Diese Meetings haben unsere Produktvision gefestigt und Tokenomics sowie Token-Launch-Strategie geklärt. Es gab auch bedeutenden BD-Fortschritt zur Unterstützung des Token-Launches.

Wöchentlicher Github-Aktivitätsbericht mit 10 gemergten Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core-Tech & ZK

- ZK-Aggregator-Transfer-Proofs in ein dediziertes Pallet migriert, inkl. Updates an CLI, Circuits und Poseidon-Logik. Dieser Refactor ermöglichte das Löschen tausender Zeilen Code.
- Lösung entworfen, um den Poseidon-Storage-Hasher generisch zu machen.
- Ausstehende Änderungen gemergt und Code-Quality-Issues im Zusammenhang mit reversiblen Transfers behoben.

## Netzwerk & Infra

- GPU-Miner jetzt ~9× schneller als CPU-Miner.
- CLI v0.3.1 veröffentlicht, Finalization-Flag vereinheitlicht und Address-Formatierung verbessert.
- Runtime-Upgrade durchgeführt und Chain-Spezifikation aktualisiert.
- Neuen BootNode deployed.
- Sicherheits-Checks und Updates auf allen Servern abgeschlossen.
- Containerisierte Health-Checks für den Subsquid-Indexierungsservice deployed.

## Web- & Mobile-App-Updates

- Hardware-Wallet-Integration vorangetrieben. QR-Codes in Keystone werden jetzt geparst und Dummy-Nachrichten signiert.
- Multi-Wallet-(Mnemonic-)Hardware-Wallet-Funktionalität in der Mobile App begonnen.
- Website-Formulare aktualisiert und mit unserem E-Mail-Provider integriert.
- rusx für Batch-Queries optimiert, um Rate-Limiting-Probleme zu vermeiden.

## Content & Partnerschaften

- Solana Breakpoint besucht und unser „Quantum Secure Bitcoin“-Positioning/Memes getestet.
- Treffen mit Advisors in den VAE zu Token-Launch, Tokenomics und der Quantus-GTM-Strategie.
- Episode mit Tom Howard ist live: https://x.com/QuantusNetwork/status/2000585749914427684

## Branchen-Updates

- Quantum Canary veröffentlichte eine umfassende „Quantum Ready“-Blockchain-Vergleichsseite: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

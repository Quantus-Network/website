---
title: "Quantus Weekly: Durchbruch beim GPU-Mining und ZK-Refactor"
description: "Wöchentliches Update über eine 9-fache Leistungssteigerung beim GPU-Mining, den Refactor des ZK-Aggregations-Circuits und strategische Treffen in den VAE."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Weekly: Durchbruch beim GPU-Mining und ZK-Refactor"
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

In dieser Woche hat das Team einen Durchbruch bei der Mining-Leistung erzielt. Unser neuer GPU-Miner läuft jetzt etwa 9-mal schneller als die CPU-Version.

Außerdem haben wir einen Refactor unseres ZK-Aggregations-Circuits abgeschlossen, wodurch wir Tausende von Codezeilen löschen konnten.

Während des Aufenthalts in den VAE traf sich das Team mit Beratern und Investoren. Diese Treffen festigten unsere Produktvision und klärten die Tokenomics sowie die Token-Launch-Strategie. Es wurden auch bedeutende Fortschritte im Bereich Business Development (BD) erzielt, um den Token-Launch zu unterstützen.

Wöchentlicher Github-Aktivitätsbericht mit 10 gemergten Pull-Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- Migration unserer ZK-Aggregator-Transfer-Proofs in ein dediziertes Pallet, einschließlich Updates für CLI, Circuits und Poseidon-Logik. Dieser Refactor ermöglichte es uns, Tausende von Codezeilen zu löschen.
- Entwurf einer Lösung, um den Poseidon-Storage-Hasher generisch zu machen.
- Zusammenführung ausstehender Änderungen und Behebung von Codequalitätsproblemen im Zusammenhang mit reversiblen Transfers.

## Network & Infra

- GPU-Miner jetzt ca. 9-mal schneller als CPU-Miner.
- Veröffentlichung von CLI v0.3.1, Finalisierungs-Flag vereinheitlicht und Adressformatierung verbessert.
- Durchführung eines Runtime-Upgrades und Aktualisierung der Chain-Spezifikation.
- Bereitstellung eines neuen BootNode.
- Abschluss von Sicherheitsprüfungen und Updates auf allen Servern.
- Bereitstellung containerisierter Health-Checks für den Subsquid-Indexing-Service.

## Web & Mobile App Updates

- Fortschritte bei der Hardware-Wallet-Integration. QR-Codes werden nun in Keystone geparst und Dummy-Nachrichten signiert.
- Beginn der Implementierung der Multi-Wallet (Mnemonic) Hardware-Wallet-Funktionalität in die mobile App.
- Aktualisierung der Website-Formulare und Integration mit unserem E-Mail-Anbieter.
- Optimierung von rusx für Batch-Abfragen, um Rate-Limiting-Probleme zu vermeiden.

## Content & Partnerships

- Teilnahme am Solana Breakpoint und Testen unserer „Quantum Secure Bitcoin“-Positionierung/Memes.
- Treffen mit Beratern in den VAE, um den Token-Launch, die Tokenomics und die Quantus GTM-Strategie zu besprechen.
- Die Episode mit Tom Howard ist online: https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canary hat eine umfassende Vergleichsseite für „Quantum Ready“-Blockchains veröffentlicht: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

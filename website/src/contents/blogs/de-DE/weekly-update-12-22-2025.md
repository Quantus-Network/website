---
published: true
title: "Quantus Weekly: GPU-Mining und Dirac-Stresstest"
description: "Quantus Miner v2.0.2 mit GPU-Support veröffentlicht, Dirac-Netzwerk erfolgreich stress-getestet, Chain-Architektur für 21M-Cap angepasst."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPU-Mining und Dirac-Stresstest"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

Diese Woche haben wir Quantus Miner v2.0.2 mit GPU-Support offiziell veröffentlicht und das Dirac-Netzwerk erfolgreich stress-getestet.

Außerdem haben wir die Chain-Architektur für ein 21M-Coin-Supply-Cap angepasst und die Codebase bereinigt, indem wir Legacy-Vesting- und Treasury-Pallets entfernt haben.

Wöchentlicher Github-Aktivitätsbericht mit 6 gemergten Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core-Tech & ZK

- Chain-Spezifikation aktualisiert, um das neue 21M-Coin-Supply-Cap widerzuspiegeln.
- Kern-Chain-Architektur vereinfacht durch Entfernung der Vesting- und Treasury-Pallets.
- Generischen Poseidon-Storage-Hashing-Support abgeschlossen, um Panics im Runtime zu verhindern.
- Asset-ID-Support in unsere ZK-Circuits und die CLI hinzugefügt.

## Netzwerk & Infra

- Dirac stress-getestet, um zu beobachten, wie Netzwerk-Überlastung die Block-Zeiten beeinflusst.
- Quantus Miner v2.0.2 veröffentlicht, der jetzt offiziell GPU-Mining unterstützt: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web- & Mobile-App-Updates

- Hardware-Wallet-Signing-Flow auf Mobile finalisiert, inkl. QR-Code-Signatur-Übertragung, Multi-Wallet-Support und Unlinking-Funktionalität.
- „Raid Quests“ mit Telegram, Website und internem Tracking via Task Master implementiert, um Community-Engagement auf X zu incentivieren. Wallet-Implementierung in Arbeit.
- Backend-CORS-Fehler behoben und Data-Tracking für Social Interactions verbessert.
- Block-Explorer-Bugs behoben, die Miner-Rewards-Reporting und Netzwerk-Wechsel betrafen.

## Content & Partnerschaften

- Investment von zwei strategischen Partnern gesichert, die wir beim Peer Summit kennengelernt haben.
- Meetings zum Launch-Strategie abgeschlossen und aktualisiertes Whitepaper mit neuer Tokenomics und GTM entworfen.
- Episode mit Cezary, erfahrener Software-Architekt und Systems Engineer: https://www.youtube.com/watch?v=2TDMR7bECR8

## Branchen-Updates

- Artikel von Quantum Canary zur Analyse des Risikos eines staatlichen Angriffs auf Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

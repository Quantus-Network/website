---
title: "Quantus Weekly: ZK-Aggregation und Miner App"
description: "Erste ZK-Transaktions-Aggregation für Chain und CLI mit echter Transfer-Verifikation, Miner App v0.1.0 veröffentlicht, GPU-Mining läuft."

pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZK-Aggregation und Miner App"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

Diese Woche hat das Team den ersten Schritt der ZK-Transaktions-Aggregation für Chain und CLI abgeschlossen und Mock-Tests durch echte Transfer-Verifikation ersetzt. Außerdem haben wir die Miner App v0.1.0 als Binary veröffentlicht.

## Entwicklungs-News

- Wöchentlicher Github-Aktivitätsbericht mit über 150 Events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech

- Neues qp-header-Primitive auf der Chain erstellt, field-aligned mit unseren Wormhole-Circuits – ersetzt Substrates generischen Header.
- Aggregations-Circuit für Block-Header-Verifikation und Verbindungen zwischen benachbarten Blöcken aktualisiert.
- GPU-Implementierung des Mining-Algorithmus ist grob zu 80 % fertig.
- Erste Phase des Rusty-Crystals-Audits abgeschlossen, Issues größtenteils behoben.
- Internes Audit auf Panics im Runtime durchgeführt (inspiriert vom jüngsten Cloudflare-Unwrap-Bug).
- Vesting-Commands für das Standard-Substrate-Pallet zur CLI hinzugefügt.

## Netzwerk & Infra

- Subsquid-Deployment auf ein einziges Script vereinfacht.
- Docker-Image & Release-Prozess für Quantus-Miner erstellt.
- Miner-Stack deployed (Docker Compose + Monitoring-Stack + Dokumentation).
- Monitoring-Dashboards & Alerts für Explorer & Task Master hinzugefügt.

## Web- & Mobile-App-Updates

- In-App-Referral-System und nutzerseitiges Event-Tracking (Quantus Quests) gestartet.
- Miner-App-Binary für alle Plattformen veröffentlicht: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 – bisher ist aber nur Mac gründlich getestet.
- Migrationsprobleme und diverse Bug-Reports in der Mobile Wallet behoben.
- Send-Screen-Widget refactoriert für Testbarkeit und Unit-/Widget-Tests hinzugefügt.
- Quests-Seite auf der Website mit Suchfunktion aktualisiert.
- Task-Master-Leaderboard-Endpoint für Suche aktualisiert und Rank in Ergebnissen ergänzt.

## Content & Partnerschaften

- Erstes Community-AMA via X Space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast mit James, Gründer von Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Zwei neue Advisors / KOLs gewonnen.

## Branchen-Updates

- Scott Aaronson aktualisiert seine Timeline für fehlertolerante Quantencomputer mit Shors Algorithmus auf „vor der nächsten US-Präsidentschaftswahl“: https://scottaaronson.blog/?p=9325

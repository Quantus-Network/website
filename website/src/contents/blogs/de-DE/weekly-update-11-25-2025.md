---
title: "Quantus Weekly: ZK-Transaktionsaggregation und Release der Miner-App"
description: "Wöchentliches Update über den ersten Schritt der ZK-Transaktionsaggregation, die Veröffentlichung der Miner-App v0.1.0 und Fortschritte bei der GPU-Mining-Implementierung."
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: ZK-Transaktionsaggregation und Release der Miner-App"
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

Diese Woche hat das Team den ersten Schritt der ZK-Transaktionsaggregation sowohl für die Chain als auch für das CLI abgeschlossen und Mock-Tests durch tatsächliche Transfer-Verifizierungen ersetzt. Außerdem haben wir das Miner-App v0.1.0 Binary veröffentlicht, das ab sofort verfügbar ist.

## Entwicklungs-News
- Wöchentlicher Github-Aktivitätsbericht inklusive 150+ Gesamt-Events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech
- Ein neues qp-header Primitiv auf der Chain erstellt, das feldorientiert mit unseren Wormhole-Circuits ist und den generischen Header von Substrate ersetzt.
- Den Aggregations-Circuit aktualisiert, um Block-Header-Verifizierungen und Verbindungen zwischen benachbarten Blöcken zu unterstützen.
- Die GPU-Implementierung des Mining-Algorithmus ist zu etwa 80 % abgeschlossen. 
- Die erste Phase des rusty-crystals Audits wurde abgeschlossen, die Probleme wurden größtenteils behoben.
- Ein internes Audit auf Panics in der Runtime durchgeführt (inspiriert durch den jüngsten Cloudflare unwrap-Bug).
- Vesting-Befehle zum CLI für das Standard-Substrate-Pallet hinzugefügt.

## Netzwerk & Infra
- Subsquid-Deployment auf nur ein Skript gestrafft.
- Docker-Image & Release-Prozess für Quantus-Miner erstellt.
- Miner-Stack bereitgestellt (Docker Compose + Monitoring-Stack + Dokumentation).
- Monitoring-Dashboards & Alerts für Explorer & Task Master hinzugefügt.

## Web & Mobile App Updates
- In-App-Empfehlungssystem und benutzerorientierte Event-Tracking-Metriken (Quantus Quests) eingeführt. 
- Miner-App-Binary für alle Plattformen veröffentlicht: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 (bisher wurde jedoch nur Mac gründlich getestet).
- Migrationsprobleme und verschiedene andere Bug-Reports im Mobile Wallet behoben.
- Das Send-Screen-Widget refactored, um es testbar zu machen, und Unit-/Widget-Tests hinzugefügt.
- Die Quests-Seite auf der Website mit Suchfunktionalität aktualisiert.
- Den Task Master Leaderboard-Endpunkt aktualisiert, um Suche zu unterstützen und den Rang in den Ergebnissen hinzugefügt.

## Content & Partnerschaften
- Erstes Community-AMA via X Space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast mit James, Gründer von Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Zwei neue Berater / KOLs gewonnen.

## Branchen-Updates
- Scott Anderson aktualisiert seine Zeitpläne für fehlertolerante Quantencomputer, auf denen Shors Algorithmus läuft, auf „vor der nächsten US-Präsidentschaftswahl“: https://scottaaronson.blog/?p=9325

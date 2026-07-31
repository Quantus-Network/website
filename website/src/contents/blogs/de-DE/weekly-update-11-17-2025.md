---
title: "Quantus Weekly: PoW-Audit abgeschlossen, Dirac live"
description: "Equilibrium schloss PoW- und Poseidon-Audit ab, ZK-Proofs für Block-Header landeten und das Dirac-Testnet startete diese Woche bei Quantus."

pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW-Audit abgeschlossen, Dirac live"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

Diese Woche hat das Team das Audit von Equilibrium für unseren Proof-of-Work-Algorithmus und die Poseidon-Hash-Funktion abgeschlossen und aktualisierte Apps in beide App Stores ausgeliefert.

## Entwicklungs-News

- Wöchentlicher Github-Aktivitätsbericht mit 147 Events insgesamt: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Audit unseres PoW-Algorithmus und der Poseidon-Hash-Funktion mit allen behobenen Issues hier einsehen: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech

- Command-Line Interface (CLI) für das Dirac-Testnet aktualisiert
- ZK-Proof-Generierung für Block-Header-Provenienz – ein wichtiger Meilenstein, da er beweist, dass unsere Circuit-Logik mit dynamischen Daten funktioniert, nicht nur mit statischen Dummy-Proofs.
- Probleme mit dem Node-Command-Line behoben.

## Netzwerk & Infra

- Multi-Arch-Docker-Workflow für die Chain behoben.
- Dirac-Release finalisiert durch Update aller Nodes, Entfernung alter Testnets und Rollout neuer Dashboards und Alerts. Siehe grafana.quantus.cat und telemetry.quantus.cat
- Faucet mit neuen Bibliotheken, neuem Server und Metriken aktualisiert, neuer /king-Command für Referral-Leaderboard.
- Netzwerk-Monitoring mit PostgreSQL-Backend für Grafana erweitert, diverse Fixes und Optimierungen.
- IaC (Infrastructure as Code) auf neuem Server eingerichtet, alle Heisenberg- & Dirac-Nodes verbunden.
- Subsquid-Indexierungsservice für Dirac-Testnet aktualisiert und Prometheus-Metriken hinzugefügt.

## Web- & Mobile-App-Updates

- Mobile Wallet Version 1.1.1 in die App Stores veröffentlicht. Apple verlangt mehr Infos, das sollte aber bald geklärt sein.
- Mobile Wallet für Verbindung zum Dirac-Testnet aktualisiert.
- Mehrere Mobile-Wallet-Bugs behoben, u. a. bei geplanten Benachrichtigungen, Account-Namen-Updates und biometrischer Authentifizierung.
- Miner App auf die neue Dirac-Chain umgestellt und Stats-Reporting behoben.
- Neuer Settings-Screen und In-App-Binary-Update-Feature in der Miner App.
- Task-Master-Anwendung auf Dirac-Testnet migriert und Prometheus-Metriken hinzugefügt.
- Neuer Faucet-Bot-Command zum Leaderboard-Check für unser kommendes Referral-Feature.

## Content & Partnerschaften

- Mehrere Fundraising-Verträge unterwegs und 250.000 $ verbal zugesagt.
- The Quantum Insider für SEO von Quantum Canary und Quantus engagiert.
- Neuen n8n-Flow für Social-Media-Wachstum erstellt (wir haben gerade 500 Podcast-Abonnenten überschritten).
- Podcast mit Jangle, DeFi-Builder: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Branchen-Updates

- Quantum Canary veröffentlichte ein Interview mit Quanten-Kryptograph Dr. Or Sattath zu unklonbarer Kryptografie und Quantum Money und deren Potenzial, Bitcoins Geschwindigkeit, Sicherheit und Privatsphäre zu verbessern: https://www.quantumcanary.org/insights/or-sattath-interview
- 448-Qubit-Neutral-Atom-Computer erreicht Fehlertoleranz https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- Wir diskutieren Quantum FUD und Quantus auf X am Do. 11 Uhr HK-Zeit https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

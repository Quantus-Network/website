---
title: "Quantus Weekly: PoW-Audit abgeschlossen und Start des Dirac-Testnetzes"
description: "Wöchentliches Update über den Abschluss unseres PoW- und Poseidon-Hash-Audits durch Equilibrium, ZK-Proof-Generierung für Block-Header und den Start des Dirac-Testnetzes."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: PoW-Audit abgeschlossen und Start des Dirac-Testnetzes"
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

Diese Woche hat das Team das Audit von Equilibrium für unseren Proof-of-Work-Algorithmus und die Poseidon-Hash-Funktion abgeschlossen und aktualisierte Apps in beide App-Stores ausgeliefert.

## Entwicklungs-News
- Wöchentlicher Github-Aktivitätsbericht inklusive 147 Gesamt-Events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Überprüfen Sie das Audit unseres PoW-Algorithmus und der Poseidon-Hash-Funktion mit allen behobenen Problemen hier: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech
- Das Command-Line-Interface (CLI) wurde aktualisiert, um mit dem Dirac-Testnetz zu funktionieren.
- ZK-Proof-Generierung für die Herkunft von Block-Headern, ein wichtiger Meilenstein, da er beweist, dass unsere Circuit-Logik mit dynamischen Daten funktioniert, nicht nur mit statischen Dummy-Proofs.
- Probleme mit der Node-Kommandozeile wurden behoben.

## Netzwerk & Infra
- Der Multi-Arch-Docker-Workflow für die Chain wurde korrigiert.
- Das Dirac-Release wurde finalisiert, indem alle Nodes aktualisiert, alte Testnetze entfernt und neue Dashboards und Alerts eingeführt wurden. Siehe grafana.quantus.cat und telemetry.quantus.cat.
- Das Faucet wurde mit neuen Bibliotheken, einem neuen Server sowie Metriken und einem neuen /king-Befehl für das Referral-Leaderboard aktualisiert.
- Das Netzwerk-Monitoring wurde mit einem PostgreSQL-Backend für Grafana erweitert, inklusive verschiedener Fixes und Optimierungen.
- IaC (Infrastructure as Code) wurde auf einem neuen Server eingerichtet und verbindet alle Heisenberg- & Dirac-Nodes.
- Der Subsquid-Indizierungsdienst wurde aktualisiert, um das Dirac-Testnetz zu unterstützen, und Prometheus-Metriken wurden hinzugefügt.

## Web & Mobile App Updates
- Mobile Wallet Version 1.1.1 wurde in den App-Stores veröffentlicht. Apple benötigt noch weitere Informationen, was jedoch bald gelöst sein sollte.
- Das Mobile Wallet wurde aktualisiert, um eine Verbindung zum Dirac-Testnetz herzustellen.
- Mehrere Bugs im Mobile Wallet wurden behoben, darunter Probleme mit geplanten Benachrichtigungen, der Aktualisierung von Kontonamen und der biometrischen Authentifizierung.
- Die Miner-App wurde aktualisiert, um die neue Dirac-Chain zu nutzen, und das Stats-Reporting wurde korrigiert.
- Ein neuer Einstellungsbildschirm und eine In-App-Binary-Update-Funktion wurden zur Miner-App hinzugefügt.
- Die Task-Master-Anwendung wurde auf das Dirac-Testnetz migriert und Prometheus-Metriken wurden hinzugefügt.
- Ein neuer Befehl wurde zum Faucet-Bot hinzugefügt, um das Leaderboard für unsere kommende Referral-Funktion zu überprüfen.

## Content & Partnerschaften
- Wir haben mehrere Fundraising-Verträge in Arbeit und 250.000 $ wurden mündlich zugesagt.
- The Quantum Insider wurde beauftragt, das SEO für Quantum Canary und Quantus zu übernehmen.
- Ein neuer n8n-Flow zur Verfolgung des Social-Media-Wachstums wurde erstellt (wir haben gerade die Marke von 500 Podcast-Abonnenten überschritten).
- Podcast mit Jangle, DeFi-Entwickler: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Branchen-Updates
- Quantum Canary veröffentlichte ein Interview mit dem Quantenkryptografen Dr. Or Sattath über unklonbare Kryptografie und Quantengeld und untersuchte dessen Potenzial zur Verbesserung der Geschwindigkeit, Sicherheit und Privatsphäre von Bitcoin: https://www.quantumcanary.org/insights/or-sattath-interview
- Ein 448-Qubit-Neutralatom-Computer erreicht Fehlertoleranz: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces
- Wir werden am Donnerstag um 11 Uhr HK-Zeit auf X über Quantum FUD und Quantus diskutieren: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

---
title: "Quantus Weekly: Dirac-Testnet und Lattice-Audit"
description: "Dirac-Testnet mit neuem PoW und Lattice-Krypto unter externem Audit. Miner sollten upgraden; Wallet und libp2p integrieren das Update."

pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Dirac-Testnet und Lattice-Audit"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

Diese Woche hat das Team das Dirac-Testnet veröffentlicht und damit das chainweite Update des Proof-of-Work-Algorithmus und der Lattice-Kryptografie-Bibliothek qp-rusty-crystals abgeschlossen. Diese Kernbibliothek befindet sich nun in externem Audit und umfasst Constant-Time-Signaturen. Das Update ist in die Mobile Wallet und libp2p integiert.

**WENN IHR MINER SEID, SOLLTET IHR AUF DAS NEUE DIRAC-TESTNET AKTUALISIEREN**

## Entwicklungs-News

- Wöchentlicher Github-Aktivitätsbericht mit 12 Pull Requests und 3 Merges: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech

- Vollständige Referenzimplementierung für qp-rusty-crystals mit Constant-Time-Key-Generierung und -Signaturen veröffentlicht und gemergt.
- Alle KAT-Tests für Rusty Crystals gelöst, Constant-Time umgesetzt und offene Release-Script-Probleme behoben.
- Audit von qp-rusty-crystals initiiert.
- Implementierung des Block-Header-Verifikations-Circuits abgeschlossen.
- Block-Header-Hasher auf neue Version aktualisiert, die Circuit-Padding eliminiert.
- Bug im Zusammenhang mit fehlenden Digest-Logs in Block-Headern untersucht und behoben.
- Caching-Feature zum Wormhole-Example-Binary hinzugefügt, um den neuesten Proof für einfacheres Debugging zu speichern.
- Implementierung des GHOSTDAG-Konsens-Papers begonnen.

## Netzwerk & Infra

- Dirac 0.4.0 auf allen Servern veröffentlicht.
- Externen Miner-Build 1.0.0 veröffentlicht.
- Chain für Rusty-Crystals-Update aktualisiert.
- Neue Prometheus- & Grafana-Dashboards, jetzt mit funktionierenden E-Mail-Benachrichtigungen für Alerts konfiguriert.
- Neuen, aktualisierten Telemetrie-Service eingeführt.
- Referenz-Setup für Fedora-Maschinen erstellt.
- 2 neue gesicherte VPS-Server für das neue Dirac-Testnet deployed.
- Domain Quantus.cat gesichert und Cloudflare-Tunnels für alle Maschinen konfiguriert.
- Subsquid-Deployment-Prozess für Blue-Green-Deployments ohne Downtime aktualisiert.
- Workflows zur automatischen Generierung und Veröffentlichung von Docker-Images auf GitHub erstellt.
- Indexierungsprobleme unter http://quantu.se/ behoben und Metadaten auf die korrekte Node-URL aktualisiert.

## Web- & Mobile-App-Updates

- Mobile-App-Benachrichtigungsfeature abgeschlossen.
- Route-Intent-Handling refactored für bessere Deep-Linking-Performance und -Zuverlässigkeit.
- Miner-Dashboard-Layout ist jetzt vollständig responsiv.
- Quantus-Explorer-Bug behoben, bei dem die Suche noch einen alten GraphQL-Endpoint nutzte.
- Quantus-Explorer-API-Client auf moderne Hooks refactored für bessere Performance.

## Content & Partnerschaften

- Podcast mit Remus Boroiu, 9-facher Bodybuilding-Champion, Unternehmer und Creator.
- Pressemitteilung über Chainwire.

## Quantum Canary

- Eine Analyse von Quanten-Aktien: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Ein Deep Dive in die einflussreiche Rolle der RAND Corporation bei der globalen Policy-Gestaltung und Beschleunigung des PQC-Migrations-Zeitplans: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton verdreifacht Kohärenzzeiten für 45 Tantal-auf-Saphir-Qubits: https://www.nature.com/articles/s41586-025-09687-4

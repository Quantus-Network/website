---
title: "Quantus Weekly: Release des Dirac-Testnetzes und Lattice-Crypto-Audit"
description: "Wöchentliches Update über die Veröffentlichung des Dirac-Testnetzes, finale Updates für den PoW-Algorithmus und die Lattice-Kryptografie-Bibliothek sowie neue Infrastruktur-Verbesserungen."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Release des Dirac-Testnetzes und Lattice-Crypto-Audit"
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

Diese Woche hat das Team das Dirac-Testnetz veröffentlicht und damit das chain-weite Update für den Proof-of-Work-Algorithmus und die Lattice-Kryptografie-Bibliothek qp-rusty-crystals finalisiert. Diese Kernbibliothek befindet sich nun in einem externen Audit und enthält Constant-Time-Signaturen. Das Update ist nun in das Mobile Wallet und libp2p integriert.

**WENN SIE EIN MINER SIND, SOLLTEN SIE AUF DAS NEUE DIRAC-TESTNETZ AKTUALISIEREN**

## Entwicklungs-News

- Wöchentlicher Github-Aktivitätsbericht inklusive 12 Pull-Requests und 3 zusammengeführten: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech

- Vollständige Referenzimplementierung für qp-rusty-crystals mit Constant-Time-Schlüsselgenerierung und Signaturen veröffentlicht und zusammengeführt.
- Alle KAT-Tests für rusty-crystals gelöst, Constant-Time implementiert und ausstehende Probleme mit dem Release-Skript behoben.
- Audit von qp-rusty-crystals eingeleitet.
- Implementierung des Block-Header-Verifizierungs-Circuits abgeschlossen.
- Den Block-Header-Hasher auf eine neue Version aktualisiert, die Circuit-Padding eliminiert.
- Einen Fehler im Zusammenhang mit fehlenden Digest-Logs in Block-Headern untersucht und behoben.
- Eine Caching-Funktion zum Wormhole-Beispiel-Binary hinzugefügt, um den neuesten Proof für einfacheres Debugging zu speichern.
- Beginn der Implementierung des GHOSTDAG-Consensus-Papers.

## Netzwerk & Infra

- Dirac 0.4.0 auf allen Servern veröffentlicht.
- Externes Miner-Build 1.0.0 veröffentlicht.
- Chain für das rusty-crystals-Update aktualisiert.
- Neue Prometheus- & Grafana-Dashboards, jetzt mit funktionierenden E-Mail-Benachrichtigungen für Alerts konfiguriert.
- Neuer aktualisierter Telemetriedienst.
- Ein Referenz-Setup für Fedora-Maschinen erstellt.
- 2 neue gesicherte VPS-Server für das neue Dirac-Testnetz bereitgestellt.
- Die Quantus.cat-Domain gesichert und Cloudflare-Tunnel für alle Maschinen konfiguriert.
- Den Subsquid-Deployment-Prozess auf Blue-Green-Deployments für Zero-Downtime-Updates aktualisiert.
- Workflows zur automatischen Generierung und Veröffentlichung von Docker-Images auf GitHub erstellt.
- Indexierungsprobleme auf http://quantu.se/ behoben und Metadaten aktualisiert, um auf die korrekte Node-URL zu verweisen.

## Web & Mobile App Updates

- Mobile-App-Benachrichtigungsfunktion fertiggestellt.
- Route-Intent-Handling refactored, um die Performance und Zuverlässigkeit von Deep-Links zu verbessern.
- Das Miner-Dashboard-Layout ist nun vollständig responsiv.
- Einen Fehler im Quantus Explorer behoben, bei dem die Suchfunktion noch einen alten GraphQL-Endpunkt verwendete.
- Quantus Explorer API-Client refactored, um moderne Hooks für bessere Performance zu nutzen.

## Content & Partnerschaften

- Podcast mit Remus Boroiu, einem 9-fachen Bodybuilding-Champion, Unternehmer und Creator: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Pressemitteilung via Chainwire.

## Quantum Canary

- Eine Analyse von Quanten-Aktien: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Ein Deep Dive in die einflussreiche Rolle der RAND Corporation bei der Gestaltung globaler Politik und der Beschleunigung des Zeitplans für die PQC-Migration: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton erforscht dreifache Kohärenzzeiten für 45 Tantal-auf-Saphir-Qubits: https://www.nature.com/articles/s41586-025-09687-4

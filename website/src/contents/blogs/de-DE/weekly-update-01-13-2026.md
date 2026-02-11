---
title: "Quantus Weekly: Threshold Dilithium Signaturen und verteilte Koordination"
description: "Wöchentliches Update zu Threshold Signaturen, ZK-Circuit-Verbesserungen, Mobile-Wallet-Updates und Community-Inhalten."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Threshold Dilithium Signaturen und verteilte Koordination"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

Macht und Autorität auf mehrere Parteien verteilt. Verteilte Koordination.

Doch Post-Quanten-Signaturen sind 20- bis 80-mal größer als Bitcoin-Signaturen. Eine traditionelle Multisig-Lösung hat ihre Berechtigung, verursacht aber einen Overhead, der für bestimmte Anwendungsfälle inakzeptabel ist.

Diese Woche haben wir Threshold Dilithium Signaturen veröffentlicht. Dies ermöglicht es einer verteilten Gruppe, Transaktionen zu signieren und eine einzige Signatur on-chain zu generieren. Im Grunde genommen ein Sharding des privaten Schlüssels.

Dies ist notwendig für Custodians, netzwerkübergreifende Anwendungen und die sichere automatisierte Nutzung der Chain.

Wöchentlicher Github-Aktivitätsbericht inklusive 4 gemergter Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core Tech & ZK

- Implementierung von Threshold Signaturen, die sicheres verteiltes Signieren ermöglichen.
- Reduzierung des ZK-Circuit-Overheads.
- Unterstützung für Proof-Aggregation zum Wormhole-Beispiel-Binary hinzugefügt, laufende Integration in die Chain und CLI.
- Upgrade unserer ZK-Circuits und des Poseidon-Hashing-Algorithmus zur universellen Handhabung aller Datentypen (Generic Storage Hashing), jetzt in die Chain und CLI integriert.
- Unterstützung für Proof-Aggregation über Asset-IDs innerhalb der ZK-Circuits hinzugefügt.
- Optimierung der CLI für eine schnellere Transaktionsverarbeitung und Hinzufügen von hochsicheren Recovery-Skripten.

## Web & Mobile App Updates

- Veröffentlichung einer neuen Version der UI Mining App mit granularen Schiebereglern für die CPU- und GPU-Nutzung sowie Fixes für das Hashrate-Reporting.
- Finalisierung und Mergen des vollständigen Hardware-Wallet-Supports in die mobile App.
- Unterstützung für die Verwaltung mehrerer Accounts innerhalb einer einzigen mobilen Wallet-Instanz hinzugefügt.
- Implementierung hochsicherer Bildschirme und Beginn der Entwicklung von „Guardian“-Wiederherstellungsabläufen.
- Verfeinerung des „Senden“-Bildschirms UX, Verbesserung der Fehlerbehandlung, Behebung von Authentifizierungs-Timer-Bugs und Vereinheitlichung der App-Icons.
- Konfiguration täglicher Datenbank-Backups, Behebung von Systemdiensten und Bereinigung des Task Master Codes (Wallet App Event Tracking).

## Content & Partnerschaften

- Aktualisierung des Whitepapers mit den neuesten Protokolldetails und Einführung eines GitHub-Versionierungssystems: https://github.com/Quantus-Network/whitepaper
- Veröffentlichung unserer Entstehungsgeschichte „From the Ground Up“: https://x.com/JoeMattia/status/2010619972398297164
- Podcast mit Sina (@hubsmoke) über die Wiederherstellung des Vertrauens in die Wissenschaft: https://x.com/QuantusNetwork/status/2009929397579723213

## Branchen-Updates

- Quantum Canary hat einen Leitfaden zu quantensicheren Krypto-Wallets veröffentlicht: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

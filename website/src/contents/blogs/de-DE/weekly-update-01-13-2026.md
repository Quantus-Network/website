---
published: true
title: "Quantus Weekly: Dilithium-Schwellenwertsignaturen"
description: "Dilithium-Schwellenwertsignaturen für verteilte Koordination, leichtere ZK-Circuits, Wormhole-Proof-Aggregation und Mobile-Wallet-Updates – unser Weekly Update."

pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Dilithium-Schwellenwertsignaturen"
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

Post-Quanten-Signaturen sind jedoch 20- bis 80-mal größer als Bitcoin-Signaturen. Eine klassische Multisig-Lösung hat ihren Platz, bringt aber Overhead mit sich, der für bestimmte Anwendungsfälle inakzeptabel ist.

Diese Woche haben wir Dilithium-Schwellenwertsignaturen ausgeliefert. Damit kann eine verteilte Gruppe Transaktionen signieren und eine einzige Signatur on-chain erzeugen. Im Grunde: einen privaten Schlüssel sharden.

Das ist nötig für Custodians, Cross-Network-Anwendungen und die sichere automatisierte Nutzung der Chain.

Wöchentlicher Github-Aktivitätsbericht mit 4 gemergten Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core-Tech & ZK

- Schwellenwertsignaturen implementiert – sicheres verteiltes Signieren ist damit möglich.
- Overhead der ZK-Circuits reduziert.
- Proof-Aggregation im Wormhole-Beispiel-Binary ergänzt; Integration in Chain und CLI läuft.
- ZK-Circuits und Poseidon-Hashing auf universelle Verarbeitung aller Datentypen (generisches Storage-Hashing) aktualisiert – jetzt in Chain und CLI integriert.
- Proof-Aggregation über Asset-IDs in den ZK-Circuits unterstützt.
- CLI für schnellere Transaktionsverarbeitung optimiert und High-Security-Recovery-Skripte ergänzt.

## Web- & Mobile-App-Updates

- Neue Version der UI-Mining-App mit granularen Slidern für CPU- und GPU-Nutzung sowie Fixes für die Hashrate-Meldung veröffentlicht.
- Vollständige Hardware-Wallet-Unterstützung in der Mobile App finalisiert und gemergt.
- Verwaltung mehrerer Konten in einer einzigen Mobile-Wallet-Instanz unterstützt.
- High-Security-Screens implementiert und Entwicklung der „Guardian“-Recovery-Flows begonnen.
- UX des Sende-Screens verfeinert, Fehlerbehandlung verbessert, Authentifizierungs-Timer-Bugs behoben und App-Icons vereinheitlicht.
- Tägliche Datenbank-Backups konfiguriert, Systemdienste repariert und Task-Master-Code bereinigt (Wallet-App-Event-Tracking).

## Content & Partnerschaften

- Whitepaper mit den neuesten Protokolldetails aktualisiert und GitHub-Versionierung eingerichtet: https://github.com/Quantus-Network/whitepaper
- Lore hat unsere Origin Story „From the Ground Up“ veröffentlicht: https://x.com/JoeMattia/status/2010619972398297164
- Podcast mit Sina (@hubsmoke) über Vertrauen in die Wissenschaft wiederherstellen: https://x.com/QuantusNetwork/status/2009929397579723213

## Branchen-Updates

- Quantum Canary hat einen Leitfaden zu Quantum-Safe-Crypto-Wallets veröffentlicht: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

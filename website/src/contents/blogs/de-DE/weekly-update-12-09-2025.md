---
title: "Quantus Weekly: Poseidon2-Optimierung und Refactor der Chain-Architektur"
description: "Wöchentliches Update mit 8,3-mal schnelleren Poseidon2-Gates, einem großen Refactor der Chain-Architektur, der 9.000 Zeilen Code entfernt hat, und Neuigkeiten von der Binance Blockchain Week."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Poseidon2-Optimierung und Refactor der Chain-Architektur"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

Sie haben wahrscheinlich [dieses Interview mit @EliBenSasson und Scott Aaronson](https://x.com/Starknet/status/1995865652377395421) gesehen.

![Nic Carter Interview-Zusammenfassung](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

Im Interview sagte Scott: „Wir haben uns entschieden, so viel von der weltweiten Cybersicherheitsinfrastruktur auf kryptografischen Codes wie RSA, Diffie-Hellman und elliptischer Kurvenkryptografie aufzubauen, die zufällig diese mathematischen Eigenschaften haben, die ein Quantencomputer ausnutzen kann.“

Das ist eine schwer zu schluckende Pille.

Besonders für Bitcoin, dem es konstruktionsbedingt an der Fähigkeit mangelt, große Protokoll-Upgrades einfach zu planen und auszuführen.

Das bedeutet, dass der Weg des geringsten Widerstands für die Bitcoin-Community darin bestand, die Existenz des Problems zu leugnen.

![Charles Edwards über die Quantenbedrohung](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Aber angesichts der jüngsten Durchbrüche bei der Fehlerkorrektur, der Qubit-Skalierung und der Fidelität stellt die Leugnung des Fortschritts beim Quantencomputing ein existenzielles Risiko für Bitcoin und damit für die menschlichen Eigentumsrechte dar.

Wir müssen uns also dem Nebel der Quantenzukunft stellen und akzeptieren, dass viele Blockchains versagt haben werden zu handeln, wenn der Q-Day kommt.

Es ist unsere Pflicht zu handeln.

Hier ist, was wir diese Woche getan haben, um das quantensichere Bitcoin zu bauen:

Wöchentlicher Github-Aktivitätsbericht inklusive 8 zusammengeführter Pull-Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK

- Optimierung des Poseidon2-Gates. Reduzierung der Circuit-Trace-Zeilen pro Permutation von 31 auf 1. Dies macht das Gate 8,3-mal schneller und führt zu einer 4,5-fachen Gesamtbeschleunigung für den größeren Wormhole-Prover.
- Refactor der Chain-Architektur zur Verwendung von Transaktionserweiterungen für die Aufzeichnung von Wormhole-Proofs. Dies machte einen benutzerdefinierten Fork des Balances-Pallets überflüssig und entfernte etwa 9.000 Zeilen Code.
- Asset-ID-Unterstützung für Wormhole-Transfers hinzugefügt.
- Behebung der im qp-rusty-crystals-Audit aufgeworfenen Probleme.

## Netzwerk & Infra

- Verbesserung der GPU-Miner-Implementierung.
- Aktualisierung und Zusammenführung von sc-network, einschließlich eines Fixes für das Peer-Broadcasting für eine reibungslosere Knotensynchronisation.
- Archivierung der Schrödinger-Netzwerkhistorie (altes Testnetz).
- Debugging und Verbesserung unserer Subsquid-Architektur. Hinzufügen eines neuen Monitor-Skripts und von Neustart-Protokollen zur Verbesserung der Datenverfügbarkeit für Explorer und Wallet.

## Web & Mobile App Updates

- Verbesserung der Keystone-Integration, Hinzufügen von PIN-Cache-Löschung und QR-Code mit PIN-Sicherheit.
- Veröffentlichung unseres rusx-Repos zur Verbindung von X OAuth mit der mobilen App und Upgrade des Backends zur Unterstützung von Tweet-Abfragen und -Suchen.
- Veröffentlichung eines Updates zur Behebung verschiedener Fehler, einschließlich Problemen bei der Ganzzahlverarbeitung und falsch-positiven Fehlermeldungen.

## Content & Partnerschaften

- Wir sind in Dubai für die Binance Blockchain Week und das Solana Breakpoint, treffen uns mit Beratern, KOLs und binden neue Nutzer ein.
- Halten Sie Ausschau nach unserem wöchentlichen X Space, der für Donnerstag geplant ist.
- Podcast mit dem Quantus-Team: https://www.youtube.com/watch?v=konWKWrl5hs

---
published: true
title: "Quantus Weekly: Schnelleres Poseidon2, schlankere Chain"
description: "Poseidon2-Gates nach Optimierung 8,3× schneller, Chain-Refactor streicht ~9.000 Zeilen – Notizen von der Binance Blockchain Week."

pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Schnelleres Poseidon2, schlankere Chain"
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

Ihr habt wahrscheinlich [dieses Interview mit @EliBenSasson und Scott Aaronson](https://x.com/Starknet/status/1995865652377395421) gesehen.

![Nic Carter interview summary](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

Im Interview sagte Scott: „Wir haben so viel der weltweiten Cybersicherheits-Infrastruktur auf kryptografische Codes wie RSA, Diffie-Hellman und elliptische Kurven-Kryptografie aufgebaut, die zufällig genau die mathematischen Eigenschaften haben, die ein Quantencomputer ausnutzen kann.“

Das ist eine bittere Pille.

Besonders für Bitcoin, der by Design nicht leicht große Protokoll-Upgrades planen und umsetzen kann.

Das bedeutet, dass der Weg des geringsten Widerstands für die Bitcoin-Community darin bestand, zu leugnen, dass das Problem existiert.

![Charles Edwards on Quantum Threat](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Doch mit jüngsten Durchbrüchen bei Fehlerkorrektur, Qubit-Skalierung und Fidelity stellt die Leugnung von Quantencomputing-Fortschritt ein existenzielles Risiko für Bitcoin und damit für menschliche Eigentumsrechte dar.

Wir müssen also den Nebel der Quanten-Zukunft durchdringen und akzeptieren, dass viele Blockchains am Q-Day versagt haben werden zu handeln.

Unsere Pflicht ist es, zu handeln.

Das haben wir diese Woche getan, um quantensicheres Bitcoin zu bauen:

Wöchentlicher Github-Aktivitätsbericht mit 8 gemergten Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core-Tech & ZK

- Poseidon2-Gate optimiert. Circuit-Trace-Rows pro Permutation von 31 auf 1 reduziert. Das macht das Gate 8,3× schneller und führt zu einer 4,5× Gesamt-Beschleunigung für den größeren Wormhole-Prover.
- Chain-Architektur refactoriert, um Transaction Extensions für die Aufzeichnung von Wormhole-Proofs zu nutzen. Damit entfiel die Notwendigkeit eines Custom-Forks des Balances-Pallets – etwa 9.000 Zeilen Code weniger.
- Asset-ID-Support für Wormhole-Transfers hinzugefügt
- Im qp-rusty-crystals-Audit gemeldete Issues behoben

## Netzwerk & Infra

- GPU-Miner-Implementierung verbessert
- sc-network aktualisiert und gemergt, inkl. Fix für Peer-Broadcasting für flüssigere Node-Synchronisation.
- Netzwerk-Historie von Schrodinger (altem Testnet) archiviert.
- Subsquid-Architektur debuggt und verbessert. Neues Monitor-Script und Restart-Protokolle für bessere Data-Uptime für Explorer und Wallet.

## Web- & Mobile-App-Updates

- Keystone-Integration verbessert, PIN-Cache-Wiping und QR-Code-mit-PIN-Sicherheit hinzugefügt.
- rusx-Repo für X-OAuth-Verbindung zur Mobile App veröffentlicht und Backend für Tweet-Querying und -Suche erweitert.
- Update mit diversen Bugfixes veröffentlicht, u. a. Integer-Handling und falsch-positive Fehler-Benachrichtigungen

## Content & Partnerschaften

- Wir sind in Dubai für Binance Blockchain Week und Solana Breakpoint – Treffen mit Advisors, KOLs und Onboarding neuer Nutzer.
- Haltet Ausschau nach unserem wöchentlichen X Space am Donnerstag
- Podcast mit dem Quantus-Team: https://www.youtube.com/watch?v=konWKWrl5hs

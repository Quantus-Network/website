---
published: true
title: "Quantus Weekly: Lattice-Audit und Keystone-Wallet"
description: "Audit-Findings in Rusty Crystals geschlossen, Polkadot-SDK-Netzwerk aktualisiert, Quantus-Adressen auf Keystone-Hardware-Wallet-Firmware."

pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Lattice-Audit und Keystone-Wallet"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

Letzte Woche hat das Team alle im Audit unserer Lattice-Krypto-Bibliothek (rusty-crystals) gemeldeten Issues behoben und Netzwerk-Updates ausgeliefert, um mit dem neuesten Polkadot SDK übereinzustimmen. Außerdem haben wir Quantus-Adress-Support in der Open-Source-Keystone-Hardware-Wallet-Firmware implementiert und unser Profil auf der Market-Intelligence-Plattform „The Quantum Insider“ listen lassen.

Wöchentlicher Github-Aktivitätsbericht mit 17 gemergten Pull Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech

- Alle Findings im Audit der Kern-Lattice-Kryptografie-Bibliothek (qp-rusty-crystals) behoben.
- ZK-Aggregation-Proof-Vorbereitung (Circuits, Benchmarks und QIP-Dokumentation) für das kommende Audit abgeschlossen.
- Optimierungen im Plonky2-Poseidon2-Gate und zk-trie für höhere Proving-Geschwindigkeit gefunden.
- qp-header zurückgerollt und sc-network aktualisiert, um mit den neuesten Polkadot-SDK-Standards übereinzustimmen.

## Netzwerk & Infra

- Desktop-UI-Miner für Windows veröffentlicht, Bugfixes für Linux und macOS: https://github.com/Quantus-Network/quantus-apps/releases/latest
- Potenzielle P2P-Sicherheitslücke im Peer-Broadcasting gepatcht, um zu verhindern, dass bösartige Peers das Netzwerk überlasten.
- Quantus-Adress-Support in der Open-Source-Keystone-Hardware-Wallet-Firmware implementiert (aktuell im Simulator).

## Web- & Mobile-App-Updates

- Mobile Wallet v1.1.2 in die App Stores veröffentlicht – Probleme mit Polling, Transaktions-Flows und Benachrichtigungen behoben.
- Rust SDK für die X API (rusx) gebaut und Endpoints hinzugefügt, um X- und ETH-Accounts für User Quests zu verknüpfen.

## Content & Partnerschaften

- Listing auf The Quantum Insider gesichert – bessere Backlinks und Sichtbarkeit bei Quanten-Analysten.
- Podcast auf Apple, Spotify und RSS gestartet: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- Ersten Newsletter an E-Mail-Abonnenten versendet.
- Community X Space für diesen Donnerstag geplant: https://x.com/i/spaces/1mnGeNXoZOZJX
- Podcast mit Brian Chau, ML-Forscher: https://www.youtube.com/watch?v=m_FPbzAcXEk

## Branchen-Updates

- Quantum Canary veröffentlichte einen strategischen Leitfaden zur Minderung von „Harvest Now, Crack Later“-Bedrohungen mit einem pragmatischen Migrationspfad unter den neu finalisierten NIST-Post-Quantum-Standards: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive

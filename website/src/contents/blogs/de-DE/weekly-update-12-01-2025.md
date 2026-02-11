---
title: "Quantus Weekly: Lattice-Crypto-Audit und Keystone-Integration"
description: "Wöchentliches Update über das erfolgreiche Audit unserer Lattice-Crypto-Bibliothek, Networking-Updates für das Polkadot SDK und neue Hardware-Wallet-Unterstützung auf Keystone."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Lattice-Crypto-Audit und Keystone-Integration"
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

Letzte Woche hat das Team alle im Audit unserer Lattice-Crypto-Bibliothek (rusty-crystals) aufgeworfenen Probleme behoben und Networking-Updates veröffentlicht, um sie an das neueste Polkadot SDK anzupassen. Wir haben außerdem die Unterstützung von Quantus-Adressen in der Open-Source-Firmware der Keystone-Hardware-Wallet implementiert und unser Profil auf der Market-Intelligence-Plattform „The Quantum Insider“ listen lassen.

Wöchentlicher Github-Aktivitätsbericht inklusive 17 zusammengeführter Pull-Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech
- Alle Erkenntnisse aus dem Audit der Kern-Lattice-Kryptografie-Bibliothek (qp-rusty-crystals) wurden behoben.
- Vorbereitung der ZK-Aggregation-Proofs (Circuits, Benchmarks und QIP-Dokumentation) für das anstehende Audit abgeschlossen.
- Optimierungen im Plonky2 Poseidon2-Gate und ZK-Trie zur Erhöhung der Proving-Geschwindigkeit gefunden.
- Rollback von qp-header und Aktualisierung von sc-network zur Anpassung an die neuesten Polkadot SDK-Standards.

## Netzwerk & Infra
- Veröffentlichung des Desktop UI Miners für Windows, Bugfixes für Linux und MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest 
- Behebung einer potenziellen P2P-Sicherheitslücke im Zusammenhang mit Peer-Broadcasting, um zu verhindern, dass bösartige Peers das Netzwerk überlasten.
- Unterstützung von Quantus-Adressen in der Open-Source-Firmware der Keystone-Hardware-Wallet implementiert (derzeit im Simulator).

## Web & Mobile App Updates
- Mobile Wallet v1.1.2 in den App Stores veröffentlicht, Behebung von Problemen mit Polling, Transaktionsflüssen und Benachrichtigungen.
- Aufbau eines Rust SDK für die X-API (rusx) und Hinzufügen von Endpunkten zur Verknüpfung von X- und ETH-Konten für Nutzer-Quests.

## Content & Partnerschaften
- Listung auf The Quantum Insider gesichert, was die Backlinks und die Sichtbarkeit für Quanten-Analysten verbessert.
- Start des Podcasts auf Apple, Spotify und RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112  
- Erster Newsletter an E-Mail-Abonnenten versendet.
- Community X Space für diesen Donnerstag geplant: https://x.com/i/spaces/1mnGeNXoZOZJX 
- Podcast mit Brian Chau, ML-Forscher: https://www.youtube.com/watch?v=m_FPbzAcXEk 

## Branchen-Updates
- Quantum Canary veröffentlichte einen strategischen Leitfaden zur Minderung von „Harvest Now, Crack Later“-Bedrohungen und skizzierte einen pragmatischen Migrationspfad unter Verwendung der neu finalisierten NIST-Post-Quanten-Standards: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive 

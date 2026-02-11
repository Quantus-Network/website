---
title: "Quantus Weekly: GPU-Mining und Dirac-Netzwerk-Stresstest"
description: "Wöchentliches Update über die Veröffentlichung von Quantus Miner v2.0.2 mit GPU-Unterstützung, Dirac-Netzwerk-Stresstests und Aktualisierungen der Chain-Architektur."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Weekly: GPU-Mining und Dirac-Netzwerk-Stresstest"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

Diese Woche haben wir offiziell den Quantus Miner v2.0.2 mit GPU-Unterstützung veröffentlicht und das Dirac-Netzwerk erfolgreich einem Stresstest unterzogen.

Wir haben auch die Chain-Architektur aktualisiert, um eine Obergrenze von 21 Millionen Coins zu unterstützen, und die Codebasis bereinigt, indem wir veraltete Vesting- und Treasury-Pallets entfernt haben.

Wöchentlicher Github-Aktivitätsbericht mit 6 gemergten Pull-Requests: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- Die Chain-Spezifikation wurde aktualisiert, um die neue Obergrenze von 21 Millionen Coins widerzuspiegeln.
- Vereinfachung der Core-Chain-Architektur durch Entfernen der Vesting- und Treasury-Pallets.
- Abschluss der generischen Poseidon-Storage-Hashing-Unterstützung, um Panics in der Runtime zu verhindern.
- Unterstützung für Asset-IDs in unseren ZK-Circuits und dem CLI hinzugefügt.

## Network & Infra

- Stresstest von Dirac durchgeführt, um zu beobachten, wie sich eine Überlastung der Chain auf die Blockzeiten auswirkt.
- Veröffentlichung von Quantus Miner v2.0.2, der nun offiziell GPU-Mining unterstützt: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- Finalisierung des Hardware-Wallet-Signier-Flows auf dem Handy, einschließlich QR-Code-Signaturübertragung, Unterstützung für mehrere Wallets und Unlinking-Funktionalität.
- Implementierung von „Raid Quests“ mit Telegram, Website und internem Tracking über Task Master, um das Community-Engagement auf X zu fördern. Wallet-Implementierung in Arbeit.
- Behebung von Backend-CORS-Fehlern und Verbesserung des Daten-Trackings für soziale Interaktionen.
- Behebung von Block-Explorer-Fehlern, die die Berichterstattung über Miner-Belohnungen und den Netzwerkwechsel betrafen.

## Content & Partnerships

- Sicherung von Investitionen von zwei strategischen Partnern, die auf dem Peer Summit getroffen wurden.
- Abschluss von Treffen zur Launch-Strategie und Entwurf eines aktualisierten Whitepapers, das die neue Tokenomics und GTM widerspiegelt.
- Episode mit Cezary, erfahrenem Softwarearchitekten und Systemingenieur: https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- Artikel von Quantum Canary zur Analyse des Risikos eines staatlichen Angriffs auf Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

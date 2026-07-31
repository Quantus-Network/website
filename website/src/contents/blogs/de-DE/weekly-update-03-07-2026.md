---
title: "Quantus Weekly: Wormhole-Transaktionen"
description: "Wormhole-Transaktionen, private Blockbelohnungen für Miner, Consensus-Fixes und Wallet-Updates — unser Wochenrückblick bei Quantus."
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: Wormhole-Transaktionen"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

Du verbrennst Coins an eine nicht ausgebende Adresse.

Ein ZK-Proof prägt sie an einem neuen Ort.

Die Spur ist weg.

[@QuantusNetwork](https://x.com/@QuantusNetwork) nennt das „Wormhole“-Transaktionen.

Du sendest Coins an eine Wormhole-Adresse, die auf dem Ledger identisch aussieht wie jedes andere Konto. Die Adresse ist aber mathematisch nicht ausgebbar. Zum Abheben beweist du mit einem ZK-Proof, dass du ein Geheimnis kennst — und die Chain prägt gleichwertige Coins an eine frische Exit-Adresse.

Niemand kann den Eingang mit dem Ausgang verbinden.

Hier wird es für Miner interessant.

Das Protokoll verlangt, dass Miner ein 32-Byte-Preimage für ihre Reward-Adresse einreichen. Die Chain hasht es zur Adresse.

Dilithium-Public-Keys sind riesig. Sie passen nicht in 32 Bytes. Das Preimage kann also kein echter Public Key sein — und die resultierende Adresse ist garantiert eine nicht ausgebare Wormhole-Adresse.

Privatsphäre wird vom Protokoll erzwungen, ohne Opt-in.

Diese Woche haben wir das in die Miner-App eingebaut. Im nächsten Testnet laufen alle Blockbelohnungen standardmäßig über Wormhole-Adressen.

Das haben wir diese Woche sonst noch gebaut.

### GitHub-Aktivität (11 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Wormhole-Withdrawals in die Miner-App integriert — Miner erhalten standardmäßig private Blockbelohnungen.
- Consensus-Bug bei schwerster/längster Chain behoben sowie mehrere weitere Chain-Bugs.
- Aktualisierte Core-Bibliotheken veröffentlicht: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Netzwerk & Infra:

- Substrate-Abhängigkeiten von stable2506 auf stable2512-2 aktualisiert.
- CLI, sc-network-Fork und NEAR-Fork mit neuen Abhängigkeiten aktualisiert.
- Heisenberg-Nodes mit aktualisierter Codebasis und Tech-Collective-Governance getestet.
- Senoti-Benachrichtigungssystem: RabbitMQ-Start-Glitch behoben, Auth-Layer vom Device Registrar entfernt, Failover-Verbindungsbehandlung korrigiert.

### Web- & Mobile-App-Updates:

- Wallet v1.2.0 und v1.2.1 mit aktualisierten Grafiken in alle App Stores gebracht.
- Mobile-App-Version mit „Swap“-Button zum Review-Prozess an den App Store geschickt.
- Happy Checkphrase mit positiverer Wortliste in Wallet und Explorer ausgerollt.
- Android Edge-to-Edge-Display-Fix.
- Recovery-Phrase-UI-Update, Button-Komponenten-Fixes, standardisierte Icon-Buttons und Reset-Sheet-Update.
- Remote-Notification-Integration aktualisiert und Notification-Support auf alle Wallets erweitert.

### Content & Partnerschaften:

- Panel-Diskussion zu Privatsphäre und Quantensicherheit mit [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman) und [Kenbak](https://x.com/k6nb4k) (Cipherscan) bei Network School moderiert.

### Branchen-Updates:

- [Quantum Canary Artikel](https://x.com/QuantumCanary_/status/2027639894944956645) zu ZK & Quantencomputing

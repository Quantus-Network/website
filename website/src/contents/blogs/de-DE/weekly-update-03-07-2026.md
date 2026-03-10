---
title: "Quantus Weekly: Wormhole-Transaktionen"
description: "Wöchentliches Update zu Wormhole-Transaktionen, privaten Blockbelohnungen für Miner, Fehlerbehebungen beim Konsens und Wallet-Updates."
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

Sie verbrennen Coins an eine nicht ausgebbare Adresse.

Ein ZK-Proof prägt sie an einem neuen Ort.

Die Spur ist verwischt.

[@QuantusNetwork](https://x.com/@QuantusNetwork) nennt diese "Wormhole"-Transaktionen.

Sie senden Coins an eine Wormhole-Adresse, die identisch mit jedem anderen Konto im Ledger aussieht. Aber die Adresse ist mathematisch nicht ausgebbar. Um abzuheben, beweisen Sie das Wissen über ein Geheimnis mit einem ZK-Proof, und die Chain prägt entsprechende Coins an eine frische Exit-Adresse.

Niemand kann den Eingang mit dem Ausgang verbinden.

Hier wird es für Miner interessant.

Das Protokoll verlangt von Minern, ein 32-Byte-Preimage für ihre Belohnungsadresse einzureichen. Die Chain hasht dieses, um die Adresse zu erstellen.

Dilithium-Public-Keys sind massiv. Sie passen nicht in 32 Bytes. Das Preimage kann also kein echter Public Key sein, und die resultierende Adresse ist garantiert eine nicht ausgebbare Wormhole-Adresse.

Privatsphäre wird durch das Protokoll erzwungen, ohne dass ein Opt-in erforderlich ist.

Diese Woche haben wir dies in die Miner-App eingebaut. Im nächsten Testnet werden alle Blockbelohnungen standardmäßig über Wormhole-Adressen geleitet.

Hier ist, was wir diese Woche sonst noch gebaut haben.

### Github-Aktivität (11 zusammengeführte Pull-Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Wormhole-Abhebungen in die Miner-App integriert, was Minern standardmäßig private Blockbelohnungen ermöglicht.
- Fehler im Heaviest/Longest-Chain-Konsens sowie mehrere andere Chain-Bugs behoben.
- Aktualisierte Core-Bibliotheken veröffentlicht: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Netzwerk & Infrastruktur:

- Substrate-Abhängigkeiten von stable2506 auf stable2512-2 aktualisiert.
- CLI, sc-network-Fork und NEAR-Fork mit neuen Abhängigkeiten aktualisiert.
- Heisenberg-Nodes mit aktualisierter Codebasis und Tech-Collective-Governance getestet.
- Senoti-Benachrichtigungssystem: RabbitMQ-Startfehler behoben, Authentifizierungsschicht vom Geräteregistrar entfernt, Failover-Verbindungshandling korrigiert.

### Web- & Mobile-App-Updates:

- Wallet v1.2.0 und v1.2.1 mit aktualisierten Grafiken in alle App-Stores ausgeliefert.
- Eine Version der mobilen App mit einem "Swap"-Button im App-Store eingereicht, um den Review-Prozess zu starten.
- "Happy Checkphrase" mit einer positiveren Wortliste in Wallet und Explorer eingeführt.
- Android Edge-to-Edge-Display-Fix.
- UI-Update für die Wiederherstellungsphrase, Korrekturen an Button-Komponenten, standardisierte Icon-Buttons und Update für das Reset-Sheet.
- Integration von Remote-Benachrichtigungen aktualisiert und Benachrichtigungsunterstützung auf alle Wallets ausgeweitet.

### Content & Partnerschaften:

- Durchführung einer Podiumsdiskussion über Privatsphäre und Quantensicherheit mit [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman) und [Kenbak](https://x.com/k6nb4k) (Cipherscan) an der Network School.

### Industry Updates:

- [Quantum Canary Artikel](https://x.com/QuantumCanary_/status/2027639894944956645) über ZK & Quantencomputing

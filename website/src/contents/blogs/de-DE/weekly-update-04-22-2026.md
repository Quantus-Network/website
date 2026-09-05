---
published: true
title: "Quantus Weekly: Planck-Claims, 2× Prover-Geschwindigkeit"
description: "Planck ist unser erstes Testnet für post-quantum-private Transaktionen. Miner migrieren, CLI-Reward-Claims in der Wallet, Prover-Durchsatz verdoppelt."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck-Claims, 2× Prover-Geschwindigkeit"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Planck ist unser erstes Testnet mit post-quantum-privaten Quantus-Transaktionen.

Mehr als die Hälfte unserer Miner ist diese Woche zu Planck migriert.

Während andere Chains streiten, ob die Quantenbedrohung real ist, testen wir die Lösung öffentlich unter Last.

Ihr könnt Mining-Belohnungen jetzt über die CLI an eine transparente Adresse in der Mobile Wallet claimen.

Wir haben Mining end-to-end auf Apple Silicon und Linux validiert.

Aktuell unterstützt unsere Mobile UI nur unseren transparenten Adresstyp. Mehr dazu bald.

[docs.quantus.com](https://docs.quantus.com) ist live — dort findet ihr einen Mining-Guide für Node-Setup, Miner-Betrieb und Reward-Claims in die Mobile Wallet.

Wer frühere Quantus-Testnet-Versionen gemined oder genutzt hat, wird beim Update zur Migration aufgefordert.

Euer Guthaben wird zurückgesetzt — aber unter „Mining Rewards“ in den Einstellungen seht ihr weiterhin Gutschrift für jeden Block, den ihr auf früheren Testnets gemined habt.

Wir tracken außerdem, wie viele Blöcke jedes Konto auf Planck mined.

Unsere aggregierte Prover-Geschwindigkeit hat sich diese Woche durch eine 2×8-Split-Architektur verdoppelt.

Und mehr ist diese Woche shipped:

### GitHub-Aktivität (27 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- Aggregierte Prover-Performance durch 2×8-Split-Proving-Architektur verdoppelt (kein ZK pro 8-Leaf-Bundle, ZK-Wrapper auf den Root-Proof).
- Unser ZK-Forschungspaper zur Preprint-Einreichung eingereicht.
- Privacy-Leak-Bug in der neuen Split-Mask-ZK-Option auf qp-plonky2 entdeckt und gepatcht.
- Audit-Items zu Threshold Dilithium adressiert.
- Mining-Belohnungen per CLI claimbar gemacht.
- CLI-Hasher auf blake2-256 aktualisiert.
- CLI-Wormhole-Balance-Recovery-Fix ausgeliefert.
- Tech-Collective-Mitglieder haben ein Runtime-Update erfolgreich ausgeführt.

### Netzwerk & Infra

- Planck: neue Änderungen gemergt und released; internes Planck-Testnet läuft.
- Stress Tests: neue Strategie implementiert, mehrere Runs ausgeführt.
- Faucet: Exception Handling für Twitter verbessert, Metriken für detailliertes Monitoring erweitert.
- Monitoring-Dashboards für Planck und Faucet aktualisiert und erweitert.
- Selektiveres Alerting implementiert.
- A1-Planck-Node nach Deutschland, A2-Planck-Node in die USA verlegt.
- Subsquid für Planck-Testnet aktualisiert: Balance Movement behoben, Hasher auf blake2b zurückgesetzt, Mining-Rewards-Anzeige hinzugefügt.
- Explorer auf Planck-Testnet aktualisiert und Wormhole-Branch korrekt gemergt.
- MVP-Miner end-to-end auf Apple Silicon und Linux; GPU-Mining auf Linux noch in Troubleshooting.
- AI-Mining-Skill (SKILL.md) gebaut; Mining in unter zwei Minuten beim Testen zum Laufen gebracht.

### Web- & Mobile-App-Updates

- [docs.quantus.com](https://docs.quantus.com) ist live.
- [q.day](https://q.day)-Landingpage deployed.
- Mobile Wallet v1.3.2 und v1.3.3 mit Fixes für das neue Testnet ausgeliefert.
- Mining-Belohnungen werden jetzt in der Wallet angezeigt.
- Redesigned Transaction Details, Receive und Activity Screens in der Wallet implementiert.
- Mining-Guide aktualisiert.

### Content & Partnerschaften

- Q-Day-Registrierungen über 100. Mehr unter [q.day](https://q.day).
- Kommentare externer Contributors zu unserem State of Quantum Report erhalten und umgesetzt.

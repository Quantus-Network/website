---
title: "Quantus Weekly: Planck-Testnet, Mining-Belohnungen per CLI und doppelter Prover-Durchsatz"
description: "Planck ist unser erstes Testnet für Post-Quantum-Privattransaktionen—Miners migrieren, Belohnungen lassen sich per CLI in eine transparente Adresse im Mobile Wallet holen, docs.quantus.com liefert eine Mining-Anleitung, und die aggregierte Prover-Geschwindigkeit verdoppelt sich mit einer 2x8-Split-Architektur."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Planck-Testnet, Mining-Belohnungen per CLI und doppelter Prover-Durchsatz"
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

Planck ist unser erstes Testnet, das private Post-Quantum-Transaktionen von Quantus unterstützt.

Mehr als die Hälfte unserer Miner ist diese Woche auf Planck umgezogen.

Während andere Chains darüber diskutieren, ob die Quantenbedrohung real ist, stresstesten wir die Lösung öffentlich.

Mining-Belohnungen kannst du jetzt per CLI auf eine transparente Adresse im Mobile Wallet beanspruchen.

Wir haben Mining End-to-End auf Apple Silicon und Linux validiert.

Aktuell unterstützt unsere Mobile-UI nur unseren transparenten Adresstyp. Mehr dazu bald.

[docs.quantus.com](https://docs.quantus.com) ist live—dort findest du eine Mining-Anleitung für Node-Setup, Miner-Betrieb und das Einfordern von Belohnungen ins Mobile Wallet.

Wenn du vorher Quantus-Testnets gemined oder genutzt hast, fordert dich die App beim Update zur Migration auf.

Dein Saldo wird zurückgesetzt, aber unter „Mining-Belohnungen“ in den Einstellungen siehst du weiterhin Guthaben für jeden Block, den du auf früheren Testnets gemined hast.

Wir erfassen außerdem, wie viele Blocks jedes Konto auf Planck minet.

Unsere aggregierte Prover-Geschwindigkeit hat sich diese Woche per 2x8-Split-Architektur verdoppelt.

Und es ist noch mehr ausgeliefert worden.

### GitHub-Aktivität (27 zusammengeführte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- Aggregierte Prover-Performance per 2x8-Split-Proving verdoppelt (kein ZK auf jedem 8-Leaf-Bundle, ZK-Wrapper auf dem Root-Proof).
- ZK-Forschungsarbeit zur Preprint-Einreichung eingereicht.
- Privacy-Leak im neuen Split-Mask-ZK-Option auf qp-plonky2 gefunden und gepatcht.
- Audit-Punkte zu Threshold Dilithium bearbeitet.
- Mining-Belohnungen per CLI einlösbar gemacht.
- CLI-Hasher auf blake2-256 aktualisiert.
- Fix für Wormhole-Saldo-Wiederherstellung in der CLI ausgeliefert.
- Tech-Collective-Mitglieder haben ein Runtime-Update erfolgreich ausgeführt.

### Netzwerk & Infra

- Planck: neue Änderungen gemerged und released; internes Planck-Testnet läuft.
- Stresstests: neue Strategie umgesetzt, mehrere Läufe ausgeführt.
- Faucet: bessere Exception-Behandlung für Twitter, erweiterte Metriken für detailliertes Monitoring.
- Monitoring-Dashboards für Planck und den Faucet erneuert und erweitert.
- Selektiveres Alerting umgesetzt.
- A1-Planck-Node nach Deutschland, A2-Planck-Node in die USA verlegt.
- Subsquid für Planck-Testnet aktualisiert: Balance-Bewegung gefixt, Hasher auf blake2b zurückgestellt, Mining-Belohnungen angezeigt.
- Explorer auf Planck-Testnet aktualisiert und Wormhole-Branch sauber gemerged.
- MVP-Miner End-to-End auf Apple Silicon und Linux gefahren; GPU-Mining unter Linux noch in Fehlersuche.
- AI-Mining-Skill (SKILL.md) gebaut; beim Testen Mining in unter zwei Minuten zum Laufen gebracht.

### Web- & Mobile-App-Updates

- [docs.quantus.com](https://docs.quantus.com) ist live.
- Landingpage [q.day](https://q.day) deployed.
- Mobile Wallet v1.3.2 und v1.3.3 mit Fixes für das neue Testnet ausgeliefert.
- Mining-Belohnungen werden im Wallet angezeigt.
- Überarbeitete Transaktionsdetails-, Empfangs- und Aktivitäts-Screens im Wallet.
- Mining-Guide aktualisiert.

### Content & Partnerschaften

- Q-Day-Registrierungen über 100. Mehr auf [q.day](https://q.day).
- Kommentare externer Mitwirkenden zum State of Quantum Report eingegangen und umgesetzt.

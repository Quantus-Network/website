---
title: "Quantus Weekly: Zweites Halving, 4× schnellere Proofs"
description: "Zweite Halbierung der Prover-Zeit: 4× schnellere ZK-Proofs in zwei Wochen. Poseidon, Mining-Fixes, Senoti-Limits, Whitepaper und Quantum Canary."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: Zweites Halving, 4× schnellere Proofs"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 ist eine besondere Zahl.

2+2 ist 4. 2×2 ist 4. 2² ist 4.

Es ist die einzige Zahl, bei der Addition, Multiplikation und Potenzierung dasselbe Ergebnis liefern.

Vor zwei Wochen haben wir unsere ZK-Proving-Pipeline deutlich optimiert.

Letzte Woche haben wir die Prover-Zeit halbiert (geteilt durch 2).

Diese Woche halbiert — das zweite Halving.

4× schneller in 14 Tagen.

Jede Millisekunde in der Proving-Pipeline zählt für Geschwindigkeit und UX unserer privaten Transaktionen.

Wenn ein Nutzer auf Senden tippt, will er, dass der Empfänger die Mittel sofort sieht.

Unsere Wormhole-Transaktionen — die die Verbindung zwischen Sender und Empfänger trennen — brauchen einen ZK-Proof.

Der ZK-Proof kostet zusätzliche Zeit vor dem Settlement. Jede Sekunde, in der der Empfänger den Bildschirm aktualisiert und nichts sieht, ist ein Fehlschlag.

UI-Tricks können die Erfahrung verbessern — und das ist gut.

Aber Settlement muss sich schnell anfühlen und schnell sein.

Wir schleifen diese Sekunden runter.

Das ist diese Woche sonst noch shipped.

### GitHub-Aktivität (12 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- Weitere 50 % Reduktion der Prover-Zeit durch ZK-freundliche Datenbank-Optimierungen. Zweite Woche in Folge mit 2×-Verbesserung der Proving-Pipeline.
- Nicht-injektives Hashing in Poseidon implementiert, mit versionierten Releases für qp-poseidon-constants.
- Difficulty-Adjustment-Fix für einen Edge Case im Mining-Algorithmus.
- KI-gestütztes Review aller Pallets und Main Crates, mit Bug Reports für markierte Issues.
- Cleanup-PRs für Issues aus dem Codebase-Review gemergt.

### Netzwerk & Infra:

- Rate Limiting für den Senoti-Notification-Service Device Registrar hinzugefügt.
- Explorer aktualisiert: neueste Änderungen gemergt, Konflikte gelöst und API angepasst.

### Web- & Mobile-App-Updates:

- Neues Whitepaper auf der Website mit aktualisiertem Styling und Inhalt veröffentlicht.
- Letztes Weekly Update als Blogpost auf [quantus.com/blog](https://quantus.com/blog) veröffentlicht.
- Transaction-Pool-Peek-Subscription end-to-end implementiert und getestet.
- Apple-Review-Prozess für unser Swap-Feature in der iOS-App gestartet.

### Content & Partnerschaften:

- 20-seitigen Entwurf unseres „State of Quantum“-Branchenreports fertiggestellt und zur Kommentierung verteilt. Meldet euch, wenn ihr Interesse habt.
- Marketing-Neueinstellung für Social Media.
- Q-Day-Event-Datum bestätigt: 25. April bei Network School.

### Branchen-Updates:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

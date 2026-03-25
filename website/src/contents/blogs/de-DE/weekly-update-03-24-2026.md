---
title: "Quantus Weekly: Zweites Halving — 4x schnellere ZK-Beweise in zwei Wochen"
description: "Erneute Halbierung der Prover-Zeit, Poseidon-Hashing, Mining-Fix, Senoti-Rate-Limits, Whitepaper-Launch, iOS-Swap-Review und Quantum Canary zu Solana und Quantensicherheit."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: Zweites Halving — 4x schnellere ZK-Beweise in zwei Wochen"
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

2+2 ist 4. 2x2 ist 4. 2² ist 4.

Es ist die einzige Zahl, bei der Addition, Multiplikation und Potenzieren dasselbe Ergebnis liefern.

Vor zwei Wochen haben wir unsere ZK-Beweispipeline deutlich optimiert.

Letzte Woche haben wir die Prover-Zeit halbiert (Division durch 2).

Diese Woche haben wir sie erneut halbiert (das zweite Halving).

4x schneller in 14 Tagen.

Jede Millisekunde in der Beweispipeline zählt für Geschwindigkeit und UX unserer privaten Transaktionen.

Wenn Nutzer auf Senden tippen, sollen Empfänger ihre Mittel sofort sehen.

Unsere Wormhole-Transaktionen — die Verbindung zwischen Sender und Empfänger aufbrechen — erfordern einen ZK-Beweis.

Der ZK-Beweis fügt vor der Finalisierung Zeit hinzu. Jede Sekunde und jedes Aktualisieren ohne sichtbare Mittel ist ein Misserfolg.

UI-Tricks können die Erfahrung verbessern — das ist gut.

Aber die Abwicklung muss sich anfühlen und wirklich extrem schnell sein.

Wir reduzieren diese Sekunden weiter.

Das haben wir diese Woche außerdem ausgeliefert:

### GitHub-Aktivität (12 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- Weitere 50 % weniger Prover-Zeit durch ZK-freundliche Datenbankoptimierungen. Zweite Woche in Folge mit 2x Verbesserung der Beweispipeline.
- Nicht-injektives Hashing in Poseidon implementiert, mit neuen versionierten Releases für qp-poseidon-constants.
- Anpassung der Schwierigkeit für einen Edge Case im Mining-Algorithmus.
- KI-gestützte Review aller Pallets und Haupt-Crates, mit Bug-Reports zu markierten Problemen.
- Aufräum-PRs für Issues aus dem Codebase-Review gemerged.

### Netzwerk & Infrastruktur:

- Rate Limiting für den Geräteregistrar des Senoti-Benachrichtigungsdienstes ergänzt.
- Explorer aktualisiert: neueste Änderungen gemerged, Konflikte gelöst, API angepasst.

### Web- & Mobile-App-Updates:

- Neues Whitepaper auf der Website mit aktualisiertem Styling und Inhalten veröffentlicht.
- Letztes Weekly Update als Blog-Post auf [quantus.com/blog](https://quantus.com/blog) veröffentlicht.
- Peek-Abonnement für den Transaktionspool implementiert und End-to-End getestet.
- Apple-Review für die Swap-Funktion in der iOS-App begonnen.

### Content & Partnerschaften:

- 20-seitigen Entwurf unseres Branchenreports „State of Quantum“ fertiggestellt und zur Kommentierung verteilt. Melde dich bei Interesse.
- Neue Marketing-Stelle für Social Media besetzt.
- Q-Day-Termin bestätigt: 25. April an der Network School.

### Branchen-Updates:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

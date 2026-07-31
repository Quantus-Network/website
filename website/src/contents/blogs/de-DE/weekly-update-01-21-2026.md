---
title: "Quantus Weekly: Native Assets und Bitcoins Quantenrisiko"
description: Quantus lehnt Wrapped Assets ab und setzt auf natives QUAN mit ML-DSA-87 und ZK-Aggregation. Updates zu Threshold-Signaturen, Multisig und dem Blog-Launch.

pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Native Assets und Bitcoins Quantenrisiko"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "quantum-safe",
    "zk-aggregator",
    "mpc",
    "multisig",
    "indexer",
    "biohacking",
  ]
---

Wenn Sie sich fragen, warum Gold steigt und Bitcoin kämpft, lesen Sie dies. Es ist nichts Mysteriöses daran.

![Nic Carter Interview Zusammenfassung](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Kapitalallokatoren diskontieren Bitcoin im Verhältnis zu der Wahrscheinlichkeit, dass ein kryptografisch relevanter Quantencomputer (CRQC) erscheint, bevor Bitcoin auf Post-Quanten-Kryptografie umstellt. Ob die Bitcoin-Community dies akzeptiert oder nicht, der Markt hat es bereits getan.

Einige Chains werden rechtzeitig upgraden. Bitcoin wahrscheinlich nicht. Zum Beispiel hat Vitalik kürzlich zu einem PQC-Upgrade gedrängt.

Wir können nicht genau wissen, wann die Deadline ist oder welche Chains rechtzeitig upgraden werden. Das bedeutete, dass wir schwierige Designentscheidungen bezüglich der Unterstützung externer Assets auf @QuantusNetwork treffen mussten.

Wenn die Ursprungs-Chain eines Wrapped Assets kompromittiert wird, gilt dies auch für die Halter des Wrapped Assets. Daher haben wir uns entschieden, dass @QuantusNetwork keine Wrapped Assets unterstützen kann.

Wir bauen eine Infrastruktur auf, die ein erlaubnisfreies Bridging von überall in das widerstandsfähigste quantensichere Geld ermöglicht, das je geschaffen wurde. Sobald Sie auf unserer Chain sind und natives QUAN halten, sind Sie durch ML-DSA-87 (NISTs höchste Sicherheitsstufe) geschützt, mit extrem hohem Durchsatz via ZK-Aggregation.

Ich möchte hier nichts ankündigen, aber Sie können jederzeit unser GitHub öffnen und nachsehen 👀

Hier ist, was wir diese Woche sonst noch ausgeliefert haben, damit wir bereit sind, wenn der Q-Day kommt:

### Github-Aktivität (7 gemergte Pull-Requests):

![Github-Statistiken](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK

- Integration von Dilithium-Threshold-Signaturen in das MPC-System eines anderen Protokolls.
- POC für benutzerdefiniertes Treasury-Management mit dem Parity Multisig Pallet erstellt.
- Erste Iteration des benutzerdefinierten Multisig Pallets mit Tests und Benchmarks implementiert.
- Fehler behoben, der ZK-fähige Circuit-Binaries auf dem ZK-Aggregator Pallet verhinderte.
- Onchain ZK-Aggregator Verifier aktualisiert, um quantisierte Ausgabemengen zu unterstützen.
- End-to-End ZK-Aggregator Beispiel-Skript für neue Field-Element-Serializer korrigiert.

### Web & Mobile App Updates

- Mobile UX zur Unterstützung von festen Verzögerungs- und Intercept-Funktionen für Hochsicherheitskonten erstellt (wird noch getestet).
- Block-Scanner und Hochsicherheitsfunktionen zum CLI mit verbesserter Fehlerbehandlung hinzugefügt.
- Subsquid (Indexer) Updates für Hochsicherheits-Handling und Hasher-Fix für das neueste Poseidon.
- Blog-Bereich auf der Quantus-Website mit Tag-Unterstützung veröffentlicht und mit dem Hochladen des Backlogs der wöchentlichen Updates begonnen.
- Whitepaper auf v3.1 aktualisiert, Tokenomics-Chart-Verteilungswerte korrigiert.

### Content & Partnerschaften

- Podcasts werden jetzt auf Apple Podcasts hochgeladen.
- Gespräche mit 2 Token-Launchpads begonnen.
- Verbesserungen an der Blockchain-Vergleichsseite von Quantum Canary.
- Podcast mit AJ über Biohacking und Selbstoptimierung: https://x.com/QuantusNetwork/status/2012526120869286161

### Branchen-Updates

- Quantum Canary Artikel darüber, wie CRQCs Satoshis Coins bedrohen: https://x.com/QuantumCanary_/status/2011706634868047982

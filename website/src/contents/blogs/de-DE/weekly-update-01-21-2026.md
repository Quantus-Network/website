---
title: "Quantus Weekly: Native Assets und Quantenrisiko"
description: "Warum Kapital Bitcoin wegen Quantenrisiko abschlägt, unsere Native-Assets-Entscheidung und Fortschritte bei Dilithium-Schwellenwert und ZK-Aggregation."

pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Native Assets und Quantenrisiko"
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

Wenn Sie sich fragen, warum Gold durch die Decke geht und Bitcoin kämpft – lesen Sie das hier. Es ist nicht mysteriös.

![Nic Carter Interview-Zusammenfassung](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Kapitalallokatoren schlagen Bitcoin im Verhältnis zur Wahrscheinlichkeit ab, dass ein kryptografisch relevanter Quantencomputer (CRQC) fertig wird, bevor Bitcoin auf Post-Quanten-Kryptografie umstellt. Ob die Bitcoin-Community das akzeptiert oder nicht – der Markt hat es längst getan.

Manche Chains stellen rechtzeitig um. Bitcoin wahrscheinlich nicht. Vitalik hat kürzlich beispielsweise ein PQC-Upgrade angemahnt.

Wir wissen nicht genau, wann die Deadline ist oder welche Chains rechtzeitig upgraden. Deshalb mussten wir schwierige Designentscheidungen treffen, wenn es um externe Assets auf Quantus geht.

Wird die Ursprungs-Chain eines Wrapped Assets kompromittiert, sind auch die Inhaber des Wrapped Assets betroffen. Deshalb haben wir entschieden, dass Quantus keine Wrapped Assets unterstützen kann.

Wir bauen Infrastruktur für permissionless Bridging von überall in das widerstandsfähigste quantensichere Geld, das je geschaffen wurde. Sobald Sie auf unserer Chain natives QUAN halten, sind Sie durch ML-DSA-87 (NISTs höchstes Sicherheitsniveau) geschützt – mit rasendem Durchsatz dank ZK-Aggregation.

Ich will hier nichts vorwegnehmen, aber Sie können jederzeit unser GitHub öffnen und nachsehen 👀

Das haben wir diese Woche sonst noch ausgeliefert – damit wir bereit sind, wenn Q-Day kommt:

### Github-Aktivität (7 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core-Tech & ZK

- Dilithium-Schwellenwertsignaturen in das MPC-System eines anderen Protokolls integriert.
- POC für individuelles Treasury-Management mit dem Parity-Multisig-Pallet gebaut.
- Erste Iteration eines eigenen Multisig-Pallets mit Tests und Benchmarks implementiert.
- Bug behoben, der ZK-fähige Circuit-Binaries auf dem ZK-Aggregator-Pallet blockierte.
- On-Chain-ZK-Aggregator-Verifier aktualisiert, um quantisierte Output-Beträge zu unterstützen.
- End-to-End-ZK-Aggregator-Beispielskript für neue Field-Element-Serializer repariert.

### Web- & Mobile-App-Updates

- Mobile UX für Fixed-Delay- und Intercept-Features bei High-Security-Konten gebaut (noch im Test).
- Block-Scanner und High-Security-Features in der CLI mit verbesserter Fehlerbehandlung ergänzt.
- Subsquid (Indexer)-Updates für High-Security-Handling und Hasher-Fix für das neueste Poseidon.
- Blog-Bereich auf der Quantus-Website mit Tag-Unterstützung veröffentlicht und Backlog an Weekly Updates hochgeladen.
- Whitepaper auf v3.1 aktualisiert, Tokenomics-Chart-Verteilungswerte korrigiert.

### Content & Partnerschaften

- Podcasts werden jetzt auf Apple Podcasts hochgeladen.
- Gespräche mit 2 Token-Launchpads begonnen.
- Verbesserungen auf der Blockchain-Vergleichsseite von Quantum Canary.
- Podcast mit AJ über Biohacking und Selbstoptimierung.

### Branchen-Updates

- Quantum-Canary-Artikel über die Bedrohung von CRQCs für Satoshis Coins: https://x.com/QuantumCanary_/status/2011706634868047982

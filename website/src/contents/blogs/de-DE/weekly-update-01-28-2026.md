---
title: "Quantus Weekly: Deniable RPCs und Neodyme-Audit"
description: "Deniable RPCs für stärkere Privatsphäre, abgeschlossenes Neodyme-Rusty-Crystals-Audit und private ZK-Adressen für jeden Token ab Genesis verfügbar."

pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Deniable RPCs und Neodyme-Audit"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

Ihre Wallet verpetzt Sie.

99 % der Privacy-Infrastruktur ist reine Show. Irgendwo im Stack sickern Ihre Daten durch. Ihre Wallet spricht mit einem Server namens RPC. Der RPC-Server sendet Informationen zurück an Ihre Wallet – dafür muss er typischerweise etwas über Sie wissen.

Um Ihr Guthaben abzurufen, braucht er vielleicht Ihre Transaktionshistorie. Er verknüpft das wahrscheinlich mit Ihrer IP-Adresse, ungefährem Standort, Nutzungsgewohnheiten usw. Alles nur, damit Sie Ihr Guthaben in der Wallet sehen.

Während Stacy, die neue Marketing-Hire Ihres Lieblings-On-Chain-Privacy-Tools, auf einem X-Space damit prahlt, wie „privat und sicher“ sie sind, lauschen die Anzugträger einfach der RPC-Verbindung ab.

Sie sind kompromittiert.

Wir haben etwas anderes gebaut. Deniable RPCs nutzen einen Hash-Präfix-Filter ähnlich Oblivious Lookup. Sie können den Server nach Ihren Transaktionen fragen, ohne dass er weiß, wonach Sie suchen. Der RPC kann nicht bestimmen, welche konkreten Transaktionen Sie anfordern.

[Quantus](https://x.com/@QuantusNetwork) bewahrt Privatsphäre on-chain und in der Wallet-/RPC-Infrastruktur. Wir halten geheim, was Sie geheim halten wollen – auf jeder Ebene des Stacks.

Diese Woche haben wir außerdem das abgeschlossene [@Neodyme](https://x.com/@Neodyme)-Security-Audit für unsere Rusty-Crystals-Dilithium-Signatur-Bibliothek [angekündigt](https://x.com/QuantusNetwork/status/2016390125626773871). Alle Issues behoben und Härtungstechniken angewendet. Rusty Crystals ist die beste Dilithium-Signatur-Bibliothek in Rust, mit voller HD-Wallet-Unterstützung.

Das waren die Highlights. Hier ist, was wir sonst noch in der letzten Woche ausgeliefert haben:

### GitHub-Aktivität (19 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core-Tech & ZK

- [@Neodyme](https://x.com/@Neodyme)-Audit abgeschlossen, alle Issues behoben. Härtungstechniken angewendet, inklusive Memory Zeroing nach Nutzung. [Post hier](https://x.com/QuantusNetwork/status/2016390125626773871).
- Deniable RPCs via Prefix Hashing ausgeliefert. Nutzer haben jetzt plausible Abstreitbarkeit beim Verbinden mit RPC-Nodes (Oblivious Lookup).
- Private ZK-Adressen für alle Tokens ab Genesis aktiviert.
- Continuous Block-Building reduziert die durchschnittliche Zeit bis zur Transaktionsaufnahme um über 50 %.
- Unnötige Pallets entfernt – Runtime vereinfacht.
- Multisig-Pallet feature-complete mit aktualisierter Dokumentation. Chain- und CLI-Integration wartet auf Review.
- Fuzzer für ZK-Aggregator-Circuits überarbeitet und Testabdeckung für Miner Fees und Burned Fees erweitert.

### Web- & Mobile-App-Updates

- Mobile App v1.1.5 (Build 65) mit High-Security-Pull-Feature ausgeliefert.
- Demo-Videos für High-Security-Features erstellt.
- Explorer- und Faucet-Verbesserungen: Fehler- und High-Security-Events in Block-Details, Suche nach Fehlertyp und verbesserte Gruppennachrichten-Filterung.
- Task-Master-Bugfixes für Leaderboard, Raid-Einreichung und Metriken.
- Subsquid-Dockerfile und GitHub Action für Docker-Image-Generierung repariert.
- Website-Blog-UX aktualisiert und SEO-Issues behoben.

### Content & Partnerschaften

- Über 1.000 Mitglieder auf Telegram erreicht.
- Venue für Side Event bei Token2049 Dubai gebucht.
- Das Team kehrt für unseren nächsten Sprint nach [@ns](https://x.com/@ns) zurück.
- Neuen Designer für Mobile-App-Redesign eingestellt.
- Unseren ersten mittelgroßen Content Creator für Video-Kollabs eingestellt. Wir bauen unser Creator-Roster auf.

### Branchen-Updates

- [@QuantumCanary\_](https://x.com/@QuantumCanary_)-Artikel [zu Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) hat ihre „[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)“ veröffentlicht.

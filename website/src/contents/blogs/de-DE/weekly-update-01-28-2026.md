---
title: "Quantus Weekly: Deniable RPCs und Neodyme-Sicherheitsaudit"
description: "Wöchentliches Update über unsere neuen Deniable RPCs für verbesserte Privatsphäre, den Abschluss des Neodyme-Sicherheitsaudits für Rusty Crystals und private ZK-Adressen für alle Token."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Deniable RPCs und Neodyme-Sicherheitsaudit"
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

Deine Wallet verpetzt dich.

99 % der Privatsphäre-Infrastruktur ist nur Schein. Irgendwo im Stack sickern deine Informationen durch. Deine Wallet kommuniziert mit einem Server, der RPC genannt wird. Dieser RPC-Server sendet Informationen an deine Wallet zurück. Aber um das tun zu können, muss der RPC normalerweise einige Informationen über dich wissen.

Um beispielsweise dein Guthaben abzurufen, benötigt er möglicherweise deine Transaktionshistorie. Er verknüpft dies wahrscheinlich mit deiner IP-Adresse, deinem ungefähren Standort, deinen Nutzungsgewohnheiten usw. All das nur, damit du dein Guthaben in deiner Wallet sehen kannst.

Während also Stacy, die neue Marketing-Mitarbeiterin deines Lieblings-Onchain-Privatsphäre-Tools, in einem X-Space damit prahlt, wie „privat und sicher“ sie sind, hören die Anzugträger einfach die RPC-Verbindung ab.

Du bist erledigt.

Wir haben etwas anderes gebaut. Deniable RPCs verwenden einen Hash-Präfix-Filter, ähnlich wie Oblivious Lookup. Du kannst den Server nach deinen Transaktionen fragen, ohne dass er weiß, wonach du suchst. Der RPC kann nicht feststellen, welche spezifischen Transaktionen du anforderst.

So bewahrt [@QuantusNetwork](https://x.com/@QuantusNetwork) die Privatsphäre onchain und in der Wallet/RPC-Infrastruktur. Wir halten geheim, was du geheim halten willst, auf jeder Ebene des Stacks.

Diese Woche haben wir auch den abgeschlossenen [@Neodyme](https://x.com/@Neodyme) Sicherheitsaudit für unsere Rusty Crystals Dilithium-Signaturbibliothek [bekannt gegeben](https://x.com/QuantusNetwork/status/2016390125626773871). Alle Probleme wurden gelöst und Härtungstechniken angewendet. Rusty Crystals ist die beste Dilithium-Signaturbibliothek in Rust, mit voller HD-Wallet-Unterstützung.

Das sind die Highlights. Hier ist, was wir in der letzten Woche sonst noch ausgeliefert haben:

### GitHub-Aktivität (19 gemergte Pull-Requests):
![Github-Statistiken](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK
- [@Neodyme](https://x.com/@Neodyme) Audit abgeschlossen, alle Probleme gelöst. Härtungstechniken angewendet, einschließlich Nullsetzen des Speichers nach Gebrauch. [Post hier](https://x.com/QuantusNetwork/status/2016390125626773871).
- Deniable RPCs via Präfix-Hashing ausgeliefert. Benutzer haben nun plausible Abstreitbarkeit beim Verbinden mit RPC-Knoten (Oblivious Lookup).
- Private ZK-Adressen für alle Token bei Genesis aktiviert.
- Kontinuierliche Block-Erstellung reduziert die durchschnittliche Zeit bis zur Aufnahme einer Transaktion um über 50 %.
- Unnötige Pallets entfernt, was die Runtime vereinfacht.
- Multisig-Pallet feature-complete mit aktualisierter Dokumentation. Chain- und CLI-Integration warten auf Review.
- Fuzzer für ZK-Aggregator-Schaltkreise überarbeitet und Testabdeckung für Miner-Gebühren und Burned-Gebühren erweitert.

### Web & Mobile App Updates
- Mobile App v1.1.5 (Build 65) mit High-Security-Pull-Funktion ausgeliefert.
- Demo-Videos für High-Security-Funktionen erstellt.
- Explorer- und Faucet-Verbesserungen: Fehler- und High-Security-Events zu Blockdetails hinzugefügt, Suche nach Fehlertyp und verbessertes Filtern von Gruppennachrichten.
- Task Master Bugfixes für Leaderboard, Raid-Einreichung und Metriken.
- Subsquid-Dockerfile und GitHub-Action für Docker-Image-Generierung korrigiert.
- Website-Blog-UX aktualisiert und SEO-Probleme behoben.

### Content & Partnerschaften
- Über 1.000 Mitglieder auf Telegram erreicht.
- Veranstaltungsort für Side-Event auf der Token2049 Dubai gebucht.
- Das Team hat beschlossen, für unseren nächsten Sprint zu [@ns](https://x.com/@ns) zurückzukehren.
- Neuen Designer für das Mobile-App-Redesign eingestellt.
- Ersten mittelgroßen Content Creator für Video-Kollaborationen eingestellt. Aufbau unseres Creator-Rosters.

### Branchen-Updates
- [@QuantumCanary_](https://x.com/@QuantumCanary_) Artikel [über Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary_](https://x.com/@QuantumCanary_) veröffentlichte ihre „[Blockchain Vergleichstabelle](https://x.com/QuantumCanary_/status/2015734605450731824)“.

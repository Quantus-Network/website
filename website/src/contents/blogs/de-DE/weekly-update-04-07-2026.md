---
title: "Quantus Weekly: Q-Day-Schätzungen, On-Spend-Risiko und dauerhafte ökonomische Freiheit"
description: "Qubit-Schätzungen von Google und Oratomic zum Knacken von ECC, On-Spend-Angriffe versus Bitcoins 10-Minuten-Blöcke, Googles PQC-Frist 2029 und Quantus’ Rebranding um dauerhafte ökonomische Freiheit—plus ZK, Infra und App-Updates."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day-Schätzungen, On-Spend-Risiko und dauerhafte ökonomische Freiheit"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

Die Zahl physischer Qubits, die nötig sind, um Bitcoins Kryptografie zu brechen, ist gerade von 20 Millionen auf unter 500.000 gesunken.

Google hat seine neue Zahl letzte Woche veröffentlicht. Deshalb war Quantencomputing überall in deiner Timeline.

Eine separate Arbeit von Oratomic setzt sie auf 19.000.

Vier Größenordnungen in einem Jahr.

Googles Team schätzte mit Vorrechnung ein Angriffsfenster von 9 Minuten.

Bitcoin bestätigt alle 10 Minuten einen Block.

Das bedeutet: Ein Angreifer könnte eine laufende Transaktion abfangen, den Schlüssel des Absenders knacken und eine betrügerische Ersetzung senden, bevor das Netzwerk das Original bestätigt. Das nennt man On-Spend-Angriffe.

Wenn On-Spend-Angriffe Realität werden, reicht es nicht mehr, deinen öffentlichen Schlüssel vor Quantenangreifern zu verstecken, um zu verhindern, dass dir deine Sats gestohlen werden.

Google hat seine eigene Frist für die Migration auf Post-Quantum auf 2029 verschoben. Noch interessanter: Sie haben Ressourcenschätzungen (Qubit-Zahlen, Zeit) zum Knacken von ECC-256 veröffentlicht, aber den detaillierten technischen Bauplan für den kryptografischen Bruch selbst zurückgehalten.

Das letzte Mal, dass Wissenschaftler in diesem Maß Selbstzensur übten, war vor dem Manhattan-Projekt.

Wie 1945 wird es keine öffentliche Roadmap und keine Phase kleiner Fortschrittsmeldungen geben, aus der klar wird, dass wir noch X Monate entfernt sind. Es wird keine Benachrichtigung geben, wenn der Q-Day kommt. Es wird ein Staatsgeheimnis sein.

In den Worten des Papers ist das Brechen 32-bit-elliptischer Kurven „nicht wesentlich schwerer“ als das Brechen 256-bit-elliptischer Kurven. Wenn jemand einen Bruch mit kleinen Schlüsseln demonstriert, ist das Migrationsfenster für öffentliche Blockchains längst zu.

Bitcoin hat in den letzten zehn Jahren drei große Protokoll-Updates ausgeliefert. Eine Notfall-Migration auf Post-Quantum braucht mindestens 1–3 Jahre. Eine geordnete braucht mehr als 5.

Das Fenster für eine geordnete Migration schließt sich gerade und ist vielleicht schon vorbei. Jetzt ist es existenziell.

Deshalb haben wir diese Woche unseren Nordstern festgelegt: dauerhafte ökonomische Freiheit. Drei Wörter als Grundlage von allem, was Quantus baut. Die neue [quantus.com](https://quantus.com) ist mit einem vollständigen Rebrand und einer visuellen Identität rund um diese Mission live gegangen.

Dauerhaft, weil die Kryptografie Post-Quantum nach NIST Level 5 ist.

Ökonomisch, weil genau dafür Krypto da ist. Zentralbanken disrupten.

Freiheit, weil wir uns denen widersetzen, die dich kontrollieren wollen.

[@QuantusNetwork](https://x.com/QuantusNetwork) ist quantensicheres, verschlüsseltes Geld. Das haben wir diese Woche sonst noch ausgeliefert.

### GitHub-Aktivität (13 zusammengeführte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- Neue Blinding-Strategie für qp-plonky2 macht ZK-fähige Leaf-Proofs 6× schneller, ohne die native Trace-Größe zu erhöhen.
- CLI refaktoriert, sodass Mobile-App und Miner-App denselben ZK-Code teilen.
- Miner-App läuft auf dem neuen Testnet mit dem aktualisierten ZK-System.
- Punkte aus Security-Audits adressiert.
- Schlüsselerzeugung in Chain und CLI behoben.

### Netzwerk & Infra

- Monitoring erweitert: neue Dashboards und erneuerte Alert-Kanäle mit Telegram-Benachrichtigungen.
- Log-Stack mit Rotationshistorie aktualisiert.
- Dependency-Updates und neue Releases über die Repositories.
- Telemetrie und Grafana-Rebranding an die neue Markenidentität angepasst.
- CLI Build/Release-Fix.

### Web- & Mobile-App-Updates

- Redesigntes [quantus.com](https://quantus.com) mit Astro neu aufgebaut und Lokalisierung.
- Neue Logos und Splash Screens für die Mobile-App.
- Bessere Sende-Performance in der Mobile-App.
- Mobile-App-Versionen 1.2.3, 1.3.0 und 1.3.1 veröffentlicht.

### Content & Partnerschaften

- Rebrand-Ankündigung auf [@QuantusNetwork](https://x.com/QuantusNetwork) veröffentlicht.
- Whitepaper-Ankündigung auf [@QuantusNetwork](https://x.com/QuantusNetwork) veröffentlicht.
- Scaling & Privacy with Post-Quantum ZK-Proofs, Whiteboard-Video mit Ethan und Chris auf Quantus Youtube.
- Quantus bei der April-Eröffnung der Network School vertreten, mit Stand auf der NS Fair und Workshop zu Crypto Payments & Privacy.

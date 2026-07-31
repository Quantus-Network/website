---
title: "Quantus Weekly: Q-Day-Schätzungen und On-Spend-Risiko"
description: "Google und Oratomic senken Qubit-Schätzungen für ECC. On-Spend-Risiko bei 10-Minuten-Blöcken und Quantus-Rebrand für dauerhafte wirtschaftliche Freiheit."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Q-Day-Schätzungen und On-Spend-Risiko"
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

Die Anzahl physischer Qubits, die nötig sind, um Bitcoins Kryptografie zu brechen, ist von 20 Millionen auf unter 500.000 gesunken.

Google veröffentlichte letzte Woche die neue Zahl. Deshalb war Quanten überall in eurer Timeline.

Ein separates Paper von Oratomic kommt auf 19.000.

Vier Größenordnungen in einem Jahr.

Googles Team schätzte ein 9-Minuten-Angriffsfenster mit Precomputation.

Bitcoin bestätigt alle 10 Minuten einen Block.

Das bedeutet: Ein Angreifer könnte eine Transaktion unterwegs abfangen, den Schlüssel des Senders knacken und eine betrügerische Ersatztransaktion broadcasten, bevor das Netzwerk das Original bestätigt. Das nennt man On-Spend-Angriffe.

Wenn On-Spend-Angriffe Realität werden, reicht selbst das Verbergen eures Public Keys vor Quantenangreifern nicht, um eure Sats zu schützen.

Google verschob die eigene Post-Quantum-Migrations-Deadline auf 2029. Interessanter noch: Sie veröffentlichten Ressourcenschätzungen (Qubit-Zahlen, Timing) zum Brechen von ECC-256, hielten aber den detaillierten technischen Blueprint für den kryptografischen Bruch selbst zurück.

Das letzte Mal, dass Wissenschaftler in diesem Maßstab Selbstzensur betrieben, war vor dem Manhattan Project.

Wie 1945 wird es keine öffentliche Roadmap oder schrittweise Fortschrittsankündigungen geben, die offensichtlich machen, dass wir X Monate entfernt sind. Es wird keine Benachrichtigung geben, wenn Q-Day kommt. Es wird ein Staatsgeheimnis sein.

Laut Paper ist das Brechen von 32-Bit-Elliptischen Kurven „nicht wesentlich schwerer“ als 256-Bit-Kurven. Wenn jemand einen Small-Key-Break demonstriert, ist das Migrationsfenster für Public Blockchains bereits geschlossen.

Bitcoin hat in den letzten zehn Jahren drei große Protokoll-Updates ausgeliefert. Eine Notfall-Post-Quantum-Migration braucht mindestens 1–3 Jahre. Eine geordnete mehr als 5.

Das Fenster für eine geordnete Migration schließt sich gerade — und ist vielleicht schon vorbei. Jetzt ist es existenziell.

Deshalb haben wir diese Woche unseren Nordstern festgelegt: Permanent Economic Freedom. Drei Worte an der Basis von allem, was Quantus baut. Das neue [quantus.com](https://quantus.com) ist live — mit vollständigem Rebrand und visueller Identität um diese Mission.

Permanent, weil die Kryptografie NIST Level 5 post-quantum ist.

Economic, weil Crypto dafür da ist. Zentralbanken stören.

Freedom, weil wir uns denen widersetzen, die euch kontrollieren wollen.

[@QuantusNetwork](https://x.com/QuantusNetwork) ist quantensicheres verschlüsseltes Geld. Das haben wir diese Woche sonst noch ausgeliefert.

### GitHub-Aktivität (13 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- Neue Blinding-Strategie für qp-plonky2 macht ZK-Leaf-Proofs 6× schneller, ohne die native Trace-Größe zu erhöhen.
- CLI refaktoriert, damit Mobile App und Miner App denselben ZK-Code teilen.
- Miner App auf dem neuen Testnet mit dem aktualisierten ZK-System zum Laufen gebracht.
- Issues aus Security Audits adressiert.
- Key Generation onchain und in der CLI behoben.

### Netzwerk & Infra

- Monitoring erweitert: neue Dashboards und aktualisierte Alert-Channels mit Telegram-Benachrichtigungen.
- Log-Stack mit History-Rotation aktualisiert.
- Dependency-Updates und neue Releases über Repositories hinweg.
- Telemetrie- und Grafana-Rebranding passend zur neuen Markenidentität.
- CLI Build/Release-Fix.

### Web- & Mobile-App-Updates

- Redesign von [quantus.com](https://quantus.com) gestartet — neu aufgebaut mit Astro und Lokalisierungs-Support.
- Neue Logos und Splash Screens für die Mobile App.
- Verbesserte Send-Performance in der Mobile App.
- Mobile-App-Versionen 1.2.3, 1.3.0 und 1.3.1 ausgeliefert.

### Content & Partnerschaften

- Rebrand-Ankündigung auf [@QuantusNetwork](https://x.com/QuantusNetwork) veröffentlicht.
- Whitepaper-Ankündigung auf [@QuantusNetwork](https://x.com/QuantusNetwork) veröffentlicht.
- Scaling & Privacy with Post-Quantum ZK-Proofs — Whiteboard-Session-Video mit Ethan und Chris auf Quantus Youtube.
- Quantus bei Network Schools April-Eröffnung vertreten — inkl. Stand auf der NS Fair und Crypto Payments & Privacy Workshop.

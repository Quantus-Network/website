---
title: "Quantus Weekly: Die Wallet sollte einfach sein"
description: "Wöchentliches Update über die Veröffentlichung von Wallet v1.2.0, Treasury mit Multisig, Heisenberg-Testnetz-Updates und Performance-Verbesserungen."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: Die Wallet sollte einfach sein"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Jede größere Krypto-Wallet fügt Müll-Funktionen hinzu, die ich nicht will.

Ich möchte keine Social-Media-App, die auch mein Geld verwaltet.

Ist Ihnen schon einmal aufgefallen, dass es keine hochgradig meinungsstarke, einfach zu bedienende, selbstverwaltete „offizielle“ Bitcoin-Wallet gibt?

Das Gleiche gilt für Ethereum und Solana.

Die Stiftungen bauen die Chain und überlassen das Interface Drittanbietern. Drittanbieter brauchen Einnahmen. Einnahmen bedeuten Funktionen. Funktionen bedeuten Lärm.

Jetzt hat Ihre Wallet also einen Swap-Aggregator, einen Social-Feed, Trend-Token, NFT-Galerien und Push-Benachrichtigungen über Coins, von denen Sie noch nie gehört haben.

Wir haben Quantus gebaut und wir haben die Wallet gebaut.

Dasselbe Team, dasselbe Produkt. Die App, die wir diese Woche in den App Store gebracht haben, hat keine Werbung, keine Token-Feeds, keine sozialen Funktionen, keine beanspruchbaren Benutzernamen.

Öffnen Sie sie, sehen Sie Ihr Guthaben, senden oder empfangen Sie.

Wir haben das Interface von Grund auf neu gestaltet, um hochgradig meinungsstark zu sein, mit Standardeinstellungen, die dem Benutzer so viel kognitive Belastung wie möglich abnehmen.

Wir haben auch die Ladezeit für die Transaktionshistorie der Wallet drastisch reduziert. Kein langes Warten mehr auf Ihr Guthaben und vorherige Transaktionen nach dem Öffnen der App.

Quantensicheres privates Geld sollte einfach zu bedienen und im Idealfall langweilig sein.

Wir überlassen die Aufregung den prä-quanten Chains am Qday.

Alles ist Open Source. Jeder kann seine eigene Wallet bauen. Aber es wird immer eine offizielle geben, die einfach funktioniert.

### GitHub-Aktivität (4 gemergte Pull-Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Core Tech & ZK

- Treasury mit Multisig gemergt und im neuen Heisenberg-Testnetz-Release enthalten.
- Alle ausstehenden Änderungen gemergt und veröffentlicht. Neue Heisenberg-Genesis erstellt, veröffentlicht und bereitgestellt.
- Veraltete Governance-Regeln im Zusammenhang mit der Treasury-Verwaltung entfernt.
- CLI um neue Multisig- und Treasury-Befehle erweitert. Details zu Hochsicherheitskonten sind jetzt in der Wallet-Ansicht sichtbar.
- Proof-Shuffling und Nullstellung doppelter Exit-Accounts hinzugefügt, um die Privatsphäre aggregierter Wormhole-Transaktionen zu erhöhen.
- Wormhole in Circuit Builder und Prover aufgeteilt, um die Proof-Aggregation zu beschleunigen.
- ZK-Circuits-Release-Workflow aktualisiert und neue Artefakte veröffentlicht.
- Revive-Pallet-Abhängigkeitsproblem gelöst.

### Netzwerk & Infrastruktur

- Benachrichtigungssystem (Senoti): Failover zum Block-Watcher für die beste Netzwerkauswahl hinzugefügt.
- Senoti aktualisiert, um mehrere Adressen pro Gerät zu verarbeiten.
- RPC-Failover für Subsquid-Server hinzugefügt.
- Monitoring-Warnungen aktualisiert und an die entsprechenden Kanäle weitergeleitet.

### Web & Mobile App Updates

- Wallet v1.2.0 in den iOS App Store geliefert.
- Durchschnittliche Ladezeit der Transaktionshistorie von über 1 Minute auf unter 5 Sekunden reduziert.
- Wallet-Builds 75, 76, 77 mit Android-Splash-Screen-Fix und anderen Fehlerbehebungen ausgeliefert.
- Release-Artefakt-Workflow für Wallet-Builds hinzugefügt.
- Toaster-Komponente aktualisiert und Legacy-Version bereinigt.
- Remote-Benachrichtigungsunterstützung für die Registrierung bestehender Adressen, FCM-Geräteabmeldung beim Zurücksetzen und Entfernung von Benachrichtigungen über neue Wallet-Adressen hinzugefügt.
- Liste mit „glücklichen Wörtern“ für Prüfphrasen (check-phrases) hinzugefügt.
- Subsquid refactored, um stärker auf Extrinsics fokussiert zu sein, mit Unterstützung für Privacy-Score-Berechnung und Wormhole-Transaktionen.
- Explorer refactored, um die aktualisierte Subsquid-Architektur widerzuspiegeln.

### Inhalt & Partnerschaften

- Podcast mit Nik Heger, „Building A New Sound Money System“

### Branchen-Updates

- Quantum Canary Analyse darüber, [ob die Tempo-Blockchain von Stripe quantensicher sein wird.](https://x.com/QuantumCanary_/status/2024797352616509754)

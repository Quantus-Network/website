---
published: true
title: "Quantus Weekly: High-Security-Konten und Betrugsschutz"
description: "High-Security-Konten mit Time Locks und Guardians, Multisig-Integration im Test und neues Recover-Funds-Feature – unser Weekly Update dieser Woche."

pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: High-Security-Konten und Betrugsschutz"
featured: false
tags:
  [
    "weekly-update",
    "security",
    "guardian",
    "time-lock",
    "fraud-prevention",
    "multisig",
    "plonky2",
  ]
---

Chainalysis schätzte, dass 2025 Krypto im Wert von 17 Mrd. USD gestohlen wurde. Das Versprechen lautete: „Sei deine eigene Bank.“ Die andere Hälfte heißt: „Sei dein eigenes Sicherheitsteam.“ Klar, „ein Schweizer Bankkonto in der Tasche – aber nur für Cybersecurity-Experten“ ist immer noch verdammt cool. Aber die Branche hat unschuldigen Laien einen Bärendienst erwiesen, die ihr Vermögen on-chain verschoben, ohne zu wissen, was asymmetrische Kryptografie ist.

Wenn Sie also sagen „Sei deine eigene Bank“, sollten Sie auch erwähnen, dass Banken Betrugsabteilungen, Transaktionsüberwachung und Stornierungsfristen haben. Sie erkennen verdächtige Aktivitäten, frieren Konten ein und fangen bösartige Transaktionen ab. All das lassen Sie hinter sich, wenn Sie die Verwahrung Ihrer Keys übernehmen.

Leider ist „Nutze eine Hardware-Wallet und verifiziere jedes Mal genau alles, was du signierst“ wenig hilfreich. Wenn Bybit beim Cold-Storage-Multisig blind signiert, macht wahrscheinlich niemand genug. Es ist unzumutbar, von Nutzern ein so hohes Sicherheitsniveau zu erwarten. Dass „alles verlieren“ eine Folge der App-Nutzung sein kann, ist untragbar.

Was ist schlimmer – alles verlieren oder eine Vertrauensannahme? Kommt auf die Vertrauensannahme an, oder? Es gibt einen Mittelweg zwischen „trau niemandem“ und „trau einer Bank“. Vertrauen Sie jemandem Ihrer Wahl: einem Freund, einem Familienmitglied, einem Multisig mit Ihrem Anwalt oder technikaffinen Neffen, einem Dead-Man's-Switch.

Das haben wir in [Quantus](https://x.com/@QuantusNetwork) eingebaut. High-Security-Konten auf Quantus haben einen anpassbaren Time Lock für jede ausgehende Transaktion. In diesem Fenster kann ein designierter Guardian die Transaktion abfangen und stornieren. Ein Guardian kann nicht in Ihrem Namen signieren – aber er kann jede ausgehende Transaktion stoppen.

Hat also ein Dieb Ihre Keys, hat er nicht automatisch die Möglichkeit, alles zu nehmen. Sie wählen den Guardian und legen das Fenster fest. Vielleicht 24 Stunden Verzögerung mit Ihrem Partner für Transaktionen über 1.000 USD. Vielleicht eine Hardware-Wallet im Banksafe. Vielleicht ein professioneller Dienst, der Aktivitäten in Echtzeit auf Betrug überwacht.

Diese Woche haben wir die Multisig-Integration für Guardian-Konten getestet. Außerdem haben wir Recover-Funds-Funktionalität in die Chain eingebaut, damit abgefangene Transaktionen an den ursprünglichen Besitzer zurückgeholt werden können.

Das haben wir sonst noch diese Woche ausgeliefert:

### GitHub-Aktivität (5 gemergte Pull Requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Core-Tech & ZK

- Multisig-Pallet für High-Security-Konten in Testphase mit CLI-Befehlen.
- Recover-Funds-Funktionalität für High-Security-Konten in der Chain ergänzt.
- qp-plonky2 auf den Stand der Änderungen im Original-plonky2-Repo gebracht.

### Web- & Mobile-App-Updates

- Quest-Screens-UI mit Gradients und Wallet-Integration refaktoriert.
- Ungenutzte Assets in der App bereinigt.

### Content & Partnerschaften

- [Quantus](https://x.com/@QuantusNetwork) und [@YuviLightman](https://x.com/@YuviLightman) haben jeweils über 1.000 Follower erreicht.
- Podcast mit Henry Love über KI und Produktivität (auf unserem Youtube).

### Branchen-Updates

- Quantum Canary: [„Will Zcash Replace Bitcoin?“](https://x.com/QuantumCanary_/status/2016327421797294286)

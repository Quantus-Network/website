---
title: "Quantus Weekly: Hochsicherheitskonten und Betrugsprävention"
description: "Wöchentliches Update über unsere neuen Hochsicherheitskonten mit anpassbaren Zeitsperren und Guardians, Multisig-Integrationstests und die neue Funktion zur Wiederherstellung von Geldern."
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: Hochsicherheitskonten und Betrugsprävention"
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

Chainalysis schätzt, dass im Jahr 2025 Krypto im Wert von 17 Milliarden US-Dollar gestohlen wurde. Das Versprechen war „Sei deine eigene Bank“. Die andere Hälfte lautet „Sei dein eigenes Sicherheitsteam“. Um es klar zu sagen: „Ein Schweizer Bankkonto in deiner Tasche, aber nur für Cybersicherheitsexperten“ ist immer noch wahnsinnig beeindruckend. Aber die Branche hat unschuldigen Normalbürgern einen Bärendienst erwiesen, die ruiniert wurden, indem sie ihr Nettovermögen onchain verschoben haben, ohne überhaupt zu wissen, was asymmetrische Kryptografie ist.

Wenn man also sagt „Sei deine eigene Bank“, sollte man auch erwähnen, dass Banken Betrugsabteilungen, Transaktionsüberwachung und Umkehrfristen haben. Sie erkennen verdächtige Aktivitäten, frieren Konten ein und fangen bösartige Transaktionen ab. All das lässt man hinter sich, wenn man die Verwahrung seiner eigenen Schlüssel übernimmt.

Leider ist „Verwenden Sie eine Hardware-Wallet und überprüfen Sie jedes Mal genau alles, was Sie signieren“ ein wenig hilfreicher Rat. Wenn Bybit auf ihrer Cold-Storage-Multisig blind signiert, tut wahrscheinlich niemand genug. Es ist unzumutbar zu erwarten, dass Benutzer auf einem ausreichend hohen Sicherheitsniveau agieren. Es ist unhaltbar, dass der „Verlust Ihres gesamten Geldes“ ein Ergebnis der Nutzung Ihrer App ist.

Was ist also schlimmer: sein ganzes Geld zu verlieren oder eine Vertrauensannahme? Das hängt von der Vertrauensannahme ab, oder? Es gibt einen Mittelweg zwischen „Vertraue niemandem“ und „Vertraue einer Bank“. Vertraue jemandem, den du wählst: einem Freund, einem Familienmitglied, einer Multisig mit deinem Anwalt oder deinem technisch versierten Neffen, einem Totmannschalter.

Das haben wir in [@QuantusNetwork](https://x.com/@QuantusNetwork) eingebaut. Hochsicherheitskonten auf Quantus haben eine anpassbare Zeitsperre für jede ausgehende Transaktion. Während dieses Fensters kann ein benannter Guardian die Transaktion abfangen und stornieren. Ein Guardian kann nicht in Ihrem Namen signieren, aber er kann jede ausgehende Transaktion stoppen.

Wenn also ein Dieb Ihre Schlüssel hat, hat er nicht unbedingt die Möglichkeit, alles zu nehmen, was Sie besitzen. Sie wählen den Guardian und legen das Zeitfenster fest. Vielleicht ist es eine 24-stündige Verzögerung mit Ihrem Ehepartner für jede Transaktion, die größer als 1.000 US-Dollar ist. Vielleicht ist es eine Hardware-Wallet, die Sie in einem Bankschließfach aufbewahren. Vielleicht ist es ein professioneller Service, der Aktivitäten in Echtzeit auf potenziellen Betrug überwacht.

Diese Woche haben wir mit dem Testen der Multisig-Integration für Guardian-Konten begonnen. Wir haben außerdem eine Funktion zur Wiederherstellung von Geldern zur Chain hinzugefügt, sodass abgefangene Transaktionen an den ursprünglichen Eigentümer zurückgefordert werden können.

Hier ist, was wir diese Woche sonst noch ausgeliefert haben:

### GitHub-Aktivität (5 gemergte Pull-Requests):

![Github-Statistiken](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Core Tech & ZK

- Multisig-Pallet für Hochsicherheitskonten in der Testphase mit CLI-Befehlen.
- Funktion zur Wiederherstellung von Geldern zur Chain für Hochsicherheitskonten hinzugefügt.
- qp-plonky2 auf den neuesten Stand mit den Änderungen im ursprünglichen plonky2-Repo gebracht.

### Web & Mobile App Updates

- UI der Quests-Bildschirme mit Gradienten und Wallet-Integration überarbeitet.
- Unbenutzte Assets in der App aufgeräumt.

### Content & Partnerschaften

- [@QuantusNetwork](https://x.com/@QuantusNetwork) und [@YuviLightman](https://x.com/@YuviLightman) Konten haben beide die Marke von 1.000 Followern überschritten.
- Podcast mit Henry Love über KI und Produktivität (auf unserem Youtube).

### Branchen-Updates

- Quantum Canary: [„Wird Zcash Bitcoin ersetzen?“](https://x.com/QuantumCanary_/status/2016327421797294286)

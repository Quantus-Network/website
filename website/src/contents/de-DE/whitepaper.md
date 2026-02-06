---
title: "Quantus Whitepaper"
description: "The official Quantus Network whitepaper detailing our quantum-secure Layer 1 blockchain architecture, post-quantum cryptography, and tokenomics."
pubDate: "2026-02-05"
heroImage: "/blog/covers/whitepaper.webp"
heroAlt: "Quantus Network Whitepaper"
featured: true
tags:
  [
    "whitepaper",
    "post-quantum-cryptography",
    "blockchain",
    "quantus-network",
    "dilithium",
    "zero-knowledge-proofs",
  ]
---

**Quantus Network Whitepaper v0.3.2**

Rechtlicher Hinweis: Dieses Whitepaper dient ausschließlich Informationszwecken und stellt weder ein Angebot zum Verkauf noch eine Aufforderung zum Kauf oder eine Empfehlung für ein Wertpapier, eine Investition oder ein Finanzprodukt dar. Die Leser sollten ihre eigene Due Diligence durchführen und sich vor Investitionsentscheidungen mit qualifizierten Fachleuten beraten. Quantus Network übernimmt keinerlei Zusicherungen oder Gewährleistungen hinsichtlich der Richtigkeit oder Vollständigkeit der hier enthaltenen Informationen.

**1. Einleitung**

Die Quantenbedrohung

Traditionelle Blockchains stehen vor einer existenziellen Bedrohung durch kryptografisch relevante Quantencomputer (CRQCs). Die kryptografischen Grundlagen von Blockchains beruhen auf der Schwierigkeit des diskreten Logarithmusproblems (DLP). Quantenalgorithmen, insbesondere Shors Algorithmus, können das DLP exponentiell schneller lösen als klassische Computer. Diese Schwachstelle könnte es Quantenangreifern ermöglichen, private Schlüssel aus öffentlichen Schlüsseln abzuleiten, was das Fälschen von Transaktionen und das Entschlüsseln sensibler Finanzdaten erlauben würde.

Dieses Szenario wäre ein katastrophaler Systemausfall. Ohne proaktive quantenresistente Upgrades droht der Billionen-Dollar-Krypto-Wirtschaft eine plötzliche Entwertung durch solche Angriffe.

Einzigartiges Wertversprechen&#32;&#32;

Quantus Network – benannt nach dem lateinischen Wort für „wie viel“ – ermöglicht skalierbares, quantensicheres, privates Geld. Quantus ist keine Allzweck-Smart-Contract-Plattform. Quantus konzentriert sich darauf, eine kleine Anzahl von Dingen besser zu machen als jede andere Chain. Ähnlich wie ein Restaurant mit wenigen perfektionierten Gerichten bietet Quantus:

- Post-Quantum-Signaturen für alle Transaktionen
- Post-Quantum-Signaturen und Verschlüsselung (ML-DSA und ML-KEM) zur Absicherung von Peer-Verbindungen
- Post-Quantum Zero-Knowledge-Proofs zur Skalierung
- Hochsichere Konten zur Abschreckung von Diebstahl und Ermöglichung der Wiederherstellung bei Fehlern
- Menschlich lesbare Prüfphrasen zur einfachen Adressverifikation

Die Entscheidung, sich auf skalierbares, quantensicheres, privates Geld zu konzentrieren, resultiert aus der Bedrohung durch CRQCs für die gesamte Branche und der Unfähigkeit von Bitcoin, diese Herausforderungen zu bewältigen.

**2. Die Quantenbedrohung für Blockchains**

Grundlagen des Quantencomputings

Quantencomputer nutzen Prinzipien wie Superposition und Verschränkung, um Berechnungen durchzuführen, die für klassische Maschinen unlösbar sind. Im Gegensatz zu klassischen Bits (0 oder 1) können Quantenbits (Qubits) gleichzeitig in mehreren Zuständen existieren und ermöglichen exponentielle Parallelität bei bestimmten Problemen. Diese Fähigkeit stellt eine existenzielle Gefahr für die kryptografischen Systeme dar, die der Blockchain-Finanzwelt zugrunde liegen, da Algorithmen für Quantenhardware die Sicherheitsannahmen der meisten Public-Key-Kryptosysteme untergraben.

Shors Algorithmus (1994) bietet eine polynomiale Methode zur Faktorisierung großer Zahlen und zur Lösung des diskreten Logarithmusproblems auf einem Quantencomputer. Er nutzt die Quantum Fourier Transformation (QFT), um die Periode einer Funktion zu finden und damit die Einwegfunktionen von Systemen wie RSA oder elliptischer Kurvenkryptografie (ECC) effizient umzukehren. Für die Blockchain-Finanzwelt bedeutet dies: Ein Angreifer mit einem ausreichend leistungsfähigen Quantencomputer (geschätzt \~2.000 logische Qubits [6][7][8][9]) könnte private Schlüssel aus öffentlichen Schlüsseln in polynomieller Zeit O(n³) ableiten – ein extremer Geschwindigkeitsvorteil, der anfällige Systeme über Nacht obsolet macht. [1]

Grovers Algorithmus (1996) bietet eine quadratische Beschleunigung bei unstrukturierten Suchproblemen und reduziert die Zeit zur Suche eines Elements in einer unsortierten Datenbank von O(n) auf O(√n). Er funktioniert durch iterative Amplitudenverstärkung des Zielzustands mittels Quanteninterferenz. Während dies für asymmetrische Kryptografie weniger verheerend ist, beeinflusst es symmetrische Primitive wie Hash-Funktionen und AES-Verschlüsselung und halbiert effektiv das Sicherheitsniveau (z. B. verhält sich ein 256-Bit-Schlüssel wie 128 Bit gegen Quantenangriffe). Dieser Angriff lässt sich jedoch durch Verdopplung der Sicherheitsbits abmildern. Zudem ist Grovers quadratische Beschleunigung aufgrund enormer Qubit- und Gatteranforderungen sowie begrenzter Parallelisierung in der Praxis kaum realisierbar. [2]

Die Gefahren des Quantencomputings für die Blockchain-Finanzwelt lassen sich in vier Bereiche einteilen:

- Fälschung digitaler Signaturen: Shors Algorithmus bedroht ECC-basierte Signaturen (z. B. secp256k1 bei Bitcoin) und ermöglicht das Imitieren von Nutzern sowie das Autorisieren betrügerischer Transaktionen.
- Erzeugung gefälschter Beweise in Zero-Knowledge-Systemen: Viele ZK-Proofs (z. B. zk-SNARKs) basieren auf der DLP-Härte über elliptische Kurven-Pairings; Shor könnte die Erstellung ungültiger, aber scheinbar gültiger Beweise ermöglichen und so das Prägen neuer Coins oder das Fälschen des Zustands von Layer-2s erlauben.
- Entschlüsselung geheimer Informationen: Quantenangriffe könnten verschlüsselte Daten in Protokollen wie Zcash oder Monero offenlegen oder p2p-Kommunikation entschlüsseln und so sensible Vermögensdetails preisgeben.
- Umkehrung von Hash-Funktionen: Grovers Algorithmus könnte Preimage-Angriffe auf Hashes wie SHA-256 beschleunigen, stellt jedoch die geringste Bedrohung dar. Viele post-quanten Kryptosysteme nutzen hash-basierte Konstruktionen, da Hashes mit ausreichender Länge als quantensicher genug gelten.

Skalierungsherausforderungen in der Post-Quantum-Kryptografie

Post-Quantum-Kryptografie (PQC) bietet zwar essenziellen Schutz, führt jedoch aufgrund größerer Parameter zu erheblichen Skalierungsproblemen. Im Vergleich zu kompakten elliptischen Kurven sind PQC-Primitive deutlich größer. Beispiel für ML-DSA (128-Bit-Post-Quantum-Sicherheit) im Vergleich zu 256-Bit-ECDSA [10]:

| Algorithmus           | Öffentlicher Schlüssel (Bytes) | Privater Schlüssel (Bytes) | Signatur (Bytes) |
| --------------------- | ------------------------------ | -------------------------- | ---------------- |
| ML-DSA-87 (Dilithium) | 2.592                          | 4.896                      | 4.627            |
| ECDSA (256-Bit)       | 32                             | 32                         | 65               |

Wie die Tabelle zeigt, können ML-DSA-Signaturen mehr als 70-mal größer sein als ihre ECDSA-Pendants, öffentliche Schlüssel sogar mehr als 80-mal größer. Andere Post-Quantum-Familien verschärfen dieses Problem noch: Hash-basierte Verfahren wie SPHINCS+ erzeugen Signaturen von bis zu 41 KB, während selbst größenoptimierte Lattice-Varianten wie FALCON die klassischen Größen um ein Vielfaches übertreffen.

In Blockchain-Kontexten summieren sich diese aufgeblähten Größen zu systemischen Skalierungsproblemen. Größere Signaturen blähen einzelne Transaktionen auf, wodurch die Transaktionen pro Sekunde (TPS) sinken, da Blöcke schneller voll werden und mehr Zeit für die Validierung benötigen. Dies belastet auch die Peer-to-Peer-Kommunikation (P2P), erhöht den Bandbreitenbedarf und verlängert die Propagationszeiten – was das Risiko von Netzwerk-Forks oder verwaisten Blöcken in Konsensmechanismen wie Proof-of-Work deutlich steigern kann. Auch die Speicheranforderungen steigen, was zu höheren Betriebskosten für Nodes führt und die Teilnahme – insbesondere für ressourcenbeschränkte Nutzer oder Validatoren – erschwert.

Diese Skalierungsherausforderungen müssen in Zukunft **alle Blockchains** bewältigen. Bitcoin beispielsweise würde bei unveränderter maximaler Blockgröße deutlich unter 1 TPS fallen.

**3. Die Migrationskrise**

Das Koordinationsproblem

Bitcoins konservative Kultur erschwert Protokolländerungen. Ein PQC-Upgrade würde Konsens über strittige Themen (Zeitpläne, mögliche Coin-Beschlagnahme, Blockgrößen-Erhöhung) erfordern. Jeder Nutzer müsste seine Coins aktiv auf neue quantensichere Adressen migrieren – viele haben jedoch den Zugang verloren oder kennen die Bedrohung nicht.

Diese Probleme betreffen jede öffentliche Blockchain, stellen jedoch für Bitcoin eine besondere Herausforderung dar – aufgrund fehlender klarer Führung und seiner Philosophie der technischen Versteinerung.

Das Problem verlorener Coins

Schätzungsweise 250 bis 500 Milliarden US-Dollar an Bitcoin sind dauerhaft unzugänglich – aufgrund verlorener Schlüssel, verstorbener Inhaber oder vergessener Wallets. [3] Diese Coins können nicht migriert werden und stellen eine öffentliche Prämie für die Entwicklung eines kryptografisch relevanten Quantencomputers (CRQC) dar. Quantenangreifer werden in der Lage sein, die privaten Schlüssel aus den offengelegten, nicht migrierten öffentlichen Schlüsseln abzuleiten und vermutlich Milliarden Dollar an BTC auf den Markt werfen.

Technisch gesehen ist der einzige Weg, dies zu verhindern, eine harte Frist, die nicht migrierte Coins auf irgendeine Weise einfriert. Dies ist jedoch politisch völlig undenkbar. Die Bitcoin-Community müsste Gelder von Nutzern konfiszieren, die nicht aktiv geworden sind – darunter Nachlässe verstorbener Inhaber sowie langfristige Investoren, die die Bedrohung nicht beachtet haben. Ohne eine solche Frist wird das Ergebnis sein, dass nicht migrierte Coins gestohlen und verkauft werden, was den Markt zum Einsturz bringt und das Vertrauen in das Netzwerk zerstört.

Das Problem des Migrationszeitplans

Selbst bei einer erfolgreichen Migration stößt man auf eine harte Skalierungsgrenze. Post-Quantum-Signaturen sind 20- bis 80-mal größer als die aktuellen Bitcoin-Signaturen. Ohne grundlegende architektonische Änderungen würde der Durchsatz von Bitcoin auf einen Bruchteil seiner ohnehin bereits begrenzten Kapazität zusammenbrechen.

Selbst wenn Bitcoin die politischen und technischen Herausforderungen irgendwie lösen könnte, würde die Migration selbst Monate oder Jahre in Anspruch nehmen. Jeder Inhaber müsste mindestens eine Transaktion durchführen, um seine Mittel auf eine quantensichere Adresse zu übertragen. Viele würden zunächst Testtransaktionen senden. Durch die aufgeblähten Post-Quantum-Signaturen, die den Durchsatz massiv einschränken, entstünde ein Rückstau, der Monate oder Jahre andauern könnte – während quanten anfällige Coins weiterhin exponiert bleiben.

Diese sich gegenseitig verstärkenden Herausforderungen machen es außerordentlich schwierig, Quantensicherheit nachträglich in bestehende Chains einzubauen. Quantus Network umgeht dieses Dilemma, indem es Quantensicherheit von Tag eins an fest in die Chain integriert.

**4. Quantus Network Architektur**

Grundlage

Quantus Network basiert auf Substrate (Parity Technologies), einem modularen Blockchain-SDK.

Quantus erweitert Substrate durch:

- Unterstützung post-quanten Signaturschemata
- Quantensichere p2p-Netzwerksicherheit
- Benutzer-kontrollierbare Transaktionsrückgängigmachung
- ZK-freundliche Datenbank (Ausrichtung auf Field-Element-Grenzen)

Post-Quantum-Kryptografische Primitive

Quantus Network setzt auf vom NIST standardisierte Post-Quantum-Kryptografie (PQC), um die Sicherheit von Transaktionen und Netzwerkkommunikation gegen Quantenbedrohungen zu gewährleisten. Kern der Transaktionsintegrität ist ML-DSA (Module-Lattice-based Digital Signature Algorithm, früher bekannt als CRYSTALS-Dilithium), ein lattice-basiertes Signaturverfahren, das aufgrund seines ausgewogenen Verhältnisses von Sicherheit, Effizienz und Implementierbarkeit ausgewählt wurde. ML-DSA stützt sich auf die Schwierigkeit von Problemen wie Learning With Errors (LWE) und Short Integer Solution (SIS) über Modul-Lattices und bietet dadurch starken Schutz sowohl gegen klassische als auch gegen Quantenangriffe – einschließlich solcher mit Shors Algorithmus. [4]

Für Transaktionssignaturen integriert Quantus ML-DSA-87, das Parameterset mit dem höchsten Sicherheitsniveau (NIST Security Level 5, vergleichbar mit 256-Bit klassischer Sicherheit und 128-Bit Quantensicherheit). Diese Wahl dient der Vorsicht, da die Lattice-Kryptografie noch relativ jung ist und weniger kampferprobt als klassische Verfahren. Die größeren Parameter reduzieren Risiken durch potenzielle Fortschritte in der Lattice-Kryptanalyse – Fortschritte, die kleinere Schlüsselgrößen als leichtere Ziele erscheinen lassen würden.

**Alternativen**

ML-DSA wurde gegenüber Alternativen wie FN-DSA (Falcon) bevorzugt, und zwar aus folgenden Gründen:

- Höhere Implementierungskomplexität von FN-DSA (z. B. erforderliche Gleitkommaoperationen, die in Blockchain-Umgebungen problematisch sind)
- Fehlende deterministische Schlüsselgenerierung in der Spezifikation
- Zum Zeitpunkt der Entwicklung noch nicht finalisierter Standardstatus

Hash-basierte Verfahren wie SLH-DSA wurden nicht ausgewählt, da sie noch deutlich größere Signaturen erzeugen (über 17 KB). Crypto-Agilität (die Möglichkeit, unterschiedliche Signaturverfahren später auszutauschen) ist durch Substrate bereits eingebaut, sodass diese Alternativen bei Bedarf relativ einfach integriert werden können.

Obwohl ML-DSA-87 zu größeren Schlüsseln und Signaturen führt, ist dies im frühen Stadium des Quantus-Netzwerks beherrschbar – der Speicher stellt derzeit noch keine Engstelle dar. Skalierungsoptimierungen mittels Zero-Knowledge-Proofs werden diese Herausforderungen zukünftig adressieren.

Für technische Details zur Implementierung siehe QIP-0006.

**Libp2p**

Quantus Network sichert die Peer-to-Peer-Kommunikation (P2P) zwischen Nodes durch eine Kombination aus ML-DSA für die Authentifizierung und ML-KEM (Module-Lattice-based Key Encapsulation Mechanism, früher bekannt als CRYSTALS-Kyber) für die Verschlüsselung. Diese Integration erweitert die Post-Quantum-Kryptografie (PQC) auf den libp2p-Netzwerk-Stack und passt zentrale Komponenten für Quantenresistenz an: ML-DSA-87-Signaturen werden für die Peer-Identität verwendet, ML-KEM-768 für die Transportsicherheit. Dabei wird der Noise-Handshake um eine zusätzliche KEM-Nachricht erweitert, um quantenresistente gemeinsame Geheimnisse zu erzeugen. [5]

Die P2P-Schicht wird in Quantensicherheitsanalysen häufig vernachlässigt. Die Authentifizierung von Peers ist wichtig, doch das Schlimmste, was ein Angreifer auf Peer-Ebene erreichen könnte, wäre das Imitieren eines Nodes und das Senden ungültiger Nachrichten, was zu einer Denial-of-Service-Situation führen könnte. Dieser Angriff wird jedoch bereits durch das grundlegende Blockchain-Modell abgemildert: Nodes gelten generell als nicht vertrauenswürdig, und bei Erkennung eines Angriffs können Nodes ihre Schlüssel problemlos wechseln. Ebenso bringt das Entschlüsseln von P2P-Kommunikation nur begrenzten Nutzen für Angreifer (z. B. das Nachverfolgen von Transaktionspfaden – was durch Proxys oder Tor erschwert wird), und der Großteil der Daten wird ohnehin on-chain öffentlich.

Dennoch schützt die Quantensicherung der P2P-Schicht gezielt vor Abhören, Man-in-the-Middle-Angriffen und Quanten-Entschlüsselung. Dadurch bleiben Node-Gossip, Block-Propagation und andere Netzwerkinteraktionen langfristig vertraulich und manipulationssicher.

Für technische Details zur Implementierung siehe QIP-0004.

Skalierung von PQC

Um die inhärenten Skalierungsherausforderungen der Post-Quantum-Kryptografie zu bewältigen, führt Quantus Network ein innovatives aggregiertes Post-Quantum-Signaturverfahren namens „Wormhole Addresses“ ein. Dieses System nutzt Zero-Knowledge-Proofs (ZKPs), die mit dem Plonky2-Beweissystem (im Wesentlichen STARKs) erzeugt werden, um die Saldenprüfung aus der Chain herauszuverlagern. Dadurch kann die Blockchain einen einzigen kompakten Beweis verifizieren, ohne einzelne Signaturen verarbeiten zu müssen. Wormhole Addresses ermöglichen die Verifikation einer großen Anzahl von Transaktionen mit nur einem Beweis, wobei die öffentlichen Eingaben (z. B. Nullifier, Storage Root, Exit-Adressen und Beträge) zum primären limitierenden Faktor werden. Dies reduziert den amortisierten Speicherbedarf pro Transaktion auf etwa 256 zusätzliche Bytes – deutlich kleiner als bei jedem bekannten PQC-Signaturverfahren.

Die Quantensicherheit des Verfahrens ergibt sich aus der Verwendung der sicheren Hash-Funktion Poseidon2 für Commitments mittels FRI (Fast Reed-Solomon Interactive Oracle Proofs) – anstelle der quanten anfälligen elliptischen Kurven-Pairings, die in SNARKs üblicherweise eingesetzt werden.

Zusätzlich werden die Authentifizierungsgeheimnisse hinter Poseidon2 verborgen. Da sichere Hash-Funktionen durch Grovers Algorithmus lediglich quadratisch geschwächt (nicht gebrochen) werden, können Hash-Preimage-Beweise in ZK-Kontexten als leichtgewichtige post-quanten Signaturen dienen – ähnlich wie hash-basierte Verfahren wie SPHINCS+.

**Client / Prover Flow**

Nutzer erzeugen eine nachweislich nicht ausgebbar Adresse durch doppeltes Hashen eines Salts, der mit einem Geheimnis verkettet ist:

H(H(salt | secret))

Diese Konstruktion verhindert False Positives (z. B. die Verwechslung eines einfach gehashten öffentlichen Schlüssels mit einer nicht ausgebbaren Adresse), da Blockchain-Adressen in Substrate (und generell) der einfache Hash eines öffentlichen Schlüssels sind, der aus dem privaten Schlüssel über eine algebraische Operation abgeleitet wird – nicht über eine sichere Hash-Funktion. Die Sicherheit der Konstruktion reduziert sich daher auf das Finden des Preimage-of-a-Preimage einer sicheren Hash-Funktion. An diese Adresse gesendete Tokens sind effektiv verbrannt. Sie können nicht ausgegeben werden, da kein privater Schlüssel für die empfangende Adresse existiert. Diese Coins können daher ohne Erhöhung der Gesamtmenge wieder neu gemintet werden.

Für jede Übertragung wird ein TransferProof-Speicherobjekt erzeugt, das u. a. eine eindeutige globale Transferzählung enthält. Die Wallet des Nutzers erstellt einen Merkle-Patricia-Trie (MPT) Speicherbeweis von einem aktuellen Block-Header-Storage-Root bis zum Leaf dieses TransferProofs. Ein Nullifier wird berechnet:

H(H(salt | secret | global_transfer_count))

um Double-Spending zu verhindern. Das Geheimnis wird deterministisch aus dem Wallet-Seed abgeleitet, um es wiederherstellen zu können.

**Aggregator Flow**

Jede Partei (Client, Miner oder Drittanbieter) kann mehrere Beweise mittels Plonky2-Recursion aggregieren und einen Beweisbaum erzeugen, bei dem jeder Elternbeweis die Verifikation der Kindbeweise darstellt. Die öffentlichen Eingaben der Kindbeweise werden dabei aggregiert:

- Nullifier werden unverändert weitergegeben
- Exit-Adressen werden dedupliziert
- Block-Hashes werden als verkettet bewiesen, danach werden alle außer dem neuesten verworfen
- Beträge für doppelte Exit-Adressen werden summiert

Diese rekursive Aggregation ermöglicht hierarchische Zusammenfassung und reduziert den On-Chain-Datenbedarf drastisch.

**Chain / Verifier Flow**

Das Netzwerk verifiziert den aggregierten Beweis durch Prüfung von:

- Block-Hash ist on-chain und aktuell
- Nullifier-Einmaligkeit (zur Vermeidung von Double-Spending)
- Beweisgültigkeit

Der ZK-Schaltkreis erzwingt:

- Korrektheit des Speicherbeweises
- Genauigkeit der Nullifier-Berechnung
- Nicht-Ausgebbarkeit der Adresse
- Übereinstimmung der Salden zwischen Eingaben und Ausgaben
- Verkettung der Block-Header

Plonky2 wurde aus folgenden Gründen ausgewählt:

- bereits auditiert
- post-quanten sicher
- kein trusted setup erforderlich
- effizientes Beweisen und Verifizieren
- nahtlose Beweisaggregation
- nativ in Rust implementiert
- kompatibel mit Substrates no-std-Umgebung

**Leistungsmerkmale**

Zu den Performance-Highlights zählen rekursive Beweise in 170 Millisekunden und kompakte Größen (ca. 100 KB pro aggregiertem Beweis). Dies ermöglicht massive Durchsatzgewinne. Im Optimalfall (5-MB-Blöcke, alle Transaktionen an dieselbe Ausgabe) könnten Wormhole Addresses etwa 153.000 Transaktionen in einen einzigen Block packen (4,9 MB / 32 Bytes pro Nullifier) – eine Verbesserung um den Faktor 223 gegenüber etwa 685 reinen ML-DSA-Transaktionen (5 MB / 7,3 KB pro Transaktion).

**Security Notes**

Mögliche Risiken umfassen Inflationsfehler durch fehlerhafte Schaltkreis- oder Verifikationsimplementierungen – diese wären jedoch ökonomisch nachweisbar, falls neu geminte Coins die Salden von Zero-Send-Adressen überschreiten. Nutzer können optional nachweisen, dass eine Adresse ein Wormhole ist, indem sie den ersten Hash veröffentlichen, ohne das Geheimnis preiszugeben. Verifikationstransaktionen sind unsigniert, daher muss Denial-of-Service durch fehlgeschlagene Transaktionen auf nicht-finanzielle Weise abgemildert werden. Die Token-Versorgungsrechnung bleibt gewahrt, da Re-Mints als neue Coins erscheinen, die maximale Versorgung jedoch durch Burns garantiert wird.

Für weitere technische Details zur Implementierung siehe QIP-0005.

Konsensmechanismus

Quantus Network verwendet einen Proof-of-Work (PoW)-Konsensalgorithmus, der die wünschenswerten Eigenschaften des Bitcoin-Konsensalgorithmus bewahrt, gleichzeitig jedoch die Kompatibilität mit Zero-Knowledge-Beweissystemen deutlich verbessert, indem SHA-256 durch Poseidon2 ersetzt wird.

Diese Änderung erfolgt nicht aus Gründen der Quantensicherheit. Kryptografische Hash-Funktionen wie SHA-256 werden durch Quantenalgorithmen – insbesondere Grovers Algorithmus – zwar geschwächt, aber nicht gebrochen. Aus genau diesem Grund setzen einige post-quanten Signaturverfahren sichere Hash-Funktionen gezielt als Baustein ein.

Poseidon2 ist eine Weiterentwicklung der Poseidon-Hash-Funktion. Bei der Erstellung von SNARKs oder STARKs für Berechnungen, die traditionelle Hash-Funktionen wie SHA-256 verwenden, sind in der Regel fast 100-mal mehr Gatter erforderlich als bei Poseidon. Poseidon basiert vollständig auf algebraischen Funktionen über Field-Elementen statt auf bitweisen Operationen.

Sowohl für Poseidon2 als auch für Plonky2 verwenden wir das Goldilocks-Feld. Die Ordnung des Goldilocks-Feldes passt in einen vorzeichenlosen 64-Bit-Integer, was die Effizienz erheblich steigert, ohne die Beweissicherheit zu beeinträchtigen.

**5. Vermögensschutz**

Die Verwaltung von Kryptowährungs-Schlüsseln birgt zahlreiche Risiken. Die meisten davon sind vermeidbar.

Reversible Transaktionen

Quantus Network bietet benutzerkonfigurierbare reversible Transaktionen. Absender legen ein Zeitfenster fest, innerhalb dessen sie ausgehende Überweisungen stornieren können. Dies wirkt Diebstahl entgegen und ermöglicht die Korrektur von Fehlern, ohne die Finalität zu opfern. Das System nutzt ein modifiziertes Substrate-„Scheduler Pallet“ mit Zeitstempeln. Wallets zeigen für Absender (mit Stornier-Button) und Empfänger jeweils einen Countdown an.

Reversible Transaktionen ermöglichen neuartige Sicherheitsprotokolle, während die Dezentralisierung durch On-Chain-Durchsetzung vollständig gewahrt bleibt.

Für weitere technische Details siehe QIP-0009.

Check-Phrases

Quantus Network führt „Check-Phrases“ ein – eine kryptografisch sichere, für Menschen lesbare Prüfsumme für Blockchain-Adressen. Die Adresse wird gehasht, um eine kurze Sequenz einprägsamer Wörter aus der BIP-39-Mnemonic-Liste zu erzeugen. Check-Phrases schützen vor Tippfehlern, Manipulation und Address-Poisoning-Angriffen. Eine Key-Derivation-Funktion mit 50.000 Iterationen macht Rainbow-Table-Angriffe extrem aufwendig. Bei großen Transaktionen sollten Nutzer dennoch jede einzelne Zeichen der Adresse verifizieren.

Für weitere technische Details siehe QIP-0008.

Hochsichere Konten

Jedes Konto kann zu einem „hochsicheren Konto“ aufgewertet werden, bei dem alle ausgehenden Überweisungen zwingend einer Rückgängigkeitsfrist unterliegen. Ein designierter „Guardian“ (Hardware-Wallet, Multisig oder vertrauenswürdiger Dritter) kann verdächtige Transaktionen innerhalb dieser Frist stornieren und die Mittel an den Guardian senden – statt an Absender oder Empfänger. Diese Opt-in-Funktion ist nach Aktivierung dauerhaft und kann von Dieben nicht mehr deaktiviert werden.

Guardians können verkettet werden: Der Guardian eines hochsicheren Kontos kann selbst ein hochsicheres Konto mit eigenem Guardian sein. Dadurch entstehen komponierbare Hierarchien, bei denen jeder Guardian höhere Rechte gegenüber dem geschützten Konto besitzt. Das Design gibt Nutzern Zeit, unbefugte Aktivitäten zu erkennen und zu reagieren, ohne die Finalität legitimer Überweisungen zu gefährden.

Für weitere technische Details siehe QIP-0011.

Key Recovery

Viele Krypto-Vermögen sind mit ihren Besitzern ins Grab gegangen. Quantus Network bietet eine einfache Möglichkeit, eine Recovery-Adresse festzulegen, die zu jedem Zeitpunkt die Mittel abziehen kann – unterliegt jedoch einer festen Verzögerung. Während dieser Zeit kann der Eigentümer die Wiederherstellung verweigern, sofern er noch Zugriff auf seinen Schlüssel hat. Diese Funktion ermöglicht „Survivorship“: Nutzer verfügen über ein On-Chain-Testament, ohne Gerichte oder Nachlassverfahren zu benötigen.

HD-Lattice&#32;&#32;

Hierarchisch-deterministische (HD) Wallets sind der Industriestandard für Blockchains. Sie erlauben es, alle Schlüssel mit einer einzigen Seed-Phrase zu sichern – deutlich sicherer und bequemer als manuelle Backups pro Aktion. Die Anpassung dieses Konzepts an Lattice-basierte Verfahren wie Dilithium bringt zwei Herausforderungen mit sich:

- Die Ausgabe von HMAC-SHA512 kann nicht direkt als Lattice-Privatschlüssel dienen, da diese Polynome sind, die aus einem Ring mit bestimmten Eigenschaften abgetastet werden.
- Nicht-verhärtete Schlüsselableitung basiert auf elliptischer Kurvenaddition, die in Lattice-Systemen fehlt (öffentliche Schlüssel sind unter keiner algebraischen Operation abgeschlossen).

Quantus Network löst die erste Herausforderung, indem die HMAC-Ausgabe als Entropie verwendet wird, um den privaten Schlüssel deterministisch zu konstruieren – nicht als direkter privater Schlüssel selbst. Die zweite Herausforderung ist weniger kritisch und bleibt eine offene Forschungsfrage, ob Lattice-Kryptografie dafür angepasst werden kann.

Für weitere technische Details siehe QIP-0002.

**6. Tokenomics und Governance**

Quantus Network existiert in einer sich verändernden Umgebung, und wir können nicht davon ausgehen, dass wir beim ersten Versuch alles richtig machen. Aus diesem Grund wählen wir einen einfachen Ausgangspunkt und ermöglichen es dem Governance-System, Änderungen vorzunehmen, sobald neue Erkenntnisse vorliegen. Dieses Design macht die Blockchain zu einem lebendigen System, das sich nach Belieben an seine Umgebung anpassen kann. Insbesondere erlaubt der Governance-Prozess von Substrate tiefgreifende Änderungen an der Chain mit minimaler Koordination unter den verschiedenen Node-Betreibern.

Block Rewards

Quantus Network verwendet ein einfaches Tokenomics-Modell, das dem von Bitcoin nachempfunden ist. Es gibt eine maximale Gesamtmenge von 21.000.000 Coins, und eine einfache Heuristik bestimmt die Belohnung pro Block.

```javascript
block_reward = (max_supply - current_supply) / constant;
```

Diese Heuristik erzeugt eine glatte, exponentiell abfallende Kurve, da die block_reward zur current_supply beiträgt, was wiederum die block_reward beim nächsten Block verringert. Jegliche Burns aus Gebühren oder anderen Quellen reduzieren die current_supply und werden im Wesentlichen Teil des Budgets für Block-Belohnungen. Die Konstante ist so gewählt, dass ohne jegliche Burns 99 % der Coins in etwa 40 Jahren emittiert werden.

Investoren-Zuteilungen

Quantus Network wurde mit Hilfe von Angel-Investoren aufgebaut, die ein großes Risiko eingegangen sind, um es zu finanzieren. Um die Supply-Overhangs zu vermeiden, die durch Investor-Lockups entstehen, sind alle Investoren – öffentliche wie private – ab Tag eins vollständig liquide. Diese Allokation ist der einzige „Pre-Mine“. Alle anderen Tokens müssen gemined werden. Je nach Erfolg der öffentlichen Verkäufe wird dieser Anteil 20–30 % der Gesamtmenge ausmachen.

Unternehmenszuteilungen

Um das Team für das Risiko zu kompensieren, neue Technologie ohne Erfolgsgarantie zu entwickeln, wird ein Teil der Block-Belohnung für etwa vier Jahre an das Unternehmen gesendet. Dies ergibt de facto einen Vesting-Plan von etwa 10 % der Gesamtmenge für das Unternehmen.

Danach wird der Unternehmensanteil der Block-Belohnungen an eine vom Token-Holder gesteuerte Treasury umgeleitet, was im Wesentlichen eine DAO darstellt.

Transaktionsgebühren

Standard-Transaktionen haben eine Gebühr, die an die Miner geht und einen Anreiz zur Aufnahme von Transaktionen bietet. Reversible Transaktionen aus Hochsicherheitskonten werden mit einer volumenbasierten Gebühr von 1 % belastet, die verbrannt wird und damit im Wesentlichen dem Sicherheitsbudget zufließt. Transaktionen, die über das ZK-Aggregationssystem laufen, unterliegen ebenfalls einer volumenbasierten Gebühr von 0,1 %, die gleichmäßig zwischen Miner und Burn aufgeteilt wird.

Forkless Upgrades

Quantus Network unterstützt „forkless“ Upgrades über die Runtime-Upgrades von Substrate. Dadurch kann sich die Kernlogik der Blockchain (der „Runtime“) ohne Hard Forks weiterentwickeln, die das Netzwerk stören oder die Community spalten könnten. Dies geschieht über On-Chain-Governance-Referenden: Genehmigte Vorschläge lösen einen Runtime-Swap aus, der den bestehenden WASM-Code-Blob in einem einzigen Block durch einen neuen ersetzt und so Kontinuität von Zustand und Operationen sicherstellt. Dieser Upgrade-Pfad minimiert Ausfallzeiten und Risiken und befähigt die Community, das Protokoll iterativ zu verfeinern.

Mit zunehmendem Vertrauen der Community in das System wird die Befugnis zur Änderung des Runtimes im Laufe der Zeit deutlich eingeschränkt, um die Angriffsfläche zu begrenzen, falls ein böswilliger Akteur die Kontrolle über den Upgrade-Prozess erlangen sollte.

Governance-System

Quantus Network übernimmt das Governance-Framework von Polkadots OpenGov-System über Substrate. Token-Holder beteiligen sich über Conviction Voting: Sie stimmen zu, ihre Assets für unterschiedliche Zeiträume zu sperren, um das Gewicht ihrer Stimme zu verstärken. Diese Verstärkung reicht von 1× (keine Sperrung) bis 6× (maximale Sperrfrist). Dieses Design fördert langfristige Ausrichtung, indem Einfluss an Commitment gekoppelt wird.

Vorschläge werden in mehrere Abstimmungsspuren („origins“) kategorisiert. Jede Origin hat angepasste Parameter wie Genehmigungsschwellen (z. B. Supermajorität bei weitreichenden Änderungen), Mindesteinzahlungen gegen Spam, Vorbereitungs- und Umsetzungsfristen sowie Entscheidungszeiträume gegen Blockaden. Dieses Multi-Track-Design ermöglicht parallele Bearbeitung unterschiedlicher Referenden – von routinemäßigen Treasury-Ausgaben bis hin zu kritischen Runtime-Upgrades.

Das Technical Collective ist eine kuratierte Gruppe technischer Experten, die als spezialisierte Instanz dient, um dringende technische Angelegenheiten vorzuschlagen, zu prüfen oder auf eine Whitelist zu setzen und sie über eine dedizierte Spur zu beschleunigen, während die Kontrolle durch die Community gewahrt bleibt.

Quantus übernimmt dieses System unverändert, startet jedoch mit einem minimalistischen Setup, um Komplexität in den frühen Phasen zu vermeiden. Zunächst ist nur die Technical Collective Spur aktiv, die für bindende, hochprivilegierte Entscheidungen wie Protokoll-Upgrades oder Parameteranpassungen genutzt wird.

Später kann Quantus eine nicht-bindende Community-Vote-Spur hinzufügen, um Stimmungen zu nicht-durchsetzbaren Themen (z. B. Feature-Vorschläge oder Ökosystem-Umfragen) abzufragen. Dieses System wird bindend, sobald das Unternehmen das Netzwerk an die DAO übergibt.

Dieser gestufte Ansatz erlaubt es dem Netzwerk, sich organisch durch zukünftige Governance-Abstimmungen weiterzuentwickeln, ohne die Nutzer zu Beginn mit unnötiger Komplexität zu belasten.

**7. Roadmap**

Der aktuelle Fahrplan bis 2026 (Änderungen vorbehalten):

- Heisenberg Inception – Dezember 2024 – Funding gesichert, Substrate ausgewählt
- Resonance Alpha – Juli 2025 – Öffentliches Testnet, Dilithium-Signaturen, Reversible Transaktionen
- Schrödinger Beta – Oktober 2025 – Feature Complete, Audit-bereit
- Dirac Beta – November 2025 – PoW auf Poseidon2 umgestellt, Audits umgesetzt
- Planck Beta – Januar 2026 – Hochsichere Konten, Multisigs, Hardware-Wallet, ZK-Integration
- Bell Mainnet – Q2 2026 – Mainnet-Start
- Fermi Upgrade – Q4 2026 – ZK-Proof-Aggregations-Infrastruktur

**8. Risiken**

Der Aufbau von Quantus Network birgt inhärente Risiken.

- **Implementierungsprobleme**: Fehler in der Softwarelogik können selbst in den besten Systemen schwerwiegende Ausfälle verursachen.
- **Probleme bei der Auswahl der NIST-Algorithmen**: Mögliche Schwachstellen oder Backdoors in den ausgewählten Post-Quantum-Standards (z. B. ML-DSA, ML-KEM), die nach der Standardisierung auftreten könnten. Im schlimmsten Fall würden solche Schwachstellen einem Angreifer ermöglichen, Signaturen zu fälschen, indem er den privaten Schlüssel aus dem öffentlichen ableitet – ein katastrophaler Ausfallmodus der Chain. Sollten solche Schwachstellen öffentlich werden, könnte Quantus Network auf einen neuen Algorithmus upgegradet werden. Werden sie jedoch nur sparsam ausgenutzt, könnten sie möglicherweise nie entdeckt werden.
- **Zeitliche Entwicklung des Quantencomputings**: Quantendurchbrüche könnten deutlich später eintreten als erwartet und den Bedarf an PQC verzögern; umgekehrt könnten geheime Entwicklungen (z. B. durch Regierungen) zu plötzlichen Bedrohungen führen, falls die Blockchain-Community nicht schnell genug updatet.
- **Weitere Überlegungen**: Allgemeine Adoptionsbarrieren, regulatorische Unsicherheiten im Finanz-/Blockchain-Bereich sowie die inhärente Volatilität von Krypto-Ökosystemen.

**9. Referenzen & Weiterführende Literatur**

1. Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. _SIAM Journal on Computing_, 26(5), 1484–1509. [https://doi.org/10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172)
2. Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. _Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing_, 212–219. [https://doi.org/10.1145/237814.237866](https://doi.org/10.1145/237814.237866)
3. Chainalysis. (2024). The Chainalysis 2024 Crypto Crime Report. [https://www.chainalysis.com/blog/2024-crypto-crime-report-introduction/](https://www.chainalysis.com/blog/2024-crypto-crime-report-introduction/)
4. National Institute of Standards and Technology. (2024). FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA). U.S. Department of Commerce. [https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)
5. National Institute of Standards and Technology. (2024). FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM). U.S. Department of Commerce. [https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)
6. Häner, T., Jaques, S., Naehrig, M., Roetteler, M., & Soeken, M. (2020). Improved quantum circuits for elliptic curve discrete logarithms. _arXiv preprint arXiv:2002.12480_. [https://arxiv.org/abs/2002.12480](https://arxiv.org/abs/2002.12480)
7. Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. _arXiv preprint arXiv:1905.09749_. [https://arxiv.org/abs/1905.09749](https://arxiv.org/abs/1905.09749)
8. Aggarwal, D., et al. (2021). Assessment of Quantum Threat To Bitcoin and Derived Cryptocurrencies. _ePrint IACR_. [https://eprint.iacr.org/2021/967.pdf](https://eprint.iacr.org/2021/967.pdf)
9. Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. _arXiv preprint arXiv:1706.06752_. [https://arxiv.org/abs/1706.06752](https://arxiv.org/abs/1706.06752)
10. Open Quantum Safe Project. (n.d.). ML-DSA | Open Quantum Safe. Retrieved January 29, 2026, from https://openquantumsafe.org/liboqs/algorithms/sig/ml-dsa.html

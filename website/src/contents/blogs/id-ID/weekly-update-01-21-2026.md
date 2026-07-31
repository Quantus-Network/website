---
title: "Quantus Weekly: Aset Native dan Risiko Kuantum"
description: "Mengapa modal mendiskon Bitcoin karena risiko kuantum, keputusan aset native-only kami, pekerjaan threshold Dilithium, dan progres ZK aggregation minggu ini."
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Aset Native dan Risiko Kuantum"
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

Kalau Anda penasaran kenapa emas melesat dan Bitcoin tertekan, baca ini. Tidak ada misteri di baliknya.

![Ringkasan wawancara Nic Carter](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Alokator modal mendiskon Bitcoin sebanding dengan peluang komputer kuantum kriptografis relevan (CRQC) dirilis sebelum Bitcoin upgrade ke kriptografi pasca-kuantum. Komunitas Bitcoin menerima atau tidak, pasar sudah bergerak.

Beberapa chain akan upgrade tepat waktu. Bitcoin mungkin tidak. Baru-baru ini, misalnya, Vitalik menyerukan upgrade PQC.

Kami tidak bisa tahu persis kapan batas waktunya, atau chain mana yang akan upgrade tepat waktu. Artinya kami harus membuat keputusan desain sulit seputar dukungan aset eksternal di @QuantusNetwork.

Jika chain asal aset wrapped dikompromikan, pemegang aset wrapped ikut terdampak. Jadi kami putuskan @QuantusNetwork tidak bisa mendukung aset wrapped apa pun.

Kami membangun infrastruktur untuk bridging permissionless dari mana pun ke uang quantum-secure paling tangguh yang pernah dibuat. Setelah Anda di chain kami memegang QUAN native, Anda dilindungi ML-DSA-87 (tingkat keamanan tertinggi NIST) dengan throughput luar biasa via ZK aggregation.

Tidak ingin mengumumkan apa pun di sini, tapi Anda selalu bisa buka GitHub kami dan cek 👀

Berikut hal lain yang kami rilis minggu ini, supaya saat Q-day tiba, kami siap:

### Github Activity (7 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK

- Mengintegrasikan tanda tangan threshold Dilithium ke sistem MPC protokol lain.
- Membangun POC untuk treasury management kustom menggunakan Parity multisig pallet.
- Mengimplementasikan iterasi pertama multisig pallet kustom dengan tes dan benchmark.
- Mem-patch bug yang mencegah binary sirkuit ZK-enabled di pallet ZK-aggregator.
- Memperbarui verifier ZK-aggregator on-chain untuk mendukung jumlah output quantized.
- Memperbaiki skrip contoh ZK-aggregator end-to-end untuk serializer field element baru.

### Web & Mobile App Updates

- Membangun UX mobile untuk mendukung fixed delay dan fitur intercept untuk akun keamanan tinggi (masih dalam pengujian).
- Block scanner dan fitur keamanan tinggi ditambahkan ke CLI dengan error handling yang lebih baik.
- Pembaruan Subsquid (indexer) untuk penanganan keamanan tinggi dan perbaikan hasher Poseidon terbaru.
- Merilis bagian blog di situs Quantus dengan dukungan tag dan mulai mengunggah backlog weekly update.
- Whitepaper diperbarui ke v3.1, memperbaiki nilai distribusi chart tokenomik.

### Content & Partnerships

- Podcast kini diunggah ke Apple Podcasts.
- Memulai percakapan dengan 2 token launchpad.
- Peningkatan halaman perbandingan blockchain Quantum Canary.
- Podcast dengan AJ tentang biohacking dan self optimization: https://x.com/QuantusNetwork/status/2012526120869286161

### Industry Updates

- Artikel Quantum Canary tentang bagaimana CRQC mengancam Koin Satoshi: https://x.com/QuantumCanary_/status/2011706634868047982

---
title: "Quantus Weekly: Aset Native, Agregasi ZK, dan Risiko Kuantum Bitcoin"
description: "Update mingguan yang menampilkan keputusan kami tentang aset khusus native untuk keamanan kuantum, tanda tangan ambang Dilithium, dan kemajuan pada agregasi ZK dan pallet multisig kustom."
pubDate: "2026-01-21"
heroImage: "/blog/covers/weekly-update-01-21-2026.webp"
heroAlt: "Quantus Weekly: Aset Native, Agregasi ZK, dan Risiko Kuantum Bitcoin"
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

Jika Anda bertanya-tanya mengapa Emas melonjak dan Bitcoin kesulitan, baca ini. Tidak ada yang misterius tentang hal itu.

![Ringkasan wawancara Nic Carter](/blog/assets/nic-carter-x-post-about-bitcoin-underperformance-due-to-quantum.webp)

Alokator modal mendiskon Bitcoin sebanding dengan peluang komputer kuantum yang relevan secara kriptografis (CRQC) muncul sebelum Bitcoin ditingkatkan ke kriptografi pasca-kuantum. Apakah komunitas Bitcoin menerima ini atau tidak, pasar sudah menerimanya.

Beberapa rantai akan ditingkatkan tepat waktu. Bitcoin mungkin tidak. Sebagai contoh, baru-baru ini Vitalik mendesak peningkatan PQC.

Kami tidak memiliki cara untuk mengetahui secara pasti kapan tenggat waktunya, atau rantai mana yang akan ditingkatkan tepat waktu. Yang berarti kami harus membuat keputusan desain yang sulit seputar dukungan aset eksternal di @QuantusNetwork.

Jika rantai asal aset yang dibungkus (wrapped asset) dikompromikan, begitu juga pemegang aset yang dibungkus tersebut. Jadi kami memutuskan @QuantusNetwork tidak dapat mendukung aset yang dibungkus apa pun.

Kami sedang membangun infrastruktur untuk memungkinkan bridging tanpa izin dari mana saja ke uang aman kuantum paling tangguh yang pernah dibuat. Setelah Anda berada di rantai kami memegang QUAN native, Anda dilindungi oleh ML-DSA-87 (tingkat keamanan tertinggi NIST) dengan throughput yang sangat tinggi melalui agregasi ZK.

Saya tidak ingin mengumumkan apa pun di sini, tetapi Anda selalu dapat membuka GitHub kami dan memeriksa 👀

Inilah hal lain yang kami luncurkan minggu ini, jadi ketika hari Q tiba, kami siap:

### Aktivitas Github (7 pull request yang digabungkan):
![Statistik Github](/blog/assets/github-stats-weekly-update-01-21-2026.webp)

### Core Tech & ZK
- Mengintegrasikan tanda tangan ambang Dilithium ke dalam sistem MPC protokol lain.
- Membangun POC untuk manajemen treasury kustom menggunakan pallet multisig Parity.
- Mengimplementasikan iterasi pertama pallet multisig kustom dengan pengujian dan benchmark.
- Memperbaiki bug yang mencegah binari sirkuit berkemampuan ZK pada pallet ZK-aggregator.
- Memperbarui verifikator ZK-aggregator onchain untuk mendukung jumlah output yang dikuantisasi.
- Memperbaiki skrip contoh ZK-aggregator end-to-end untuk serializer elemen field baru.

### Pembaruan Aplikasi Web & Seluler
- Membangun UX seluler untuk mendukung fitur penundaan tetap dan intersep untuk akun keamanan tinggi (masih dalam pengujian).
- Pemindai blok dan fitur keamanan tinggi ditambahkan ke CLI dengan penanganan kesalahan yang ditingkatkan.
- Pembaruan Subsquid (indexer) untuk penanganan keamanan tinggi dan perbaikan hasher untuk Poseidon terbaru.
- Meluncurkan bagian blog di situs web Quantus dengan dukungan tag dan mulai mengunggah backlog pembaruan mingguan.
- Whitepaper diperbarui ke v3.1, memperbaiki nilai distribusi bagan tokenomik.

### Konten & Kemitraan
- Podcast sekarang sedang diunggah ke Apple Podcasts.
- Memulai percakapan dengan 2 launchpad token.
- Peningkatan halaman perbandingan blockchain Quantum Canary.
- Podcast dengan AJ tentang biohacking dan optimasi diri: https://x.com/QuantusNetwork/status/2012526120869286161

### Pembaruan Industri
- Artikel Quantum Canary yang membahas bagaimana CRQC mengancam Koin Satoshi: https://x.com/QuantumCanary_/status/2011706634868047982

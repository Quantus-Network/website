---
title: "Quantus Mingguan: Terobosan Penambangan GPU dan Refactor ZK"
description: "Pembaruan mingguan yang mencakup peningkatan performa 9x lipat pada penambangan GPU, refactor sirkuit agregasi ZK, dan pertemuan strategis di UEA."
pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Mingguan: Terobosan Penambangan GPU dan Refactor ZK"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "zero-knowledge-proofs",
    "tokenomics",
    "hardware-wallet",
    "solana-breakpoint",
  ]
---

Minggu ini tim mencapai terobosan dalam performa penambangan. Penambang GPU baru kami sekarang berjalan ~9x lebih cepat daripada versi CPU.

Kami juga menyelesaikan refactor sirkuit agregasi ZK kami, yang memungkinkan kami menghapus ribuan baris kode.

Selama di UEA, tim bertemu dengan penasihat dan investor. Pertemuan-pertemuan ini memantapkan visi produk kami dan memperjelas tokenomics serta strategi peluncuran token. Ada juga kemajuan BD yang berarti untuk mendukung peluncuran token.

Laporan aktivitas Github mingguan termasuk 10 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Core Tech & ZK

- Memigrasikan bukti transfer agregator ZK kami ke pallet khusus termasuk pembaruan pada CLI, sirkuit, dan logika Poseidon. Refactor ini memungkinkan kami menghapus ribuan baris kode.
- Merancang solusi untuk membuat hasher penyimpanan Poseidon menjadi generik.
- Menggabungkan perubahan yang tertunda dan menyelesaikan masalah kualitas kode yang terkait dengan transfer yang dapat dibalikkan.

## Network & Infra

- Penambang GPU sekarang ~9x lebih cepat daripada penambang CPU.
- Merilis CLI v0.3.1, flag finalisasi disatukan dan pemformatan alamat ditingkatkan.
- Menjalankan pembaruan runtime dan memperbarui spesifikasi chain.
- Meluncurkan BootNode baru.
- Menyelesaikan pemeriksaan keamanan dan pembaruan di semua server.
- Meluncurkan pemeriksaan kesehatan dalam kontainer untuk layanan pengindeksan Subsquid.

## Web & Mobile App Updates

- Memajukan integrasi hardware wallet. Sekarang memproses kode QR di Keystone dan menandatangani pesan dummy.
- Mulai mengimplementasikan fungsionalitas hardware wallet multi-wallet (mnemonik) ke dalam aplikasi seluler.
- Memperbarui formulir situs web dan mengintegrasikannya dengan penyedia email kami.
- Mengoptimalkan rusx untuk melakukan batch query, mencegah masalah pembatasan laju (rate-limiting).

## Content & Partnerships

- Menghadiri Solana Breakpoint dan menguji posisi/meme "Bitcoin Aman Kuantum" kami.
- Bertemu dengan penasihat di UEA untuk membahas peluncuran token, tokenomics, dan strategi GTM Quantus.
- Episode dengan Tom Howard telah tayang: https://x.com/QuantusNetwork/status/2000585749914427684

## Industry Updates

- Quantum Canary merilis halaman perbandingan blockchain "Siap Kuantum" yang komprehensif: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

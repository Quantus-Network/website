---
published: true
title: "Quantus Mingguan: Terobosan GPU Mining dan Refactor ZK"
description: "Peningkatan performa GPU mining 9x, refactor sirkuit ZK-agregasi, dan pertemuan strategis di UAE tentang tokenomics serta peluncuran token."

pubDate: "2025-12-15"
heroImage: "/blog/covers/weekly-update-12-15-2025.webp"
heroAlt: "Quantus Mingguan: Terobosan GPU Mining dan Refactor ZK"
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

Minggu ini tim mencapai terobosan dalam performa mining. GPU miner baru kami sekarang berjalan ~9x lebih cepat daripada versi CPU.

Kami juga menyelesaikan refactor sirkuit ZK-agregasi kami, memungkinkan kami menghapus ribuan baris kode.

Saat di UAE, tim bertemu dengan advisor dan investor. Pertemuan ini memperkuat visi produk kami dan memperjelas tokenomics serta strategi peluncuran token. Ada juga kemajuan BD yang bermakna untuk mendukung peluncuran token.

Laporan aktivitas Github mingguan, termasuk 10 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-16-23:23:47.md

## Inti Tech & ZK

- Memigrasikan bukti transfer ZK-aggregator kami ke pallet khusus, termasuk pembaruan CLI, sirkuit, dan logika Poseidon. Refactor ini memungkinkan kami menghapus ribuan baris kode.
- Merancang solusi untuk membuat Poseidon storage hasher generik.
- Menggabungkan perubahan yang tertunda dan menyelesaikan masalah kualitas kode terkait reversible transfers.

## Network & Infra

- GPU miner sekarang ~9x lebih cepat daripada CPU miner.
- Merilis CLI v0.3.1, flag finalization disatukan dan format alamat diperbaiki.
- Mengeksekusi runtime upgrade dan memperbarui spesifikasi chain.
- Men-deploy BootNode baru.
- Menyelesaikan pemeriksaan keamanan dan pembaruan di semua server.
- Men-deploy health check terkontainerisasi untuk layanan indexing Subsquid.

## Pembaruan Web & Aplikasi Mobile

- Memajukan integrasi dompet hardware. Sekarang parsing QR code di Keystone dan menandatangani dummy message.
- Memulai implementasi fungsionalitas dompet hardware multi-wallet (mnemonic) ke aplikasi mobile.
- Memperbarui formulir website dan mengintegrasikannya dengan penyedia email kami.
- Mengoptimalkan rusx untuk batch query, mencegah masalah rate-limiting.

## Konten & Kemitraan

- Menghadiri Solana Breakpoint dan menguji positioning/memes "Quantum Secure Bitcoin" kami.
- Bertemu dengan advisor di UAE untuk membahas peluncuran token, tokenomics, dan strategi GTM Quantus.
- Episode dengan Tom Howard sudah live: https://x.com/QuantusNetwork/status/2000585749914427684

## Pembaruan Industri

- Quantum Canary merilis halaman perbandingan blockchain "Quantum Ready" yang komprehensif: https://www.quantumcanary.org/is-your-blockchain-quantum-ready

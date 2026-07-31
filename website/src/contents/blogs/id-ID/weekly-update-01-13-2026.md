---
title: "Quantus Weekly: Tanda Tangan Threshold Dilithium"
description: "Minggu ini kami rilis tanda tangan threshold Dilithium untuk koordinasi terdistribusi, plus sirkuit ZK, pembaruan wallet mobile, dan konten komunitas."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Weekly: Tanda Tangan Threshold Dilithium"
featured: false
tags:
  [
    "weekly-update",
    "threshold-signatures",
    "post-quantum-cryptography",
    "dilithium",
    "zero-knowledge-proofs",
    "quantum-safe",
    "blockchain",
  ]
---

Kekuatan dan otoritas dibagi di antara banyak pihak. Koordinasi terdistribusi.

Tetapi tanda tangan pasca-kuantum 20x–80x lebih besar daripada tanda tangan Bitcoin. Solusi multisig tradisional punya tempatnya, tapi menambah overhead yang tidak dapat diterima untuk use case tertentu.

Minggu ini kami merilis tanda tangan threshold Dilithium. Ini memungkinkan grup terdistribusi menandatangani transaksi dan menghasilkan satu tanda tangan on-chain. Intinya, sharding private key.

Itu diperlukan untuk kustodian, aplikasi lintas jaringan, dan penggunaan otomatis chain yang aman.

Laporan aktivitas Github mingguan termasuk 4 pull request yang digabung: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Core Tech & ZK

- Mengimplementasikan tanda tangan threshold, memungkinkan penandatanganan terdistribusi yang aman.
- Mengurangi overhead sirkuit ZK.
- Menambahkan dukungan proof aggregation ke binary contoh wormhole, integrasi ke chain dan CLI masih berlangsung.
- Meng-upgrade sirkuit ZK dan algoritma hashing Poseidon agar menangani semua tipe data secara universal (generic storage hashing), kini terintegrasi ke chain dan CLI.
- Menambahkan dukungan proof aggregation untuk asset ID di dalam sirkuit ZK.
- Mengoptimalkan CLI untuk pemrosesan transaksi lebih cepat dan menambahkan skrip recovery keamanan tinggi.

## Web & Mobile App Updates

- Merilis versi baru UI Mining App dengan slider granular untuk penggunaan CPU dan GPU, plus perbaikan pelaporan hashrate.
- Menyelesaikan dan menggabungkan dukungan hardware wallet penuh ke aplikasi mobile.
- Menambahkan dukungan mengelola banyak akun dalam satu instance wallet mobile.
- Mengimplementasikan layar keamanan tinggi dan memulai pengembangan alur recovery "Guardian".
- Menyempurnakan UX layar "send", meningkatkan error handling, memperbaiki bug timer autentikasi, dan menyatukan ikon aplikasi.
- Mengonfigurasi backup database harian, memperbaiki system services, dan membersihkan kode Task Master (event tracking wallet app).

## Content & Partnerships

- Memperbarui whitepaper dengan detail protokol terbaru dan menetapkan sistem versioning GitHub: https://github.com/Quantus-Network/whitepaper
- Lore merilis origin story kami, "From the Ground Up": https://x.com/JoeMattia/status/2010619972398297164
- Podcast dengan Sina (@hubsmoke) tentang memulihkan kepercayaan pada sains: https://x.com/QuantusNetwork/status/2009929397579723213

## Industry Updates

- Quantum Canary menerbitkan panduan Quantum-Safe Crypto Wallets: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

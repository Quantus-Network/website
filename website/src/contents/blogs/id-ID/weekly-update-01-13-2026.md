---
title: "Quantus Mingguan: Tanda Tangan Threshold Dilithium dan Koordinasi Terdistribusi"
description: "Pembaruan mingguan yang mencakup tanda tangan threshold, peningkatan sirkuit ZK, pembaruan dompet seluler, dan konten komunitas."
pubDate: "2026-01-13"
heroImage: "/blog/covers/weekly-update-01-13-2026.webp"
heroAlt: "Quantus Mingguan: Tanda Tangan Threshold Dilithium dan Koordinasi Terdistribusi"
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

Kekuasaan dan otoritas terbagi di antara banyak pihak. Koordinasi terdistribusi.

Namun, tanda tangan pasca-kuantum berukuran 20x - 80x lebih besar dari tanda tangan Bitcoin. Solusi multisig tradisional memiliki tempatnya sendiri, tetapi menambahkan overhead yang tidak dapat diterima untuk kasus penggunaan tertentu.

Minggu ini kami merilis tanda tangan threshold dilithium. Ini memungkinkan grup terdistribusi untuk menandatangani transaksi dan menghasilkan satu tanda tangan di dalam rantai (on-chain). Pada dasarnya, melakukan sharding pada kunci pribadi.

Itu diperlukan untuk kustodian, aplikasi lintas jaringan, dan penggunaan rantai secara otomatis yang aman.

Laporan aktivitas mingguan Github termasuk 4 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2026-01-13-10:13:26.md

## Teknologi Inti & ZK

- Mengimplementasikan tanda tangan threshold, memungkinkan penandatanganan terdistribusi yang aman.
- Mengurangi overhead sirkuit ZK.
- Menambahkan dukungan agregasi bukti ke biner contoh wormhole, integrasi berkelanjutan ke dalam rantai dan CLI.
- Memperbarui sirkuit ZK dan algoritma hashing Poseidon kami untuk menangani semua jenis data secara universal (generic storage hashing), sekarang telah terintegrasi ke dalam rantai dan CLI.
- Menambahkan dukungan untuk agregasi bukti atas ID aset di dalam sirkuit ZK.
- Mengoptimalkan CLI untuk pemrosesan transaksi yang lebih cepat dan menambahkan skrip pemulihan keamanan tinggi.

## Pembaruan Aplikasi Web & Seluler

- Merilis versi baru dari UI Mining App dengan slider granular untuk penggunaan CPU dan GPU, serta perbaikan untuk pelaporan hashrate.
- Memfinalisasi dan menggabungkan dukungan dompet perangkat keras penuh ke dalam aplikasi seluler.
- Menambahkan dukungan untuk mengelola banyak akun dalam satu instansi dompet seluler.
- Mengimplementasikan layar keamanan tinggi dan memulai pengembangan alur pemulihan "Guardian".
- Menyempurnakan UX layar "kirim", meningkatkan penanganan kesalahan, memperbaiki bug pengatur waktu otentikasi, dan menyatukan ikon aplikasi.
- Mengonfigurasi pencadangan database harian, memperbaiki layanan sistem, dan membersihkan kode Task Master (pelacakan acara aplikasi dompet).

## Konten & Kemitraan

- Memperbarui whitepaper dengan detail protokol terbaru dan menetapkan sistem versi GitHub: https://github.com/Quantus-Network/whitepaper
- Merilis cerita asal kami, "From the Ground Up": https://x.com/JoeMattia/status/2010619972398297164
- Podcast dengan Sina (@hubsmoke) tentang memulihkan kepercayaan pada sains: https://x.com/QuantusNetwork/status/2009929397579723213

## Pembaruan Industri

- Quantum Canary menerbitkan panduan tentang Dompet Kripto Aman Quantum: https://www.quantumcanary.org/insights/quantum-safe-crypto-wallets-your-guide-to-pqc-security

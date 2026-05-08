---
title: "Quantus Weekly: Killer App Sebenarnya Adalah Uang"
description: "Minggu ini kami menulis ulang Dilithium DKG untuk Mithril, merilis perbaikan threshold signature, mengekspos helper Wormhole SDK, dan meluncurkan wallet v1.4.0 yang dipercantik di TestFlight."
pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: Killer App Sebenarnya Adalah Uang"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

Ada sesuatu yang saya yakini sedang disadari secara perlahan oleh pasar.

Satu killer crypto app akan menciptakan dan menangkap lebih banyak nilai daripada yang lain.

Bukan stablecoin, prediction market, atau DeFi.

Jelas bukan web3, jejaring sosial, atau koleksi PFP.

Tetapi uang. Ide yang melahirkan industri ini.

Pemikiran pertama adalah pemikiran yang murni. Uang elektronik peer-to-peer.

Uang yang aman, privat, dan skalabel adalah peluang bernilai triliunan dolar.

Minggu ini, kami menulis ulang distributed key generation Quantus untuk kunci Dilithium agar sesuai dengan makalah Mithril terbaru dan merilis perbaikan pada implementasi threshold signature kami.

Jadi, Anda akan dapat membagi (shard) kunci Quantus ke beberapa pihak. Penting untuk integrasi aman kami.

Kami menangani item audit dalam spesifikasi Wormhole dan mengekspos helper di SDK CLI publik Quantus, membuka dukungan transaksi privat bagi pengembang eksternal. Wormhole adalah cara kami mencapai privasi post-quantum yang skalabel.

Kami juga merilis wallet v1.4.0 dengan tampilan baru (reskin) lengkap yang menyederhanakan dan mempercantik pengalaman aplikasi seluler (saat ini di TestFlight).

### Aktivitas Github (16 pull request yang digabungkan):

![Statistik Github](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Menulis ulang distributed key generation untuk kunci Dilithium agar sesuai dengan makalah Mithril terbaru.
- Memperkuat implementasi threshold signature terhadap tiga temuan audit.
- Memperbarui spek Wormhole untuk menangani item audit pada change outputs.
- Mengekspos helper Wormhole di SDK CLI publik Quantus dan menambahkan contoh alur kerja deposit-to-mint end-to-end.
- Merefaktor siklus hidup transaksi CLI dengan status submitted, included, dan finalized yang jelas, parsing biaya desimal yang tepat, pemeriksaan kompatibilitas versi yang lebih ketat, dan transfer batch yang aman dari overflow.
- Membangun alat benchmarking untuk meningkatkan algoritma penyesuaian kesulitan.
- Menyelidiki dan melakukan benchmark pada berbagai topologi pohon agregasi dan penggunaan CPU-nya.
- Memperbaiki kesalahan ejaan pada checkphrase manusia.

### Network & Infra:

- Memperluas suite stress-test dengan mode wormhole dan menjalankannya berkali-kali di testnet Planck.
- Memindahkan indexer blockchain Subsquid ke server kelas produksi dan menambahkan data statistik akun dan rantai.
- Melakukan benchmark pada kueri Explorer dan menghapus kueri yang mahal.
- Memperbarui semua sistem operasi VPS dan mendokumentasikan infrastruktur.
- Memperbarui miner-stack dan menguji miner-app di Windows.

### Pembaruan Aplikasi Web & Seluler:

- Merilis GUI miner untuk Planck (v0.4.1) dengan fungsionalitas klaim.
- Meluncurkan wallet v1.4.0 (saat ini di TestFlight) dengan reskin UI lengkap dan nilai tukar riil.
- Perbaikan bug Wallet: gaya saldo beranda, gaya komponen aktivitas, dan layar terima.
- Task Master: menambahkan endpoint nilai tukar dan memperbarui dependensi checksum.
- Memperbarui situs web Quantus: mengarahkan tautan dokumen ke docs (dot) quantus (dot) com, memperbarui tampilan TPS, dan memposting pembaruan mingguan.

### Konten & Kemitraan:

- Memperbarui branding podcast di Spotify, Apple, dan YouTube.
- Menjual kacamata Quantus pertama seharga [$QUAN](https://x.com/search?q=%24QUAN&src=cashtag_click) di Network School.
- Quantus membuka booth di pameran NS, membantu onboarding pengguna aplikasi dan pendaftar Q-day.

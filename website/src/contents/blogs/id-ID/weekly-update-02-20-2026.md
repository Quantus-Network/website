---
title: "Quantus Mingguan: Riset Terbuka dan Standar Pasca-Kuantum"
description: "Pembaruan mingguan yang mencakup peluncuran research.quantus.com, agregasi bukti ZK, penggabungan pallet multisig, dan pembaruan dompet seluler."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Mingguan: Riset Terbuka dan Standar Pasca-Kuantum"
featured: false
tags:
  [
    "weekly-update",
    "research",
    "post-quantum-cryptography",
    "multisig",
    "zk-proofs",
    "mobile-wallet",
    "notification-system",
  ]
---

Kriptografi pasca-kuantum terlalu baru untuk diluncurkan dalam blockchain di balik pintu tertutup.

Minggu ini kami meluncurkan [research.quantus.com](https://research.quantus.com/).

Ini adalah forum publik bagi para kriptografer dan pengembang untuk membedah setiap keputusan protokol yang pernah kami buat. Para peneliti sudah mulai melakukan stress-test pada permukaan serangan Poseidon2.

NIST memfinalisasi standar pasca-kuantum tahun lalu. Itu adalah langkah pertama. Langkah kedua adalah setiap tim protokol dalam kripto benar-benar mengimplementasikannya. Tidak ada buku panduan yang mapan untuk membangun chain yang aman secara kuantum, jadi kami sedang membangun standarnya.

Jika Anda sedang mengerjakan keamanan pasca-kuantum, pintu kami terbuka lebar.

Inilah hal lain yang kami bangun minggu ini.

### Aktivitas GitHub (4 pull request yang digabungkan):

![Statistik Github](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Teknologi Inti & ZK

- Memperbarui sirkuit ZK untuk mendukung agregasi bukti multi-mesin dengan verifikasi onchain.
- Menggabungkan pallet multisig, memberikan dukungan multisig penuh dengan akun keamanan tinggi.

### Jaringan & Infrastruktur

- Mengembangkan sistem notifikasi Senoti: layanan pendaftar perangkat, layanan pemantau blockchain, dan pekerja inti dengan pengaturan CI dan deployment.
- Meningkatkan bot faucet di Telegram untuk merespons peningkatan aktivitas dengan lebih baik.
- Menambahkan alur kerja manajemen rilis untuk qp-plonky2 dan qp-zk-circuits.

### Pembaruan Aplikasi Web & Seluler

- Meluncurkan [research.quantus.com](https://research.quantus.com/), forum berbasis Discourse untuk riset kriptografi dan diskusi teknis.
- Memperbarui situs web Quantus: menyegarkan halaman whitepaper, menambahkan diagram lingkaran alokasi token ke /launch, menambahkan integrasi CoinGecko, dan menerbitkan semua pembaruan mingguan sebagai postingan blog.
- Memperbarui desain dompet dan mengirimkannya ke TestFlight. Versi baru akan segera hadir di App Store.
- Perbaikan bug dan UX di dompet seluler.
- Mengintegrasikan basis FCM untuk penanganan notifikasi push di dompet seluler.

### Konten & Kemitraan

- Chris muncul di [podcast Bad Crypto](https://x.com/QuantusNetwork/status/2023752636387012675) dan [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831).
- Tim tiba di Network School & sedang menyiapkan kantor.

### Pembaruan Industri

- Quantum Canary: Bisakah Komputer Kuantum Membobol Monero? [Link](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: Seberapa Terdesentralisasi DeFi? [Link](https://x.com/QuantumCanary_/status/2021846672834539665)

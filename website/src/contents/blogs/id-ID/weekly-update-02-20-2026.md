---
published: true
title: "Quantus Weekly: Riset Terbuka & Standar Pasca-Kuantum"
description: "Update mingguan: peluncuran research.quantus.com, agregasi bukti ZK, merge pallet multisig, dan pembaruan wallet mobile."
pubDate: "2026-02-20"
heroImage: "/blog/covers/weekly-update-02-20-2026.webp"
heroAlt: "Quantus Weekly: Riset Terbuka dan Standar Pasca-Kuantum"
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

Kriptografi pasca-kuantum terlalu baru untuk dikembangkan di blockchain di balik pintu tertutup.

Minggu ini kami meluncurkan [research.quantus.com](https://research.quantus.com/).

Ini forum publik bagi kriptografer dan developer untuk menelaah setiap keputusan protokol yang pernah kami buat. Peneliti sudah stress-testing permukaan serangan Poseidon2.

NIST memfinalisasi standar pasca-kuantum tahun lalu. Itu langkah satu. Langkah dua: setiap tim protokol di kripto benar-benar mengimplementasikannya. Belum ada playbook baku untuk membangun chain quantum-secure, jadi kami membangun standarnya.

Kalau Anda mengerjakan keamanan pasca-kuantum, pintunya terbuka.

Berikut hal lain yang kami bangun minggu ini.

### GitHub Activity (4 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-20-2026.webp)

### Core Tech & ZK

- Memperbarui sirkuit ZK untuk mendukung proof aggregation multi-mesin dengan verifikasi on-chain.
- Menggabungkan pallet multisig, menghadirkan dukungan multisig penuh dengan akun keamanan tinggi.

### Network & Infra

- Mengembangkan sistem notifikasi Senoti: device registrar service, blockchain watcher service, dan core worker dengan setup CI dan deployment.
- Meningkatkan faucet bot di Telegram agar lebih responsif terhadap peningkatan aktivitas.
- Menambahkan release management workflow untuk qp-plonky2 dan qp-zk-circuits.

### Web & Mobile App Updates

- Meluncurkan [research.quantus.com](https://research.quantus.com/), forum berbasis Discourse untuk riset kriptografi dan diskusi teknis.
- Memperbarui situs Quantus: halaman whitepaper diperbarui, pie chart alokasi token ditambahkan ke /launch, integrasi CoinGecko, dan semua weekly update diterbitkan sebagai blog post.
- Memperbarui desain wallet dan dirilis ke TestFlight. Versi baru segera ke App Store.
- Perbaikan bug dan UX di wallet mobile.
- Mengintegrasikan basis FCM untuk penanganan push notification di wallet mobile.

### Content & Partnerships

- Chris muncul di [Bad Crypto podcast](https://x.com/QuantusNetwork/status/2023752636387012675) dan [wenaltseason space](https://x.com/wenaltseason/status/2022402584041193831).
- Tim tiba di Network School dan menyiapkan kantor.

### Industry Updates

- Quantum Canary: Can Quantum Computers Break Monero? [Link](https://x.com/QuantumCanary_/status/2024204427159359931)
- Quantum Canary: How Decentralized is DeFi? [Link](https://x.com/QuantumCanary_/status/2021846672834539665)

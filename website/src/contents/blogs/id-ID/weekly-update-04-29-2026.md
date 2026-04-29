---
title: "Quantus Weekly: spring cleaning, audit Eiger, dan compact aggregator"
description: "Menuntaskan banyak item audit bersama Eiger, merefaktor CLI, memperbaiki bug miner dan indexer, serta menjalankan tes integrasi wormhole di compact aggregator baru. Alur wormhole ZK kini bersih lewat compact aggregator 2x8 yang dirilis minggu lalu. Dompet mobile 1.3.4–1.3.5, miner v3.1.0 dengan perbaikan bug GPU, dokumentasi mining hingga klaim hadiah, serta workshop miner testnet Planck pertama di Network School."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: spring cleaning, audit Eiger, dan compact aggregator"
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
  ]
---

Minggu spring cleaning.

Kami menuntaskan item audit dengan Eiger, merefaktor CLI, memperbaiki bug di miner dan indexer, serta menjalankan tes integrasi wormhole pada compact aggregator baru.

Di sisi ZK, alur wormhole kini berjalan bersih melalui compact aggregator 2x8 yang baru saja kami rilis minggu lalu—arsitektur yang melipatgandakan performa prover sehingga transaksi privat lebih cepat dan lebih skalabel. Untuk pengguna, kami merilis dua versi dompet mobile (1.3.4 dan 1.3.5) serta Quantus miner v3.1.0 dengan perbaikan bug GPU. Dokumentasi juga diperbarui untuk mencakup alur penuh dari mining hingga mengklaim hadiah.

Kami mengadakan workshop miner testnet Planck pertama di Network School.

Berikut rilis minggu ini:

### Aktivitas GitHub (26 pull request yang digabung):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Menangani banyak item audit dari Eiger.
- Menjalankan tes integrasi wormhole pada compact aggregator 2x8.
- Merefaktor Quantus CLI untuk kompatibilitas, siklus hidup transaksi, dan estimasi biaya.

### Jaringan & Infra

- Menjalankan stres tes pada testnet Planck.
- Meningkatkan performa indexer Subsquid dan memperbaiki lonjakan pemakaian CPU. Subsquid sempat mengganggu UX aplikasi mobile minggu ini (saldo tidak termuat)—sudah terselesaikan.
- Merilis Quantus miner v3.1.0 yang memperbaiki bug mining GPU.

### Web & Mobile App

- Merilis dompet mobile 1.3.4 dan 1.3.5.
- Perbaikan desain dompet mobile. Alur onboarding menyusul.
- Mendesain alur Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State, dan Miner Rewards untuk dompet.
- Memetakan UX alur wormhole untuk dompet.
- Memperbarui [docs.quantus.com](https://docs.quantus.com) agar mencakup mining hingga klaim hadiah secara end-to-end.
- Menyegarkan deepwiki di repo CLI, monitoring, chain, website, dan sirkuit ZK.

### Analitik dompet mobile

- Total pengguna: 2.252
- MAU: 1.048

### Konten & Kemitraan

- Mengadakan workshop miner testnet Planck pertama di Network School. Lebih dari empat orang dari nol hingga bisa mining.
- Pitch di meetup EthKL.
- Sponsor Q-Day dikonfirmasi.
- Mensponsori NS Marathon dengan kelapa Quantus.
- Merilis podcast baru [tentang arsitektur Quantus](https://x.com/QuantusNetwork/status/2047178654396862837).

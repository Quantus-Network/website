---
published: true
title: "Quantus Weekly: Audit dan Compact Aggregator"
description: "Spring cleaning: item audit Eiger selesai, CLI direfaktor, perbaikan miner dan indexer, plus tes wormhole pada compact aggregator yang 2x prover."
pubDate: "2026-04-29"
heroImage: "/blog/covers/weekly-update-04-29-2026.webp"
heroAlt: "Quantus Weekly: Audit dan Compact Aggregator"
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

Kami menyelesaikan item audit dengan Eiger, merefaktor CLI, memperbaiki bug di miner dan indexer, dan menjalankan integration test wormhole pada compact aggregator baru.

Di ZK, alur wormhole sekarang berjalan mulus melalui compact aggregator 2x8 yang kami rilis minggu lalu. Itu arsitektur yang menggandakan performa prover, artinya transaksi privat lebih cepat dan lebih skalabel. Di sisi pengguna, kami merilis dua rilis mobile wallet (1.3.4 dan 1.3.5) dan Quantus miner v3.1.0 dengan perbaikan bug GPU. Kami juga memperbarui docs untuk mencakup alur lengkap mining hingga klaim hadiah.

Kami menyelenggarakan workshop miner Planck testnet pertama kami di Network School.

Berikut semua yang kami bangun minggu ini:

### GitHub Activity (26 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-29-2026.webp)

### Core Tech & ZK

- Menangani beberapa item audit dari Eiger.
- Menjalankan integration test wormhole pada compact aggregator 2x8.
- Merefaktor Quantus CLI untuk menangani kompatibilitas, lifecycle transaksi, dan isu estimasi fee.

### Network & Infra

- Menjalankan stress test pada Planck testnet.
- Meningkatkan performa indexer Subsquid dan memperbaiki lonjakan penggunaan CPU. Subsquid menyebabkan masalah UX aplikasi mobile minggu ini (saldo tidak dimuat), sekarang sudah teratasi.
- Merilis Quantus miner v3.1.0 yang memperbaiki bug mining GPU.

### Web & Mobile App Updates

- Merilis mobile wallet 1.3.4 dan 1.3.5.
- Peningkatan desain mobile wallet. Alur onboarding menyusul.
- Mendesain alur Account Management, Settings, Onboarding, Home Screen Skeleton, POS Enable, Empty State, dan Miner Rewards untuk wallet.
- Memetakan UX alur Wormhole untuk wallet.
- Memperbarui [docs.quantus.com](https://docs.quantus.com) untuk mencakup mining end-to-end hingga klaim hadiah.
- Menyegarkan deepwiki di repo CLI, monitoring, chain, website, dan ZK circuits.

### Mobile Wallet Analytics

- Total users: 2,252
- MAU: 1,048

### Content & Partnerships

- Menyelenggarakan workshop miner Planck testnet pertama kami di Network School. 4+ orang dari nol ke mining.
- Pitch di meetup EthKL.
- Mengonfirmasi sponsor Q-Day.
- Mensponsori NS Marathon dengan kelapa Quantus.
- Merilis podcast baru [tentang arsitektur Quantus](https://x.com/QuantusNetwork/status/2047178654396862837).

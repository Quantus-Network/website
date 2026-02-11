---
title: "Quantus Weekly: Agregasi Transaksi ZK dan Rilis Aplikasi Miner"
description: "Update mingguan yang mencakup langkah pertama agregasi transaksi ZK, rilis Miner App v0.1.0, dan kemajuan implementasi penambangan GPU."
pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Weekly: Agregasi Transaksi ZK dan Rilis Aplikasi Miner"
featured: false
tags:
  [
    "weekly-update",
    "zero-knowledge-proofs",
    "gpu-mining",
    "miner-app",
    "ama",
    "substrate",
  ]
---

Minggu ini tim menyelesaikan langkah pertama agregasi transaksi ZK untuk chain dan CLI, mengganti pengujian mock dengan verifikasi transfer yang sebenarnya. Kami juga merilis binary Miner App v0.1.0, yang sekarang sudah tersedia.

## Berita Pengembangan

- Laporan aktivitas Github mingguan termasuk 150+ total event: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Core Tech

- Membuat primitif qp-header baru di chain yang selaras dengan sirkuit wormhole kami, menggantikan header generik Substrate.
- Memperbarui sirkuit agregasi untuk mendukung verifikasi header blok dan koneksi antara blok yang berdekatan.
- Implementasi GPU dari algoritma penambangan sudah selesai sekitar 80%.
- Menyelesaikan fase pertama audit rusty-crystals, masalah sebagian besar telah diatasi.
- Melakukan audit internal untuk panic di runtime (terinspirasi oleh bug unwrap Cloudflare baru-baru ini).
- Menambahkan perintah vesting ke CLI untuk pallet Substrate standar.

## Network & Infra

- Merampingkan deployment Subsquid menjadi hanya satu skrip.
- Membuat Docker image & proses rilis untuk Quantus-Miner.
- Mendeploy Miner-stack (Docker Compose + monitoring stack + dokumentasi).
- Menambahkan dashboard monitoring & alert untuk Explorer & Task Master.

## Web & Mobile App Updates

- Meluncurkan sistem referensi dalam aplikasi dan metrik pelacakan acara yang menghadap pengguna (Quantus Quests).
- Merilis binary aplikasi miner untuk semua platform: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 meskipun baru mac yang telah diuji secara menyeluruh.
- Memperbaiki masalah migrasi dan berbagai laporan bug lainnya di dompet seluler.
- Merefaktor widget layar kirim agar dapat diuji dan menambahkan unit/widget test.
- Memperbarui halaman Quests di situs web dengan fungsionalitas pencarian.
- Memperbarui endpoint leaderboard Task Master untuk mendukung pencarian dan menambahkan peringkat dalam hasil.

## Content & Partnerships

- AMA komunitas pertama melalui X space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast dengan James, Pendiri Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Mendapatkan dua penasihat / KOL baru.

## Industry Updates

- Scott Anderson memperbarui lini masa untuk komputer kuantum toleran kesalahan yang menjalankan algoritma Shor menjadi \"sebelum pemilihan presiden AS berikutnya\": https://scottaaronson.blog/?p=9325

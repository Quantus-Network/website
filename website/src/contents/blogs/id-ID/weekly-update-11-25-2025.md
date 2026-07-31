---
title: "Quantus Mingguan: Agregasi ZK dan Miner App"
description: "Agregasi transaksi ZK pertama untuk chain dan CLI dengan verifikasi transfer nyata, Miner App v0.1.0 rilis, dan pekerjaan GPU mining berlanjut."

pubDate: "2025-11-25"
heroImage: "/blog/covers/weekly-update-11-25-2025.webp"
heroAlt: "Quantus Mingguan: Agregasi ZK dan Miner App"
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

Minggu ini tim menyelesaikan langkah pertama agregasi transaksi ZK untuk chain dan CLI, mengganti mock test dengan verifikasi transfer aktual. Kami juga merilis binary Miner App v0.1.0, yang sekarang tersedia.

## Berita Pengembangan

- Laporan aktivitas Github mingguan, termasuk 150+ total events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-24-12:01:16.md

## Inti Tech

- Membuat primitif qp-header baru di chain yang field-aligned dengan sirkuit wormhole kami, menggantikan header generik Substrate.
- Memperbarui sirkuit agregasi untuk mendukung verifikasi block header dan koneksi antar block yang berdekatan.
- Implementasi GPU algoritma mining sekitar 80% selesai.
- Menyelesaikan fase pertama audit rusty-crystals, sebagian besar isu sudah ditangani.
- Melakukan audit internal untuk panic di runtime (terinspirasi bug Cloudflare unwrap baru-baru ini).
- Menambahkan perintah vesting ke CLI untuk pallet Substrate standar.

## Network & Infra

- Menyederhanakan deployment Subsquid menjadi hanya satu skrip.
- Membuat image Docker & proses rilis untuk Quantus-Miner.
- Men-deploy Miner-stack (Docker Compose + monitoring stack + dokumentasi).
- Menambahkan dashboard monitoring & alert untuk Explorer & Task Master.

## Pembaruan Web & Aplikasi Mobile

- Meluncurkan sistem referral in-app dan metrik pelacakan event untuk pengguna (Quantus Quests).
- Merilis binary miner app untuk semua platform: https://github.com/Quantus-Network/quantus-apps/releases/tag/miner-v0.1.0 hanya mac yang sudah diuji secara menyeluruh.
- Memperbaiki masalah migrasi dan berbagai laporan bug lainnya di dompet mobile.
- Merefaktor widget layar kirim agar dapat diuji dan menambahkan unit/widget test.
- Memperbarui halaman Quests di website dengan fungsionalitas pencarian.
- Memperbarui endpoint leaderboard Task Master untuk mendukung pencarian dan menambahkan rank di hasil.

## Konten & Kemitraan

- AMA komunitas pertama via X space: https://x.com/QuantusNetwork/status/1991341042390692210
- Podcast dengan James, Founder Ârc: https://www.youtube.com/watch?v=eac4aRF50qU
- Mengakuisisi dua advisor / KOL baru.

## Pembaruan Industri

- Scott Anderson memperbarui timeline-nya untuk komputer kuantum fault-tolerant yang menjalankan algoritma Shor menjadi "sebelum pemilihan presiden AS berikutnya": https://scottaaronson.blog/?p=9325

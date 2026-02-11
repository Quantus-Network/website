---
title: "Quantus Mingguan: Penambangan GPU dan Pengujian Stres Dirac"
description: "Pembaruan mingguan yang mencakup perilisan Quantus Miner v2.0.2 dengan dukungan GPU, pengujian stres jaringan Dirac, dan pembaruan arsitektur chain."
pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Mingguan: Penambangan GPU dan Pengujian Stres Dirac"
featured: false
tags:
  [
    "weekly-update",
    "gpu-mining",
    "dirac-network",
    "blockchain-architecture",
    "tokenomics",
    "hardware-wallet",
    "social-engagement",
  ]
---

Minggu ini, kami secara resmi merilis Quantus Miner v2.0.2 dengan dukungan GPU dan berhasil melakukan pengujian stres pada jaringan Dirac.

Kami juga memperbarui arsitektur chain untuk mendukung batas pasokan 21 juta koin dan membersihkan codebase dengan menghapus pallet vesting dan treasury lama.

Laporan aktivitas Github mingguan termasuk 6 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Core Tech & ZK

- Memperbarui spesifikasi chain untuk mencerminkan batas pasokan koin 21 juta yang baru.
- Menyederhanakan arsitektur inti chain dengan menghapus pallet vesting dan treasury.
- Menyelesaikan dukungan hashing penyimpanan Poseidon generik untuk mencegah panic pada runtime.
- Menambahkan dukungan Asset ID ke sirkuit ZK dan CLI kami.

## Network & Infra

- Pengujian stres Dirac untuk mengamati bagaimana kelebihan beban pada chain berdampak pada waktu blok.
- Menerbitkan Quantus Miner v2.0.2, yang sekarang secara resmi mendukung penambangan GPU: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Web & Mobile App Updates

- Memfinalisasi alur penandatanganan hardware wallet di seluler, termasuk transmisi tanda tangan kode QR, dukungan multi-wallet, dan fungsionalitas pelepasan tautan.
- Mengimplementasikan "Raid Quests" dengan telegram, situs web, dan pelacakan internal melalui Task Master untuk memberi insentif pada keterlibatan komunitas di X. Implementasi dompet sedang dalam proses.
- Menyelesaikan kesalahan CORS backend dan meningkatkan pelacakan data untuk interaksi sosial.
- Memperbaiki bug block explorer yang memengaruhi pelaporan hadiah penambang dan peralihan jaringan.

## Content & Partnerships

- Mengamankan investasi dari dua mitra strategis yang ditemui di Peer Summit.
- Menyelesaikan pertemuan mengenai strategi peluncuran dan menyusun draf whitepaper yang diperbarui yang mencerminkan tokenomics dan GTM baru.
- Episode dengan Cezary, arsitek perangkat lunak veteran dan insinyur sistem: https://www.youtube.com/watch?v=2TDMR7bECR8

## Industry Updates

- Artikel dari Quantum Canary yang menganalisis risiko serangan tingkat negara terhadap Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

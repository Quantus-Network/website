---
title: "Quantus Mingguan: GPU Mining dan Stress Test Dirac"
description: "Quantus Miner v2.0.2 dengan dukungan GPU rilis, jaringan Dirac distres-test, dan arsitektur chain diperbarui untuk batas pasokan 21 juta koin."

pubDate: "2025-12-22"
heroImage: "/blog/covers/weekly-update-12-22-2025.webp"
heroAlt: "Quantus Mingguan: GPU Mining dan Stress Test Dirac"
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

Minggu ini, kami secara resmi merilis Quantus Miner v2.0.2 dengan dukungan GPU dan berhasil melakukan stress test jaringan Dirac.

Kami juga memperbarui arsitektur chain untuk mendukung batas pasokan koin 21 juta dan membersihkan codebase dengan menghapus pallet vesting dan treasury legacy.

Laporan aktivitas Github mingguan, termasuk 6 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-23-07:50:14.md/

## Inti Tech & ZK

- Memperbarui spesifikasi chain agar mencerminkan batas pasokan koin 21 juta yang baru.
- Menyederhanakan arsitektur chain inti dengan menghapus pallet vesting dan treasury.
- Menyelesaikan dukungan generic Poseidon storage hashing untuk mencegah panic di runtime.
- Menambahkan dukungan Asset ID ke sirkuit ZK dan CLI kami.

## Network & Infra

- Melakukan stress test Dirac untuk mengamati bagaimana overload chain memengaruhi block times.
- Menerbitkan Quantus Miner v2.0.2, yang sekarang resmi mendukung GPU mining: https://github.com/Quantus-Network/quantus-miner/releases/tag/v2.0.2

## Pembaruan Web & Aplikasi Mobile

- Menyelesaikan alur penandatanganan dompet hardware di mobile, termasuk transmisi tanda tangan QR code, dukungan multi-wallet, dan fungsionalitas unlinking.
- Mengimplementasikan "Raid Quests" dengan telegram, website, dan pelacakan internal via Task Master untuk mendorong engagement komunitas di X. Implementasi dompet sedang berlangsung.
- Menyelesaikan error CORS backend dan meningkatkan pelacakan data untuk interaksi sosial.
- Memperbaiki bug block explorer yang memengaruhi pelaporan reward miner dan network switching.

## Konten & Kemitraan

- Mengamankan investasi dari dua mitra strategis yang ditemui di Peer Summit.
- Menyelesaikan pertemuan terkait strategi peluncuran dan menyusun whitepaper yang diperbarui yang mencerminkan tokenomics dan GTM baru.
- Episode dengan Cezary, veteran software architect dan systems engineer: https://www.youtube.com/watch?v=2TDMR7bECR8

## Pembaruan Industri

- Artikel dari Quantum Canary menganalisis risiko serangan level negara terhadap Bitcoin: https://www.quantumcanary.org/insights/how-credible-is-a-state-level-attack-on-bitcoin

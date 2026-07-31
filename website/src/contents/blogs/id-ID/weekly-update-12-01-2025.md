---
title: "Quantus Mingguan: Audit Lattice dan Dompet Keystone"
description: "Temuan audit lattice Rusty Crystals ditutup, jaringan Polkadot SDK diperbarui, dan alamat Quantus hadir di firmware dompet hardware Keystone open-source."

pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Mingguan: Audit Lattice dan Dompet Keystone"
featured: false
tags:
  [
    "weekly-update",
    "lattice-cryptography",
    "keystone",
    "polkadot-sdk",
    "hardware-wallet",
    "audit",
  ]
---

Minggu lalu, tim menangani semua isu yang muncul dalam audit library kripto lattice kami (rusty-crystals) dan merilis pembaruan networking agar selaras dengan Polkadot SDK terbaru. Kami juga mengimplementasikan dukungan alamat Quantus di firmware dompet hardware Keystone open-source dan mendapatkan profil kami terdaftar di platform market intelligence "The Quantum Insider".

Laporan aktivitas Github mingguan, termasuk 17 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Inti Tech

- Menyelesaikan semua temuan dalam audit library kriptografi lattice inti (qp-rusty-crystals).
- Menyelesaikan persiapan bukti ZK-Aggregation (sirkuit, benchmark, dan dokumentasi QIP) untuk audit yang akan datang.
- Menemukan optimasi di gate plonky2 poseidon2 dan zk-trie untuk meningkatkan kecepatan proving.
- Melakukan rollback qp-header dan memperbarui sc-network agar selaras dengan standar Polkadot SDK terbaru.

## Network & Infra

- Merilis Desktop UI Miner untuk Windows, perbaikan bug untuk Linux dan MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest
- Men-patch potensi kerentanan keamanan P2P terkait peer broadcasting untuk mencegah peer jahat membebani jaringan.
- Mengimplementasikan dukungan alamat Quantus di firmware dompet hardware Keystone open-source (saat ini di simulator).

## Pembaruan Web & Aplikasi Mobile

- Merilis Mobile Wallet v1.1.2 ke App Store, menyelesaikan masalah polling, alur transaksi, dan notifikasi.
- Membangun Rust SDK untuk X API (rusx) dan menambahkan endpoint untuk mengasosiasikan akun X dan ETH untuk quest pengguna.

## Konten & Kemitraan

- Mengamankan listing di The Quantum Insider, meningkatkan backlink dan visibilitas ke analis kuantum.
- Meluncurkan podcast di Apple, Spotify, dan RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112
- Mengirim newsletter perdana ke subscriber email.
- X Space komunitas dijadwalkan Kamis ini: https://x.com/i/spaces/1mnGeNXoZOZJX
- Podcast dengan Brian Chau, ML Researcher: https://www.youtube.com/watch?v=m_FPbzAcXEk

## Pembaruan Industri

- Quantum Canary menerbitkan panduan strategis tentang mitigasi ancaman "Harvest Now, Crack Later", menguraikan jalur migrasi pragmatis menggunakan standar pasca-kuantum NIST yang baru disahkan: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive

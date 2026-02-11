---
title: "Quantus Weekly: Audit Lattice Crypto dan Integrasi Keystone"
description: "Update mingguan yang mencakup keberhasilan audit perpustakaan kripto lattice kami, pembaruan jaringan untuk Polkadot SDK, dan dukungan dompet perangkat keras baru di Keystone."
pubDate: "2025-12-01"
heroImage: "/blog/covers/weekly-update-12-01-2025.webp"
heroAlt: "Quantus Weekly: Audit Lattice Crypto dan Integrasi Keystone"
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

Minggu lalu, tim menangani semua masalah yang diangkat dalam audit perpustakaan kripto lattice kami (rusty-crystals) dan merilis pembaruan jaringan untuk menyelaraskan dengan Polkadot SDK terbaru. Kami juga menerapkan dukungan alamat Quantus pada firmware dompet perangkat keras Keystone sumber terbuka dan profil kami terdaftar di platform intelijen pasar “The Quantum Insider”.

Laporan aktivitas Github mingguan termasuk 17 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-01-11:59:59.md

## Core Tech
- Menyelesaikan semua temuan dalam audit perpustakaan kriptografi lattice inti (qp-rusty-crystals).
- Menyelesaikan persiapan bukti ZK-Aggregation (sirkuit, benchmark, dan dokumentasi QIP) untuk audit mendatang.
- Menemukan optimalisasi pada gate plonky2 poseidon2 dan zk-trie untuk meningkatkan kecepatan pembuktian.
- Melakukan rollback qp-header dan memperbarui sc-network untuk menyelaraskan dengan standar Polkadot SDK terbaru.

## Network & Infra
- Merilis Desktop UI Miner untuk Windows, perbaikan bug untuk Linux dan MacOS: https://github.com/Quantus-Network/quantus-apps/releases/latest 
- Menambal potensi kerentanan keamanan P2P terkait penyiaran peer untuk mencegah peer jahat membebani jaringan secara berlebihan.
- Menerapkan dukungan alamat Quantus pada firmware dompet perangkat keras Keystone sumber terbuka (saat ini dalam simulator).

## Web & Mobile App Updates
- Merilis Mobile Wallet v1.1.2 ke App Store, menyelesaikan masalah dengan polling, alur transaksi, dan notifikasi.
- Membangun Rust SDK untuk X API (rusx) dan menambahkan endpoint untuk mengaitkan akun X dan ETH untuk quest pengguna.

## Content & Partnerships
- Mengamankan listing di The Quantum Insider, meningkatkan backlink dan visibilitas bagi analis kuantum.
- Meluncurkan podcast di Apple, Spotify, dan RSS: https://podcasts.apple.com/us/podcast/quantus-podcast/id1855431112  
- Mengirimkan buletin perdana ke pelanggan email.
- Community X Space dijadwalkan Kamis ini: https://x.com/i/spaces/1mnGeNXoZOZJX 
- Podcast dengan Brian Chau, Peneliti ML: https://www.youtube.com/watch?v=m_FPbzAcXEk 

## Industry Updates
- Quantum Canary menerbitkan panduan strategis tentang mitigasi ancaman \"Harvest Now, Crack Later\", menguraikan jalur migrasi pragmatis menggunakan standar pasca-kuantum NIST yang baru saja difinalisasi: https://www.quantumcanary.org/insights/how-to-verify-your-cryptographys-safety-before-quantum-computers-arrive 

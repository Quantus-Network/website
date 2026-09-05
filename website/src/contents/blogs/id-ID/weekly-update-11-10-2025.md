---
published: true
title: "Quantus Mingguan: Testnet Dirac dan Audit Lattice"
description: "Testnet Dirac rilis dengan algoritma PoW dan kripto lattice baru yang sedang diaudit eksternal. Miner perlu upgrade; dompet dan libp2p sudah terintegrasi."

pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Mingguan: Testnet Dirac dan Audit Lattice"
featured: false
tags:
  [
    "weekly-update",
    "dirac-testnet",
    "lattice-cryptography",
    "pow",
    "libp2p",
    "ghostdag",
    "blue-green-deployment",
  ]
---

Minggu ini tim merilis testnet Dirac, menyelesaikan pembaruan chain-wide untuk algoritma proof of work dan library kriptografi lattice, qp-rusty-crystals. Library inti ini sekarang sedang diaudit eksternal dan mencakup tanda tangan constant-time. Pembaruan ini sudah terintegrasi ke dompet mobile dan libp2p.

**JIKA ANDA ADALAH MINER, ANDA HARUS MEMPERBARUI KE TESTNET DIRAC YANG BARU**

## Berita Pengembangan

- Laporan aktivitas Github mingguan, termasuk 12 pull request dan 3 yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Inti Tech

- Implementasi referensi penuh untuk qp-rusty-crystals dengan key generation dan tanda tangan constant time dirilis dan digabungkan.
- Menyelesaikan semua tes KAT untuk rusty crystals, membuatnya constant time dan memperbaiki masalah release script yang tersisa.
- Memulai audit qp-rusty-crystals.
- Menyelesaikan implementasi sirkuit verifikasi block header.
- Memperbarui block header hasher ke versi baru yang menghilangkan circuit padding.
- Menyelidiki dan menyelesaikan bug terkait digest log yang hilang di block header.
- Menambahkan fitur caching ke binary contoh wormhole untuk menyimpan proof terbaru agar debugging lebih mudah.
- Memulai implementasi paper konsensus GHOSTDAG.

## Network & Infra

- Merilis Dirac 0.4.0 di semua server.
- Merilis build external miner 1.0.0.
- Memperbarui chain untuk pembaruan rusty crystals.
- Dashboard Prometheus & Grafana baru, sekarang dikonfigurasi dengan notifikasi email yang berfungsi untuk alert.
- Layanan telemetry yang diperbarui.
- Membuat setup referensi untuk mesin Fedora.
- Men-deploy 2 VPS server baru yang aman untuk testnet Dirac baru.
- Mengamankan domain Quantus.cat dan mengonfigurasi Cloudflare tunnels untuk semua mesin.
- Meng-upgrade proses deployment Subsquid untuk mendukung blue-green deployments guna pembaruan tanpa downtime.
- Membuat workflow untuk auto-generate dan publish image Docker ke GitHub.
- Memperbaiki masalah indexing di http://quantu.se/ dan memperbarui metadata agar menunjuk ke URL node yang benar.

## Pembaruan Web & Aplikasi Mobile

- Menyelesaikan fitur notifikasi aplikasi mobile.
- Merefaktor penanganan route intent untuk meningkatkan performa dan keandalan deep linking.
- Layout dashboard miner sekarang sepenuhnya responsif.
- Memperbaiki bug Quantus Explorer di mana fungsi pencarian masih menggunakan endpoint GraphQL lama.
- Merefaktor klien API Quantus Explorer untuk menggunakan hooks modern agar performa lebih baik.

## Konten & Kemitraan

- Podcast dengan Remus Boroiu, juara bodybuilding 9 kali, entrepreneur, dan creator.
- Press release via Chainwire.

## Quantum Canary

- Analisis saham kuantum: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Deep dive tentang peran influensial RAND Corporation dalam membentuk kebijakan global dan mempercepat timeline migrasi PQC: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Peneliti Princeton melipatgandakan coherence times untuk 45 qubit tantalum-on-sapphire: https://www.nature.com/articles/s41586-025-09687-4

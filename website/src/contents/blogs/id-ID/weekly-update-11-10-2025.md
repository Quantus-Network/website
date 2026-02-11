---
title: "Quantus Weekly: Rilis Dirac Testnet dan Audit Lattice Crypto"
description: "Update mingguan yang menampilkan rilis testnet Dirac, memfinalisasi pembaruan pada algoritma PoW dan perpustakaan kriptografi lattice, serta peningkatan infrastruktur baru."
pubDate: "2025-11-10"
heroImage: "/blog/covers/weekly-update-11-10-2025.webp"
heroAlt: "Quantus Weekly: Rilis Dirac Testnet dan Audit Lattice Crypto"
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

Minggu ini tim merilis testnet Dirac, memfinalisasi pembaruan di seluruh chain pada algoritma proof of work dan perpustakaan kriptografi lattice, qp-rusty-crystals. Perpustakaan inti ini sekarang sedang dalam audit eksternal dan mencakup tanda tangan constant-time. Pembaruan ini sekarang terintegrasi ke dalam dompet seluler dan libp2p.

**JIKA ANDA ADALAH SEORANG PENAMBANG, ANDA HARUS MEMPERBARUI KE TESTNET DIRAC YANG BARU**

## Berita Pengembangan

- Laporan aktivitas Github mingguan termasuk 12 pull request dan 3 yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-09-23:57:50.md

## Core Tech

- Implementasi referensi penuh untuk qp-rusty-crystals dengan pembuatan kunci dan tanda tangan constant-time dirilis dan digabungkan.
- Menyelesaikan semua tes KAT untuk rusty crystals, menjadikannya constant-time dan memperbaiki masalah skrip rilis yang tertunda.
- Memulai audit qp-rusty-crystals.
- Menyelesaikan implementasi sirkuit verifikasi header blok.
- Memperbarui hasher header blok ke versi baru yang menghilangkan padding sirkuit.
- Menyelidiki dan menyelesaikan bug terkait log digest yang hilang di header blok.
- Menambahkan fitur caching ke binary contoh wormhole untuk menyimpan bukti terbaru agar debugging lebih mudah.
- Memulai implementasi paper konsensus GHOSTDAG.

## Network & Infra

- Merilis Dirac 0.4.0 di semua server.
- Merilis build miner eksternal 1.0.0.
- Memperbarui chain untuk pembaruan rusty crystals.
- Dashboard Prometheus & Grafana baru, sekarang dikonfigurasi dengan notifikasi email yang berfungsi untuk peringatan.
- Layanan telemetri baru yang diperbarui.
- Membuat setup referensi untuk mesin Fedora.
- Mendeploy 2 server VPS baru yang aman untuk testnet Dirac baru.
- Mengamankan domain Quantus.cat dan mengonfigurasi tunnel Cloudflare untuk semua mesin.
- Meningkatkan proses deployment Subsquid untuk mendukung blue-green deployment untuk pembaruan tanpa downtime.
- Membuat alur kerja untuk menghasilkan dan mempublikasikan Docker image secara otomatis ke GitHub.
- Memperbaiki masalah pengindeksan di http://quantu.se/ dan memperbarui metadata untuk mengarah ke URL node yang benar.

## Web & Mobile App Updates

- Menyelesaikan fitur notifikasi aplikasi seluler.
- Merefaktor penanganan route intent untuk meningkatkan performa dan keandalan deep linking.
- Tata letak dashboard miner sekarang sepenuhnya responsif.
- Memperbaiki bug Quantus Explorer di mana fungsi pencarian masih menggunakan endpoint GraphQL lama.
- Merefaktor klien Quantus Explorer API untuk menggunakan hook modern untuk performa yang lebih baik.

## Content & Partnerships

- Podcast dengan Remus Boroiu, juara binaraga 9 kali, pengusaha, dan kreator: https://www.youtube.com/watch?v=OtBKnaFAe_8
- Siaran pers melalui Chainwire.

## Quantum Canary

- Analisis saham kuantum: https://www.quantumcanary.org/insights/what-is-the-best-quantum-computing-stock
- Pendalaman peran berpengaruh RAND Corporation dalam membentuk kebijakan global dan mempercepat lini masa migrasi PQC: https://www.quantumcanary.org/insights/rand-quantum-controversy
- Princeton meneliti waktu koherensi tiga kali lipat untuk 45 qubit tantalum-on-sapphire: https://www.nature.com/articles/s41586-025-09687-4

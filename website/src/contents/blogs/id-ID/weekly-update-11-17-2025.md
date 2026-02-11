---
title: "Quantus Weekly: Audit PoW Selesai dan Peluncuran Dirac Testnet"
description: "Update mingguan yang menampilkan penyelesaian audit PoW dan fungsi hash Poseidon kami oleh Equilibrium, pembuatan bukti ZK untuk header blok, dan peluncuran testnet Dirac."
pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Weekly: Audit PoW Selesai dan Peluncuran Dirac Testnet"
featured: false
tags:
  [
    "weekly-update",
    "audit",
    "pow",
    "poseidon",
    "dirac-testnet",
    "zero-knowledge-proofs",
    "mobile-wallet",
    "miner-app",
    "podcast",
  ]
---

Minggu ini tim menyelesaikan audit dari Equilibrium terhadap algoritma proof of work dan fungsi hash Poseidon kami serta merilis aplikasi yang diperbarui ke kedua toko aplikasi.

## Berita Pengembangan
- Laporan aktivitas Github mingguan termasuk 147 total event: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Tinjau audit algoritma PoW dan fungsi hash Poseidon kami dengan semua masalah yang telah diselesaikan di sini: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Core Tech
- Memperbarui antarmuka baris perintah (CLI) agar berfungsi dengan testnet dirac.
- Pembuatan bukti ZK untuk asal-usul header blok, sebuah pencapaian besar karena membuktikan logika sirkuit kami berfungsi dengan data dinamis, bukan hanya bukti dummy statis.
- Menyelesaikan masalah dengan baris perintah node.

## Network & Infra
- Memperbaiki alur kerja docker multi-arch untuk chain.
- Memfinalisasi rilis Dirac dengan memperbarui semua node, menghapus testnet lama, dan meluncurkan dashboard serta peringatan baru. Lihat grafana.quantus.cat dan telemetry.quantus.cat.
- Memperbarui Faucet dengan library baru, server baru, dan menambahkan metrik, perintah /king baru untuk leaderboard referral.
- Meningkatkan pemantauan jaringan dengan backend PostgreSQL untuk Grafana, menambahkan berbagai perbaikan dan optimalisasi.
- Menyiapkan IaC (infrastructure as code) pada server baru, menghubungkan semua node Heisenberg & Dirac.
- Memperbarui layanan pengindeksan Subsquid untuk mendukung testnet Dirac dan menambahkan metrik Prometheus.

## Web & Mobile App Updates
- Merilis Mobile Wallet versi 1.1.1 ke App Store. Apple memerlukan info lebih lanjut, tetapi itu akan segera diselesaikan.
- Memperbarui Mobile Wallet untuk terhubung ke testnet Dirac.
- Memperbaiki beberapa bug Mobile Wallet, termasuk masalah dengan notifikasi terjadwal, pembaruan nama akun, dan autentikasi biometrik.
- Memperbarui Aplikasi Miner untuk menggunakan chain Dirac yang baru dan memperbaiki pelaporan statistik.
- Menambahkan layar pengaturan baru dan fitur pembaruan binary dalam aplikasi ke Aplikasi Miner.
- Memigrasikan aplikasi Task Master ke testnet Dirac dan menambahkan metrik Prometheus.
- Menambahkan perintah baru ke bot Faucet untuk memeriksa leaderboard untuk fitur referral kami yang akan datang.

## Content & Partnerships
- Kami memiliki beberapa kontrak penggalangan dana yang sedang berjalan dan komitmen lisan sebesar $250 ribu.
- Mempekerjakan The Quantum Insider untuk menangani SEO bagi Quantum Canary dan Quantus.
- Membuat alur n8n baru untuk melacak pertumbuhan media sosial (kami baru saja melewati 500 pelanggan podcast).
- Podcast dengan Jangle, pembangun DeFi: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Industry Updates
- Quantum Canary menerbitkan wawancara dengan kriptografer kuantum Dr. Or Sattath tentang kriptografi yang tidak dapat dikloning dan uang kuantum, mengeksplorasi potensinya untuk meningkatkan kecepatan, keamanan, dan privasi Bitcoin: https://www.quantumcanary.org/insights/or-sattath-interview
- Komputer Atom Netral 448 Qubit mencapai toleransi kesalahan: https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces
- Kami akan mendiskusikan Quantum FUD dan Quantus di X pada hari Kamis jam 11 pagi waktu HK: https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

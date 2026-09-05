---
published: true
title: "Quantus Mingguan: Audit PoW Selesai dan Dirac Launch"
description: "Equilibrium menyelesaikan audit PoW dan Poseidon kami, bukti ZK untuk block header hadir, dan testnet Dirac diluncurkan minggu ini di Quantus."

pubDate: "2025-11-17"
heroImage: "/blog/covers/weekly-update-11-17-2025.webp"
heroAlt: "Quantus Mingguan: Audit PoW Selesai dan Dirac Launch"
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

Minggu ini tim menyelesaikan audit dari Equilibrium untuk algoritma proof of work dan fungsi hash Poseidon kami, serta merilis aplikasi yang diperbarui ke kedua app store.

## Berita Pengembangan

- Laporan aktivitas Github mingguan, termasuk 147 total events: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-11-16-19:27:32.md
- Tinjau audit algoritma PoW dan fungsi hash Poseidon kami dengan semua isu terselesaikan di sini: https://github.com/Quantus-Network/qp-poseidon/tree/main/audits

## Inti Tech

- Memperbarui command-line interface (CLI) agar bekerja dengan testnet dirac
- Generasi bukti ZK untuk provenance block header, milestone besar karena membuktikan logika sirkuit kami bekerja dengan data dinamis, bukan hanya dummy proof statis.
- Menyelesaikan masalah dengan command line node.

## Network & Infra

- Memperbaiki workflow docker multi-arch untuk chain.
- Menyelesaikan rilis Dirac dengan memperbarui semua node, menghapus testnet lama, dan meluncurkan dashboard dan alert baru. Lihat grafana.quantus.cat dan telemetry.quantus.cat
- Memperbarui Faucet dengan library baru, server baru, dan menambahkan metrik, perintah /king baru untuk leaderboard referral.
- Meningkatkan monitoring jaringan dengan backend PostgreSQL untuk Grafana, menambahkan berbagai perbaikan dan optimasi.
- Menyiapkan IaC (infrastructure as code) di server baru, menghubungkan semua node Heisenberg & Dirac.
- Memperbarui layanan indexing Subsquid untuk mendukung testnet Dirac dan menambahkan metrik Prometheus.

## Pembaruan Web & Aplikasi Mobile

- Merilis Mobile Wallet versi 1.1.1 ke App Store. Apple meminta info lebih lanjut, tetapi seharusnya segera terselesaikan.
- Memperbarui Mobile Wallet untuk terhubung ke testnet Dirac.
- Memperbaiki beberapa bug Mobile Wallet, termasuk masalah notifikasi terjadwal, pembaruan nama akun, dan autentikasi biometrik.
- Memperbarui Miner App untuk menggunakan chain Dirac baru dan memperbaiki pelaporan statistik.
- Menambahkan layar pengaturan baru dan fitur pembaruan binary in-app ke Miner App.
- Memigrasikan aplikasi Task Master ke testnet Dirac dan menambahkan metrik Prometheus.
- Menambahkan perintah baru ke bot Faucet untuk memeriksa leaderboard fitur referral kami yang akan datang.

## Konten & Kemitraan

- Kami memiliki beberapa kontrak fundraising yang sedang berjalan dan $250k komitmen verbal.
- Menyewa The Quantum Insider untuk menangani SEO untuk Quantum Canary dan Quantus.
- Membuat alur n8n baru untuk melacak pertumbuhan media sosial (kami baru saja melewati 500 subscriber podcast).
- Podcast dengan Jangle, DeFi builder: https://www.youtube.com/watch?v=FBNEAdhGsGk&t

## Pembaruan Industri

- Quantum Canary menerbitkan wawancara dengan kriptografer kuantum Dr. Or Sattath tentang kriptografi unclonable dan quantum money, mengeksplorasi potensinya untuk meningkatkan kecepatan, keamanan, dan privasi Bitcoin: https://www.quantumcanary.org/insights/or-sattath-interview
- Komputer Neutral-Atom 448 Qubit mencapai fault tolerance https://postquantum.com/quantum-research/harvard-fault-tolerant/

## X Spaces

- Kami akan membahas Quantum FUD dan Quantus di X pada Kamis pukul 11 pagi waktu HK https://x.com/i/spaces/1RDGlAZlgPoJL?s=20

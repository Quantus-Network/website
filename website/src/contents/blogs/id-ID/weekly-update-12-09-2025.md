---
published: true
title: "Quantus Mingguan: Poseidon2 Lebih Cepat, Chain Lebih Ringan"
description: "Gate Poseidon2 8,3x lebih cepat setelah optimasi, refactor chain menghapus ~9.000 baris kode, dan catatan tim dari Binance Blockchain Week."

pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Mingguan: Poseidon2 Lebih Cepat, Chain Lebih Ringan"
featured: false
tags:
  [
    "weekly-update",
    "poseidon2",
    "chain-architecture",
    "wormhole",
    "binance-blockchain-week",
    "solana-breakpoint",
  ]
---

Anda mungkin sudah melihat [wawancara ini dengan @EliBenSasson dan Scott Aaronson](https://x.com/Starknet/status/1995865652377395421)

![Ringkasan wawancara Nic Carter](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

Dalam wawancara tersebut, Scott berkata "kami memutuskan untuk membangun sebagian besar infrastruktur keamanan siber dunia di atas kode kriptografi seperti RSA, diffie-hellman, dan kriptografi kurva eliptik yang kebetulan memiliki properti matematis yang dapat dieksploitasi komputer kuantum."

Itu sulit diterima.

Terutama untuk Bitcoin, yang by design tidak memiliki kemampuan untuk dengan mudah merencanakan dan mengeksekusi upgrade protokol skala besar.

Artinya, jalur paling mudah bagi komunitas Bitcoin adalah menyangkal bahwa masalah ini ada.

![Charles Edwards tentang Ancaman Kuantum](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Namun dengan terobosan terbaru dalam error correction, skala qubit, dan fidelity, penolakan kemajuan komputasi kuantum mewakili risiko eksistensial bagi Bitcoin dan oleh karena itu hak properti manusia.

Jadi kita harus menghadapi kabut masa depan kuantum, dan menerima bahwa ketika Q day tiba, banyak blockchain akan gagal bertindak.

Tugas kami adalah bertindak.

Inilah yang kami lakukan untuk membangun Bitcoin yang aman secara kuantum minggu ini:

Laporan aktivitas Github mingguan, termasuk 8 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Inti Tech & ZK

- Mengoptimalkan gate posiedon2. Mengurangi circuit trace rows per permutasi dari 31 menjadi 1. Ini membuat gate 8,3x lebih cepat dan menghasilkan peningkatan kecepatan total 4,5x untuk wormhole prover yang lebih besar.
- Merefaktor arsitektur chain untuk menggunakan transaction extensions dalam merekam bukti wormhole. Ini menghilangkan kebutuhan fork kustom dari balances pallet, menghapus sekitar 9.000 baris kode.
- Menambahkan dukungan Asset ID ke transfer wormhole
- Menyelesaikan isu yang muncul dalam audit qp-rusty-crystals

## Network & Infra

- Meningkatkan implementasi GPU miner
- Memperbarui dan menggabungkan sc-network, termasuk perbaikan peer broadcasting untuk sinkronisasi node yang lebih lancar.
- Mengarsipkan riwayat jaringan Schrodinger (testnet lama).
- Debug dan meningkatkan arsitektur subsquid kami. Menambahkan skrip monitor baru dan protokol restart untuk meningkatkan uptime data ke explorer dan dompet.

## Pembaruan Web & Aplikasi Mobile

- Meningkatkan integrasi keystone, menambahkan penghapusan cache PIN dan QR code dengan keamanan PIN.
- Menerbitkan repo rusx kami untuk menghubungkan X OAuth ke aplikasi mobile dan meng-upgrade backend untuk mendukung query dan pencarian tweet.
- Merilis pembaruan yang memperbaiki berbagai bug, termasuk masalah penanganan integer dan notifikasi kegagalan false-positive

## Konten & Kemitraan

- Kami di Dubai untuk Binance Blockchain Week dan Solana Breakpoint, bertemu dengan advisor, KOL, dan onboarding pengguna.
- Nantikan X Space mingguan kami yang dijadwalkan Kamis
- Podcast dengan tim Quantus: https://www.youtube.com/watch?v=konWKWrl5hs

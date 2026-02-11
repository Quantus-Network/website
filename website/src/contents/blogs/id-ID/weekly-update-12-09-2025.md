---
title: "Quantus Weekly: Optimalisasi Poseidon2 dan Refactor Arsitektur Chain"
description: "Update mingguan yang menampilkan gate Poseidon2 8,3x lebih cepat, refactor arsitektur chain besar yang menghapus 9.000 baris kode, dan update dari Binance Blockchain Week."
pubDate: "2025-12-09"
heroImage: "/blog/covers/weekly-update-12-09-2025.webp"
heroAlt: "Quantus Weekly: Optimalisasi Poseidon2 dan Refactor Arsitektur Chain"
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

Anda mungkin melihat [wawancara ini dengan @EliBenSasson dan Scott Aaronson](https://x.com/Starknet/status/1995865652377395421) 

![Ringkasan wawancara Nic Carter](/blog/assets/nic-carter-x-post-summarizing-eli-be-sasson-and-scott-aaronson.webp)

Dalam wawancara tersebut, Scott berkata “kami memutuskan untuk mendasarkan begitu banyak infrastruktur keamanan siber dunia pada kode kriptografi seperti RSA, Diffie-Hellman, dan kriptografi kurva eliptik yang kebetulan memiliki sifat matematika yang dapat dieksploitasi oleh komputer kuantum.”

Itu adalah kenyataan yang sulit untuk diterima.

Terutama bagi Bitcoin, yang secara desain tidak memiliki kemampuan untuk merencanakan dan mengeksekusi peningkatan protokol besar dengan mudah.

Yang berarti jalan dengan hambatan paling sedikit bagi komunitas Bitcoin adalah dengan menyangkal bahwa masalah itu ada.

![Charles Edwards tentang Ancaman Kuantum](/blog/assets/charles-edwards-x-post-about-bitcoiner-on-quantum-threat.webp)

Tetapi dengan terobosan terbaru dalam koreksi kesalahan, penskalaan qubit, dan fidelitas, penyangkalan terhadap kemajuan komputasi kuantum merupakan risiko eksistensial bagi Bitcoin dan oleh karena itu bagi hak milik manusia.

Jadi kita harus menghadapi kabut masa depan kuantum, dan menerima bahwa ketika hari Q tiba, banyak blockchain akan gagal bertindak.

Adalah tugas kita untuk bertindak.

Inilah yang kami lakukan untuk membangun Bitcoin yang aman secara kuantum minggu ini:

Laporan aktivitas Github mingguan termasuk 8 pull request yang digabungkan: https://github.com/Quantus-Network/n8n-workflows/blob/main/github/weekly-update-2025-12-09-14:47:41.md

## Core Tech & ZK
- Mengoptimalkan gate Poseidon2. Mengurangi baris trace sirkuit per permutasi dari 31 menjadi 1. Ini membuat gate 8,3x lebih cepat dan menghasilkan percepatan total 4,5x untuk prover wormhole yang lebih besar.
- Merefaktor arsitektur chain untuk menggunakan ekstensi transaksi untuk mencatat bukti wormhole. Ini menghilangkan kebutuhan akan fork kustom dari pallet balances, menghapus sekitar 9.000 baris kode.
- Menambahkan dukungan Asset ID ke transfer wormhole.
- Menyelesaikan masalah yang diangkat dalam audit qp-rusty-crystals.

## Network & Infra
- Meningkatkan implementasi miner GPU.
- Memperbarui dan menggabungkan sc-network, termasuk perbaikan untuk broadcasting peer untuk sinkronisasi node yang lebih lancar.
- Mengarsipkan riwayat jaringan Schrödinger (testnet lama).
- Mendebug dan meningkatkan arsitektur subsquid kami. Menambahkan skrip monitor baru dan protokol restart untuk meningkatkan uptime data ke explorer dan wallet.

## Web & Mobile App Updates
- Meningkatkan integrasi keystone, menambahkan penghapusan cache PIN dan kode QR dengan keamanan PIN.
- Menerbitkan repo rusx kami untuk menghubungkan X OAuth ke aplikasi seluler dan meningkatkan backend untuk mendukung kueri dan pencarian tweet.
- Merilis update yang memperbaiki berbagai bug, termasuk masalah penanganan integer dan notifikasi kegagalan positif palsu.

## Content & Partnerships
- Kami berada di Dubai untuk Binance Blockchain Week dan Solana Breakpoint bertemu dengan penasihat, KOL, dan onboarding pengguna.
- Pantau X Space mingguan kami yang dijadwalkan hari Kamis.
- Podcast dengan tim Quantus: https://www.youtube.com/watch?v=konWKWrl5hs 

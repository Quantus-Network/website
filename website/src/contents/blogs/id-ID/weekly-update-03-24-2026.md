---
title: "Quantus Weekly: Halving Kedua — Bukti ZK 4x Lebih Cepat dalam Dua Minggu"
description: "Pengurangan 2x lagi pada waktu prover, hashing Poseidon, perbaikan mining, rate limit Senoti, peluncuran whitepaper, review swap iOS, dan Quantum Canary tentang Solana dan keamanan kuantum."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: Halving Kedua — Bukti ZK 4x Lebih Cepat dalam Dua Minggu"
featured: false
tags:
  [
    "weekly-update",
    "zk-proofs",
    "poseidon",
    "privacy",
    "wormhole",
    "performance",
    "scalability",
  ]
---

2 adalah angka yang istimewa.

2+2 = 4. 2x2 = 4. 2² = 4.

Itu satu-satunya angka di mana penjumlahan, perkalian, dan eksponensiasi memberi jawaban yang sama.

Dua minggu lalu kami membuat kemajuan besar mengoptimalkan pipeline pembuktian ZK kami.

Minggu lalu kami memangkas waktu prover menjadi setengah (membagi 2).

Minggu ini kami memangkas lagi menjadi setengah (halving kedua).

4x lebih cepat dalam 14 hari.

Setiap milidetik di pipeline pembuktian penting untuk kecepatan dan UX transaksi privat kami.

Saat pengguna mengetuk kirim, mereka ingin penerima langsung melihat dananya.

Transaksi wormhole kami —yang memutus hubungan antara pengirim dan penerima— memerlukan bukti ZK.

Bukti ZK menambah waktu sebelum settlement. Setiap detik berlalu dan setiap kali penerima menyegarkan layar tanpa melihat dana adalah kegagalan.

Ada trik UI yang bisa memperbaiki pengalaman, dan itu bagus.

Tapi settlement harus terasa dan benar-benar sangat cepat.

Kami terus mengurangi detik-detik itu.

Berikut yang lainnya kami rilis minggu ini:

### Aktivitas GitHub (12 pull request yang di-merge):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- Pengurangan 50% lagi pada waktu prover lewat optimasi basis data yang ramah ZK. Minggu kedua berturut-turut dengan peningkatan 2x pada pipeline pembuktian.
- Hashing non-injektif diimplementasikan di Poseidon, dengan rilis berversi baru untuk qp-poseidon-constants.
- Perbaikan penyesuaian kesulitan untuk kasus tepi pada algoritma mining.
- Tinjauan berbasis AI untuk semua pallet dan crate utama, dengan laporan bug untuk isu yang ditandai.
- PR pembersihan di-merge untuk masalah yang teridentifikasi saat tinjauan codebase.

### Jaringan & Infrastruktur:

- Menambahkan rate limiting pada registrar perangkat layanan notifikasi Senoti.
- Explorer diperbarui: merge perubahan terbaru, konflik diselesaikan, API disesuaikan.

### Web & Aplikasi Mobile:

- Menerbitkan whitepaper baru di situs dengan gaya dan konten yang diperbarui.
- Menerbitkan pembaruan mingguan terakhir sebagai posting blog di [quantus.com/blog](https://quantus.com/blog).
- Fitur langganan peek pool transaksi diimplementasikan dan diuji end-to-end.
- Memulai proses review Apple untuk fitur swap di aplikasi iOS.

### Konten & Kemitraan:

- Menyelesai draf 20 halaman laporan industri «State of Quantum» dan mulai mengedarkan untuk komentar. Hubungi kami jika tertarik.
- Menambah rekrutan marketing untuk media sosial.
- Tanggal acara Q-Day dikonfirmasi: 25 April di Network School.

### Pembaruan Industri:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

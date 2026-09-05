---
published: true
title: "Quantus Weekly: Halving Kedua, Bukti 4x Lebih Cepat"
description: "Pemotongan waktu prover kedua: bukti ZK 4x lebih cepat dalam dua minggu, plus Poseidon, perbaikan mining, Senoti, whitepaper, dan Quantum Canary."
pubDate: "2026-03-24"
heroImage: "/blog/covers/weekly-update-03-24-2026.webp"
heroAlt: "Quantus Weekly: Halving Kedua, Bukti 4x Lebih Cepat"
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

2 adalah angka spesial.

2+2 = 4. 2x2 = 4. 2² = 4.

Ini satu-satunya angka di mana penjumlahan, perkalian, dan eksponensial semuanya memberi jawaban yang sama.

Dua minggu lalu kami membuat kemajuan signifikan mengoptimalkan pipeline proving ZK kami.

Minggu lalu kami memotong waktu prover setengahnya (membaginya 2).

Minggu ini kami memotongnya lagi setengahnya (halving kedua).

4x lebih cepat dalam 14 hari.

Setiap milidetik di pipeline proving penting untuk kecepatan dan UX transaksi privat kami.

Saat pengguna menekan kirim, mereka ingin penerima langsung melihat dana mereka.

Transaksi wormhole kami, yang memutus tautan antara pengirim dan penerima, memerlukan bukti ZK.

Bukti ZK menambah waktu sebelum settlement. Setiap detik yang berlalu dan setiap kali penerima me-refresh layar tanpa melihat dana mereka adalah kegagalan.

Ada trik UI yang bisa memperbaiki pengalaman, dan itu bagus.

Tapi settlement perlu terasa dan benar-benar sangat cepat.

Kami terus menggerus detik-detik itu.

Berikut hal lain yang kami rilis minggu ini.

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-24-2026.webp)

### Core Tech & ZK:

- Pengurangan 50% lagi pada waktu prover melalui optimasi database ramah-ZK. Minggu kedua berturut-turut dengan peningkatan 2x pada pipeline proving.
- Non-injective hashing diimplementasikan di Poseidon, dengan rilis versi baru untuk qp-poseidon-constants.
- Perbaikan difficulty adjustment untuk edge case di algoritma mining.
- Review berbasis AI untuk semua pallet dan crate utama, dengan laporan bug diajukan untuk isu yang terflag.
- PR pembersihan digabungkan untuk isu yang teridentifikasi selama review codebase.

### Network & Infra:

- Menambahkan rate limiting ke device registrar layanan notifikasi Senoti.
- Explorer diperbarui: menggabungkan perubahan terbaru, menyelesaikan konflik, dan menyesuaikan API.

### Web & Mobile App Updates:

- Menerbitkan whitepaper baru di website dengan styling dan konten yang diperbarui.
- Menerbitkan weekly update terakhir sebagai blog post di [quantus.com/blog](https://quantus.com/blog).
- Fitur subscription transaction pool peek diimplementasikan dan diuji end to end.
- Memulai proses review Apple untuk fitur swap di aplikasi iOS.

### Content & Partnerships:

- Menyelesaikan draf 20 halaman laporan industri "State of Quantum" kami dan mulai mendistribusikannya untuk komentar. Hubungi kami jika Anda tertarik.
- Menambahkan rekrutan marketing untuk media sosial.
- Tanggal acara Q-Day dikonfirmasi: 25 April di Network School.

### Industry Updates:

- Quantum Canary: [Can Solana Ever Be Quantum Secure?](https://x.com/QuantumCanary_/status/2036278620499616199)

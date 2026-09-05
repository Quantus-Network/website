---
published: true
title: "Quantus Weekly: Wallet Harus Sederhana"
description: "Minggu ini: rilis Wallet v1.2.0, Treasury dengan multisig, pembaruan testnet Heisenberg, dan peningkatan performa yang signifikan."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Weekly: Wallet Harus Sederhana"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Setiap wallet kripto besar menambahkan fitur sampah yang tidak saya inginkan.

Saya tidak ingin aplikasi media sosial yang sekaligus menyimpan uang saya.

Pernah notice tidak ada wallet bitcoin "resmi" yang highly opinionated, mudah dipakai, dan self-custody?

Sama untuk Ethereum dan Solana.

Foundation membangun chain dan menyerahkan antarmuka ke pihak ketiga. Pihak ketiga butuh revenue. Revenue berarti fitur. Fitur berarti noise.

Sekarang wallet Anda punya swap aggregator, feed sosial, token trending, galeri NFT, dan push notification tentang koin yang belum pernah Anda dengar.

Kami membangun Quantus dan kami membangun wallet-nya.

Tim yang sama, produk yang sama. Aplikasi yang kami rilis ke App Store minggu ini tanpa iklan, tanpa feed token, tanpa fitur sosial, tanpa username yang bisa diklaim.

Buka, Anda lihat saldo, kirim atau terima.

Kami mendesain ulang antarmuka dari nol agar highly opinionated dengan default yang menghilangkan beban kognitif sebanyak mungkin.

Kami juga memangkas waktu muat riwayat transaksi wallet secara dramatis. Tidak perlu menunggu lama saldo dan transaksi sebelumnya dimuat setelah membuka aplikasi.

Uang privat quantum-secure seharusnya mudah dipakai dan idealnya membosankan.

Kami serahkan sensasinya ke chain pre-kuantum di Q-day.

Semuanya open source. Siapa pun bisa membangun wallet sendiri. Tapi akan selalu ada yang resmi dan langsung jalan.

### GitHub Activity (4 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Core Tech & ZK

- Treasury dengan multisig digabung dan dimasukkan ke rilis testnet Heisenberg baru.
- Semua perubahan pending digabung dan dirilis. Genesis Heisenberg baru dibuat, dirilis, dan di-deploy.
- Aturan governance legacy terkait manajemen Treasury dihapus.
- CLI diperluas dengan perintah Multisig dan Treasury baru. Detail akun keamanan tinggi kini terlihat di tampilan wallet.
- Menambahkan proof shuffling dan zeroing akun exit duplikat untuk meningkatkan privasi transaksi wormhole teragregasi.
- Memisahkan wormhole menjadi circuit builder dan prover untuk mempercepat proof aggregation.
- Release workflow sirkuit ZK diperbarui dan artifact baru diterbitkan.
- Isu dependency pallet Revive terselesaikan.

### Network & Infra

- Sistem notifikasi (Senoti): menambahkan failover ke block watcher untuk pemilihan jaringan terbaik.
- Memperbarui Senoti untuk menangani banyak alamat per perangkat.
- Failover RPC ditambahkan untuk server Subsquid.
- Alert monitoring diperbarui dan dialihkan ke channel yang sesuai.

### Web & Mobile App Updates

- Merilis Wallet v1.2.0 ke iOS App Store.
- Mengurangi waktu muat riwayat transaksi rata-rata dari lebih dari 1 menit menjadi di bawah 5 detik.
- Merilis build Wallet 75, 76, 77 dengan perbaikan splash screen Android dan bugfix lainnya.
- Menambahkan release artifact workflow untuk build wallet.
- Memperbarui komponen toaster dan membersihkan versi legacy.
- Menambahkan dukungan remote notification untuk mendaftarkan alamat yang ada, unregistration perangkat FCM saat reset, dan penghapusan notifikasi alamat wallet baru.
- Menambahkan daftar happy words untuk check-phrases.
- Merefaktor Subsquid agar lebih fokus extrinsics dengan dukungan perhitungan privacy score dan transaksi wormhole.
- Merefaktor explorer agar selaras dengan arsitektur Subsquid yang diperbarui.

### Content & Partnerships

- Podcast dengan Nik Heger, "Building A New Sound Money System"

### Industry Updates

- Analisis Quantum Canary tentang apakah [blockchain Tempo Stripe akan quantum secure.](https://x.com/QuantumCanary_/status/2024797352616509754)

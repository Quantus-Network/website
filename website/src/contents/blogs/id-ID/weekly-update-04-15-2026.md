---
published: true
title: "Quantus Weekly: Hadiah Mining Planck Testnet"
description: "Planck testnet live untuk miner awal. Migrasi aplikasi ke TestFlight dan store, mining GPU pindah ke chain baru, plus update Core, infra, dan wallet."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Hadiah Mining Planck Testnet"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
  ]
---

Hashrate awal penting.

Setengah dari 21M supply Bitcoin diemit dalam empat tahun pertama, saat belum ada yang memperhatikan.

Siapa saja bisa mining, dan hadiah blok awal 50 BTC.

Beberapa siklus komputasi bisa saja mengubah garis keturunan.

Quantus adalah proof of work. Max supply 21M QTC.

Sama seperti Bitcoin, miner awal mendapat lebih banyak hadiah untuk bootstrapping jaringan.

Hari ini kami meluncurkan Planck testnet.

Kami stress-test Quantus sebelum mainnet.

Jika Anda memakai aplikasi di TestFlight, Anda akan diminta migrasi satu klik.

Jika Anda mengunduh aplikasi dari iOS atau Google Play store, update akan bergulir dalam beberapa hari ke depan.

Jika Anda mining Quantus, Anda bisa mulai mining Planck testnet sekarang.

Lihat wiki repo chain untuk panduan mining yang diperbarui termasuk implementasi GPU kami (yang lebih efisien dari miner CPU).

Aplikasi miner UI sederhana masih ditingkatkan, tapi jika Anda miner yang lebih teknis, Anda seharusnya bisa mulai mining testnet baru sekarang. Beri tahu kami jika ada masalah.

Testnet ini latihan. Hashrate akan naik cepat setelah chain live, dan Anda ingin setup siap untuk hari pertama.

Berikut hal lain yang kami rilis minggu ini:

### Core Tech & ZK

- Meluncurkan testnet baru.
- Menghapus pallet sudo sebagai persiapan mainnet.
- Memperbaiki network sync.
- Memperbaiki single state mem pool.
- Memperbarui Poseidon ke versi terbaru.

### Network & Infra

- Memperbarui dokumentasi node dengan persyaratan jaringan minimum.
- Memperbarui indexer Subsquid ke versi chain terbaru, memperbaiki tipe extrinsic event reversible dan cancelled, dan merilis Docker image v0.6.0.
- Menambahkan rate limiting ke endpoint Task Master risk checker dan memperbarui kebijakan CORS.

### Web & Mobile App Updates

- Memulihkan alur high-security di aplikasi mobile dan merilis perbaikan UX.
- Mendesain ulang homepage wallet, memperbarui tombol, ikon, dan komponen daftar transaksi, serta mengintegrasikan query GraphQL baru untuk indexer Subsquid terbaru.
- Memperbaiki animasi halaman mobile wallet, bug hero banner homepage, dan navbar darken-on-scroll di rute non-homepage.

### Content & Partnerships

- Chris di podcast [@mobymedia](https://x.com/mobymedia): [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- Menerbitkan podcast Post-Quantum zero-knowledge proofs dengan [@ethan*t_c*](https://x.com/ethan_t_c_) dan [@YuviLightman](https://x.com/YuviLightman): [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- Menghadiri GitEx di Singapura.
- Menyelenggarakan sesi penuh dengan Dr. [@zina_cinker](https://x.com/zina_cinker) di Network School: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris bergabung [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 live Kamis 16 April, 14:00 UTC / 22:00 Singapura: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- Melanjutkan distribusi State of Quantum report dan mengimplementasikan komentar.

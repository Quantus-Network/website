---
title: "Quantus Weekly: Peluncuran Testnet Planck dan Hadiah Mining Awal"
description: "Mengapa hashrate awal penting, testnet Planck sudah siap untuk miner, migrasi aplikasi lewat TestFlight dan toko aplikasi, mining GPU di chain baru—serta pembaruan inti, infra, wallet, dan komunitas minggu ini."
pubDate: "2026-04-15"
heroImage: "/blog/covers/weekly-update-04-15-2026.webp"
heroAlt: "Quantus Weekly: Peluncuran Testnet Planck dan Hadiah Mining Awal"
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

Hashrate di awal sangat penting.

Separuh dari pasokan 21 juta Bitcoin dikeluarkan dalam empat tahun pertama, saat belum ada yang memperhatikan.

Siapa pun bisa menambang, dan reward blok awal adalah 50 BTC.

Beberapa siklus komputasi saja bisa mengubah nasib selamanya.

Quantus adalah proof of work. Pasokan maksimum 21 juta QUAN.

Seperti Bitcoin, miner awal mendapat bagian reward lebih besar untuk mem-bootstrap jaringan.

Hari ini kami meluncurkan testnet Planck.

Kami menguji beban Quantus sebelum mainnet.

Jika Anda memakai aplikasi lewat TestFlight, Anda akan diminta migrasi satu klik.

Jika Anda mengunduh aplikasi dari App Store iOS atau Google Play, pembaruan akan bergulir dalam beberapa hari ke depan.

Jika Anda menambang Quantus, Anda bisa mulai menambang testnet Planck sekarang.

Lihat wiki repo chain untuk panduan mining terbaru, termasuk implementasi GPU kami (lebih efisien daripada miner CPU).

Aplikasi miner UI sederhana masih ditingkatkan, tetapi jika Anda miner yang lebih teknis, Anda seharusnya sudah bisa menambang testnet baru sekarang. Beri tahu kami jika ada kendala.

Testnet ini adalah latihan. Hashrate akan naik cepat setelah chain hidup, dan Anda ingin setup sudah siap sejak hari pertama.

Berikut yang lain kami kirimkan minggu ini:

### Core Tech & ZK

- Meluncurkan testnet baru.
- Menghapus pallet sudo menyiapkan mainnet.
- Memperbaiki sinkronisasi jaringan.
- Memperbaiki mempool status tunggal.
- Memperbarui Poseidon ke versi terbaru.

### Network & Infra

- Memperbarui dokumentasi node dengan persyaratan jaringan minimum.
- Memperbarui indexer Subsquid ke versi chain terbaru, memperbaiki tipe event dan ekstrinsik untuk transaksi reversible dan cancelled, serta merilis image Docker v0.6.0.
- Menambahkan pembatasan laju ke endpoint pemeriksa risiko Task Master dan memperbarui kebijakan CORS.

### Web & Mobile App Updates

- Mengembalikan alur keamanan tinggi di aplikasi mobile dan merilis perbaikan UX.
- Mendesain ulang beranda wallet, memperbarui tombol, ikon, dan komponen daftar transaksi, serta mengintegrasikan query GraphQL baru untuk indexer Subsquid terbaru.
- Memperbaiki animasi halaman wallet mobile, bug banner hero beranda, dan navbar yang menggelap saat scroll di rute selain beranda.

### Content & Partnerships

- Chris di podcast [@mobymedia](https://x.com/mobymedia): [https://x.com/mobymedia/status/2043401794227949568](https://x.com/mobymedia/status/2043401794227949568)
- Menerbitkan podcast bukti zero-knowledge pasca-kuantum dengan [@ethan_t_c_](https://x.com/ethan_t_c_) dan [@YuviLightman](https://x.com/YuviLightman): [https://x.com/QuantusNetwork/status/2042047089660563948](https://x.com/QuantusNetwork/status/2042047089660563948)
- Menghadiri GitEx di Singapura.
- Meng-host sesi full house dengan Dr. [@zina_cinker](https://x.com/zina_cinker) di Network School: [https://x.com/QuantusNetwork/status/2044051045832384538](https://x.com/QuantusNetwork/status/2044051045832384538)
- Chris bergabung dengan [@ArcanumVentures](https://x.com/ArcanumVentures) ep. 47 live Kamis 16 April, 14.00 UTC / 22.00 Singapura: [https://x.com/ArcanumVentures/status/2044023122102223157](https://x.com/ArcanumVentures/status/2044023122102223157)
- Melanjutkan distribusi laporan State of Quantum dan mengimplementasikan komentar.

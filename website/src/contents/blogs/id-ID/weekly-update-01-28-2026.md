---
published: true
title: "Quantus Weekly: RPC Deniable dan Audit Neodyme"
description: "RPC deniable untuk privasi lebih kuat, audit Neodyme Rusty Crystals selesai, dan alamat ZK privat kini tersedia untuk setiap token."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: RPC Deniable dan Audit Neodyme"
featured: false
tags:
  [
    "weekly-update",
    "rpc",
    "privacy",
    "audit",
    "security",
    "dilithium",
    "zk-aggregator",
    "multisig",
  ]
---

Wallet Anda sedang mengkhianati Anda.

99% infrastruktur privasi cuma LARP. Info Anda bocor di suatu titik dalam stack. Wallet Anda berbicara ke server yang disebut RPC. Server RPC mengirim info kembali ke wallet. Tapi untuk melakukannya, RPC biasanya perlu tahu sesuatu tentang Anda.

Misalnya, untuk menarik saldo, RPC mungkin butuh riwayat transaksi Anda. Kemungkinan besar itu dikaitkan dengan alamat IP, lokasi perkiraan, kebiasaan penggunaan, dan seterusnya. Semua itu hanya supaya Anda bisa lihat saldo di wallet.

Jadi sementara Stacy, hire marketing baru alat privasi onchain favorit Anda, flex di X space soal betapa "privat dan aman" mereka, yang di belakang layar justru menguping koneksi RPC.

Anda sudah pwned.

Kami membangun sesuatu yang berbeda. RPC deniable memakai filter prefix hash mirip oblivious lookup. Anda bisa minta server transaksi Anda tanpa server tahu apa yang Anda cari. RPC tidak bisa menentukan transaksi spesifik mana yang Anda minta.

Jadi [@QuantusNetwork](https://x.com/@QuantusNetwork) menjaga privasi on-chain dan di infrastruktur wallet/RPC. Kami menjaga rahasia apa yang ingin Anda rahasiakan di setiap lapisan stack.

Minggu ini kami juga [mengumumkan](https://x.com/QuantusNetwork/status/2016390125626773871) audit keamanan [@Neodyme](https://x.com/@Neodyme) untuk library tanda tangan Dilithium Rusty Crystals kami. Semua isu terselesaikan dan teknik hardening diterapkan. Rusty Crystals adalah library tanda tangan Dilithium terbaik di Rust, dengan dukungan HD wallet penuh.

Itu sorotannya. Berikut hal lain yang kami rilis minggu lalu:

### GitHub Activity (19 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- Menyelesaikan audit [@Neodyme](https://x.com/@Neodyme) dengan semua isu terselesaikan. Teknik hardening diterapkan termasuk memory zeroing setelah pemakaian. [Posting di sini](https://x.com/QuantusNetwork/status/2016390125626773871).
- Merilis RPC deniable via prefix hashing. Pengguna kini punya plausible deniability saat terhubung ke node RPC (oblivious lookup).
- Mengaktifkan alamat ZK privat untuk semua token sejak genesis.
- Continuous block-building mengurangi waktu rata-rata hingga transaksi masuk lebih dari 50%.
- Menghapus pallet yang tidak perlu, menyederhanakan runtime.
- Pallet multisig feature-complete dengan dokumentasi diperbarui. Integrasi chain dan CLI menunggu review.
- Merevamp fuzzer untuk sirkuit ZK-aggregator dan memperluas cakupan tes untuk miner fees dan burned fees.

### Web & Mobile App Updates

- Merilis Mobile App v1.1.5 (build 65) dengan fitur high security pull.
- Membuat video demo untuk fitur keamanan tinggi.
- Peningkatan explorer dan faucet: menambahkan error dan event keamanan tinggi ke detail block, pencarian berdasarkan tipe error, dan filtering group message yang lebih baik.
- Perbaikan bug Task Master untuk leaderboard, raid submission, dan metrics.
- Memperbaiki Subsquid dockerfile dan GitHub action untuk pembuatan docker image.
- Memperbarui UX blog website dan memperbaiki isu SEO.

### Content & Partnerships

- Melewati 1.000 anggota di Telegram.
- Memesan venue untuk side event di Token2049 Dubai.
- Tim memutuskan kembali ke [@ns](https://x.com/@ns) untuk sprint berikutnya.
- Merekrut desainer baru untuk redesign aplikasi mobile.
- Merekrut content creator medium pertama untuk kolaborasi video. Membangun roster creator kami.

### Industry Updates

- Artikel [@QuantumCanary\_](https://x.com/@QuantumCanary_) [mendalami Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) menerbitkan "[Blockchain Comparison Table](https://x.com/QuantumCanary_/status/2015734605450731824)".

---
title: "Quantus Weekly: Deniable RPCs dan Audit Keamanan Neodyme"
description: "Update mingguan yang menampilkan Deniable RPC baru kami untuk privasi yang ditingkatkan, penyelesaian audit keamanan Neodyme untuk Rusty Crystals, dan alamat ZK privat untuk semua token."
pubDate: "2026-01-28"
heroImage: "/blog/covers/weekly-update-01-28-2026.webp"
heroAlt: "Quantus Weekly: Deniable RPCs dan Audit Keamanan Neodyme"
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

Dompet Anda mengadu pada Anda.

99% infrastruktur privasi adalah sandiwara. Informasi Anda bocor di suatu tempat dalam stack. Dompet Anda berbicara dengan server yang disebut RPC. Server RPC itu mengirimkan info kembali ke dompet Anda. Tetapi untuk melakukan itu, RPC biasanya perlu mengetahui beberapa informasi tentang Anda.

Misalnya, untuk menarik saldo Anda, RPC mungkin memerlukan riwayat transaksi Anda. RPC tersebut mungkin mengaitkannya dengan alamat IP Anda, perkiraan lokasi, kebiasaan penggunaan, dll. Semuanya agar Anda dapat melihat saldo di dompet Anda.

Jadi, sementara Stacy, karyawan pemasaran baru alat privasi onchain favorit Anda, pamer di X space tentang betapa "privat dan aman" mereka, orang-orang berpakaian jas hanya menguping koneksi RPC tersebut.

Anda tertangkap.

Kami membangun sesuatu yang berbeda. Deniable RPC menggunakan filter hash prefix yang mirip dengan oblivious lookup. Anda dapat menanyakan transaksi Anda ke server tanpa server tersebut mengetahui apa yang Anda cari. RPC tidak dapat menentukan transaksi spesifik mana yang Anda minta.

Jadi [@QuantusNetwork](https://x.com/@QuantusNetwork) menjaga privasi onchain & dalam infrastruktur dompet/RPC. Kami menjaga kerahasiaan apa yang ingin Anda rahasiakan di setiap lapisan stack.

Minggu ini kami juga [mengumumkan](https://x.com/QuantusNetwork/status/2016390125626773871) selesainya audit keamanan [@Neodyme](https://x.com/@Neodyme) untuk library signature Dilithium Rusty Crystals kami. Semua masalah diselesaikan & teknik pengerasan (hardening) diterapkan. Rusty Crystals adalah library signature Dilithium terbaik di Rust, dengan dukungan dompet HD penuh.

Itu adalah sorotannya. Inilah hal lain yang kami luncurkan dalam seminggu terakhir:

### Aktivitas GitHub (19 pull request yang digabungkan):

![Statistik Github](/blog/assets/github-stats-weekly-update-01-28-2026.webp)

### Core Tech & ZK

- Menyelesaikan audit [@Neodyme](https://x.com/@Neodyme) dengan semua masalah teratasi. Teknik pengerasan diterapkan termasuk pengosongan memori (memory zeroing) setelah digunakan. [Postingan di sini](https://x.com/QuantusNetwork/status/2016390125626773871).
- Meluncurkan Deniable RPC melalui prefix hashing. Pengguna sekarang memiliki plausible deniability saat terhubung ke node RPC (oblivious lookup).
- Mengaktifkan alamat ZK privat untuk semua token saat genesis.
- Pembuatan blok berkelanjutan mengurangi waktu rata-rata hingga penyertaan transaksi lebih dari 50%.
- Menghapus pallet yang tidak perlu, menyederhanakan runtime.
- Pallet multisig fitur-lengkap dengan dokumentasi yang diperbarui. Integrasi rantai dan CLI menunggu peninjauan.
- Memperbarui fuzzer untuk sirkuit ZK-aggregator dan memperluas cakupan pengujian untuk biaya miner dan biaya yang dibakar.

### Pembaruan Aplikasi Web & Seluler

- Meluncurkan Aplikasi Seluler v1.1.5 (build 65) dengan fitur penarikan keamanan tinggi.
- Membuat video demo untuk fitur keamanan tinggi.
- Peningkatan explorer dan faucet: menambahkan event kesalahan dan keamanan tinggi ke detail blok, pencarian berdasarkan jenis kesalahan, dan pemfilteran pesan grup yang ditingkatkan.
- Perbaikan bug Task Master untuk leaderboard, pengiriman raid, dan metrik.
- Memperbaiki dockerfile Subsquid dan GitHub action untuk pembuatan docker image.
- Memperbarui UX blog situs web dan memperbaiki masalah SEO.

### Konten & Kemitraan

- Melampaui 1.000 anggota di Telegram.
- Memesan tempat untuk side event di Token2049 Dubai.
- Tim telah memutuskan untuk kembali ke [@ns](https://x.com/@ns) untuk sprint kami berikutnya.
- Mempekerjakan desainer baru untuk desain ulang aplikasi seluler.
- Mempekerjakan kreator konten berukuran sedang pertama kami untuk kolaborasi video. Membangun daftar kreator kami.

### Pembaruan Industri

- Artikel [@QuantumCanary\_](https://x.com/@QuantumCanary_) [membahas Zcash](https://x.com/QuantumCanary_/status/2016327421797294286).
- [@QuantumCanary\_](https://x.com/@QuantumCanary_) menerbitkan "[Tabel Perbandingan Blockchain](https://x.com/QuantumCanary_/status/2015734605450731824)" mereka.

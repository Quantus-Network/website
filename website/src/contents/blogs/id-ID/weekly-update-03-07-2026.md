---
title: "Quantus Weekly: Transaksi Wormhole"
description: "Pembaruan mingguan yang mencakup transaksi wormhole, hadiah blok pribadi untuk penambang, perbaikan bug konsensus, dan pembaruan dompet."
pubDate: "2026-03-07"
heroImage: "/blog/covers/weekly-update-03-07-2026.webp"
heroAlt: "Quantus Weekly: Transaksi Wormhole"
featured: false
tags:
  [
    "weekly-update",
    "wormhole",
    "zk-proofs",
    "privacy",
    "miner-app",
    "consensus",
    "wallet",
  ]
---

Anda membakar koin ke alamat yang tidak dapat dibelanjakan.

Bukti ZK mencetaknya di tempat baru.

Jejaknya hilang.

[@QuantusNetwork](https://x.com/@QuantusNetwork) menyebut ini transaksi "wormhole".

Anda mengirim koin ke alamat wormhole yang terlihat identik dengan akun lain mana pun di buku besar. Namun alamat tersebut secara matematis tidak dapat dibelanjakan. Untuk menarik, Anda membuktikan pengetahuan tentang rahasia dengan bukti ZK, dan rantai mencetak koin yang setara ke alamat keluar yang baru.

Tidak ada yang bisa menghubungkan entri ke pintu keluar.

Di sinilah hal itu menjadi menarik bagi para penambang.

Protokol mengharuskan penambang untuk menyerahkan preimage 32-byte untuk alamat hadiah mereka. Rantai menghashenya untuk membuat alamat.

Kunci publik Dilithium sangat besar. Mereka tidak muat dalam 32 byte. Jadi preimage tidak bisa berupa kunci publik asli, dan alamat yang dihasilkan dijamin sebagai alamat wormhole yang tidak dapat dibelanjakan.

Privasi ditegakkan oleh protokol, tanpa perlu opt-in.

Minggu ini, kami membangun ini ke dalam aplikasi penambang. Di testnet berikutnya, semua hadiah blok akan dialirkan melalui alamat wormhole secara default.

Inilah hal lain yang kami bangun minggu ini.

### Aktivitas Github (11 pull request yang digabungkan):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Membangun penarikan wormhole ke dalam aplikasi penambang, memberikan hadiah blok pribadi kepada penambang secara default.
- Memperbaiki bug konsensus rantai terberat/terpanjang dan beberapa bug rantai lainnya.
- Merilis pustaka inti yang diperbarui: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Network & Infra:

- Memperbarui dependensi Substrate dari stable2506 ke stable2512-2.
- Memperbarui CLI, fork sc-network, dan fork NEAR dengan dependensi baru.
- Menguji node Heisenberg dengan basis kode yang diperbarui dan tata kelola kolektif teknologi.
- Sistem notifikasi Senoti: memperbaiki gangguan startup RabbitMQ, menghapus lapisan autentikasi dari pendaftar perangkat, memperbaiki penanganan koneksi failover.

### Web & Mobile App Updates:

- Mengirimkan dompet v1.2.0 dan v1.2.1 ke semua toko aplikasi dengan grafis yang diperbarui.
- Mendorong versi aplikasi seluler dengan tombol "swap" ke toko aplikasi untuk memulai proses peninjauan.
- Mengirimkan frasa cek bahagia dengan daftar kata yang lebih positif di dompet dan penjelajah.
- Perbaikan tampilan edge-to-edge Android.
- Pembaruan UI frasa pemulihan, perbaikan komponen tombol, standarisasi tombol ikon, dan pembaruan lembar reset.
- Memperbarui integrasi notifikasi jarak jauh dan memperluas dukungan notifikasi ke semua dompet.

### Content & Partnerships:

- Mengadakan diskusi panel tentang privasi dan keamanan kuantum dengan [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman), dan [Kenbak](https://x.com/k6nb4k) (Cipherscan) di Network School.

### Industry Updates:

- [Artikel Quantum Canary](https://x.com/QuantumCanary_/status/2027639894944956645) tentang ZK & Komputasi Kuantum

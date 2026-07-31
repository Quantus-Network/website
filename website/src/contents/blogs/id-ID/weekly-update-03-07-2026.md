---
title: "Quantus Weekly: Transaksi Wormhole"
description: "Update mingguan: transaksi wormhole, hadiah blok privat untuk miner, perbaikan bug konsensus, serta pembaruan wallet dan infrastruktur jaringan."
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

Anda membakar koin ke alamat yang tidak bisa dibelanjakan.

Bukti ZK mencetaknya di tempat baru.

Jejaknya hilang.

[@QuantusNetwork](https://x.com/@QuantusNetwork) menyebut ini transaksi "wormhole".

Anda mengirim koin ke alamat wormhole yang terlihat identik dengan akun lain di ledger. Tapi alamat itu secara matematis tidak bisa dibelanjakan. Untuk menarik, Anda membuktikan pengetahuan rahasia dengan bukti ZK, dan chain mencetak koin setara ke alamat keluar yang baru.

Tidak ada yang bisa menghubungkan titik masuk dengan titik keluar.

Di sinilah hal menarik bagi miner.

Protokol mewajibkan miner mengirim preimage 32-byte untuk alamat hadiah mereka. Chain meng-hash-nya untuk membuat alamat.

Kunci publik Dilithium sangat besar. Tidak muat dalam 32 byte. Jadi preimage tidak bisa berupa kunci publik asli, dan alamat yang dihasilkan dijamin menjadi alamat wormhole yang tidak bisa dibelanjakan.

Privasi ditegakkan oleh protokol, tanpa perlu opt-in.

Minggu ini, kami membangun ini ke dalam aplikasi miner. Di testnet berikutnya, semua hadiah blok secara default dialirkan melalui alamat wormhole.

Berikut hal lain yang kami bangun minggu ini.

### Aktivitas GitHub (11 pull request digabungkan):

![Github Stats](/blog/assets/github-stats-weekly-update-03-07-2026.webp)

### Core Tech & ZK:

- Membangun penarikan wormhole ke aplikasi miner, memberikan hadiah blok privat untuk miner secara default.
- Memperbaiki bug konsensus heaviest/longest chain dan beberapa bug chain lainnya.
- Merilis pustaka inti yang diperbarui: qp-poseidon v1.1.0, qp-rusty-crystals-hdwallet v2.0.0, qp-dilithium v0.2.2.

### Network & Infra:

- Memperbarui dependensi Substrate dari stable2506 ke stable2512-2.
- Memperbarui CLI, fork sc-network, dan fork NEAR dengan dependensi baru.
- Menguji node Heisenberg dengan codebase dan tata kelola tech collective yang diperbarui.
- Sistem notifikasi Senoti: memperbaiki glitch startup RabbitMQ, menghapus lapisan auth dari device registrar, memperbaiki penanganan koneksi failover.

### Web & Mobile App Updates:

- Merilis wallet v1.2.0 dan v1.2.1 ke semua app store dengan grafis yang diperbarui.
- Mendorong versi aplikasi mobile dengan tombol "swap" ke app store untuk memulai proses review.
- Merilis happy checkphrase dengan daftar kata positif yang lebih banyak di wallet dan explorer.
- Perbaikan tampilan edge-to-edge Android.
- Pembaruan UI recovery phrase, perbaikan komponen tombol, standarisasi icon button, dan pembaruan reset sheet.
- Memperbarui integrasi notifikasi remote dan memperluas dukungan notifikasi ke semua wallet.

### Content & Partnerships:

- Menyelenggarakan panel diskusi tentang privasi dan keamanan kuantum dengan [Tom Howard](https://x.com/_TomHoward), [Chris Smith](https://x.com/YuviLightman), dan [Kenbak](https://x.com/k6nb4k) (Cipherscan) di Network School.

### Industry Updates:

- [Artikel Quantum Canary](https://x.com/QuantumCanary_/status/2027639894944956645) tentang ZK & Komputasi Kuantum

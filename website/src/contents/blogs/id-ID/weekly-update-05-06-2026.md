---
published: true
title: "Quantus Weekly: Aplikasi Killer Adalah Uang"
description: "Minggu ini: DKG Dilithium untuk Mithril, perbaikan tanda tangan threshold, helper SDK Wormhole, dan rilis wallet v1.4.0 di TestFlight."

pubDate: "2026-05-06"
heroImage: "/blog/covers/weekly-update-05-06-2026.webp"
heroAlt: "Quantus Weekly: Aplikasi Killer Adalah Uang"
featured: false
tags:
  [
    "weekly-update",
    "bitcoin",
    "pow",
    "mining",
    "testnet",
    "planck",
    "post-quantum",
    "mobile",
    "zk-proofs",
    "infrastructure",
    "subsquid",
    "dilithium",
    "wormhole",
    "mithril",
    "network-school",
  ]
---

Ada sesuatu yang saya yakini, dan pasar perlahan-lahan mulai menyadarinya.

Satu aplikasi kripto killer akan menciptakan dan menangkap lebih banyak nilai daripada aplikasi lain mana pun.

Bukan stablecoin, pasar prediksi, atau DeFi.

Bukan web3, jejaring sosial, atau koleksi PFP.

Itu uang. Ide yang melahirkan industri ini.

Pikiran pertama adalah pikiran murni. Uang elektronik peer-to-peer.

Uang yang aman, privat, dan skalabel adalah peluang triliun dolar.

Minggu ini, kami menulis ulang distributed key generation Quantus untuk kunci Dilithium agar selaras dengan paper Mithril yang diperbarui, dan mengirimkan perbaikan di seluruh implementasi tanda tangan threshold kami.

Jadi Anda akan bisa memecah kunci Quantus ke beberapa pihak. Penting untuk integrasi aman kami.

Kami menangani satu temuan audit dalam spesifikasi Wormhole dan mengekspos helper di SDK CLI Quantus publik, membuka dukungan transaksi privat bagi developer eksternal. Wormhole adalah cara kami mencapai privasi post-quantum yang skalabel.

Kami juga merilis wallet v1.4.0 dengan reskin penuh yang menyederhanakan dan mempercantik pengalaman aplikasi mobile (saat ini di TestFlight).

### Aktivitas Github (16 pull request digabungkan):

![Github Stats](/blog/assets/github-stats-weekly-update-05-06-2026.webp)

### Core Tech & ZK:

- Menulis ulang distributed key generation untuk kunci Dilithium agar selaras dengan paper Mithril yang diperbarui.
- Mengerasi implementasi tanda tangan threshold terhadap tiga temuan audit.
- Memperbarui spesifikasi Wormhole untuk menangani temuan audit terkait change output.
- Mengekspos helper Wormhole di SDK CLI Quantus publik dan menambahkan alur kerja contoh deposit-to-mint end-to-end.
- Merefaktor siklus hidup transaksi CLI dengan status submitted, included, dan finalized yang terpisah, parsing fee desimal yang presisi, pemeriksaan kompatibilitas versi yang lebih ketat, dan transfer batch yang aware overflow.
- Membangun alat benchmarking untuk meningkatkan algoritma penyesuaian difficulty.
- Menyelidiki dan membenchmark berbagai topologi pohon agregasi beserta penggunaan CPU-nya.
- Memperbaiki kesalahan ejaan pada human checkphrase.

### Network & Infra:

- Memperluas suite stress-test dengan mode wormhole dan menjalankannya berkali-kali di testnet Planck.
- Memindahkan indexer blockchain Subsquid ke server tingkat produksi dan menambahkan data statistik akun serta chain.
- Membenchmark query Explorer dan menghapus yang mahal.
- Memperbarui semua sistem operasi VPS dan mendokumentasikan infrastruktur.
- Memperbarui miner-stack dan menguji miner-app di Windows.

### Web & Mobile App Updates:

- Mengirimkan GUI miner untuk Planck (v0.4.1) dengan fungsi claim.
- Merilis wallet v1.4.0 (saat ini di TestFlight) dengan reskin UI penuh dan kurs tukar real-time.
- Perbaikan bug wallet: styling saldo homepage, styling komponen aktivitas, dan layar receive.
- Task Master: menambahkan endpoint kurs tukar dan memperbarui dependensi checksum.
- Memperbarui situs web Quantus: mengarahkan tautan docs ke docs (dot) quantus (dot) com, memperbarui tampilan TPS, dan memposting weekly update.

### Content & Partnerships:

- Memperbarui branding podcast di Spotify, Apple, dan YouTube.
- Menjual pasangan pertama Quantus Glasses untuk [$QTC](https://x.com/search?q=%24QTC&src=cashtag_click) di Network School.
- Quantus punya booth di pameran NS, mengonboarding pengguna aplikasi dan pendaftar Q-day.

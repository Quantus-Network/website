---
published: true
title: "Quantus Weekly: Klaim Planck, Prover 2x Lebih Cepat"
description: "Planck adalah testnet pertama untuk transaksi privat post-quantum. Migrasi miner, klaim hadiah CLI ke wallet, dan throughput prover berlipat ganda lagi."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: Klaim Planck, Prover 2x Lebih Cepat"
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
  ]
---

Planck adalah testnet pertama kami yang mendukung transaksi privat post-quantum Quantus.

Lebih dari setengah miner kami bermigrasi ke Planck minggu ini.

Sementara chain lain debat apakah ancaman kuantum nyata, kami stress-test solusinya secara publik.

Anda sekarang bisa klaim hadiah mining melalui CLI ke alamat transparent di mobile wallet.

Kami telah memvalidasi mining end-to-end di Apple Silicon dan Linux.

Saat ini UI mobile kami hanya mendukung tipe alamat transparent kami. Lebih lanjut segera.

[docs.quantus.com](https://docs.quantus.com) sudah live, dan Anda bisa menemukan panduan mining di sana yang memandu setup node, menjalankan miner, dan klaim hadiah ke mobile wallet.

Jika Anda pernah mining atau memakai versi testnet Quantus sebelumnya, aplikasi akan meminta migrasi saat Anda update.

Saldo Anda reset, tapi jika Anda lihat "mining rewards" di settings, Anda masih punya kredit untuk setiap blok yang Anda mine di testnet sebelumnya.

Kami juga melacak berapa banyak blok yang di-mine setiap akun untuk Planck.

Kecepatan prover agregat kami juga berlipat ganda minggu ini via arsitektur split 2x8.

Dan lebih banyak lagi yang kami rilis minggu ini.

### GitHub Activity (27 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- Menggandakan performa prover agregat via arsitektur proving split 2x8 (tanpa ZK di setiap bundle 8-leaf, wrapper ZK diterapkan ke root proof).
- Mengirimkan paper riset ZK kami untuk preprint.
- Menemukan dan mem-patch bug kebocoran privasi di opsi split mask ZK baru di qp-plonky2.
- Menangani item audit pada threshold Dilithium.
- Membuat hadiah mining bisa diklaim via CLI.
- Memperbarui hasher CLI untuk memakai blake2-256.
- Merilis perbaikan recovery saldo wormhole CLI.
- Anggota Tech Collective berhasil mengeksekusi runtime update.

### Network & Infra

- Planck: perubahan baru digabungkan dan dirilis; Planck testnet internal berjalan.
- Stress test: strategi baru diimplementasikan, beberapa run dieksekusi.
- Faucet: penanganan exception yang lebih baik untuk Twitter, metrik diperluas untuk monitoring detail.
- Dashboard monitoring disegarkan dan diperluas untuk Planck dan faucet.
- Mengimplementasikan alerting yang lebih selektif.
- Memindahkan node A1-Planck ke Jerman; node A2-Planck ke AS.
- Memperbarui Subsquid untuk Planck testnet: memperbaiki pergerakan saldo, mengembalikan hasher ke blake2b, menambahkan tampilan mining rewards.
- Memperbarui Explorer ke Planck testnet dan menggabungkan branch wormhole dengan benar.
- Menjalankan MVP miner end-to-end di Apple Silicon dan Linux; masih troubleshooting mining GPU di Linux.
- Membangun AI mining skill (SKILL.md); mining berjalan dalam kurang dari dua menit saat pengujian.

### Web & Mobile App Updates

- [docs.quantus.com](https://docs.quantus.com) sudah live.
- Men-deploy landing page [q.day](https://q.day).
- Merilis mobile wallet v1.3.2 dan v1.3.3 dengan perbaikan untuk testnet baru.
- Mining rewards sekarang ditampilkan di wallet.
- Mengimplementasikan detail transaksi, receive, dan layar aktivitas yang didesain ulang di wallet.
- Memperbarui panduan mining.

### Content & Partnerships

- Registrasi Q-Day melewati 100. Pelajari lebih lanjut di [q.day](https://q.day).
- Menerima dan mengimplementasikan komentar dari kontributor eksternal pada State of Quantum Report kami.

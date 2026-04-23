---
title: "Quantus Weekly: testnet Planck, klaim hadiah lewat CLI, dan throughput prover 2x"
description: "Planck adalah testnet pertama untuk transaksi privat pascakuantum Quantus—miner bermigrasi, hadiah bisa diklaim lewat CLI ke alamat transparan di dompet mobile, docs.quantus.com berisi panduan mining, dan kecepatan prover agregat berlipat dua lewat arsitektur split 2x8."
pubDate: "2026-04-22"
heroImage: "/blog/covers/weekly-update-04-22-2026.webp"
heroAlt: "Quantus Weekly: testnet Planck, klaim hadiah lewat CLI, dan throughput prover 2x"
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

Planck adalah testnet pertama kami yang mendukung transaksi privat pascakuantum Quantus.

Lebih dari separuh miner kami bermigrasi ke Planck minggu ini.

Sementara chain lain berdebat apakah ancaman kuantum nyata, kami men-stress-test solusinya secara publik.

Kamu kini bisa mengklaim hadiah mining lewat CLI ke alamat transparan di dompet mobile.

Kami memvalidasi mining end-to-end di Apple Silicon dan Linux.

Saat ini UI mobile hanya mendukung tipe alamat transparan kami. Info lanjutan menyusul.

[docs.quantus.com](https://docs.quantus.com) sudah live, dengan panduan mining untuk menyiapkan node, menjalankan miner, dan mengklaim hadiah ke dompet mobile.

Jika kamu pernah mining atau memakai versi testnet Quantus sebelumnya, aplikasi akan meminta migrasi saat update.

Saldo direset, tetapi di pengaturan «mining rewards» kredit untuk setiap blok yang kamu tambang di testnet lama tetap tercatat.

Kami juga melacak berapa blok yang ditambang setiap akun di Planck.

Kecepatan prover agregat kami juga berlipat dua minggu ini lewat arsitektur split 2x8.

Dan masih banyak yang dirilis minggu ini.

### Aktivitas GitHub (27 pull request yang digabung):

![Github Stats](/blog/assets/github-stats-weekly-update-04-22-2026.webp)

### Core Tech & ZK

- Performa prover agregat berlipat dua lewat arsitektur proving split 2x8 (tanpa ZK per bundle 8 daun, wrapper ZK pada proof akar).
- Makalah riset ZK dikirim untuk preprint.
- Bug kebocoran privasi pada opsi ZK split mask baru di qp-plonky2 ditemukan dan ditambal.
- Item audit threshold Dilithium ditindaklanjuti.
- Hadiah mining bisa diklaim lewat CLI.
- Hasher CLI diperbarui ke blake2-256.
- Perbaikan pemulihan saldo wormhole di CLI dirilis.
- Anggota Tech Collective berhasil menjalankan pembaruan runtime.

### Jaringan & Infra

- Planck: perubahan baru digabung dan dirilis; testnet Planck internal berjalan.
- Stress test: strategi baru diimplementasikan, beberapa putaran dijalankan.
- Faucet: penanganan exception Twitter diperbaiki, metrik diperluas untuk monitoring detail.
- Dashboard monitoring Planck dan faucet diperbarui dan diperluas.
- Alerting lebih selektif.
- Node A1-Planck dipindah ke Jerman; A2-Planck ke AS.
- Subsquid untuk testnet Planck diperbarui: perbaikan pergerakan saldo, hasher dikembalikan ke blake2b, tampilan hadiah mining ditambahkan.
- Explorer diperbarui ke testnet Planck dan cabang wormhole digabung dengan benar.
- MVP miner dijalankan end-to-end di Apple Silicon dan Linux; GPU mining di Linux masih ditroubleshoot.
- Skill mining AI (SKILL.md) dibuat; dalam uji coba mining jalan dalam waktu kurang dari dua menit.

### Web & Mobile App

- [docs.quantus.com](https://docs.quantus.com) live.
- Landing [q.day](https://q.day) di-deploy.
- Dompet mobile v1.3.2 dan v1.3.3 dengan perbaikan untuk testnet baru.
- Hadiah mining ditampilkan di dompet.
- Layar detail transaksi, terima, dan aktivitas didesain ulang.
- Panduan mining diperbarui.

### Konten & Kemitraan

- Pendaftaran Q-Day lewat 100. Selengkapnya di [q.day](https://q.day).
- Komentar kontributor eksternal pada State of Quantum Report diterima dan diimplementasikan.

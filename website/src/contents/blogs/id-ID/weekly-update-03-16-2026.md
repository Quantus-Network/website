---
title: "Quantus Weekly: Tanda Tangan Besar, Wormhole Lebih Cepat"
description: "Tanda tangan ML-DSA 70x lebih besar dari Bitcoin. Minggu ini kami percepat signing quantum-safe, bukti wormhole 2x lebih cepat, dan agregasi ZK."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Tanda Tangan Besar, Wormhole Lebih Cepat"
featured: false
tags:
  [
    "weekly-update",
    "quantum-safe",
    "ml-dsa",
    "zk-proofs",
    "wormhole",
    "scalability",
    "privacy",
  ]
---

Tanda tangan Bitcoin 65 byte.

Satu tanda tangan ML-DSA-87 4.627 byte.

Itu 70x lebih besar.

Kalikan di setiap transaksi, dan itu masalah skalabilitas.

Tapi tenang saja, memperbesar ukuran blok Bitcoin pasti tidak kontroversial.

(itu cuma bercanda)

Tanda tangan quantum-safe begitu besar, kalau diimplementasikan hari ini throughput Bitcoin akan anjlok jauh di bawah 1 TPS.

[@QuantusNetwork](https://x.com/QuantusNetwork) akan mencapai sekitar 685 transaksi per blok tanpa teknik skalabilitas apa pun.

Tapi kami memakai ZK untuk mengagregasi transaksi yang lebih besar ini menjadi bukti yang lebih kecil yang akhirnya masuk onchain.

Ini juga memberikan perlindungan privasi kepada pengguna kami dengan memutus tautan antara pengirim dan penerima [(dibahas di update sebelumnya)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS menjadi 3.500 TPS terenkripsi.

Trilema blockchain baru adalah keamanan kuantum, skalabilitas, dan privasi.

Kami menyelesaikannya dengan ZK.

Minggu ini kami memotong waktu proving kami setengahnya.

Bukti agregasi wormhole sekarang diselesaikan 2x lebih cepat.

Tanda tangannya tetap sangat besar. Chain tidak peduli.

Berikut hal lain yang kami bangun minggu ini:

### GitHub Activity (12 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Bukti agregasi wormhole sekarang 2x lebih cepat, memakai prover terserialisasi alih-alih membangun ulang secara dinamis.
- Menyelesaikan refactor pemisahan circuits builder/prover untuk qp-zk-circuits.
- Mendesain ulang API aggregator dari prover/circuit builder dinamis ke orkestrasi dan manajemen artefak.
- Memperbarui quantus-cli dengan API aggregator baru.
- Memperbaiki blob verifier wormhole yang tidak memiliki tie cryptographic/reproducible-build ke qp-zk-circuits di chain.
- Beberapa security review selesai di semua pallet Substrate, menggabungkan 8 PR perbaikan.
- Memulai audit formal pallet Substrate.
- Peningkatan pallet Multisig dan Treasury.

### Network & Infra:

- Men-deploy dua node Planck testnet baru dengan profil testnet baru.
- Investigasi dan perbaikan state pruning Substrate.
- Menghubungkan faucet testnet ke akun Twitter [@QuantusNetwork](https://x.com/QuantusNetwork).
- Subsquid: menambahkan pemetaan event per-pengguna untuk performa query yang lebih baik.
- Subsquid: memperbarui agregasi reversible transfers untuk akurasi historis.
- Membangun infrastruktur bridging: implementasi Rosetta API dengan integration test dan pembaruan MPC signing.

### Web & Mobile App Updates:

- Mobile wallet build 82: pembersihan kode dan standarisasi UI (sheets, scaffold, icon button, refactor akun).
- Memperbarui layanan chain history mobile wallet dan UI riwayat transaksi untuk mendukung model data Subsquid terbaru.
- Website: mengoptimalkan pengindeksan halaman, menambahkan weekly update sebagai blog post, memperbaiki pencarian blog agar mencakup judul.
- Explorer: mendesain ulang tampilan reversible transaction menjadi tipe event terpisah (scheduled, executed, cancelled).
- Website Quantum Canary: membuat tabel artikel ramah mobile.

### Content & Partnerships:

- Podcast dengan fisikawan dan pengusaha Steve Hsu tentang komputasi kuantum, AI, dan timeline ancaman kuantum.
- Menambahkan dua rekrutan marketing.
- Menyelenggarakan acara onboarding kripto dan privasi/OPSEC security di Network School.

### Industry Updates:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

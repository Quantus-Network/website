---
title: "Quantus Weekly: Tanda Tangan Quantum-Safe, Skalabilitas ZK, dan Bukti Wormhole 2x Lebih Cepat"
description: "Pembaruan mingguan tentang penskalaan tanda tangan ML-DSA, agregasi ZK, percepatan bukti wormhole, tinjauan keamanan, node testnet, dan konten Quantum Canary."
pubDate: "2026-03-16"
heroImage: "/blog/covers/weekly-update-03-16-2026.webp"
heroAlt: "Quantus Weekly: Tanda Tangan Quantum-Safe, Skalabilitas ZK, dan Bukti Wormhole 2x Lebih Cepat"
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

Tanda tangan Bitcoin hanya 65 byte.

Satu tanda tangan ML-DSA-87 adalah 4.627 byte.

Itu 70 kali lebih besar.

Kalikan itu di setiap transaksi dan itu jadi masalah skalabilitas.

Tapi tenang, pasti menaikkan ukuran blok Bitcoin tidak akan terlalu kontroversial.

(itu candaan)

Tanda tangan quantum-safe begitu besar, kalau diimplementasikan hari ini throughput Bitcoin akan terjun jauh di bawah 1 TPS.

[@QuantusNetwork](https://x.com/QuantusNetwork) bisa mencapai sekitar 685 transaksi per blok tanpa teknik skalabilitas apa pun.

Tapi kami memakai ZK untuk mengagregasi transaksi yang lebih besar ini menjadi bukti yang lebih kecil yang berakhir onchain.

Juga menawarkan perlindungan privasi kepada pengguna kami dengan memutus tautan antara pengirim dan penerima [(dibahas di pembaruan terakhir)](https://x.com/YuviLightman/status/2030162754544525495).

57 TPS menjadi 3.500 TPS terenkripsi.

Trilema blockchain baru adalah keamanan kuantum, skalabilitas, dan privasi.

Kami menyelesaikannya dengan ZK.

Minggu ini kami memotong waktu pembuktian menjadi setengah.

Bukti agregasi Wormhole sekarang diselesaikan 2x lebih cepat.

Tanda tangannya tetap sangat besar. Chain tidak peduli.

Ini yang lain yang kami bangun minggu ini:

### Aktivitas GitHub (12 pull request yang di-merge):

![Github Stats](/blog/assets/github-stats-weekly-update-03-16-2026.webp)

### Core Tech & ZK:

- Bukti agregasi Wormhole sekarang 2x lebih cepat, memakai prover serialisasi alih-alih membangun ulang secara dinamis.
- Selesai pemisahan refactor circuit builder/prover untuk qp-zk-circuits.
- API agregator didesain ulang dari prover/circuit builder dinamis ke orkestrasi dan manajemen artefak.
- quantus-cli diperbarui dengan API agregator baru.
- Perbaikan blob verifier wormhole yang tidak punya ikatan kriptografis/build-reproducible ke qp-zk-circuits di chain.
- Beberapa tinjauan keamanan selesai di semua pallet Substrate, 8 PR perbaikan di-merge.
- Audit formal pallet Substrate dimulai.
- Peningkatan pallet Multisig dan Treasury.

### Jaringan & Infrastruktur:

- Dua node testnet Planck baru di-deploy dengan profil testnet baru.
- Investigasi dan perbaikan pemangkasan state Substrate.
- Faucet testnet dihubungkan ke akun Twitter [@QuantusNetwork](https://x.com/QuantusNetwork).
- Subsquid: penambahan pemetaan event per pengguna untuk performa kueri yang lebih baik.
- Subsquid: pembaruan agregasi transfer reversibel untuk akurasi historis.
- Infrastruktur bridging dibangun: implementasi Rosetta API dengan tes integrasi dan pembaruan penandatanganan MPC.

### Pembaruan Web & Aplikasi Mobile:

- Build 82 dompet mobile: pembersihan kode dan standarisasi UI (sheet, scaffold, tombol ikon, refactor akun).
- Layanan riwayat chain dompet mobile dan UI riwayat transaksi diperbarui untuk model data Subsquid terbaru.
- Situs web: pengoptimalan indeks halaman, penambahan pembaruan mingguan sebagai posting blog, perbaikan pencarian blog agar menyertakan judul.
- Explorer: tampilan transaksi reversibel dirombak menjadi tipe event terpisah (terjadwal, dieksekusi, dibatalkan).
- Situs Quantum Canary: tabel artikel dibuat ramah seluler.

### Konten & Kemitraan:

- Podcast dengan fisikawan dan pengusaha Steve Hsu tentang komputasi kuantum, AI, dan timeline ancaman kuantum.
- Dua rekrutan pemasaran ditambah.
- Acara onboarding kripto dan keamanan privasi/OPSEC di Network School.

### Pembaruan Industri:

- Quantum Canary: [Quantum Arms Dealers](https://x.com/QuantumCanary_/status/2030449972353888574)
- Quantum Canary: [Bitcoin's Quantum Discount](https://x.com/QuantumCanary_/status/2029730663822401730)
- Quantum Canary: [The Biggest Pile of Treasure to Ever Exist](https://x.com/QuantumCanary_/status/2030787910992318466)
- Quantum Canary: [TradFi vs. Crypto](https://x.com/QuantumCanary_/status/2031695711327166637)

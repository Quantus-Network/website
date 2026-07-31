---
title: "Quantus Weekly: Estimasi Q-Day dan Risiko On-Spend"
description: "Google dan Oratomic memangkas estimasi qubit untuk memecahkan ECC, risiko on-spend Bitcoin, dan rebrand Quantus pada kebebasan ekonomi permanen."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: Estimasi Q-Day dan Risiko On-Spend"
featured: false
tags:
  [
    "weekly-update",
    "quantum",
    "bitcoin",
    "post-quantum",
    "ecc",
    "zk-proofs",
    "rebrand",
    "infrastructure",
    "mobile",
  ]
---

Jumlah qubit fisik yang dibutuhkan untuk memecahkan kriptografi Bitcoin baru saja turun dari 20 juta menjadi di bawah 500.000.

Google menerbitkan angka baru mereka minggu lalu. Itu sebabnya kuantum memenuhi timeline Anda.

Paper terpisah dari Oratomic menempatkannya di 19.000.

Empat orde magnitudo dalam satu tahun.

Tim Google memperkirakan jendela serangan 9 menit dengan precomputation.

Bitcoin mengonfirmasi blok setiap 10 menit.

Artinya penyerang bisa mencegat transaksi yang sedang berlangsung, memecahkan kunci pengirim, dan menyiarkan pengganti palsu sebelum jaringan mengonfirmasi yang asli. Ini disebut serangan on-spend.

Saat serangan on-spend menjadi kenyataan, bahkan menyembunyikan kunci publik Anda dari penyerang kuantum tidak cukup mencegah sats Anda dicuri.

Google memindahkan deadline migrasi post-quantum mereka sendiri ke 2029. Yang lebih menarik, mereka menerbitkan estimasi sumber daya (jumlah qubit, timing) untuk memecahkan ECC-256, tapi menahan blueprint teknis detail untuk mengeksekusi break kriptografi itu sendiri.

Terakhir kali ilmuwan melakukan self-censorship sebesar ini adalah sebelum Proyek Manhattan.

Sama seperti 1945, tidak akan ada roadmap publik atau periode pengumuman kemajuan inkremental yang membuat jelas kita X bulan lagi. Tidak akan ada notifikasi saat Q-day tiba. Itu akan menjadi rahasia negara.

Dalam kata-kata paper, memecahkan kurva eliptik 32-bit "tidak jauh lebih sulit" daripada memecahkan kurva eliptik 256-bit. Saat seseorang mendemonstrasikan break kunci kecil, jendela migrasi untuk blockchain publik sudah tertutup.

Bitcoin telah merilis tiga update protokol besar dalam dekade terakhir. Migrasi post-quantum darurat butuh minimal 1-3 tahun. Yang teratur butuh lebih dari 5.

Jendela migrasi teratur sedang menutup saat ini, dan mungkin sudah lewat. Sekarang ini eksistensial.

Inilah sebabnya kami mengunci north star kami minggu ini: Permanent Economic Freedom. Tiga kata di fondasi semua yang dibangun Quantus. [quantus.com](https://quantus.com) baru went live dengan rebrand penuh dan identitas visual yang dibangun di sekitar misi itu.

Permanent, karena kriptografinya post-quantum NIST Level 5.

Economic, karena itulah tujuan kripto. Mengganggu bank sentral.

Freedom, karena kami menolak orang-orang yang ingin mengendalikan Anda.

[@QuantusNetwork](https://x.com/QuantusNetwork) adalah uang terenkripsi quantum-secure. Berikut hal lain yang kami rilis minggu ini.

### GitHub Activity (13 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- Strategi blinding baru untuk qp-plonky2 membuat leaf proof ber-ZK 6x lebih cepat tanpa menambah ukuran native trace.
- Merefaktor CLI agar aplikasi mobile dan miner app berbagi kode ZK yang sama.
- Membuat miner app berjalan di testnet baru dengan sistem ZK yang diperbarui.
- Menangani isu yang ditemukan dalam security audit.
- Memperbaiki key generation di chain dan CLI.

### Network & Infra

- Memperluas monitoring dengan dashboard baru dan menyegarkan saluran alert dengan notifikasi Telegram.
- Memperbarui log stack dengan rotasi history.
- Pembaruan dependensi dan rilis baru di seluruh repositori.
- Rebranding telemetry dan Grafana agar sesuai identitas brand baru.
- Perbaikan build/release CLI.

### Web & Mobile App Updates

- Meluncurkan [quantus.com](https://quantus.com) yang didesain ulang, dibangun ulang di Astro dengan dukungan lokalisasi.
- Logo dan splash screen baru untuk aplikasi mobile.
- Meningkatkan performa kirim aplikasi mobile.
- Merilis versi aplikasi mobile 1.2.3, 1.3.0, dan 1.3.1.

### Content & Partnerships

- Menerbitkan pengumuman rebrand di [@QuantusNetwork](https://x.com/QuantusNetwork).
- Menerbitkan pengumuman whitepaper di [@QuantusNetwork](https://x.com/QuantusNetwork).
- Scaling & Privacy with Post-Quantum ZK-Proofs, video sesi whiteboard dengan Ethan dan Chris di Quantus Youtube.
- Mewakili Quantus di pembukaan April Network School, termasuk booth di NS Fair dan workshop Crypto Payments & Privacy.

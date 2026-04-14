---
title: "Quantus Weekly: perkiraan Q-Day, risiko on-spend, dan kebebasan ekonomi permanen"
description: "Perkiraan qubit Google dan Oratomic untuk memecahkan ECC, serangan on-spend versus blok Bitcoin 10 menit, tenggat PQC Google 2029, dan rebrand Quantus di sekitar kebebasan ekonomi permanen—plus ZK, infrastruktur, dan pembaruan aplikasi."
pubDate: "2026-04-07"
heroImage: "/blog/covers/weekly-update-04-07-2026.webp"
heroAlt: "Quantus Weekly: perkiraan Q-Day, risiko on-spend, dan kebebasan ekonomi permanen"
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

Google menerbitkan angka baru mereka minggu lalu. Itulah sebabnya topik kuantum memenuhi timeline Anda.

Makalah terpisah dari Oratomic menempatkannya pada 19.000.

Empat orde magnitude dalam satu tahun.

Tim Google memperkirakan jendela serangan 9 menit dengan prekomputasi.

Bitcoin mengonfirmasi blok setiap 10 menit.

Artinya penyerang dapat memintercept transaksi yang sedang berjalan, memecahkan kunci pengirim, dan menyiarkan pengganti yang curang sebelum jaringan mengonfirmasi transaksi asli. Ini disebut serangan on-spend.

Ketika serangan on-spend menjadi kenyataan, menyembunyikan kunci publik Anda dari penyerang kuantum tidak lagi cukup untuk mencegah sats Anda dicuri.

Google memajukan tenggat migrasi pasca-kuantum mereka sendiri ke 2029. Yang lebih menarik: mereka menerbitkan perkiraan sumber daya (jumlah qubit, waktu) untuk memecahkan ECC-256, tetapi menahan cetak biru teknis rinci untuk memecahkan kriptografi itu sendiri.

Terakhir kali ilmuwan melakukan sensor diri dalam skala ini adalah sebelum Proyek Manhattan.

Seperti pada 1945, tidak akan ada peta jalan publik atau serangkaian pengumuman kemajuan bertahap yang membuat jelas kita masih X bulan lagi. Tidak akan ada pemberitahuan ketika Q-Day tiba. Itu akan menjadi rahasia negara.

Menurut makalah, memecahkan kurva eliptik 32-bit “tidak jauh lebih sulit” daripada memecahkan kurva eliptik 256-bit. Ketika seseorang mendemonstrasikan pemecahan kunci kecil, jendela migrasi untuk blockchain publik sudah tertutup.

Bitcoin telah merilis tiga pembaruan protokol besar dalam dekade terakhir. Migrasi pasca-kuantum darurat membutuhkan setidaknya 1–3 tahun. Yang teratur membutuhkan lebih dari 5 tahun.

Jendela untuk migrasi yang teratur sedang menutup dan mungkin sudah lewat. Sekarang ini eksistensial.

Itulah mengapa kami mengunci bintang utara minggu ini: kebebasan ekonomi permanen. Tiga kata di fondasi segala yang Quantus bangun. [quantus.com](https://quantus.com) yang baru online dengan rebrand penuh dan identitas visual mengelilingi misi itu.

Permanen—karena kriptografinya pasca-kuantum tingkat NIST 5.

Ekonomi—karena itu tujuan kripto. Mengguncang bank sentral.

Kebebasan—karena kami melawan mereka yang ingin mengendalikan Anda.

[@QuantusNetwork](https://x.com/QuantusNetwork) adalah uang terenkripsi yang aman kuantum. Berikut yang lain kami rilis minggu ini:

### Aktivitas GitHub (13 pull request yang digabung):

![Github Stats](/blog/assets/github-stats-weekly-update-04-07-2026.webp)

### Core Tech & ZK

- Strategi blinding baru untuk qp-plonky2 membuat bukti daun ber-ZK 6× lebih cepat tanpa menambah ukuran trace natif.
- CLI direfaktor agar aplikasi seluler dan aplikasi miner memakai kode ZK yang sama.
- Aplikasi miner berjalan di testnet baru dengan sistem ZK yang diperbarui.
- Menangani temuan dari audit keamanan.
- Pembuatan kunci di chain dan CLI diperbaiki.

### Jaringan & Infra

- Pemantauan diperluas dengan dasbor baru dan saluran peringatan yang disegarkan dengan notifikasi Telegram.
- Tumpukan log diperbarui dengan rotasi riwayat.
- Pembaruan dependensi dan rilis baru di seluruh repositori.
- Rebranding telemetri dan Grafana agar sesuai identitas merek baru.
- Perbaikan build/rilis CLI.

### Web & Mobile App

- Meluncurkan [quantus.com](https://quantus.com) yang didesain ulang, dibangun di Astro dengan dukungan lokalisasi.
- Logo dan splash screen baru untuk aplikasi seluler.
- Performa pengiriman aplikasi seluler ditingkatkan.
- Mengirimkan versi aplikasi seluler 1.2.3, 1.3.0, dan 1.3.1.

### Konten & Kemitraan

- Mengumumkan rebrand di [@QuantusNetwork](https://x.com/QuantusNetwork).
- Mengumumkan whitepaper di [@QuantusNetwork](https://x.com/QuantusNetwork).
- Scaling & Privacy with Post-Quantum ZK-Proofs, video whiteboard dengan Ethan dan Chris di Quantus Youtube.
- Mewakili Quantus di pembukaan April Network School, termasuk booth di NS Fair dan lokakarya Crypto Payments & Privacy.

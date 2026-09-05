---
published: true
title: "Quantus Weekly: Akun Keamanan Tinggi & Anti-Penipuan"
description: "Akun keamanan tinggi dengan time lock dan guardian yang bisa dikustom, pengujian integrasi multisig, dan fitur recover funds baru minggu ini."
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: Akun Keamanan Tinggi dan Anti-Penipuan"
featured: false
tags:
  [
    "weekly-update",
    "security",
    "guardian",
    "time-lock",
    "fraud-prevention",
    "multisig",
    "plonky2",
  ]
---

Chainalysis memperkirakan $17 miliar kripto dicuri pada 2025. Pitch-nya: "jadi bank sendiri." Separuh lainnya: "jadi tim keamanan sendiri." Jujur saja, "rekening Swiss di saku Anda, tapi cuma untuk ahli cybersecurity" tetap sangat keren. Tapi industri mengecewakan normies yang tak bersalah yang kehilangan seluruh kekayaan on-chain tanpa tahu apa itu kriptografi asimetris.

Jadi kalau Anda bilang "jadi bank sendiri", sebut juga bahwa bank punya departemen fraud, pemantauan transaksi, dan periode reversal. Mereka menangkap aktivitas mencurigakan, membekukan akun, dan mencegat transaksi berbahaya. Semua itu Anda tinggalkan saat mengambil kustodi kunci sendiri.

Sayangnya, "pakai hardware wallet dan verifikasi persis semua yang Anda tandatangani setiap kali" bukan saran yang membantu. Kalau Bybit saja yolo blind signing di cold storage multisig mereka, mungkin tidak ada yang cukup hati-hati. Mengharapkan pengguna beroperasi di level keamanan tinggi tidak realistis. "Kehilangan semua uang" sebagai outcome memakai aplikasi Anda tidak bisa diterima.

Jadi mana yang lebih buruk, kehilangan semua uang atau asumsi trust? Tergantung asumsi trust-nya, kan? Ada jalan tengah antara "trust no one" dan "trust bank." Trust seseorang yang Anda pilih: teman, anggota keluarga, multisig dengan pengacara atau keponakan yang paham teknologi, dead man's switch.

Kami membangunnya ke [@QuantusNetwork](https://x.com/@QuantusNetwork). Akun keamanan tinggi di Quantus punya time lock yang bisa dikustom untuk setiap transaksi keluar. Selama jendela itu, guardian yang ditunjuk bisa mencegat dan membatalkan transaksi. Guardian tidak bisa menandatangani atas nama Anda, tapi bisa menghentikan transaksi keluar apa pun.

Jadi kalau pencuri punya kunci Anda, mereka belum tentu bisa ambil semua yang Anda miliki. Anda pilih guardian dan tentukan jendelanya. Mungkin delay 24 jam dengan pasangan untuk transaksi di atas $1.000. Mungkin hardware wallet di safe deposit box. Mungkin layanan profesional yang memantau aktivitas fraud secara real time.

Minggu ini kami mulai menguji integrasi multisig untuk akun guardian. Kami juga menambahkan fungsi recover funds ke chain, sehingga transaksi yang dicegat bisa dikembalikan ke pemilik asli.

Berikut hal lain yang kami rilis minggu ini:

### GitHub Activity (5 merged pull requests):

![Github Stats](/blog/assets/github-stats-weekly-update-02-04-2026.webp)

### Core Tech & ZK

- Pallet multisig untuk akun keamanan tinggi dalam fase pengujian dengan perintah CLI.
- Menambahkan fungsi recover funds ke chain untuk akun keamanan tinggi.
- Memperbarui qp-plonky2 sesuai perubahan di repo plonky2 asli.

### Web & Mobile App Updates

- Merefaktor UI layar quests dengan gradien dan integrasi wallet.
- Membersihkan aset yang tidak terpakai di aplikasi.

### Content & Partnerships

- Akun [@QuantusNetwork](https://x.com/@QuantusNetwork) dan [@YuviLightman](https://x.com/@YuviLightman) keduanya melewati 1k+ followers.
- Podcast dengan Henry Love tentang AI dan produktivitas (di Youtube kami).

### Industry Updates

- Quantum Canary: ["Will Zcash Replace Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)

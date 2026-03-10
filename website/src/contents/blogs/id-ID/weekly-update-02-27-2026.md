---
title: "Quantus Mingguan: Dompet Harus Sederhana"
description: "Pembaruan mingguan yang mencakup rilis Dompet v1.2.0, Treasury dengan multisig, pembaruan testnet Heisenberg, dan peningkatan performa."
pubDate: "2026-02-27"
heroImage: "/blog/covers/weekly-update-02-27-2026.webp"
heroAlt: "Quantus Mingguan: Dompet Harus Sederhana"
featured: false
tags:
  [
    "weekly-update",
    "mobile-wallet",
    "treasury",
    "multisig",
    "heisenberg-testnet",
    "zk-proofs",
    "performance",
  ]
---

Setiap dompet kripto utama menambahkan fitur sampah yang tidak saya inginkan.

Saya tidak ingin aplikasi media sosial yang juga menyimpan uang saya.

Pernahkah Anda memperhatikan bagaimana tidak ada dompet bitcoin "resmi" yang sangat berpendirian, mudah digunakan, dan kustodi mandiri?

Hal yang sama berlaku untuk Ethereum dan Solana.

Yayasan membangun chain dan menyerahkan antarmuka kepada pihak ketiga. Pihak ketiga butuh pendapatan. Pendapatan berarti fitur. Fitur berarti kebisingan.

Jadi sekarang dompet Anda memiliki agregator swap, umpan sosial, token yang sedang tren, galeri NFT, dan notifikasi push tentang koin yang belum pernah Anda dengar.

Kami membangun Quantus dan kami membangun dompetnya.

Tim yang sama, produk yang sama. Aplikasi yang kami kirim ke App Store minggu ini tidak memiliki iklan, tidak ada umpan token, tidak ada fitur sosial, tidak ada nama pengguna yang dapat diklaim.

Buka aplikasi, Anda melihat saldo Anda, kirim atau terima.

Kami mendesain ulang antarmuka dari awal agar sangat berpendirian dengan default yang menghilangkan beban kognitif sebanyak mungkin dari pengguna.

Kami juga mengurangi waktu muat untuk riwayat transaksi dompet secara drastis. Tidak perlu lagi menunggu saldo dan transaksi sebelumnya dimuat setelah Anda membuka aplikasi.

Uang pribadi yang aman secara kuantum harus sederhana untuk digunakan dan idealnya membosankan.

Kami akan menyerahkan kegembiraan kepada chain pra-kuantum pada Qday.

Semuanya bersifat sumber terbuka. Siapa pun dapat membangun dompet mereka sendiri. Tetapi akan selalu ada dompet resmi yang berfungsi dengan baik.

### Aktivitas GitHub (4 pull request yang digabungkan):

![Statistik Github](/blog/assets/github-stats-weekly-update-02-27-2026.webp)

### Teknologi Inti & ZK

- Treasury dengan multisig digabungkan dan disertakan dalam rilis testnet Heisenberg yang baru.
- Semua perubahan yang tertunda digabungkan dan dirilis. Genesis Heisenberg baru dibuat, dirilis, dan dideploy.
- Aturan tata kelola lama terkait manajemen Treasury dihapus.
- CLI diperluas dengan perintah Multisig dan Treasury baru. Detail akun keamanan tinggi sekarang terlihat di tampilan dompet.
- Menambahkan pengacakan bukti dan penolakan akun keluar duplikat untuk meningkatkan privasi transaksi wormhole yang diagregasi.
- Memisahkan wormhole menjadi pembangun sirkuit dan pembukti untuk mempercepat agregasi bukti.
- Alur kerja rilis sirkuit ZK diperbarui dan artefak baru diterbitkan.
- Masalah dependensi pallet Revive teratasi.

### Jaringan & Infra

- Sistem notifikasi (Senoti): menambahkan failover ke pengamat blok untuk pemilihan jaringan terbaik.
- Memperbarui Senoti untuk menangani banyak alamat per perangkat.
- Failover RPC ditambahkan untuk server Subsquid.
- Peringatan pemantauan diperbarui dan dialihkan ke saluran yang sesuai.

### Pembaruan Aplikasi Web & Seluler

- Mengirim Dompet v1.2.0 ke iOS App Store.
- Mengurangi waktu muat riwayat transaksi rata-rata dari lebih dari 1 menit menjadi di bawah 5 detik.
- Mengirim build Dompet 75, 76, 77 dengan perbaikan layar splash Android dan perbaikan bug lainnya.
- Menambahkan alur kerja artefak rilis untuk build dompet.
- Memperbarui komponen toaster dan membersihkan versi lama.
- Menambahkan dukungan notifikasi jarak jauh untuk mendaftarkan alamat yang ada, pembatalan pendaftaran perangkat FCM saat reset, dan penghapusan notifikasi alamat dompet baru.
- Menambahkan daftar kata-kata bahagia untuk frasa cek (check-phrases).
- Merombak Subsquid agar lebih fokus pada ekstrinsik dengan dukungan untuk perhitungan skor privasi dan transaksi wormhole.
- Merombak penjelajah (explorer) untuk mencerminkan arsitektur Subsquid yang diperbarui.

### Konten & Kemitraan

- Podcast dengan Nik Heger, "Building A New Sound Money System"

### Pembaruan Industri

- Analisis Quantum Canary tentang apakah [blockchain Tempo milik Stripe akan aman secara kuantum.](https://x.com/QuantumCanary_/status/2024797352616509754)

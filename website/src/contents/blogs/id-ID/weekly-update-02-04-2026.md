---
title: "Quantus Weekly: Akun Keamanan Tinggi dan Pencegahan Penipuan"
description: "Update mingguan yang menampilkan akun keamanan tinggi baru kami dengan kunci waktu dan guardian yang dapat disesuaikan, pengujian integrasi multisig, dan fungsionalitas pemulihan dana baru."
pubDate: "2026-02-04"
heroImage: "/blog/covers/weekly-update-02-04-2026.webp"
heroAlt: "Quantus Weekly: Akun Keamanan Tinggi dan Pencegahan Penipuan"
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

Chainalysis memperkirakan $17 miliar dalam kripto dicuri pada tahun 2025. Penawarannya adalah "jadilah bank Anda sendiri." Sisi lainnya adalah "jadilah tim keamanan Anda sendiri." Agar jelas, "rekening bank Swiss di saku Anda, tetapi hanya untuk pakar keamanan siber" tetaplah sangat keren. Namun industri ini melakukan hal yang merugikan bagi orang awam yang tidak bersalah yang hancur karena memindahkan kekayaan bersih mereka ke onchain tanpa tahu apa itu kriptografi asimetris.

Jadi ketika Anda mengatakan "jadilah bank Anda sendiri", Anda juga harus menyebutkan bahwa bank memiliki departemen penipuan, pemantauan transaksi, dan periode pembalikan. Mereka menangkap aktivitas mencurigakan, membekukan akun, dan mencegat transaksi berbahaya. Anda meninggalkan semua itu ketika Anda memegang kunci Anda sendiri.

Sayangnya, "gunakan dompet perangkat keras dan verifikasi semua yang Anda tanda tangani setiap saat" adalah saran yang tidak membantu. Jika Bybit melakukan blind signing pada multisig cold storage mereka, mungkin tidak ada yang melakukan cukup banyak. Tidak masuk akal untuk mengharapkan pengguna beroperasi pada tingkat keamanan yang cukup tinggi. Tidak dapat dipertahankan jika "kehilangan semua uang Anda" menjadi hasil dari penggunaan aplikasi Anda.

Jadi mana yang lebih buruk, kehilangan semua uang Anda atau asumsi kepercayaan? Tergantung pada asumsi kepercayaannya, bukan? Ada jalan tengah antara "tidak mempercayai siapa pun" dan "mempercayai bank." Percayalah pada seseorang yang Anda pilih: teman, anggota keluarga, multisig dengan pengacara Anda atau keponakan yang paham teknologi, dead man's switch.

Kami telah membangun itu ke dalam [@QuantusNetwork](https://x.com/@QuantusNetwork). Akun keamanan tinggi di Quantus memiliki kunci waktu yang dapat disesuaikan pada setiap transaksi keluar. Selama jendela itu, guardian yang ditunjuk dapat mencegat dan membatalkan transaksi. Seorang guardian tidak dapat menandatangani atas nama Anda, tetapi mereka dapat menghentikan transaksi keluar apa pun.

Jadi jika pencuri memiliki kunci Anda. Mereka tidak selalu memiliki kemampuan untuk mengambil semua yang Anda miliki. Anda memilih guardian dan Anda mengatur jendelanya. Mungkin itu penundaan 24 jam dengan pasangan Anda untuk transaksi apa pun yang lebih besar dari $1.000. Mungkin itu dompet perangkat keras yang Anda simpan di kotak penyimpanan aman. Mungkin itu layanan profesional yang memantau aktivitas untuk potensi penipuan secara real time.

Minggu ini kami mulai menguji integrasi multisig untuk akun guardian. Kami juga menambahkan fungsionalitas pemulihan dana ke rantai, sehingga transaksi yang dicegat dapat ditarik kembali ke pemilik aslinya.

Berikut adalah hal lain yang kami luncurkan minggu ini:

### Aktivitas GitHub (5 pull request yang digabungkan):

![Statistik Github](/blog/assets/github-stats-weekly-update-02-04-2026.png)

### Core Tech & ZK

- Pallet multisig untuk akun keamanan tinggi dalam fase pengujian dengan perintah CLI.
- Menambahkan fungsionalitas pemulihan dana ke rantai untuk akun keamanan tinggi.
- Memperbarui qp-plonky2 dengan perubahan yang dibuat pada repo plonky2 asli.

### Pembaruan Aplikasi Web & Seluler

- Merombak UI layar quest dengan gradien dan integrasi dompet.
- Membersihkan aset yang tidak digunakan dalam aplikasi.

### Konten & Kemitraan

- Akun [@QuantusNetwork](https://x.com/@QuantusNetwork) dan [@YuviLightman](https://x.com/@YuviLightman) keduanya melampaui 1k+ pengikut.
- Podcast dengan Henry Love tentang AI dan produktivitas (di Youtube kami).

### Pembaruan Industri

- Quantum Canary: ["Akankah Zcash Menggantikan Bitcoin?"](https://x.com/QuantumCanary_/status/2016327421797294286)

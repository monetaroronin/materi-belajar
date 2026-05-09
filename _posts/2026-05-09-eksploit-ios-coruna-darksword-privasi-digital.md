---
title: "Eksploit iOS Coruna & DarkSword, Sideloading Android, dan Ancaman Privasi Digital Terkini"
date: 2026-05-09 20:50:00 +0700
categories: [Teknologi]
tags: [iOS, eksploit, keamanan, privasi, Android, sideloading, enkripsi, Meta, Instagram, verifikasi-usia]
---

## Dua Eksploit Besar Serang iOS dalam Waktu Berdekatan

### Coruna

**Coruna** adalah lima rangkaian eksploitasi iOS lengkap yang menargetkan **iOS 13 hingga 17.2.1**. Kelima rantai eksploitasi mencakup:

- Eksekusi kode jarak jauh WebKit
- Bypass PAC (Pointer Authentication Code)
- Pelarian dari sandbox
- Peningkatan hak akses kernel
- Bypass lapisan perlindungan halaman

Eksploitasi ini memiliki dokumentasi lengkap, termasuk komentar dalam bahasa Inggris asli. Yang paling canggih menggunakan teknik eksploitasi non-publik dan cara menghindari pengamanan.

> **Catatan penting:** Jika **Lockdown Mode**, fitur perlindungan anti-spyware, atau **Private Browsing** aktif pada perangkat, kerangka kerja eksploitasi ini akan berhenti bekerja.

**Langkah mitigasi:**
- Perbarui perangkat ke versi iOS terbaru
- Aktifkan Lockdown Mode jika model ancaman tinggi
- Domain terkait eksploitasi ini telah ditambahkan ke **Google Safe Browsing**
- Gunakan aplikasi **iVerify** atau **iMazing** untuk memindai spyware

---

### DarkSword

**DarkSword** menargetkan perangkat yang menjalankan **iOS 18** (versi sebelum pembaruan terbaru). Ditemukan bersama oleh peneliti dari Google, iVerify, dan Lookout.

- Cara kerja: pengguna mengakses situs web berbahaya yang kemudian meretas perangkat secara otomatis (*zero-click via browser*)
- Banyak digunakan dalam konteks konflik Rusia-Ukraina, namun berpotensi berdampak luas
- Kode DarkSword bersifat terbuka sehingga dapat ditiru untuk tujuan lain
- Hingga sebulan sebelum pelaporan, hampir **seperempat iPhone** masih menjalankan iOS 18 lama

> **Kutipan Apple:** *"Memperbarui perangkat lunak tetap menjadi satu-satunya hal terpenting yang dapat dilakukan pengguna untuk menjaga keamanan tinggi perangkat Apple mereka."*

**Langkah mitigasi:**
- Perbarui ke versi iOS terbaru
- Aktifkan Lockdown Mode
- Gunakan **iVerify** untuk memindai DarkSword (gratis, sekitar sekali per bulan)

---

### Background Security Response Apple

Apple merilis fitur **Background Security Responses** — pembaruan keamanan otomatis di latar belakang. Ditandai dengan huruf **(a)** kecil di akhir nomor versi iOS (contoh: iOS 26.3.1(a)).

- Dapat diaktifkan di pengaturan keamanan perangkat Apple
- Apple belum menjelaskan secara detail masalah apa yang diperbaiki melalui pembaruan ini

---

## Google dan Kontroversi Sideloading Android

Google merinci alur (*advanced flow*) yang harus dilalui pengguna untuk menginstal aplikasi di luar Play Store (sideloading):

| Langkah | Keterangan |
|---|---|
| 1 | Aktifkan Developer Options: ketuk nomor build sebanyak **7 kali** |
| 2 | Di Developer Options, aktifkan **Allow unverified packages** |
| 3 | Konfirmasi bahwa tidak dipaksa, masukkan PIN/kata sandi perangkat |
| 4 | **Restart perangkat** |
| 5 | **Tunggu 24 jam** |
| 6 | Kembali ke menu, gulir melewati peringatan tambahan |
| 7 | Pilih: izinkan sementara (misal 7 hari) atau tanpa batas |
| 8 | Centang kotak pernyataan memahami risiko |
| 9 | Instal aplikasi via package manager |

**Kekhawatiran yang diangkat:**
- Verifikasi pengembang menciptakan basis data identitas yang dapat menjadi risiko hukum bagi pengembang independen
- Pengembang di negara-negara yang dikenai sanksi mungkin tidak dapat melakukan verifikasi
- Mengaktifkan Developer Mode justru memperkenalkan kerentanan keamanan tambahan
- Proses berbeda di setiap perangkat Android (Fairphone, Samsung, dll.), menyulitkan toko pihak ketiga seperti F-Droid

**Konteks hukum:**
- Terdapat sengketa antara **Epic dan Google** terkait legalitas toko aplikasi alternatif di Android
- Teori yang beredar: verifikasi pengembang bisa menjadi rencana cadangan Google jika pengadilan AS tidak menyetujui proposal toko pihak ketiga di Play Store

**Sumber daya untuk merespons:**
- Petisi di change.org dan kampanye **Keep Android Open**

---

## Instagram Hentikan Enkripsi Ujung-ke-Ujung di DM

- Instagram secara diam-diam menghentikan dukungan **end-to-end encryption (E2EE)** di Direct Messages
- Berlaku efektif mulai **8 Mei**: pengguna yang terdampak akan menerima petunjuk cara mengunduh media atau pesan yang ingin disimpan
- Pengguna aplikasi versi lama perlu memperbarui aplikasi terlebih dahulu

**Konteks:**
- E2EE di Instagram sebelumnya bersifat opt-in, dan sangat sedikit yang menggunakannya
- Meta sebelumnya menjadikan E2EE sebagai default di **Facebook Messenger**; **WhatsApp** diklaim sepenuhnya E2EE
- Alih-alih menjadikan E2EE sebagai default di Instagram, Meta memilih menonaktifkannya sepenuhnya

---

## Verifikasi Usia di Tingkat Sistem Operasi, Termasuk Linux

Terdapat dorongan dari **California**, **Colorado**, dan beberapa negara bagian AS lainnya untuk mewajibkan verifikasi usia di tingkat sistem operasi.

**Implikasi:**
- Berlaku untuk **semua sistem operasi** tanpa pengecualian, termasuk Linux dan distribusi open-source
- Berpotensi mencakup perangkat IoT dan perangkat Linux apa pun
- Pengembang aplikasi dapat mengirimkan sinyal ke OS untuk memverifikasi usia pengguna

**Kekhawatiran:**
- Infrastruktur yang sama dapat digunakan untuk membatasi akses aplikasi tertentu berdasarkan wilayah atau kelompok
- **System76** (produsen perangkat Linux) aktif bernegosiasi dengan pembuat undang-undang Colorado untuk mengecualikan perangkat lunak open-source
- Investigasi mengungkap bahwa dorongan ini sebagian didanai melalui **Digital Childhood Alliance (DCA)** — yang didukung Meta — sebagai bagian dari strategi super PAC terfragmentasi senilai **$70 juta**
- RUU ini berdampak pada App Store Apple dan Google Play Store, tetapi **dilaporkan tidak menyasar platform media sosial** — bisnis inti Meta

**Pendekatan alternatif (Uni Eropa):**
- **Zero-knowledge proofs**: memverifikasi usia tanpa mengungkapkan data pribadi
- Berbasis perangkat lunak open-source, dapat dihosting sendiri
- Hanya berlaku untuk platform besar; mengecualikan FOSS dan entitas kecil

---

## Parlemen UE Tolak Chat Control, Lalu Terancam Dibatalkan

- Parlemen Uni Eropa memilih untuk **mengakhiri pemindaian massal tanpa target** terhadap obrolan pribadi
- Tidak lama setelah pemungutan suara, **Partai EPP (konservatif)** berupaya membatalkan hasil pemungutan suara tersebut dan memaksa pemungutan suara ulang

---

## ProtonMail dan Data Lokasi FBI

- ProtonMail membantu FBI mengungkap identitas seorang demonstran anonim
- **Freedom of the Press Foundation** menegaskan: ProtonMail menawarkan enkripsi ujung-ke-ujung, bukan anonimitas penuh atau kekebalan hukum
- **FBI** dikonfirmasi membeli data lokasi warga negara AS dari perusahaan swasta (via SDK pihak ketiga di aplikasi) untuk menghindari proses surat perintah pengadilan

---

## Teknologi Pengawasan Wajib di Mobil Baru AS (2027)

- Kendaraan baru di AS akan diwajibkan memiliki **sensor dan kamera biometrik** untuk menilai kewaspadaan pengemudi mulai **2027**
- Kekhawatiran: data sensitif dari percakapan dan aktivitas di dalam kendaraan berpotensi disalahgunakan atau bocor

---

## Insiden Keamanan Meta akibat AI

- Seorang insinyur Meta menggunakan agen AI internal (disebut mirip OpenClaw) untuk menganalisis pertanyaan teknis di forum internal
- AI memberikan saran yang buruk, diikuti oleh karyawan, dan mengakibatkan **insiden keamanan Severity 1** (tingkat keparahan tertinggi kedua di Meta)

---

## Pembaruan Keamanan Lainnya

- **14.000 router** terinfeksi malware yang sulit dihilangkan; konsentrasi tinggi pada router **ASUS**
- **OpenClaw**: kerentanan bernama **Clawjacked** ditemukan
- **WordPress**: bug pada plugin **WP Everest** dieksploitasi untuk membuat akun admin
- **Cryptomator**: rilis perbaikan keamanan penting — segera perbarui
- **LexisNexis**: mengalami kebocoran data
- **Navia**: pelanggaran data berdampak pada **2,7 juta orang**
- **Marquise**: pelanggaran data, lebih dari **600.000 orang**
- **Telus**: dikonfirmasi pelanggaran setelah peretas mengklaim pencurian data **1 petabyte**
- **Trizetto**: data kesehatan dan pribadi **3,4 juta orang** dicuri
- **Starbucks**: kebocoran data memengaruhi ratusan karyawan
- **Ericsson**: pelanggaran data melalui peretasan penyedia layanan
- **Aura** (perusahaan perlindungan identitas): pelanggaran data mengungkap **900.000 kontak pemasaran**
- **Nation States** (game simulasi): data pengguna disalin dari server produksi
- **Star Citizen**: pelanggaran data memengaruhi data pengguna

---

## Pembaruan Positif

- **Bitwarden**: tambah dukungan login passkey di Windows 11
- **Signal**: tambah fitur label di grup
- **Motorola**: konfirmasi dukungan **GrapheneOS** untuk ponsel mendatang (detail belum dirilis)
- **Tails 7.5**: dirilis dengan pembaruan komponen dasar
- **Mullvad**: audit keamanan implementasi WireGuard terbaru selesai dilakukan
- **Tor**: rilis **Arti 2.1** (implementasi Tor berbasis Rust)
- **Firefox 149**: akan menawarkan VPN bawaan gratis, split view, tab notes, dan jendela AI opsional
- **GNOME 50**: rilis dengan kontrol orang tua, peningkatan aksesibilitas dan performa
- **Immich 2.6**: peningkatan tampilan peta, penampil aset, slug tautan bersama
- **PeerTube 8.1**: tambah dukungan podcast yang lebih baik
- **e/OS/ 3.5**: berbasis LineageOS 22.2, dukungan WebAssembly, peningkatan untuk Fairphone 6
- **Notesnook**: rilis versi 3.3.9 dengan berbagai peningkatan
- **Fedora 44 beta**: kernel Linux 6.19, GNOME 50, KDE Plasma 6.6
- **Fedora Asahi Remix 43**: tambah dukungan lebih luas untuk Apple Silicon Mac
- **OpenWrt 25.12**: APK Package Manager, proses upgrade diperbarui, riwayat shell dipertahankan
- **Samsung TV**: dipaksa berhenti mengumpulkan data warga Texas tanpa persetujuan eksplisit
- **Florida**: beberapa kemenangan hak digital; dorongan verifikasi usia sebagian besar ditunda

---

## Sumber

**Techlore**
*Two iOS Exploits Just Hit 100M+ iPhones — How To Check Yours* (Techlore Surveillance Report)

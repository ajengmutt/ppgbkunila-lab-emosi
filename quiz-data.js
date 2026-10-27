const QUIZ_DATA = [
  {
    "number": 1,
    "code": "AK-01",
    "title": "Usaha yang Diremehkan",
    "situation": "Kamu sudah belajar selama beberapa minggu, tetapi mendapat nilai 50. Temanmu mendapat nilai 95 dan meremehkan usahamu di depan teman-teman lain. Kamu merasa kecewa dan malu.",
    "A": [
      "Langsung membalas ucapan teman karena merasa tersinggung.",
      "Menarik napas perlahan dan memberi diri sendiri waktu sebelum bertindak.",
      "Berpura-pura tidak peduli meskipun perasaan masih mengganggu.",
      "Menghindari teman tersebut agar tidak perlu menghadapi perasaan itu.",
      "Mengalihkan perhatian ke kegiatan lain tanpa memikirkan kejadian tersebut."
    ],
    "B": [
      "“Kamu sendiri belum tentu lebih pintar. Jangan sok hebat!”",
      "“Terserah kamu mau bilang apa. Aku tidak peduli.”",
      "“Aku kecewa ketika usahaku diremehkan di depan teman-teman.”",
      "“Iya, aku memang tidak pintar. Sepertinya aku tidak perlu mencoba lagi.”",
      "Diam saat itu, lalu membicarakan keburukan teman tersebut kepada orang lain."
    ],
    "scoreA": [
      1,
      5,
      3,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      2
    ]
  },
  {
    "number": 2,
    "code": "AK-03",
    "title": "Dituduh Tidak Bertanggung Jawab",
    "situation": "Guru menegurmu di depan kelas karena tugasmu dianggap belum dikumpulkan, padahal kamu merasa sudah mengumpulkannya. Kamu merasa diperlakukan tidak adil.",
    "A": [
      "Langsung membantah guru dengan nada tinggi.",
      "Menarik napas dan menenangkan diri sebelum menjelaskan.",
      "Menyalahkan teman yang mungkin mengetahui tugas tersebut.",
      "Memendam kekesalan dan terus memikirkan teguran itu.",
      "Mengalihkan perhatian dengan bermain atau mengobrol agar tidak kesal."
    ],
    "B": [
      "“Ibu selalu menyalahkan saya tanpa memeriksa dulu!”",
      "“Sudahlah, saya tidak mau menjelaskan apa-apa.”",
      "“Saya merasa sudah mengumpulkan tugasnya, Bu. Bolehkah saya memeriksa kembali bersama Ibu?”",
      "“Baik, Bu,” meskipun setelah itu kamu melampiaskan kemarahan kepada teman.",
      "“Bukan salah saya. Ibu saja yang tidak teliti!”"
    ],
    "scoreA": [
      1,
      5,
      1,
      2,
      3
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      1
    ]
  },
  {
    "number": 3,
    "code": "PS-01",
    "title": "Sengaja Tidak Diajak",
    "situation": "Kamu mengetahui bahwa teman-teman dekatmu pergi bersama tanpa mengajakmu. Ketika ditanya, salah satu teman mengatakan bahwa kamu kurang seru untuk diajak pergi.",
    "A": [
      "Langsung mengirim pesan marah ke grup pertemanan.",
      "Mengambil jeda untuk menenangkan diri sebelum memutuskan tindakan.",
      "Berpura-pura bahagia dan menyangkal bahwa kamu merasa tersisih.",
      "Membalas dengan sengaja pergi bersama teman lain agar mereka cemburu.",
      "Terus melihat unggahan mereka sambil memikirkan alasan kamu tidak diajak."
    ],
    "B": [
      "“Kalau kalian tidak mau berteman denganku, aku juga tidak butuh kalian!”",
      "“Kalian memang selalu seperti ini. Tunggu saja nanti!”",
      "“Aku kecewa tidak diajak. Aku ingin tahu apakah ada sesuatu yang membuat kalian merasa begitu.”",
      "“Tidak apa-apa,” lalu sengaja menyebarkan cerita buruk tentang mereka.",
      "“Aku tahu aku memang tidak menyenangkan. Kalian tidak perlu mengajakku lagi.”"
    ],
    "scoreA": [
      1,
      5,
      3,
      1,
      2
    ],
    "scoreB": [
      1,
      1,
      5,
      1,
      1
    ]
  },
  {
    "number": 4,
    "code": "PS-04",
    "title": "Ucapan yang Disalahartikan",
    "situation": "Kamu menegur teman yang terlambat datang saat kelompok sudah lama menunggu. Temanmu justru menuduhmu menyindir dan mempermalukannya di depan orang lain.",
    "A": [
      "Membalas tuduhannya agar dia merasakan kekesalan yang sama.",
      "Mengambil jeda dan memeriksa kembali maksud ucapan sebelum merespons.",
      "Menganggap teman selalu salah memahami dirimu.",
      "Meninggalkan kelompok tanpa memberi penjelasan.",
      "Memendam kekesalan dan membiarkan kesalahpahaman terus berlangsung."
    ],
    "B": [
      "“Kamu saja yang terlalu sensitif. Aku tidak salah!”",
      "“Kalau kamu tidak bisa menerima teguran, itu urusanmu.”",
      "“Maksudku bukan menyindir. Aku kesal karena kita sudah menunggu, tetapi aku ingin kita membicarakannya baik-baik.”",
      "“Terserah kamu saja,” lalu tidak mau bekerja sama lagi.",
      "“Baik, aku yang salah,” meskipun kamu tidak berusaha menjelaskan maksudmu."
    ],
    "scoreA": [
      1,
      5,
      2,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      3
    ]
  },
  {
    "number": 5,
    "code": "HD-01",
    "title": "Penampilan Dijadikan Bahan Tertawaan",
    "situation": "Kamu masuk kelas dengan rambut berantakan karena terburu-buru. Temanmu mengejek penampilanmu di depan kelas dan teman-teman lain ikut tertawa.",
    "A": [
      "Membalas dengan mengejek penampilan teman tersebut.",
      "Menarik napas dan mengingatkan diri bahwa ejekan tidak menentukan nilai diriku.",
      "Berusaha tertawa bersama meskipun merasa sangat tidak nyaman.",
      "Langsung meninggalkan kelas agar tidak perlu menghadapi siapa pun.",
      "Terus memikirkan penampilan sendiri dan merasa malu sepanjang hari."
    ],
    "B": [
      "“Lihat saja penampilanmu sendiri sebelum mengejek orang lain!”",
      "“Aku tidak peduli,” meskipun kamu berharap mereka berhenti.",
      "“Aku tidak nyaman dijadikan bahan tertawaan. Tolong berhenti mengejek penampilanku.”",
      "“Iya, aku memang berantakan dan pantas ditertawakan.”",
      "Diam, lalu membalas dengan menyebarkan ejekan tentang teman tersebut."
    ],
    "scoreA": [
      1,
      5,
      3,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      1
    ]
  },
  {
    "number": 6,
    "code": "HD-04",
    "title": "Julukan yang Tidak Diinginkan",
    "situation": "Temanmu terus memanggilmu dengan julukan “si lemot” meskipun kamu sudah mengatakan bahwa kamu tidak menyukainya. Teman-teman lain mulai ikut menggunakan julukan tersebut.",
    "A": [
      "Membalas dengan memberikan julukan yang lebih menyakitkan kepada teman tersebut.",
      "Mengambil jeda untuk menenangkan diri sebelum memutuskan cara menanggapinya.",
      "Berpura-pura tertawa agar teman-teman tidak mengetahui bahwa kamu tersinggung.",
      "Terus memikirkan julukan itu dan menyalahkan diri sendiri karena dianggap lambat.",
      "Menghindari semua teman tanpa mencoba mencari cara untuk menghadapi situasi tersebut."
    ],
    "B": [
      "“Kamu juga punya banyak kekurangan, jadi jangan mengejek orang lain!”",
      "“Terserah kalian. Aku sudah tidak peduli dengan kalian semua.”",
      "“Aku tidak suka dipanggil dengan julukan itu. Tolong berhenti karena aku merasa tidak nyaman.”",
      "“Iya, aku memang lambat. Panggil saja aku begitu kalau kalian mau.”",
      "Diam di depan mereka, lalu membalas dengan membicarakan keburukan mereka kepada teman lain."
    ],
    "scoreA": [
      1,
      5,
      3,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      2,
      1
    ]
  },
  {
    "number": 7,
    "code": "KT-02",
    "title": "Tugas Rusak karena Kecerobohan Teman",
    "situation": "Temanmu tidak sengaja menumpahkan minuman ke buku catatanmu hingga beberapa halaman rusak. Padahal, kamu membutuhkan catatan tersebut untuk belajar menghadapi ujian.",
    "A": [
      "Langsung meluapkan kemarahan kepada teman tanpa memberi kesempatan untuk menjelaskan.",
      "Menarik napas perlahan dan menenangkan diri sebelum membicarakan kerusakan buku.",
      "Memendam kekesalan sambil terus menyalahkan teman dalam pikiran.",
      "Menganggap kejadian itu tidak penting meskipun kamu khawatir tidak bisa belajar.",
      "Pergi meninggalkan teman dan membiarkan masalahnya tanpa memikirkan langkah berikutnya."
    ],
    "B": [
      "“Kamu memang ceroboh! Gara-gara kamu, aku jadi tidak bisa belajar!”",
      "“Tidak apa-apa,” meskipun kamu sebenarnya kesal dan berharap temanmu menyadari kerusakannya.",
      "“Aku kecewa karena catatanku rusak dan masih kubutuhkan untuk ujian. Bisa kita cari cara memperbaikinya?”",
      "“Sudahlah, aku tidak akan pernah meminjamkan barang kepada siapa pun lagi.”",
      "“Kamu harus mengganti semuanya sekarang juga!” tanpa memeriksa apakah buku masih bisa diperbaiki."
    ],
    "scoreA": [
      1,
      5,
      2,
      3,
      2
    ],
    "scoreB": [
      1,
      3,
      5,
      2,
      2
    ]
  },
  {
    "number": 8,
    "code": "KT-03",
    "title": "Disalahkan atas Kelalaian Teman",
    "situation": "Dalam tugas kelompok, seorang teman belum menyelesaikan bagiannya. Ketika kamu mengingatkannya, ia justru menyalahkanmu di depan anggota kelompok lain dan mengatakan bahwa kamu terlalu banyak mengatur.",
    "A": [
      "Langsung berdebat dengan suara keras untuk membuktikan bahwa kamu tidak bersalah.",
      "Mengambil jeda dan menenangkan diri sebelum membicarakan pembagian tanggung jawab.",
      "Menyalahkan diri sendiri agar pertengkaran segera berhenti.",
      "Menahan kemarahan, tetapi kemudian sengaja tidak membantu kelompok sama sekali.",
      "Mengalihkan perhatian dan membiarkan tugas kelompok terbengkalai karena merasa kesal."
    ],
    "B": [
      "“Kamu sendiri yang tidak mengerjakan tugas, malah berani menyalahkan aku!”",
      "“Baiklah, semua salahku. Kalian tidak perlu membahasnya lagi.”",
      "“Aku ingin kita membahas tugasnya berdasarkan tanggung jawab masing-masing, bukan saling menyalahkan.”",
      "“Kalau kalian tidak menghargai aku, kerjakan saja semuanya sendiri!”",
      "“Aku akan menyelesaikan semuanya sendiri supaya tidak perlu berdebat dengan kalian.”"
    ],
    "scoreA": [
      1,
      5,
      2,
      2,
      1
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      2
    ]
  },
  {
    "number": 9,
    "code": "TS-01",
    "title": "Ditekan untuk Memberikan Jawaban Tugas",
    "situation": "Temanmu meminta jawaban tugas untuk disalin. Ketika kamu menolak memberikan seluruh jawaban, ia mengancam akan mengatakan kepada teman-teman lain bahwa kamu pelit dan tidak mau membantu.",
    "A": [
      "Langsung marah dan membalas ancamannya dengan ancaman lain.",
      "Menenangkan diri dan mempertimbangkan cara menolak tanpa terbawa tekanan.",
      "Merasa bersalah lalu langsung memberikan semua jawaban agar tidak dijauhi.",
      "Terus membayangkan hal buruk yang mungkin dikatakan teman-teman tentang dirimu.",
      "Menghindari teman tersebut tanpa menentukan bagaimana menghadapi permintaannya."
    ],
    "B": [
      "“Kalau kamu menjelek-jelekkan aku, aku juga akan menyebarkan rahasiamu!”",
      "“Ya sudah, salin saja semuanya. Aku tidak mau kehilangan teman.”",
      "“Aku tidak bisa memberikan jawaban untuk disalin, tetapi aku bisa membantu menjelaskan cara mengerjakannya.”",
      "“Terserah kamu mau bilang apa. Aku tidak akan berbicara denganmu lagi.”",
      "“Kamu keterlaluan!” lalu pergi tanpa menjelaskan batasan yang ingin kamu pertahankan."
    ],
    "scoreA": [
      1,
      5,
      2,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      2,
      2
    ]
  },
  {
    "number": 10,
    "code": "TS-03",
    "title": "Sulit Menolak Permintaan Bantuan",
    "situation": "Kamu sedang mengerjakan tugas yang harus dikumpulkan besok. Temanmu meminta bantuan, tetapi ketika kamu mengatakan sedang sibuk, ia mengingatkan bahwa dirinya sering membantumu dan membuatmu merasa bersalah.",
    "A": [
      "Langsung menyetujui permintaannya agar tidak merasa bersalah, meskipun tugas sendiri terbengkalai.",
      "Mengambil jeda untuk menenangkan diri dan mempertimbangkan kemampuan serta waktu yang tersedia.",
      "Memendam kekesalan sambil mengerjakan kedua tugas tanpa membicarakan keterbatasanmu.",
      "Menganggap temanmu egois dan langsung memutuskan hubungan pertemanan.",
      "Mengalihkan perhatian dengan bermain ponsel agar tidak perlu memikirkan permintaannya."
    ],
    "B": [
      "“Kamu selalu merepotkan aku. Jangan pernah minta bantuan lagi!”",
      "“Baiklah, aku bantu semuanya. Tugasku sendiri bisa dikerjakan nanti.”",
      "“Aku menghargai bantuanmu selama ini, tetapi sekarang aku perlu menyelesaikan tugasku sendiri. Aku bisa membantu jika sudah ada waktu.”",
      "“Aku tidak peduli kamu kecewa atau tidak. Itu bukan urusanku.”",
      "“Nanti aku bantu,” meskipun sebenarnya kamu sudah tahu tidak punya waktu dan tidak berniat menjelaskannya."
    ],
    "scoreA": [
      2,
      5,
      2,
      1,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      2
    ]
  },
  {
    "number": 11,
    "code": "AK-02",
    "title": "Dipermalukan karena Hasil Kerja",
    "situation": "Kamu sudah berusaha membuat slide presentasi kelompok, tetapi temanmu mengatakan hasilnya jelek di depan anggota kelompok lain dan meminta bagianmu dibuat ulang. Kamu merasa malu dan tidak dihargai.",
    "A": [
      "Langsung membalas kritik dengan kata-kata kasar karena merasa direndahkan.",
      "Mengambil jeda dan menenangkan diri sebelum memutuskan cara menanggapi kritik.",
      "Berpura-pura menerima semuanya, tetapi terus menyimpan kekesalan.",
      "Menganggap diri sendiri tidak mampu dan tidak mau mengerjakan tugas kelompok lagi.",
      "Mengalihkan perhatian ke hal lain agar tidak perlu memikirkan kritik tersebut."
    ],
    "B": [
      "“Kalau kamu merasa paling hebat, buat saja semuanya sendiri!”",
      "“Terserah, aku tidak akan mengerjakan bagian apa pun lagi.”",
      "“Aku bersedia memperbaiki slide, tetapi aku ingin masukan disampaikan dengan cara yang saling menghargai.”",
      "“Iya, hasil kerjaku memang buruk. Aku memang tidak bisa apa-apa.”",
      "Diam saat diskusi, lalu mengeluhkan teman tersebut kepada anggota kelompok lain."
    ],
    "scoreA": [
      1,
      5,
      3,
      1,
      2
    ],
    "scoreB": [
      1,
      1,
      5,
      1,
      2
    ]
  },
  {
    "number": 12,
    "code": "AK-04",
    "title": "Dibandingkan dengan Teman",
    "situation": "Saat mengerjakan latihan soal, kamu beberapa kali melakukan kesalahan. Temanmu membandingkan kemampuanmu dengan siswa lain dan mempertanyakan apakah kamu benar-benar belajar. Kamu merasa frustrasi dan minder.",
    "A": [
      "Membalas dengan membandingkan kelemahan teman tersebut dengan orang lain.",
      "Menenangkan diri dan melihat kesalahan sebagai bagian dari proses belajar.",
      "Terus mengulang pikiran bahwa kamu lebih bodoh daripada teman-temanmu.",
      "Berhenti mengerjakan latihan karena merasa usahamu tidak akan berhasil.",
      "Mengalihkan perhatian dengan kegiatan lain setiap kali menemukan soal yang sulit."
    ],
    "B": [
      "“Jangan sombong. Belum tentu kamu selalu bisa mengerjakan semua soal!”",
      "“Iya, aku memang tidak sepintar kamu. Tidak usah membahasnya lagi.”",
      "“Aku memang masih melakukan kesalahan, tetapi aku sedang belajar. Aku lebih terbantu kalau diberi masukan daripada dibandingkan.”",
      "“Kalau begitu, kerjakan saja semua soal untukku!”",
      "Diam, lalu sengaja tidak mau belajar bersama teman tersebut lagi."
    ],
    "scoreA": [
      1,
      5,
      1,
      2,
      2
    ],
    "scoreB": [
      1,
      1,
      5,
      1,
      2
    ]
  },
  {
    "number": 13,
    "code": "PS-02",
    "title": "Janji Pertemanan yang Dibatalkan",
    "situation": "Kamu sudah mengatur waktu untuk belajar bersama teman di perpustakaan. Namun, temanmu membatalkan janji secara mendadak dan ternyata pergi bersama teman lain. Ketika kamu kecewa, ia mengatakan bahwa kamu terlalu mempermasalahkan hal kecil.",
    "A": [
      "Langsung mengirim pesan marah dan menuduh teman tidak pernah menghargaimu.",
      "Mengambil waktu untuk menenangkan diri sebelum membicarakan pembatalan janji tersebut.",
      "Menyangkal rasa kecewa dan berpura-pura bahwa kejadian itu tidak berpengaruh.",
      "Terus memeriksa unggahan teman dan membandingkan dirimu dengan orang-orang yang pergi bersamanya.",
      "Membatalkan semua rencana bersama teman tersebut tanpa mempertimbangkan untuk membicarakannya."
    ],
    "B": [
      "“Kamu memang tidak pernah bisa dipercaya. Jangan menghubungiku lagi!”",
      "“Tidak apa-apa,” lalu sengaja membatalkan janji dengannya di kemudian hari untuk membalas perbuatannya.",
      "“Aku kecewa karena sudah mengatur waktu untuk belajar bersama. Lain kali, tolong beri tahu lebih awal kalau rencananya berubah.”",
      "“Aku tahu aku bukan teman yang penting buat kamu.”",
      "“Terserah kamu saja,” lalu mengabaikan semua pesannya tanpa penjelasan."
    ],
    "scoreA": [
      1,
      5,
      3,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      2
    ]
  },
  {
    "number": 14,
    "code": "KT-01",
    "title": "Barang Pinjaman Rusak",
    "situation": "Kamu meminjamkan buku pelajaran kepada teman, tetapi beberapa halamannya tidak sengaja robek. Temanmu sudah meminta maaf, tetapi kamu masih membutuhkan buku tersebut untuk belajar menghadapi ujian.",
    "A": [
      "Memarahi teman berulang kali meskipun ia sudah meminta maaf.",
      "Menenangkan diri dan mempertimbangkan cara memperbaiki buku serta mengatasi kebutuhan belajarmu.",
      "Menahan kekesalan, tetapi terus mengingat kesalahan teman tanpa membicarakan solusinya.",
      "Menganggap masalah selesai begitu saja meskipun buku masih rusak dan kamu membutuhkannya.",
      "Menghindari teman tersebut agar tidak perlu membicarakan buku yang rusak."
    ],
    "B": [
      "“Kamu selalu merusak barang orang. Aku tidak akan memaafkanmu!”",
      "“Tidak apa-apa,” meskipun kamu berharap temanmu membantu memperbaiki buku tersebut.",
      "“Aku tahu kamu tidak sengaja, tetapi aku masih membutuhkan buku ini. Bisa kita cari cara memperbaiki halaman yang robek?”",
      "“Kamu harus mengganti buku baru sekarang juga, apa pun keadaannya!”",
      "“Sudahlah, aku tidak akan meminjamkan barang kepada siapa pun lagi.”"
    ],
    "scoreA": [
      1,
      5,
      2,
      3,
      2
    ],
    "scoreB": [
      1,
      3,
      5,
      2,
      2
    ]
  },
  {
    "number": 15,
    "code": "TS-02",
    "title": "Takut Dijauhi karena Menolak Ajakan",
    "situation": "Kamu sedang belajar bersama teman-teman di perpustakaan. Mereka mengajakmu pergi bermain sebelum latihan soal selesai. Ketika kamu menolak, mereka mengatakan bahwa kamu tidak perlu menganggap mereka teman dekat jika tidak ikut.",
    "A": [
      "Langsung membalas dengan marah karena merasa dipaksa memilih antara teman dan belajar.",
      "Mengambil jeda untuk menenangkan diri dan mempertimbangkan prioritas serta keinginan sendiri.",
      "Mengikuti ajakan meskipun tidak ingin, agar tidak merasa takut dijauhi.",
      "Terus membayangkan akan kehilangan semua teman jika menolak ajakan mereka.",
      "Menghindari teman-teman itu tanpa menjelaskan keputusanmu."
    ],
    "B": [
      "“Kalau kalian benar-benar teman, kalian tidak akan mengajakku pergi saat aku belajar!”",
      "“Baiklah, aku ikut. Aku tidak mau kalian menjauhiku.”",
      "“Aku ingin tetap berteman dengan kalian, tetapi aku mau menyelesaikan latihan soal ini terlebih dahulu. Kalian boleh pergi dulu.”",
      "“Aku tidak membutuhkan teman seperti kalian!”",
      "“Terserah,” lalu pergi tanpa menjelaskan alasanmu dan berharap mereka memahami sendiri."
    ],
    "scoreA": [
      1,
      5,
      2,
      2,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      2
    ]
  },
  {
    "number": 16,
    "code": "PS-03",
    "title": "Diabaikan oleh Kelompok Pertemanan",
    "situation": "Kamu mengajak teman-teman belajar bersama sebelum ujian, tetapi pesanmu tidak ditanggapi. Ketika teman lain mengajak bermain, mereka langsung merespons. Kamu merasa diabaikan dan tidak dianggap.",
    "A": [
      "Mengirim pesan marah ke grup karena merasa sengaja diabaikan.",
      "Mengambil jeda untuk menenangkan diri dan mempertimbangkan kemungkinan alasan pesan belum ditanggapi.",
      "Terus memeriksa grup dan memikirkan bahwa semua teman tidak menyukaimu.",
      "Berpura-pura tidak peduli meskipun terus merasa kesal.",
      "Langsung keluar dari grup tanpa mencoba memahami situasinya."
    ],
    "B": [
      "“Kalian memang sengaja mengabaikanku, ya? Tidak usah pura-pura jadi teman!”",
      "“Tidak masalah,” lalu sengaja mengabaikan mereka setiap kali mereka menghubungimu.",
      "“Aku ingin memastikan, apakah kalian masih berencana belajar bersama? Kalau tidak bisa, beri tahu aku, ya.”",
      "“Pantas saja tidak ada yang mau berteman denganku.”",
      "Mengeluhkan mereka kepada teman lain tanpa mencoba mengklarifikasi situasi."
    ],
    "scoreA": [
      1,
      5,
      2,
      3,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      1
    ]
  },
  {
    "number": 17,
    "code": "HD-02",
    "title": "Kesalahan Presentasi Terus Diungkit",
    "situation": "Saat presentasi, kamu tidak sengaja salah mengucapkan sebuah kata dan teman-teman tertawa. Beberapa hari kemudian, temanmu masih mengulang kesalahan tersebut setiap kali kamu berbicara di depan kelas sehingga kamu merasa malu dan kesal.",
    "A": [
      "Membalas dengan mempermalukan teman tersebut di depan kelas.",
      "Menenangkan diri dan mengingat bahwa satu kesalahan berbicara tidak menentukan kemampuan dirimu.",
      "Terus mengingat kejadian itu dan menyimpulkan bahwa kamu tidak cocok berbicara di depan umum.",
      "Berpura-pura ikut tertawa meskipun merasa tidak nyaman, tanpa mempertimbangkan cara mengatasinya.",
      "Menghindari semua kesempatan presentasi agar kesalahan serupa tidak terjadi lagi."
    ],
    "B": [
      "“Coba kamu saja yang presentasi. Belum tentu kamu tidak pernah salah!”",
      "“Iya, aku memang memalukan. Tidak usah dengarkan aku lagi.”",
      "“Aku tahu kejadian itu lucu bagi kalian, tetapi aku tidak nyaman kalau terus dijadikan bahan lelucon. Tolong berhenti mengulanginya.”",
      "Diam saja dan berharap teman-teman berhenti sendiri meskipun ejekan terus berulang.",
      "Membalas dengan menyebarkan kesalahan teman tersebut kepada orang lain."
    ],
    "scoreA": [
      1,
      5,
      1,
      3,
      2
    ],
    "scoreB": [
      2,
      1,
      5,
      2,
      1
    ]
  },
  {
    "number": 18,
    "code": "KT-04",
    "title": "Tidak Sengaja Menghapus Slide Teman",
    "situation": "Saat mengerjakan presentasi kelompok di laptop, kamu tidak sengaja menghapus slide penting yang dibuat temanmu. Temanmu menegurmu di depan anggota kelompok lain, sedangkan tenggat pengumpulan tugas semakin dekat. Kamu merasa panik dan bersalah.",
    "A": [
      "Langsung menyalahkan teman karena merasa ditegur di depan orang lain.",
      "Mengambil jeda singkat untuk menenangkan diri, lalu memusatkan perhatian pada cara memulihkan slide.",
      "Panik dan terus menyalahkan diri sendiri tanpa mencoba mencari solusi.",
      "Menyangkal kesalahan dan berpura-pura tidak mengetahui penyebab slide hilang.",
      "Meninggalkan kelompok karena takut dimarahi lebih lanjut."
    ],
    "B": [
      "“Jangan menyalahkanku terus! Kamu juga seharusnya menyimpan salinan slide itu.”",
      "“Aku tidak tahu apa-apa. Mungkin slidenya memang sudah hilang.”",
      "“Aku tidak sengaja menghapus slide itu. Maaf, aku akan membantu mencari cara memulihkannya supaya tugas kita bisa selesai.”",
      "“Aku memang selalu merusak pekerjaan orang. Lebih baik aku tidak ikut mengerjakan tugas ini.”",
      "“Sudahlah, buat ulang saja sendiri. Aku tidak mau disalahkan.”"
    ],
    "scoreA": [
      1,
      5,
      2,
      1,
      1
    ],
    "scoreB": [
      1,
      1,
      5,
      1,
      1
    ]
  },
  {
    "number": 19,
    "code": "TS-04",
    "title": "Keinginan Mengikuti Ekskul Berbenturan dengan Keputusan Keluarga",
    "situation": "Kamu terpilih mengikuti pertandingan persahabatan basket pada hari Sabtu setelah berlatih selama beberapa minggu. Namun, orang tuamu meminta kamu tinggal di rumah untuk membantu keluarga. Kamu merasa kecewa sekaligus bersalah jika menolak permintaan mereka.",
    "A": [
      "Langsung marah dan menganggap orang tua tidak pernah mendukung minatmu.",
      "Menenangkan diri dan mempertimbangkan kebutuhan keluarga sekaligus pentingnya kegiatan basket bagimu.",
      "Memendam kekecewaan dan terus menyalahkan diri sendiri karena memiliki keinginan yang berbeda.",
      "Mengabaikan permintaan orang tua dan pergi bertanding tanpa membicarakannya.",
      "Mengalihkan perhatian dan tidak membahas persoalan tersebut sampai waktu pertandingan berlalu."
    ],
    "B": [
      "“Kalian tidak pernah mengerti apa yang aku inginkan. Aku akan tetap pergi!”",
      "“Baik, aku tidak akan ikut basket lagi,” meskipun sebenarnya kamu masih ingin membicarakan pilihan lain.",
      "“Aku mengerti keluarga membutuhkan bantuanku. Aku juga sudah berlatih untuk pertandingan ini. Bolehkah kita membicarakan apakah ada cara agar aku tetap bisa membantu keluarga dan mengikuti pertandingan?”",
      "“Kalau aku tidak boleh ikut, berarti kalian tidak peduli dengan kebahagiaanku.”",
      "Diam dan menyetujui keputusan tersebut, tetapi kemudian melampiaskan kekesalan kepada anggota keluarga lain."
    ],
    "scoreA": [
      1,
      5,
      2,
      1,
      2
    ],
    "scoreB": [
      1,
      2,
      5,
      1,
      1
    ]
  },
  {
    "number": 20,
    "code": "HD-03",
    "title": "Pendapat Direndahkan",
    "situation": "Dalam diskusi tentang pengurangan sampah plastik, kamu mengusulkan agar siswa tidak membawa tas ke sekolah dan menenteng semua perlengkapan. Temanmu menyebut ide tersebut aneh dan mengatakan kamu seharusnya berpikir sebelum berbicara. Beberapa siswa tertawa dan kamu merasa malu.",
    "A": [
      "Membalas ejekan dengan merendahkan ide atau kemampuan teman tersebut.",
      "Mengambil jeda, menenangkan diri, lalu mempertimbangkan masukan yang relevan tanpa menyamakan kritik terhadap ide dengan penilaian atas diri sendiri.",
      "Terus memikirkan ejekan dan menyimpulkan bahwa kamu tidak seharusnya menyampaikan pendapat lagi.",
      "Menyembunyikan kekesalan dan langsung menyetujui semua pendapat teman agar tidak ditertawakan lagi.",
      "Keluar dari diskusi tanpa mencoba memahami masukan atau menjelaskan pendapatmu."
    ],
    "B": [
      "“Idemu juga belum tentu bagus. Jangan merasa paling pintar!”",
      "“Iya, ideku memang aneh. Aku tidak akan memberikan pendapat lagi.”",
      "“Aku terbuka terhadap masukan tentang ideku, tetapi aku tidak nyaman kalau direndahkan. Mari kita bahas solusi yang lebih memungkinkan untuk mengurangi sampah plastik.”",
      "“Terserah kalian saja. Aku tidak peduli lagi dengan tugas ini.”",
      "Diam saat diskusi, lalu mengajak teman lain membicarakan keburukan orang yang mengejekmu."
    ],
    "scoreA": [
      1,
      5,
      2,
      2,
      2
    ],
    "scoreB": [
      1,
      1,
      5,
      2,
      1
    ]
  }
];

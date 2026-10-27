const SITUATIONS = [
  {
    "code": "AK-01",
    "title": "Usaha yang Diremehkan",
    "narrative": "Kamu sudah belajar dengan sungguh-sungguh selama beberapa minggu untuk mempersiapkan ujian. Namun, saat hasil ujian dibagikan, kamu hanya mendapat nilai 50 dari 100. Kamu merasa kecewa karena sudah meluangkan banyak waktu untuk belajar. Ketika kamu sedang melihat hasil ujian, seorang teman yang mendapat nilai 95 berkata di depan beberapa teman lain, “Lho, kamu cuma dapat 50 dari 100? Katanya sudah belajar sampai berminggu-minggu. Aku saja hampir tidak belajar, malah dapat 95.” Beberapa teman ikut tertawa mendengar perkataannya. Kamu merasa malu, marah, dan kecewa karena usaha kerasmu dibandingkan dengan teman yang justru mengaku hampir tidak belajar.",
    "trigger": "usaha belajar diremehkan dan hasil ujian dibandingkan secara langsung di depan teman-teman."
  },
  {
    "code": "AK-02",
    "title": "Dipermalukan karena Hasil Kerja",
    "narrative": "Kamu bertanggung jawab membuat slide presentasi kelompok dan sudah menghabiskan banyak waktu untuk menyelesaikannya. Ketika hasilnya ditampilkan di depan kelompok, seorang teman berkata, “Kamu serius bikin seperti ini? Jelek banget. Pantas saja kelompok kita jadi kelihatan tidak siap.” Ia lalu meminta anggota lain mengulang bagianmu tanpa memberi kesempatan untuk menjelaskan. Beberapa anggota menyetujui perkataannya. Kamu merasa malu, tersinggung, dan kecewa karena hasil kerjamu direndahkan di depan kelompok.",
    "trigger": "hasil kerja direndahkan dan kontribusi siswa dianggap tidak berguna."
  },
  {
    "code": "AK-03",
    "title": "Dituduh Tidak Bertanggung Jawab",
    "narrative": "Guru menegurmu di depan kelas karena tugasmu tercatat belum dikumpulkan. Kamu yakin sudah mengumpulkannya dan mencoba menjelaskan, tetapi guru menjawab, “Kalau tidak mengerjakan, jangan mencari alasan.” Beberapa teman langsung melihat ke arahmu, bahkan ada yang berbisik bahwa kamu memang sering tidak disiplin. Kamu merasa kesal, malu, dan tidak diperlakukan secara adil karena merasa dituduh melakukan sesuatu yang tidak kamu lakukan.",
    "trigger": "merasa dituduh secara tidak adil dan tidak diberi kesempatan menjelaskan."
  },
  {
    "code": "AK-04",
    "title": "Dibandingkan dengan Teman",
    "narrative": "Kamu sedang mengerjakan latihan soal untuk mempersiapkan diri menghadapi ujian. Meskipun sudah mencoba memahami langkah-langkahnya, kamu masih beberapa kali salah menjawab. Ketika kamu bertanya kepada seorang teman tentang cara mengerjakan salah satu soal, ia berkata, “Kamu dari tadi salah terus. Lihat si A, latihan soal seperti ini saja sudah bisa semua. Kamu sebenarnya belajar atau tidak, sih?” Padahal, kamu sudah berusaha memahami materi tersebut. Kamu merasa frustrasi, malu, dan mulai meragukan kemampuanmu sendiri karena kesulitanmu dianggap sebagai tanda bahwa kamu tidak belajar dengan sungguh-sungguh.",
    "trigger": "kesulitan saat latihan soal dianggap sebagai kemalasan dan kemampuanmu dibandingkan dengan teman lain."
  },
  {
    "code": "PS-01",
    "title": "Sengaja Tidak Diajak",
    "narrative": "Kamu melihat unggahan media sosial yang menunjukkan beberapa teman dekatmu sedang pergi bersama. Sebelumnya, mereka tidak pernah membicarakan rencana tersebut kepadamu. Ketika kamu bertanya mengapa tidak diajak, salah satu teman menjawab, “Kami memang sengaja tidak mengajakmu. Kamu kurang seru kalau diajak pergi.” Teman lain menanggapi dengan tertawa. Kamu merasa sedih, tersinggung, dan tidak dianggap sebagai bagian dari kelompok pertemananmu sendiri.",
    "trigger": "penolakan yang disampaikan secara langsung dan membuat siswa merasa dikucilkan."
  },
  {
    "code": "PS-02",
    "title": "Janji Pertemanan yang Dibatalkan",
    "narrative": "Kamu dan seorang teman sudah berjanji belajar bersama di perpustakaan untuk mempersiapkan ujian. Kamu bahkan menolak ajakan lain dan mengatur waktumu agar bisa belajar bersamanya. Tidak lama sebelum waktu yang disepakati, ia membatalkan janji dan mengirim foto sedang pergi bersama teman lain. Saat kamu mengungkapkan kekecewaan, ia menjawab, “Santai saja, cuma belajar. Kamu terlalu mempermasalahkan hal kecil.” Kamu merasa kecewa dan tidak dihargai karena waktu serta kesepakatan yang sudah kamu jaga dianggap tidak penting.",
    "trigger": "janji dibatalkan demi orang lain, lalu kekecewaanmu dianggap berlebihan."
  },
  {
    "code": "PS-03",
    "title": "Diabaikan oleh Kelompok Pertemanan",
    "narrative": "Kamu mengirim pesan di grup pertemanan untuk mengajak beberapa teman belajar bersama menjelang ujian. Pesanmu sudah dibaca, tetapi tidak ada yang menjawab. Beberapa saat kemudian, seorang teman mengajak anggota grup yang sama bermain, dan mereka langsung ramai membalas serta menyusun rencana. Ketika kamu bertanya apakah mereka jadi belajar bersamamu, tidak ada yang menanggapi. Kamu merasa diabaikan, sedih, dan mulai berpikir bahwa teman-temanmu sebenarnya tidak ingin melibatkanmu.",
    "trigger": "ajakan diabaikan sementara ajakan orang lain disambut dengan antusias."
  },
  {
    "code": "PS-04",
    "title": "Ucapan yang Disalahartikan",
    "narrative": "Kelompokmu sudah menunggu sekitar 20 menit karena seorang teman datang terlambat saat kalian mengerjakan tugas bersama. Ketika ia tiba, kamu berkata, “Enak ya, datang pas semuanya sudah siap. Dari tadi kami menunggu.” Temanmu langsung membalas dengan nada tinggi, “Kalau ada masalah, ngomong langsung! Tidak usah menyindir di depan orang-orang.” Beberapa anggota kelompok terdiam dan suasana menjadi tegang. Kamu merasa kesal karena maksudmu ingin menyampaikan kekecewaan, tetapi perkataanmu dianggap sebagai serangan pribadi.",
    "trigger": "maksud ucapan disalahartikan dan konflik terjadi di depan anggota kelompok."
  },
  {
    "code": "HD-01",
    "title": "Penampilan Dijadikan Bahan Tertawaan",
    "narrative": "Saat masuk kelas, kamu belum menyadari bahwa rambutmu berantakan karena terburu-buru berangkat sekolah. Seorang teman memperhatikanmu lalu berkata cukup keras, “Lihat rambutnya! Berantakan banget, seperti baru bangun tidur. Malah mirip singa, mengembang ke mana-mana!” Beberapa teman menoleh dan tertawa. Kamu berusaha merapikan rambutmu, tetapi teman tersebut kembali berkata, “Percuma dirapikan, tetap saja seperti singa. Kamu tadi tidak bercermin sebelum berangkat, ya?” Ia kemudian tertawa bersama teman-teman lainnya. Kamu merasa malu, tersinggung, dan tidak nyaman karena penampilanmu terus dikomentari di depan teman sekelas.",
    "trigger": "penampilan dijadikan bahan ejekan berulang kali hingga siswa menjadi pusat perhatian dan bahan tertawaan."
  },
  {
    "code": "HD-02",
    "title": "Kesalahan Presentasi Terus Diungkit",
    "narrative": "Saat presentasi di depan kelas, kamu sedang menjelaskan perkembangan teknologi dan media sosial. Kamu bermaksud mengatakan, “Di era digitalisasi ini,” tetapi tanpa sengaja mengucapkan, “Di era dijilatin ini.” Beberapa teman langsung tertawa mendengar salah ucap tersebut. Kamu tersenyum canggung dan berusaha melanjutkan presentasi meskipun merasa malu. Beberapa hari kemudian, seorang teman kembali mengucapkan “Di era dijilatin ini” setiap kali kamu berbicara di depan kelas. Teman-teman lain ikut tertawa, bahkan ada yang sengaja mengulang kalimat tersebut untuk menggodamu. Kamu merasa malu sekaligus marah karena kesalahan yang tidak disengaja terus diungkit dan dijadikan bahan lelucon.",
    "trigger": "salah ucap yang memalukan terus diulang oleh teman hingga mengganggu kenyamanan siswa saat tampil di depan kelas."
  },
  {
    "code": "HD-03",
    "title": "Pendapat Direndahkan",
    "narrative": "Saat diskusi kelas, guru meminta siswa menyampaikan ide untuk mengurangi sampah plastik di sekolah. Kamu mengusulkan agar semua siswa dilarang membawa tas ke sekolah dan hanya boleh membawa buku serta alat tulis dengan tangan supaya penggunaan tas plastik dan sampah kemasan berkurang. Seorang teman langsung menanggapi, “Hah? Terus buku-buku kita mau dibawa bagaimana? Masa semua siswa harus menenteng barang seharian? Ide kamu aneh banget. Sebelum bicara, pikir dulu, dong!” Beberapa teman tertawa mendengar usulanmu. Teman tersebut kemudian menambahkan, “Sudahlah, jangan kasih ide lagi kalau begini caranya.” Kamu merasa malu, kesal, dan tidak dihargai karena idemu ditertawakan serta direndahkan di depan kelas.",
    "trigger": "usulan yang kurang realistis ditanggapi dengan ejekan pribadi dan membuat siswa dipermalukan di depan kelas."
  },
  {
    "code": "HD-04",
    "title": "Julukan yang Tidak Diinginkan",
    "narrative": "Kamu membutuhkan waktu lebih lama untuk menjawab pertanyaan di kelas. Seorang teman mulai memanggilmu “si lemot” setiap kali kamu terlambat menjawab. Kamu sudah pernah mengatakan bahwa kamu tidak suka dipanggil seperti itu, tetapi ia justru tertawa dan berkata, “Bercanda saja begitu kok baper.” Beberapa teman mulai ikut menggunakan julukan tersebut. Kamu merasa kesal, malu, dan bingung karena batasan yang sudah kamu sampaikan tidak dihargai.",
    "trigger": "batasan pribadi diabaikan dan perilaku mengejek menyebar ke teman lain."
  },
  {
    "code": "KT-01",
    "title": "Barang Pinjaman Rusak",
    "narrative": "Kamu meminjamkan buku pelajaran kepada teman karena ia belum memiliki buku untuk mengikuti kegiatan belajar. Saat mengembalikannya, temanmu mengaku tidak sengaja merobek beberapa halaman ketika memasukkannya ke dalam tas. Ia meminta maaf, tetapi buku tersebut masih kamu perlukan untuk belajar dan ujian. Kamu merasa kesal dan kecewa karena barang yang kamu percayakan kepadanya menjadi rusak, meskipun ia mengatakan bahwa hal itu tidak disengaja.",
    "trigger": "barang yang dipercaya untuk dipinjamkan rusak dan dapat mengganggu kebutuhan belajar."
  },
  {
    "code": "KT-02",
    "title": "Tugas Rusak karena Kecerobohan Teman",
    "narrative": "Kamu sudah menyelesaikan catatan dan mengerjakan tugas di buku dengan rapi. Saat belajar bersama, seorang teman tidak sengaja menumpahkan minuman ke atas bukumu hingga beberapa halaman basah dan tulisan sulit dibaca. Ia meminta maaf, tetapi kamu harus mengerjakan ulang sebagian tugas yang sudah menghabiskan banyak waktu. Kamu merasa marah dan kecewa karena kecerobohan yang tidak kamu lakukan justru membuatmu harus menanggung akibatnya.",
    "trigger": "usaha yang sudah dilakukan rusak dan menimbulkan pekerjaan tambahan."
  },
  {
    "code": "KT-03",
    "title": "Disalahkan atas Kelalaian Teman",
    "narrative": "Kamu mengerjakan tugas kelompok bersama beberapa teman. Salah satu anggota belum menyelesaikan bagiannya meskipun sudah berjanji akan mengumpulkannya hari itu. Ketika kamu mengingatkannya karena tenggat pengumpulan semakin dekat, ia justru berkata di depan anggota kelompok lainnya, “Jangan sok mengatur, deh. Kamu pikir kamu paling rajin? Kalau tugas kelompok ini gagal, itu karena kamu terus menekan orang lain, bukan karena aku belum selesai.” Padahal, kamu hanya berusaha memastikan tugas selesai tepat waktu. Beberapa anggota kelompok mulai memandangmu seolah-olah kamu yang menjadi penyebab masalah. Kamu merasa marah dan tidak diperlakukan secara adil karena temanmu mengalihkan kesalahan dengan menyerang dirimu secara pribadi.",
    "trigger": "teman mengalihkan tanggung jawab dengan menyerang pribadi siswa dan membuatnya seolah-olah menjadi penyebab masalah."
  },
  {
    "code": "KT-04",
    "title": "Tidak Sengaja Menghapus Slide Teman",
    "narrative": "Saat mengerjakan presentasi kelompok di laptop, kamu tidak sengaja menghapus satu slide penting yang sudah dibuat oleh temanmu. Ketika ia menyadarinya, ia langsung berkata dengan nada tinggi, “Slide yang aku buat susah-susah ke mana? Kamu hapus, ya? Kamu itu kalau mengerjakan sesuatu hati-hati sedikit, dong! Gara-gara kamu, kerjaanku bisa hilang semua.” Anggota kelompok lainnya ikut melihat layar dan menunggu penjelasanmu. Kamu panik karena takut dianggap ceroboh dan merasa bersalah karena pekerjaan temanmu terancam hilang, sementara waktu pengumpulan semakin dekat.",
    "trigger": "kesalahan yang tidak disengaja diikuti teguran keras dan kekhawatiran merusak pekerjaan teman."
  },
  {
    "code": "TS-01",
    "title": "Ditekan untuk Memberikan Jawaban Tugas",
    "narrative": "Kamu sudah menyelesaikan tugas sendiri dan menghabiskan waktu untuk memahami materinya. Seorang teman meminta melihat jawabanmu, tetapi kemudian memotret seluruh halaman tugas untuk disalin. Ketika kamu melarangnya menyalin semua jawaban, ia berkata, “Kalau kamu tidak kasih, aku bilang ke teman-teman kalau kamu pelit dan tidak pernah mau membantu siapa pun.” Kamu merasa tertekan dan marah karena temanmu mengancam reputasimu agar kamu menuruti permintaannya.",
    "trigger": "tekanan untuk memberikan jawaban disertai ancaman terhadap reputasi dan hubungan pertemanan."
  },
  {
    "code": "TS-02",
    "title": "Takut Dijauhi karena Menolak Ajakan",
    "narrative": "Kamu sedang mengikuti kegiatan belajar bersama yang sudah disepakati untuk persiapan ujian. Di tengah kegiatan, beberapa teman mengajakmu meninggalkan perpustakaan lebih awal untuk nongkrong. Kamu mengatakan masih ingin menyelesaikan latihan soal, tetapi mereka menertawakanmu dan berkata, “Belajar terus, memangnya kamu mau jadi juara kelas? Kalau tidak ikut, nanti jangan mengaku teman dekat kami.” Kamu ingin tetap bersama teman-temanmu, tetapi juga tidak ingin meninggalkan tujuan belajarmu. Kamu merasa tertekan dan takut dijauhi jika menolak.",
    "trigger": "penolakan terhadap ajakan dikaitkan dengan ancaman kehilangan penerimaan kelompok."
  },
  {
    "code": "TS-03",
    "title": "Sulit Menolak Permintaan Bantuan",
    "narrative": "Kamu sedang menyelesaikan tugasmu sendiri ketika seorang teman meminta bantuan mengerjakan tugasnya. Kamu sebenarnya ingin membantu, tetapi tugasmu sendiri harus dikumpulkan keesokan harinya. Saat kamu menjelaskan bahwa waktumu terbatas, ia berkata, “Aku selalu bantu kamu kalau kamu kesulitan. Masa sekarang kamu tidak mau bantu aku? Aku kira kamu teman yang bisa diandalkan.” Kamu merasa bersalah dan terbebani karena ingin menjaga pertemanan, tetapi khawatir tugasmu sendiri tidak akan selesai jika terus membantu.",
    "trigger": "rasa bersalah karena permintaan teman berbenturan dengan kebutuhan dan tanggung jawab pribadi."
  },
  {
    "code": "TS-04",
    "title": "Keinginan Mengikuti Ekskul Berbenturan dengan Keputusan Keluarga",
    "narrative": "Kamu terpilih menjadi salah satu anggota tim basket sekolah yang akan mengikuti pertandingan persahabatan pada hari Sabtu. Kamu sudah berlatih selama beberapa minggu dan sangat ingin ikut bertanding karena ini menjadi kesempatan penting bagimu untuk menunjukkan hasil latihan. Namun, orang tuamu meminta kamu tidak mengikuti pertandingan karena keluarga membutuhkan bantuanmu di rumah pada hari tersebut. Ketika kamu mencoba menjelaskan betapa pentingnya pertandingan itu, orang tuamu berkata, “Kamu selalu mementingkan basket. Keluarga juga membutuhkan kamu, bukan hanya sekolah dan teman-temanmu.” Kamu merasa kecewa karena kesempatan yang sudah kamu persiapkan terancam hilang, sekaligus merasa bersalah karena tidak ingin mengecewakan orang tua.",
    "trigger": "kesempatan mengikuti pertandingan yang sudah dipersiapkan berbenturan dengan tuntutan keluarga."
  }
];

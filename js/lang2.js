$('document').ready(function() {

	var langs = ['IND', 'ENG'];

	var dictionary = {
		'descHome': {
			'IND': 'Berpengalaman dalam mengembangkan website dan aplikasi berbasis web, memiliki pengetahuan teknologi yang luas.',
			'ENG': 'Experienced in developing websites and web-based applications, has extensive technology knowledge.',
		},
        'descAbout': {
			'IND': 'Web Programer dengan pengalaman 4+ tahun menggunakan PHP, HTML, CSS, Javascript, dan MySQL untuk mengembangkan, menguji, dan memantau aplikasi dan website perusahaan. Telah merancang dan mengembangkan 9 aplikasi dan website untuk meningkatkan efisiensi dan pengelolaan data untuk beberapa perusahaan.',
			'ENG': 'Web Programer with 4+ years experience using PHP, HTML, CSS, Javascript, and MySQL to develop, test, and monitor enterprise applications and websites. Has designed and developed 9 applications and websites to improve efficiency and data management for several companies.',
		},
        'list1About': {
			'IND': '<span class="about-container-data-info-title">04+</span><span class="about-container-data-name">Tahun <br> pengalaman</span>',
			'ENG': '<span class="about-container-data-info-title">04+</span><span class="about-container-data-name">Years <br> experience</span>',
		},
        'list2About': {
			'IND': '<span class="about-container-data-info-title">09</span><span class="about-container-data-name">Project <br> selesai</span>',
			'ENG': '<span class="about-container-data-info-title">09</span><span class="about-container-data-name">Completed <br> project</span>',
		},
        'list3About': {
			'IND': '<span class="about-container-data-info-title">03</span><span class="about-container-data-name">Perusahaan <br> kerjasama</span>',
			'ENG': '<span class="about-container-data-info-title">03</span><span class="about-container-data-name">Companies <br> worked</span>',
		},
        'sub1Skill': {
			'IND': 'Lebih dari 4 tahun',
			'ENG': 'More than 4 years',
		},
        'sub2Skill': {
			'IND': 'Lebih dari 4 tahun',
			'ENG': 'More than 4 years',
		},
        'sub3Skill': {
			'IND': 'Lebih dari 5 tahun',
			'ENG': 'More than 5 years',
		},
        'titleEduc': {
			'IND': 'Pendidikan',
			'ENG': 'Education',
		},
        'titleWork': {
			'IND': 'Bekerja',
			'ENG': 'Work',
		},
		'title1Educ': {
			'IND': 'Multimedia',
			'ENG': 'Multimedia',
		},
        'sub1Educ': {
			'IND': 'Kota Palu - SMK Negeri 2 Palu',
			'ENG': 'Palu City - Vocational High School 2 Palu',
		},
		'title2Educ': {
			'IND': 'Teknik Informatika (unfinished)',
			'ENG': 'Informatics (unfinished)',
		},
        'sub2Educ': {
			'IND': 'Kota Palu - Universitas Tadulako',
			'ENG': 'Palu City - Tadulako University',
		},
		'title3Educ': {
			'IND': 'Sistem Informasi',
			'ENG': 'Information Systems',
		},
        'sub3Educ': {
			'IND': 'Kota Palu - STMIK Bina Mulia',
			'ENG': 'Palu City - College of Informatics and Computer Management Bina Mulia',
		},
		'title1Work': {
			'IND': 'Pengelola Website',
			'ENG': 'Manage Website',
		},
        'sub1Work': {
			'IND': 'FTIK IAIN Palu - Kota Palu',
			'ENG': 'FTIK IAIN Palu - Palu City',
		},
		'title2Work': {
			'IND': 'IT Support',
			'ENG': 'IT Support',
		},
        'sub2Work': {
			'IND': 'PT Tunas Morasi Indonesia - Kota Palu',
			'ENG': 'PT Tunas Morasi Indonesia - Palu City',
		},
		'title3Work': {
			'IND': 'Web Developer',
			'ENG': 'Web Developer',
		},
		'sub3Work': {
			'IND': 'PT Media Web Teknologi Kota Palu',
			'ENG': 'PT Media Web Teknologi - Palu City',
		},
        'subService': {
			'IND': 'Apa yang saya tawarkan',
			'ENG': 'What i offer',
		},
        'title1Service': {
			'IND': 'Web<br>Desainer',
			'ENG': 'Designer<br>Web',
		},
        'listDesain1Service': {
			'IND': 'Mengembangkan user interface web',
			'ENG': 'I develop the user interface web.',
		},
        'listDesain2Service': {
			'IND': 'Pengembangan halaman web.',
			'ENG': 'Web page development.',
		},
        'listDesain3Service': {
			'IND': 'Memposisikan brand perusahaan Anda.',
			'ENG': 'I position your company brand.',
		},
        'listFront1Service': {
			'IND': 'Mengembangkan user interface yang menarik',
			'ENG': 'I develop an attractive user interface.',
		},
        'listFront2Service': {
			'IND': 'Pengembangan halaman web dengan desain yang baik.',
			'ENG': 'Development of web pages with good design.',
		},
        'listFront3Service': {
			'IND': 'Mengembangkan halaman web yang responsif.',
			'ENG': 'I develop responsive web page.',
		}
		,
        'listBack1Service': {
			'IND': 'Memastikan web dan aplikasi berfungsi dengan baik',
			'ENG': 'Ensuring websites and applications work properly',
		},
        'listBack2Service': {
			'IND': 'Membuat alur data yang terstruktur dengan baik',
			'ENG': 'I created a well-structured data flow',
		},
        'listBack3Service': {
			'IND': 'Keamanan Aplikasi/sistem yang baik',
			'ENG': 'Good Application/system security',
		},
        'desc1Portfolio': {
			'IND': 'Atas permintaan PT Tunas Morasi Indonesia, saya dipercaya untuk membuat website dan company profile yang menarik untuk dilihat, agar banyak pengunjung yang tertarik melihat produk yang mereka jual karena PT Morasi Indonesia adalah perusahaan ekspor dari Indonesia.',
			'ENG': 'At the request of PT Tunas Morasi Indonesia, I was entrusted with developing an interesting website and company profile to look at, so that many visitors would be interested in seeing the products they sell because PT Morasi Indonesia is an export company from Indonesia.',
		},
        'desc2Portfolio': {
			'IND': 'Atas permintaan mahasiswa tingkat akhir Makassar Air Traffic Services Center (MATSC), saya dipercaya untuk mengembangkan aplikasi Form Meter Reading (E-FMR) yang memiliki fitur untuk menyimpan, menyortir dan mengarsipkan data hasil monitoring parameter mesin pesawat, data tersebut adalah Middle Marker 21, Localizer dan Glide Path 21',
			'ENG': 'At the request of Makassar Air Traffic Services Center (MATSC) final year students, I was entrusted with developing the Form Meter Reading (E-FMR) application which has features for storing, sorting and archiving data from monitoring aircraft engine parameters, the data is Middle Marker 21, Localizer and Glide Path 21',
		},
        'desc3Portfolio': {
			'IND': 'Atas permintaan mahasiswa tingkat akhir di STMIK Borneo Internasional, saya dipercaya untuk mengembangkan sebuah aplikasi yang memiliki fitur multi fungsi antara lain menyediakan lowongan kerja, mencari kerja, melamar kerja, dll.<br>Yang diberi nama "Get Your Job".',
			'ENG': 'At the request of a final year student at STMIK Borneo Internasional, I was entrusted with developing an application that has multi-functional features, including providing job vacancies, looking for work, applying for jobs, etc.<br>The name of the application is "Get Your Job".',
		},
        'desc4Portfolio': {
			'IND': 'Atas permintaan Dinas Bina Marga Provinsi Sulawesi Tengah, saya dipercaya untuk mengembangkan aplikasi Jasa Konstruksi yang memiliki fitur :<table><tr><td style="vertical-align: top;"><i class="far fa-check-circle"></i></td><td>Melihat data tenaga ahli konstruksi</td></tr><tr><td style="vertical-align: top;"><i class="far fa-check-circle"></i></td><td>Mengelola data tenaga ahli konstruksi</td></tr><tr><td style="vertical-align: top;"><i class="far fa-check-circle"></i></td><td>Mengecek infografis pelatihan dan sertifikasi tenaga ahli</td></tr></table>',
			'ENG': 'At the request of the Central Sulawesi Provincial Highways Service, I was entrusted with developing a Construction Services application that has features for :<table><tr><td style="vertical-align: top;"><i class="far fa-check-circle"></i></td><td style="vertical-align: top;">View construction expert data</td></tr><tr><td><i class="far fa-check-circle"></i></td><td>Manage construction expert data</td></tr><tr><td style="vertical-align: top;"><i class="far fa-check-circle"></i></td><td>Check construction engineer training infographic</td></tr></table>',
		},
        'desc5Portfolio': {
			'IND': 'Atas permintaan mahasiswa tingkat akhir STMIK Borneo Internasional, saya dipercaya untuk mengembangkan aplikasi musik seperti Spotify, JOOX, SoundCloud, dll..<br>Nama aplikasinya "GUMUS (Gudang Musik)"',
			'ENG': 'At the request of STMIK Borneo Internasional final year students, I was entrusted with developing music applications such as Spotify, JOOX, SoundCloud, etc.. <br>app name is "GUMUS (Gudang Musik)"',
		},
		'desc6Portfolio': {
			'IND': 'Ini adalah project pertama saya menggunakan Android Studio, aplikasi ini dikembangkan untuk membantu teman saya yang sedang mengerjakan ujian akhir di STMIK Borneo Internasional.<br>Aplikasi E-Commerce ini bernama Kerajaan Keramik (KerKa), aplikasi ini memiliki fitur yang sama dengan E-Commerce yang biasanya seperti keranjang, transaksi, proses pembayaran, invoice, pengiriman, dll.',
			'ENG': 'This is my first project using Android Studio, this application was developed to help my friend who is working on his final exams at STMIK Borneo Internasional.<br>This E-Commerce application is called Kerajaan Keramik (KerKa), this application has the same features as E-Commerce which usually include shopping carts, transactions, payment processing, invoices, shipping, etc.',
		},
		'desc7Portfolio': {
			'IND': 'Atas permintaan Dinas Bina Marga Provinsi Sulawesi Tengah, saya dipercaya untuk mengembangkan website yang memiliki formulir pendaftaran peserta tenaga ahli konstruksi dan aplikasi yang memiliki fitur untuk menyortir, mengelola dan merekap data bagi yang telah mengisi formulir pendaftaran pada situs web.<br>Nama aplikasinya adalah "FR-PTAK"',
			'ENG': 'At the request of the Highways Office of the Province of Central Sulawesi, I was entrusted with developing a website that has a registration form for training participants in construction experts and applications that has features for sorting, managing and recapitulating data for those who have filled out the registration form on the website.<br>The app name is "FR-PTAK"',
		},
		'desc8Portfolio': {
			'IND': 'Atas permintaan Fakultas Tarbiyah dan Ilmu Keguruan (FTIK) IAIN Palu, saya dipercaya mengembangkan aplikasi untuk menyusun rencana anggaran biaya, menghitung setiap anggaran secara otomatis, menerbitkan laporan anggaran yang akurat dan dapat dipantau oleh admin/atasan . Aplikasi ini bernama "E-RAB"',
			'ENG': 'At the request of the Faculty of Tarbiyah and Teaching Science (FTIK) IAIN Palu, I was entrusted with developing an application to compile a budget plan, calculate each budget automatically, issue budget reports that are accurate and can be monitored by admins/superiors. This application is called "E-RAB"',
		},
		'desc9Portfolio': {
			'IND': 'Atas permintaan dari Fakultas Tarbiyah dan Ilmu Keguruan (FTIK) IAIN Palu, saya dipercayakan untuk mengembangkan aplikasi yang bisa digunakan untuk mengelola data mahasiswan dan dosen, menentukan pembimbing ujian, menentukan penguji ujian, menentukan jadwal ujian dan memberikan nilai mahasiswa yang telah melakukan ujian akhir skripsi. Aplikasi ini diberi nama "SISKRIP".',
			'ENG': 'At the request of the Faculty of Tarbiyah and Teaching Science (FTIK) IAIN Palu, I was entrusted with developing an application that can be used to manage student and lecturer data, determine exam supervisors, determine exam examiners, determine exam schedules and provide grades for students who have taken the final thesis exam . This application is named "SISKRIP".',
		}
		
	};
	
	$("button").click(function(){
		
		var language = $(this).data('language');
		translate(language);
		
	});

	function translate(lang) {

		$("[data-translate]").each(function(){
			var key = $(this).data('translate');
			$(this).html(dictionary[key][lang]);
		});

	}

	// from cookie
	translate('IND');
	
});
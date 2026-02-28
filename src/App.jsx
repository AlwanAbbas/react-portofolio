import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";
function App() {
	return (
		<>
			{/* Hero Section */}
			<section id="beranda" className="hero scroll-mt-24 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
				<div className="animate__animated animate__fadeInUp animate__delay-2s">
					<div className="flex items-center gap-3 mb-6 bg-zinc-700 p-4 rounded-2xl">
						<img
							src={DataImage.HeroImage}
							alt="Hero Image"
							className="w-10 rounded-md"
							loading="lazy"
						/>
						<q>Code is like humor. When you have to explain it, it's bad.☕</q>
					</div>
					<h1 className="text-5xl font-bold mb-6">
						Hi, Saya Mohammad Alwan Abbas Abdillah
					</h1>
					<p className="text-base/loose mb-6 opacity-80">
						Saya adalah seorang pengembang yang memiliki minat khusus di bidang
						pengembangan aplikasi web menggunakan framework seperti Laravel dan
						AdonisJS. Di samping itu, saya juga tertarik pada dunia keamanan
						jaringan, khususnya dalam praktik penetration testing. Dengan
						semangat untuk terus belajar dan berinovasi, saya berkomitmen untuk
						menciptakan solusi teknologi yang tidak hanya fungsional, tetapi
						juga memberikan dampak nyata.
					</p>
					<div className="flex items-center sm:gap-4 gap-2">
						<a
							href="#"
							className="bg-teal-400 p-4 rounded-2xl hover:bg-teal-500"
						>
							Download CV <i className="ri-download-line ri-lg"></i>
						</a>
						<a
							href="#"
							className="bg-zinc-400 p-4 rounded-2xl hover:bg-zinc-500"
						>
							Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
						</a>
					</div>
				</div>
					<img
						src={DataImage.HeroImage}
						alt="Hero Image"
						className="w-[500px] md:ml-auto rounded-3xl shadow-2xl animate__animated animate__fadeInRight animate__delay-3s"
						loading="lazy"
					/>
				</section>
				{/* Akhir dari Hero Section */}

			{/* Bagian Tentang */}
			<section id="tentang" className="tentang scroll-mt-24 mt-32 py-10">
				<div className="xl:w-1/2 lg: ww-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
					<img
						src={DataImage.HeroImage}
						alt="Image"
						className="w-12 rounded-md mb-10 sm:hidden"
						loading="lazy"
					/>
					<p className="text-base/loose mb-10">
						Halo! Saya Mohammad Alwan Abbas Abdillah, seorang mahasiswa
						Informatika di Universitas Nahdlatul Ulama Al-Ghazali Cilacap.
						Berbekal latar belakang pendidikan di SMK Teknik Audio Video, saya
						memiliki fondasi yang kuat dalam bidang perangkat keras elektronik
						serta kemampuan pemrograman yang terintegrasi, menjembatani dunia
						hardware dan software. Saya memiliki minat khusus dalam pengembangan
						aplikasi web menggunakan framework modern seperti Laravel dan
						AdonisJS, yang memungkinkan saya membangun sistem yang efisien,
						aman, dan mudah dikembangkan. Selain itu, saya juga tertarik pada
						bidang keamanan jaringan, dengan fokus pada praktik penetration
						testing untuk mengidentifikasi dan mengatasi potensi celah keamanan.
						Di luar pengembangan web dan keamanan, saya aktif mengeksplorasi
						dunia Internet of Things (IoT). Saya telah mengembangkan berbagai
						solusi berbasis mikrokontroler, seperti NodeMCU dan ESP32, untuk
						menciptakan sistem otomatisasi dan kontrol yang inovatif dan
						bermanfaat. Dengan semangat untuk terus belajar dan berinovasi, saya
						berkomitmen untuk menghadirkan solusi teknologi yang tidak hanya
						fungsional, tetapi juga memberikan dampak positif di berbagai bidang
						kehidupan.
					</p>
					<div className="flex items-center justify-between">
						<img
							src={DataImage.HeroImage}
							alt="Image"
							className="w-12 rounded-md sm:block hidden"
							loading="lazy"
						/>
						<div className="flex items-center gap-5">
							<div>
								<h1 className="text-4xl mb-1">
									45 <span className="text-teal-400">+</span>
								</h1>
								<p>Proyek Selesai</p>
							</div>
							<div>
								<h1 className="text-4xl mb-1">
									4 <span className="text-blue-500">+</span>
								</h1>
								<p>Tahun Pengalaman</p>
							</div>
						</div>
					</div>
				</div>

				<div className="tools mt-32">
					<h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-right" data-aos-duration="1000">Tools Yang Dipakai</h1>
					<p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose opacity-50" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
						Berikut ini merupakan beberapa tools yang sering digunakan dalam
						pembuatan Project Saya
					</p>
					<div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up-right">
						{listTools.map((tool) => (
							<div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay={tool.dad}>
								<img
									src={tool.gambar}
									alt="Tools"
									className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
									loading="lazy"
								/>
								<div>
									<h4 className="font-bold">{tool.nama}</h4>
									<p className="opacity-50">{tool.ket}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				</section>
				{/* Akhir dari Bagian Tentang */}

			{/* Project */}
			<section id="project" className="project scroll-mt-24 mt-32 py-10">
				<h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Project</h1>
				<p className="text-base/loose text-center opacity-50" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">Berikut ini beberapa Project yang telah saya buat.</p>
				<div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
					{listProyek.map((proyek) => (
						<div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay={proyek.dad}>
							<img src={proyek.gambar} alt="Project Image" loading="lazy" />
							<div>
								<h1 className="text-2xl	font-bold mx-4">{proyek.nama}</h1>
								<p className="text-base/loose mb-4">{proyek.desk}</p>
								<div className="flex flex-wrap gap-2">
									{proyek.tools.map((tool, index) => (
										<p key={index} className="py-1 px-3 border-zinc-500 bg-zinc-600 rounded-md font-semibold ">{tool}</p>
									))}
								</div>
								<div className="mt-8 text-center">
									<a href="#" className="bg-teal-400 p-3 rounded-lg block border-zinc-600 hover:bg-teal-500">Lihat Website</a>
								</div>
							</div>
						</div>
					))}
				</div>
				</section>
				{/* End Project */}

			{/* Kontak */}
			<section id="kontak" className="kontak scroll-mt-24 mt-32 sm:p-10 p-0">
				<h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up-right" data-aos-duration="1000">Kontak</h1>
				<p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200">Mari berkenalan dengan Saya</p>
				<form action="https://formsubmit.co/soryuken380@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-lg" autoComplete="off"
				data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="400">
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label className="font-semibold">Nama Lengkap</label>
							<input type="text" name="nama" placeholder="Masukan Nama" className="border border-zinc-500 p-2 rounded-md" required />
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-semibold">Email</label>
							<input type="email" name="email" placeholder="Masukan Email" className="border border-zinc-500 p-2 rounded-md" required />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="pesan" className="font-semibold">Pesan</label>
							<textarea name="pesan" id="pesan" cols="45" rows="10" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
						</div>
						<div className="text-center">
							<button type="submit" className="bg-emerald-400 p-3 rounded-lg w-full cursor-pointer border border-zinc-500 hover:bg-emerald-500">Kirim Pesan</button>
						</div>
					</div>
				</form>
				</section>
				{/* End Kontak */}
		</>
	);
}

export default App;

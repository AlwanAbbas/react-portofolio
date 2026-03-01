import { useEffect, useRef, useState } from "react";
import DataImage, { listTools, listProyek } from "./data";

function App() {
	const tentangRef = useRef(null);
	const [projectCount, setProjectCount] = useState(0);
	const [experienceCount, setExperienceCount] = useState(0);

	useEffect(() => {
		let hasAnimated = false;

		const runCounter = (setter, endValue, duration = 1600) => {
			const steps = 60;
			const stepValue = endValue / steps;
			const stepDuration = duration / steps;
			let current = 0;

			const intervalId = window.setInterval(() => {
				current += stepValue;
				if (current >= endValue) {
					setter(endValue);
					window.clearInterval(intervalId);
					return;
				}
				setter(Math.round(current));
			}, stepDuration);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						hasAnimated = true;
						runCounter(setProjectCount, 45);
						runCounter(setExperienceCount, 4, 1200);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.45 },
		);

		if (tentangRef.current) {
			observer.observe(tentangRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* Hero Section */}
			<section
				id="beranda"
				className="hero scroll-mt-24 grid grid-cols-1 items-center gap-6 pt-10 md:grid-cols-2 xl:gap-0"
			>
				<div className="animate__animated animate__fadeInUp animate__delay-1s">
					<div className="mb-6 flex items-center gap-3 rounded-2xl bg-zinc-700 p-4">
						<img
							src={DataImage.HeroImage}
							alt="Hero Image"
							className="w-10 rounded-md"
							loading="lazy"
						/>
						<q>Code is like humor. When you have to explain it, it&apos;s bad.☕</q>
					</div>
					<h1 className="mb-6 text-5xl font-bold">Hi, Saya Mohammad Alwan Abbas Abdillah</h1>
					<p className="mb-6 text-base/loose opacity-80">
						Saya adalah seorang pengembang yang memiliki minat khusus di bidang
						pengembangan aplikasi web menggunakan framework seperti Laravel dan AdonisJS.
						Di samping itu, saya juga tertarik pada dunia keamanan jaringan, khususnya
						dalam praktik penetration testing. Dengan semangat untuk terus belajar dan
						berinovasi, saya berkomitmen untuk menciptakan solusi teknologi yang tidak
						hanya fungsional, tetapi juga memberikan dampak nyata.
					</p>
					<div className="flex items-center gap-2 sm:gap-4">
						<a
							href="#"
							className="rounded-2xl bg-teal-400 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-400/30"
						>
							Download CV <i className="ri-download-line ri-lg"></i>
						</a>
						<a
							href="#project"
							className="rounded-2xl bg-zinc-400 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-500 hover:shadow-lg hover:shadow-zinc-400/30"
						>
							Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
						</a>
					</div>
				</div>
				<img
					src={DataImage.HeroImage}
					alt="Hero Image"
					className="w-[500px] rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02] md:ml-auto animate__animated animate__fadeInRight animate__delay-2s"
					loading="lazy"
				/>
			</section>
			{/* Akhir dari Hero Section */}

			{/* Bagian Tentang */}
			<section id="tentang" ref={tentangRef} className="tentang scroll-mt-24 mt-32 py-10">
				<div
					className="mx-auto w-full rounded-lg bg-zinc-700 p-7 lg:w-3/4 xl:w-1/2"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<img
						src={DataImage.HeroImage}
						alt="Image"
						className="mb-10 w-12 rounded-md sm:hidden"
						loading="lazy"
					/>
					<p className="mb-10 text-base/loose">
						Halo! Saya Mohammad Alwan Abbas Abdillah, seorang mahasiswa Informatika di
						Universitas Nahdlatul Ulama Al-Ghazali Cilacap. Berbekal latar belakang
						pendidikan di SMK Teknik Audio Video, saya memiliki fondasi yang kuat dalam
						bidang perangkat keras elektronik serta kemampuan pemrograman yang
						terintegrasi, menjembatani dunia hardware dan software. Saya memiliki minat
						khusus dalam pengembangan aplikasi web menggunakan framework modern seperti
						Laravel dan AdonisJS, yang memungkinkan saya membangun sistem yang efisien,
						aman, dan mudah dikembangkan.
					</p>
					<div className="flex items-center justify-between">
						<img
							src={DataImage.HeroImage}
							alt="Image"
							className="hidden w-12 rounded-md sm:block"
							loading="lazy"
						/>
						<div className="flex items-center gap-5">
							<div>
								<h1 className="mb-1 text-4xl font-semibold tabular-nums">
									{projectCount} <span className="text-teal-400">+</span>
								</h1>
								<p>Proyek Selesai</p>
							</div>
							<div>
								<h1 className="mb-1 text-4xl font-semibold tabular-nums">
									{experienceCount} <span className="text-blue-500">+</span>
								</h1>
								<p>Tahun Pengalaman</p>
							</div>
						</div>
					</div>
				</div>

				<div className="tools mt-32">
					<h1 className="mb-4 text-4xl/snug font-bold" data-aos="fade-right" data-aos-duration="1000">
						Tools Yang Dipakai
					</h1>
					<p
						className="text-base/loose opacity-50 sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="200"
					>
						Berikut ini merupakan beberapa tools yang sering digunakan dalam pembuatan
						project saya.
					</p>
					<div className="tools-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{listTools.map((tool) => (
							<div
								className="group flex items-center gap-2 rounded-md border border-zinc-600 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:bg-zinc-800 hover:shadow-lg hover:shadow-teal-500/10"
								key={tool.id}
								data-aos="zoom-in-up"
								data-aos-duration="700"
								data-aos-delay={tool.dad}
							>
								<img
									src={tool.gambar}
									alt="Tools"
									className="w-14 bg-zinc-800 p-1 transition-colors duration-300 group-hover:bg-zinc-900"
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
				<h1 className="mb-2 text-center text-4xl font-bold" data-aos="fade-up" data-aos-duration="1000">
					Project
				</h1>
				<p
					className="text-center text-base/loose opacity-50"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="200"
				>
					Berikut ini beberapa project yang telah saya buat.
				</p>
				<div className="proyek-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{listProyek.map((proyek) => (
						<div
							key={proyek.id}
							className="rounded-md bg-zinc-800 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay={proyek.dad}
						>
							<img
								src={proyek.gambar}
								alt="Project Image"
								loading="lazy"
								className="rounded-md"
							/>
							<div>
								<h1 className="mx-4 text-2xl font-bold">{proyek.nama}</h1>
								<p className="mb-4 text-base/loose">{proyek.desk}</p>
								<div className="flex flex-wrap gap-2">
									{proyek.tools.map((tool, index) => (
										<p key={index} className="rounded-md bg-zinc-600 px-3 py-1 font-semibold">
											{tool}
										</p>
									))}
								</div>
								<div className="mt-8 text-center">
									<a
										href="#"
										className="block rounded-lg border-zinc-600 bg-teal-400 p-3 transition-all duration-300 hover:scale-[1.01] hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20"
									>
										Lihat Website
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* End Project */}

			{/* Kontak */}
			<section id="kontak" className="kontak scroll-mt-24 mt-32 p-0 sm:p-10">
				<h1 className="mb-2 text-center text-4xl font-bold" data-aos="fade-up-right" data-aos-duration="1000">
					Kontak
				</h1>
				<p
					className="mb-10 text-center text-base/loose opacity-50"
					data-aos="fade-up-right"
					data-aos-duration="1000"
					data-aos-delay="200"
				>
					Mari berkenalan dengan Saya
				</p>
				<form
					action="https://formsubmit.co/soryuken380@gmail.com"
					method="POST"
					className="mx-auto w-full rounded-lg bg-zinc-800 p-10 sm:w-fit"
					autoComplete="off"
					data-aos="fade-up-right"
					data-aos-duration="1000"
					data-aos-delay="400"
				>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label className="font-semibold">Nama Lengkap</label>
							<input
								type="text"
								name="nama"
								placeholder="Masukan Nama"
								className="rounded-md border border-zinc-500 p-2"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-semibold">Email</label>
							<input
								type="email"
								name="email"
								placeholder="Masukan Email"
								className="rounded-md border border-zinc-500 p-2"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="pesan" className="font-semibold">
								Pesan
							</label>
							<textarea
								name="pesan"
								id="pesan"
								cols="45"
								rows="10"
								placeholder="Pesan"
								className="rounded-md border border-zinc-500 p-2"
								required
							></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="w-full cursor-pointer rounded-lg border border-zinc-500 bg-emerald-400 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30"
							>
								Kirim Pesan
							</button>
						</div>
					</div>
				</form>
			</section>
			{/* End Kontak */}
		</>
	);
}

export default App;

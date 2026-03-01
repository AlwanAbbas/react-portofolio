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
			{ threshold: 0.45 }
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
				className="hero scroll-mt-24 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
			>
				<div className="animate__animated animate__fadeInUp animate__delay-1s">
					<div className="flex items-center gap-3 mb-6 bg-zinc-700 p-4 rounded-2xl">
						<img
							src={DataImage.HeroImage}
							alt="Hero"
							className="w-10 rounded-md"
							loading="lazy"
						/>
						<q>
							Code is like humor. When you have to explain it, it&apos;s bad. ☕
						</q>
					</div>

					<h1 className="mb-6 text-5xl font-bold">
						Hi, Saya Mohammad Alwan Abbas Abdillah
					</h1>

					<p className="mb-6 text-base/loose opacity-80">
						Saya adalah seorang pengembang yang memiliki minat khusus di bidang
						pengembangan aplikasi web menggunakan framework seperti Laravel dan
						AdonisJS serta tertarik pada penetration testing.
					</p>

					<div className="flex items-center gap-4">
						<a
							href="#"
							className="rounded-2xl bg-teal-400 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500"
						>
							Download CV
						</a>

						<a
							href="#project"
							className="rounded-2xl bg-zinc-400 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-500"
						>
							Lihat Proyek
						</a>
					</div>
				</div>

				<img
					src={DataImage.HeroImage}
					alt="Hero"
					className="w-[500px] md:ml-auto rounded-3xl shadow-2xl animate__animated animate__fadeInRight animate__delay-2s"
					loading="lazy"
				/>
			</section>

			{/* Tentang */}
			<section
				id="tentang"
				ref={tentangRef}
				className="scroll-mt-24 mt-32 py-10"
			>
				<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-lg">
					<p className="mb-10 text-base/loose">
						Halo! Saya mahasiswa Informatika yang memiliki minat di Web
						Development dan Security. Berbekal latar belakang teknik
						elektronika, saya menjembatani dunia hardware dan software.
					</p>

					<div className="flex items-center justify-between">
						<div className="flex items-center gap-5">
							<div>
								<h1 className="text-4xl font-semibold">
									{projectCount} <span className="text-teal-400">+</span>
								</h1>
								<p>Proyek Selesai</p>
							</div>

							<div>
								<h1 className="text-4xl font-semibold">
									{experienceCount}{" "}
									<span className="text-blue-500">+</span>
								</h1>
								<p>Tahun Pengalaman</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Project */}
			<section id="project" className="mt-32 py-10">
				<h1 className="text-center text-4xl font-bold mb-2">
					Project
				</h1>

				<div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
					{listProyek.map((proyek) => (
						<div
							key={proyek.id}
							className="rounded-md bg-zinc-800 p-4 hover:-translate-y-2 transition-all"
						>
							<img
								src={proyek.gambar}
								alt="Project"
								className="rounded-md"
							/>
							<h1 className="text-2xl font-bold mt-4">
								{proyek.nama}
							</h1>
							<p className="text-base/loose">
								{proyek.desk}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default App;
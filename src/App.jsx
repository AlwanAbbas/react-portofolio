import { useEffect, useRef, useState } from "react";
import DataImage, { listTools, listProyek } from "./data";
import ReactBitsSpotlight from "./components/ReactBitsSpotlight";

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
				className="hero relative isolate scroll-mt-24 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl pt-10 md:grid-cols-2 xl:gap-0"
			>
				<ReactBitsSpotlight />

				<div className="animate__animated animate__fadeInUp animate__delay-1s">
					<div className="mb-6 flex items-center gap-3 rounded-2xl bg-zinc-700 p-4">
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
						AdonisJS. Di samping itu saya juga tertarik pada dunia keamanan
						jaringan khususnya penetration testing.
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
					alt="Hero Image"
					className="w-[500px] md:ml-auto rounded-3xl shadow-2xl animate__animated animate__fadeInRight animate__delay-2s"
					loading="lazy"
				/>
			</section>

			{/* Tentang */}
			<section id="tentang" ref={tentangRef} className="scroll-mt-24 mt-32 py-10">
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
									{experienceCount} <span className="text-blue-500">+</span>
								</h1>
								<p>Tahun Pengalaman</p>
							</div>
						</div>
					</div>
				</div>

				{/* Tools */}
				<div className="mt-32">
					<h1 className="mb-4 text-4xl font-bold">
						Tools Yang Dipakai
					</h1>

					<div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{listTools.map((tool) => (
							<div
								key={tool.id}
								className="flex items-center gap-2 rounded-md border border-zinc-600 p-3 hover:bg-zinc-800 transition-all"
							>
								<img
									src={tool.gambar}
									alt="Tools"
									className="w-14 bg-zinc-800 p-1"
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
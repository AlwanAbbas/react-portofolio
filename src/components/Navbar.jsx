import { useState, useEffect } from "react";
import ReactBitsNavBadge from "./ReactBitsNavBadge";

const Navbar = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="navbar flex items-center justify-between py-7">
			<div className="logo">
				<h1 className="bg-white p-1 text-3xl font-bold text-black md:bg-transparent md:text-white">
					Portofolio
				</h1>
			</div>
			<div className="flex items-center gap-3">
				<ul
					className={`menu fixed left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-2xl rounded-bl-2xl bg-white/30 p-4 backdrop-blur-md transition-all md:static md:-translate-x-0 md:gap-10 md:bg-transparent md:opacity-100 md:transition-none ${active ? "top-0 opacity-100" : "top-0 opacity-0"}`}
				>
					<li>
						<a href="#beranda" className="text-base font-medium sm:text-lg">
							Beranda
						</a>
					</li>
					<li>
						<a href="#tentang" className="text-base font-medium sm:text-lg">
							Tentang
						</a>
					</li>
					<li>
						<a href="#project" className="text-base font-medium sm:text-lg">
							Project
						</a>
					</li>
					<li>
						<a href="#kontak" className="text-base font-medium sm:text-lg">
							Kontak
						</a>
					</li>
				</ul>
				<ReactBitsNavBadge />
			</div>
		</div>
	);
};

export default Navbar;

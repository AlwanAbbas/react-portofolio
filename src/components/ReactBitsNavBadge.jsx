const ReactBitsNavBadge = () => {
	return (
		<a
			href="#kontak"
			className="group relative hidden overflow-hidden rounded-full border border-teal-300/45 px-4 py-2 text-sm font-semibold text-teal-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:text-white md:inline-flex"
		>
			<span className="relative z-10 inline-flex items-center gap-2">
				<i className="ri-flashlight-line"></i>
				Hire Me
			</span>
			<span className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.4),transparent_60%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
			<span className="absolute -left-10 top-0 h-full w-8 -skew-x-12 bg-white/35 blur-[1px] transition-all duration-700 group-hover:left-[120%]"></span>
		</a>
	);
};

export default ReactBitsNavBadge;

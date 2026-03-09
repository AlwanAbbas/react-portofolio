import { useState } from "react";

const ReactBitsSpotlight = () => {
	const [position, setPosition] = useState({ x: 50, y: 45 });

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;
		setPosition({ x, y });
	};

	return (
		<div
			aria-hidden="true"
			onMouseMove={handleMouseMove}
			className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl"
		>
			<div
				className="absolute -inset-[30%] transition-all duration-300"
				style={{
					background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(45, 212, 191, 0.22), transparent 45%), radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.22), transparent 38%)`,
				}}
			/>
		</div>
	);
};

export default ReactBitsSpotlight;

import { useState } from "react";

function Filters() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<svg
				className={`fill-current ${
					isHovered ? "text-pumpkin-600" : "text-pumpkin-700"
				}`}
				width="40px"
				height="40px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
				/>
			</svg>
		</div>
	);
}

export default Filters;

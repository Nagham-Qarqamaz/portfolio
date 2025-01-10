import { ReactNode } from "react";

interface SimpleCardProps {
	children: ReactNode;
	hoverEffect?: boolean;
	className?: string;
}

function SimpleCard({
	children,
	hoverEffect = true,
	className = "",
}: SimpleCardProps) {
	return (
		<div
			className={`${className} p-4 rounded-lg shadow-lg text-[0.9rem] h-full ${
				hoverEffect &&
				"transform hover:scale-105 transition-transform duration-300"
			} bg-tamarillo-800`}
		>
			{children}
		</div>
	);
}

export default SimpleCard;

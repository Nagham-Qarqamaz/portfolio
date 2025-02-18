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
			className={`text-white p-4 rounded-[1rem] shadow-lg text-[0.9rem] h-full ${
				hoverEffect &&
				"transform hover:scale-105 transition-transform duration-300"
			} bg-primary-800 ${className}`}
		>
			{children}
		</div>
	);
}

export default SimpleCard;

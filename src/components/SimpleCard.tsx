import { ReactNode } from "react";

interface SimpleCardProps {
	children: ReactNode;
	hoverEffect?: boolean;
	className?: string;
	inverseColor?: boolean;
}

function SimpleCard({
	children,
	hoverEffect = true,
	className = "",
	inverseColor = false,
}: SimpleCardProps) {
	return (
		<div
			className={`${className} ${
				inverseColor ? "bg-gradient-to-l" : "bg-gradient-to-r"
			} from-pumpkin-900 via-pumpkin-800 to-pumpkin-700 p-4 rounded-lg shadow-lg text-[0.9rem] h-full ${
				hoverEffect &&
				"transform hover:scale-105 transition-transform duration-300"
			}`}
		>
			{children}
		</div>
	);
}

export default SimpleCard;

import { ReactNode } from "react";
import Title from "./Title";
import FadeIn from "./animation/FadeIn";
import { useTheme } from "../contexts/ThemeContext";

interface SectionProps {
	title: string;
	children: ReactNode;
	glow?: boolean;
}

function Section({ title, children, glow = true }: SectionProps) {
	const { theme } = useTheme();

	return (
		<div className="py-20 text-center">
			<FadeIn>
				<Title text={title} />
				<div
					className={`mt-8 ${
						glow &&
						theme == "dark" &&
						"shadow-pumpkin overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]"
					}`}
				>
					{children}
				</div>
			</FadeIn>
		</div>
	);
}

export default Section;

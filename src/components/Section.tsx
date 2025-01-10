import { ReactNode } from "react";
import Title from "./Title";
import FadeIn from "./animation/FadeIn";

interface SectionProps {
	title: string;
	children: ReactNode;
	glow?: boolean;
}

function Section({ title, children, glow = true }: SectionProps) {
	return (
		<div className="py-16 text-center">
			<FadeIn>
				<Title text={title} />
				<div
					className={`${
						glow &&
						"overflow-hidden shadow-pumpkin p-8 rounded-[3rem] bg-shark-900"
					}`}
				>
					{children}
				</div>
			</FadeIn>
		</div>
	);
}

export default Section;

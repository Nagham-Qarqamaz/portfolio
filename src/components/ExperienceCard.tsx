import FadeIn from "./animation/FadeIn";
import SlideLeft from "./animation/SlideLeft";
import SlideRight from "./animation/SlideRight";
import SimpleCard from "./SimpleCard";

interface ExperienceCardProps {
	title: string;
	date: string;
	location: string;
	bulletPoints: string[];
	side: "left" | "right";
	dashedLine: "onLeft" | "onRight" | "none";
	className?: string;
}

function ExperienceCard({
	title,
	date,
	location,
	bulletPoints,
	side,
	dashedLine,
	className = "",
}: ExperienceCardProps) {
	const content = (
		<SimpleCard className="p-8">
			<div className="flex justify-between items-center flex-wrap gap-x-8">
				<h3 className="text-xl font-semibold">{title}</h3>
				<span className="text-pumpkin-100 font-bold">{date}</span>
			</div>
			<p className="italic text-pumpkin-100">{location}</p>
			<ul className="list-disc list-inside mt-2 space-y-1 text-left">
				{bulletPoints.map((bulletPoint, index) => {
					return (
						<li key={index} className="custom-bullet">
							{bulletPoint}
						</li>
					);
				})}
			</ul>
		</SimpleCard>
	);

	return (
		<div className={`relative ${className}`}>
			<FadeIn>
				<div
					className={`hidden absolute top-[50%] w-[75%] h-32 border-t-4 border-primary-500 border-dashed -z-10 ${
						dashedLine == "onRight" &&
						"md:block left-full border-r-4 rounded-tr-[40px]"
					} ${
						dashedLine == "onLeft" &&
						"md:block right-full border-l-4 rounded-tl-[40px]"
					}`}
				/>
			</FadeIn>
			{side == "left" ? (
				<SlideRight>{content}</SlideRight>
			) : (
				<SlideLeft>{content}</SlideLeft>
			)}
		</div>
	);
}

export default ExperienceCard;

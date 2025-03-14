import ExperienceCard from "../components/ExperienceCard";
import Section from "../components/Section";
import { useTheme } from "../contexts/ThemeContext";
import { experiences } from "../utils/experiences";

const Experience = () => {
	const { theme } = useTheme();

	return (
		<Section title="Experience">
			<div className="relative hidden md:flex gap-8 justify-between text-left">
				{theme == "light" && (
					<>
						<div className="absolute -z-10 right-[80%] bottom-[80%] opacity-40 w-[20rem] h-[20rem] bg-pumpkin rounded-full blur-3xl" />
						<div className="absolute -z-10 right-[60%] bottom-[65%] opacity-40 w-[20rem] h-[20rem] bg-primary rounded-full blur-3xl" />
					</>
				)}
				<div>
					{experiences
						.filter((_, index) => index % 2 === 0)
						.map((experience, index, array) => (
							<ExperienceCard
								key={index}
								title={experience.title}
								date={experience.date}
								location={experience.location}
								bulletPoints={experience.bulletPoints}
								side="left"
								dashedLine={
									index === array.length - 1 &&
									experiences.length % 2 === 1
										? "none"
										: "onRight"
								}
								className={experience.className}
							/>
						))}
				</div>
				<div>
					{experiences
						.filter((_, index) => index % 2 === 1)
						.map((experience, index, array) => (
							<ExperienceCard
								key={index}
								title={experience.title}
								date={experience.date}
								location={experience.location}
								bulletPoints={experience.bulletPoints}
								side="right"
								dashedLine={
									index === array.length - 1 &&
									experiences.length % 2 === 0
										? "none"
										: "onLeft"
								}
								className={experience.className}
							/>
						))}
				</div>
			</div>
			<div className="md:hidden space-y-4 sm:space-y-8">
				{experiences.map((experience, index) => (
					<ExperienceCard
						key={index}
						title={experience.title}
						date={experience.date}
						location={experience.location}
						bulletPoints={experience.bulletPoints}
						side={index % 2 == 0 ? "left" : "right"}
						dashedLine="none"
						className={experience.className}
					/>
				))}
			</div>
		</Section>
	);
};

export default Experience;

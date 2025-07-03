import ExperienceCard from "../components/ExperienceCard";
import Section from "../components/Section";
import { experiences } from "../utils/experiences";

const Experience = () => {

	return (
		<Section title="Experience">
			<div className="relative hidden md:flex gap-8 justify-between text-left">
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

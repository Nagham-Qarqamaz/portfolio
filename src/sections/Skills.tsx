import React from "react";
import Sphere from "../components/Sphere";
import SlidUp from "../components/animation/SlideUp";
import FadeIn from "../components/animation/FadeIn";
import SimpleCard from "../components/SimpleCard";
import Section from "../components/Section";

const Skills: React.FC = () => (
	<Section title="Skills">
		<div className="flex flex-col items-center mb-12 space-y-12">
			<FadeIn>
				<SimpleCard className="sm:px-8">
					<div className="flex flex-col sm:flex-row items-center sm:space-x-8">
						<div className="relative w-40 h-40 sm:w-48 sm:h-48">
							<Sphere />
						</div>
						<SkillCategory
							title="3D Rendering"
							description="Expertise in creating interactive 3D graphics using various technologies."
							skills={[
								"OpenGL",
								"WebGL",
								"Three.js",
								"Babylon.js",
							]}
							hoverEffect={false}
						/>
					</div>
				</SimpleCard>
			</FadeIn>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<SkillCategory
					title="Frontend & UI Development"
					description="Creating intuitive and responsive user interfaces."
					skills={[
						"React.js",
						"Next.js",
						"HTML",
						"CSS",
						"JavaScript",
						"TypeScript",
						"Tailwind CSS",
					]}
				/>
				<SkillCategory
					title="Problem Solving & Algorithms"
					description="Strong analytical skills for solving complex problems."
					skills={[
						"Algorithms",
						"Data Structures",
						"Problem Solving",
						"Rapid Learning",
					]}
				/>
				<SkillCategory
					title="Design Patterns & Architecture"
					description="Understanding of software design patterns and architecture."
					skills={[
						"Object-Oriented Programming (OOP)",
						"System Design",
						"UML",
						"Software Design Patterns",
					]}
				/>
				<SkillCategory
					title="Backend Development"
					description="Proficiency in server-side development and building scalable backends."
					skills={["Laravel", "Django", "MySQL", "WordPress"]}
				/>
				<SkillCategory
					title="Version Control & Collaboration"
					description="Skills in version control systems and collaborative development."
					skills={["Git", "Teamwork"]}
				/>
				<SkillCategory
					title="Programming Languages"
					description="Experience in a variety of programming languages."
					skills={["PHP", "C++", "C", "C#", "Java", "Python"]}
				/>
			</div>
		</div>
	</Section>
);

interface SkillCategoryProps {
	title: string;
	description: string;
	skills: string[];
	hoverEffect?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
	title,
	description,
	skills,
	hoverEffect = true,
}) => (
	<div>
		<SlidUp>
			<SimpleCard hoverEffect={hoverEffect}>
				<h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
				<p className="mb-4 text-white">{description}</p>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<div key={index} className="flex-grow">
							<FadeIn>
								<div
									key={index}
									className="text-center text-tamarillo-800 bg-white rounded-xl p-[6px] font-[800]"
								>
									{skill}
								</div>
							</FadeIn>
						</div>
					))}
				</div>
			</SimpleCard>
		</SlidUp>
	</div>
);

export default Skills;

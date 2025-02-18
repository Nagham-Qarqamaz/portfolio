import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { getProjects } from "../utils/projects";
import Filters from "../assets/icons/Filters";
import Tick from "../assets/icons/Tick";
import { useTheme } from "../contexts/ThemeContext";

const { projects, projectsSkills } = getProjects();

function Projects() {
	const [orderBy, setOrderBy] = useState("Latest");
	const [showFilters, setShowFilters] = useState(false);
	const [selectedSkills, setSelectedSkills] = useState(
		new Set(projectsSkills)
	);
	const { theme } = useTheme();

	const showedProjects = [...projects]
		.filter((project) =>
			project.skills.some((skill) => selectedSkills.has(skill))
		)
		.sort((a, b) => {
			if (orderBy === "Latest") {
				return b.order.date - a.order.date;
			} else if (orderBy === "Most Interesting") {
				return a.order.interest - b.order.interest;
			} else if (orderBy === "Oldest") {
				return a.order.date - b.order.date;
			}
			return 0;
		});

	const handleSkillChange = (skill: string) => {
		setSelectedSkills((prev) => {
			const updated = new Set(prev);
			if (updated.has(skill)) {
				updated.delete(skill);
			} else {
				updated.add(skill);
			}
			return updated;
		});
	};

	const handleSelectAll = () => {
		if (selectedSkills.size === projectsSkills.size) {
			setSelectedSkills(new Set());
		} else {
			setSelectedSkills(new Set(projectsSkills));
		}
	};

	return (
		<Section title="Projects">
			<div className="relative flex flex-wrap gap-2 mb-4">
				{theme == "light" && (
					<>
						<div className="absolute -z-10 right-[90%] bottom-[90%] opacity-40 w-[26rem] h-[26rem] bg-primary rounded-full blur-3xl" />
						<div className="absolute -z-10 right-[60%] bottom-[65%] opacity-40 w-[20rem] h-[20rem] bg-pumpkin rounded-full blur-3xl" />
					</>
				)}
				<div className="flex flex-wrap gap-2">
					<div>
						<button
							onClick={() => setOrderBy("Latest")}
							className={`px-4 py-2 text-white ${
								orderBy === "Latest"
									? "bg-pumpkin-600"
									: "bg-pumpkin-800"
							} rounded-lg`}
						>
							Latest
						</button>
					</div>
					<div>
						<button
							onClick={() => setOrderBy("Most Interesting")}
							className={`px-4 py-2 text-white ${
								orderBy === "Most Interesting"
									? "bg-pumpkin-600"
									: "bg-pumpkin-800"
							} rounded-lg`}
						>
							Most Interesting
						</button>
					</div>
					<div>
						<button
							onClick={() => setOrderBy("Oldest")}
							className={`px-4 py-2 text-white ${
								orderBy === "Oldest"
									? "bg-pumpkin-600"
									: "bg-pumpkin-800"
							} rounded-lg`}
						>
							Oldest
						</button>
					</div>
					<button
						className="lg:hidden"
						onClick={() => setShowFilters(!showFilters)}
					>
						<Filters />
					</button>
				</div>
				<div className="lg:ml-8 flex-grow justify-items-start lg:w-[30rem]">
					<button
						className="hidden lg:block"
						onClick={() => setShowFilters(!showFilters)}
					>
						<Filters />
					</button>

					<div
						className={`lg:mt-4 transition-all duration-300 ease-in-out ${
							showFilters
								? "max-h-[5000px] opacity-100"
								: "max-h-0 opacity-0"
						} overflow-hidden`}
					>
						<div>
							<label className="flex items-center space-x-2 text-lg font-bold mb-2 cursor-pointer">
								<input
									type="checkbox"
									checked={
										selectedSkills.size ===
										projectsSkills.size
									}
									onChange={handleSelectAll}
									className="hidden"
								/>
								<div
									className={`h-5 w-5 rounded border border-pumpkin ${
										selectedSkills.size ===
										projectsSkills.size
											? "bg-pumpkin"
											: "bg-none"
									}`}
								>
									{selectedSkills.size ===
										projectsSkills.size && <Tick />}
								</div>
								<span>Select All</span>
							</label>

							<div className="flex flex-wrap gap-x-8 mt-4">
								{[...projectsSkills].map((skill) => (
									<label
										key={skill}
										className="w-32 flex items-center space-x-2 mb-2 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={selectedSkills.has(skill)}
											onChange={() =>
												handleSkillChange(skill)
											}
											className="hidden"
										/>
										<div
											className={`h-5 w-5 rounded border border-pumpkin ${
												selectedSkills.has(skill)
													? "bg-pumpkin"
													: "bg-none"
											}`}
										>
											{selectedSkills.has(skill) && (
												<Tick />
											)}
										</div>
										<span>{skill}</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
				{showedProjects.map((project, index) => (
					<ProjectCard
						key={index}
						name={project.name}
						company={project.company}
						description={project.description}
						skills={project.skills.map((skill) => ({
							name: skill,
							isSelected: selectedSkills.has(skill),
						}))}
						videoURL={project.videoURL}
					/>
				))}
			</div>
		</Section>
	);
}

export default Projects;

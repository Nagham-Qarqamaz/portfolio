import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function Projects() {
	const [orderBy, setOrderBy] = useState("Latest");

	const sortedProjects = [...projects].sort((a, b) => {
		if (orderBy === "Latest") {
			return b.order.date - a.order.date;
		} else if (orderBy === "Most Interesting") {
			return a.order.interest - b.order.interest;
		} else if (orderBy === "Oldest") {
			return a.order.date - b.order.date;
		}
		return 0;
	});

	return (
		<Section title="Projects">
			<div className="flex gap-2 mb-6">
				<button
					onClick={() => setOrderBy("Latest")}
					className={`px-4 py-2 ${
						orderBy === "Latest"
							? "bg-pumpkin-500"
							: "bg-pumpkin-800"
					} rounded`}
				>
					Latest
				</button>
				<button
					onClick={() => setOrderBy("Most Interesting")}
					className={`px-4 py-2 ${
						orderBy === "Most Interesting"
							? "bg-pumpkin-500"
							: "bg-pumpkin-800"
					} rounded`}
				>
					Most Interesting
				</button>
				<button
					onClick={() => setOrderBy("Oldest")}
					className={`px-4 py-2 ${
						orderBy === "Oldest"
							? "bg-pumpkin-500"
							: "bg-pumpkin-800"
					} rounded`}
				>
					Oldest
				</button>
			</div>
			<div className="grid grid-cols-2 gap-8">
				{sortedProjects.map((project, index) => (
					<ProjectCard
						key={index}
						name={project.name}
						description={project.description}
						videoURL={project.videoURL}
					/>
				))}
			</div>
		</Section>
	);
}

export default Projects;

const projects = [
	{
		name: "Personal OpenGL Project",
		description:
			"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",
		videoURL:
			"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",
		order: {
			date: 1,
			interest: 3,
		},
	},
	{
		name: "University 4th-year Project",
		description:
			"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",
		videoURL:
			"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",
		order: {
			date: 2,
			interest: 2,
		},
	},
	{
		name: "University 5th-year Project",
		description:
			"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",
		videoURL:
			"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",
		order: {
			date: 3,
			interest: 1,
		},
	},
	{
		name: "IDB",
		description:
			"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",
		videoURL:
			"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",
		order: {
			date: 4,
			interest: 5,
		},
	},
	{
		name: "E-buy",
		description:
			"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",
		videoURL:
			"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",
		order: {
			date: 5,
			interest: 4,
		},
	},
];

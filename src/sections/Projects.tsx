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
							? "bg-pumpkin-700"
							: "bg-pumpkin-900"
					} rounded`}
				>
					Latest
				</button>
				<button
					onClick={() => setOrderBy("Most Interesting")}
					className={`px-4 py-2 ${
						orderBy === "Most Interesting"
							? "bg-pumpkin-700"
							: "bg-pumpkin-900"
					} rounded`}
				>
					Most Interesting
				</button>
				<button
					onClick={() => setOrderBy("Oldest")}
					className={`px-4 py-2 ${
						orderBy === "Oldest"
							? "bg-pumpkin-700"
							: "bg-pumpkin-900"
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
						company={project.company}
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
		company: "personal",
		description:
			"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",
		videoURL:
			"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",
		order: {
			date: 1,
			interest: 4,
		},
	},
	{
		name: "University 4th-year Project",
		company: "university",
		description:
			"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",
		videoURL:
			"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",
		order: {
			date: 2,
			interest: 3,
		},
	},
	{
		name: "University 5th-year Project",
		company: "university",
		description:
			"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",
		videoURL:
			"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",
		order: {
			date: 3,
			interest: 2,
		},
	},
	{
		name: "Other Projects / WordPress",
		company: "aratech",
		description:
			"Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",
		videoURL:
			"https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",
		order: {
			date: 4,
			interest: 9,
		},
	},
	{
		name: "IDB",
		company: "aratech",
		description:
			"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",
		videoURL:
			"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",
		order: {
			date: 5,
			interest: 8,
		},
	},
	{
		name: "E-buy",
		company: "aratech",
		description:
			"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",
		videoURL:
			"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",
		order: {
			date: 6,
			interest: 7,
		},
	},
	{
		name: "Qahwah House",
		company: "DivCodes",
		description:
			"Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",
		videoURL:
			"https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",
		order: {
			date: 7,
			interest: 5,
		},
	},
	{
		name: "DIVPOS",
		company: "DivCodes",
		description:
			"Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",
		videoURL:
			"https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",
		order: {
			date: 8,
			interest: 6,
		},
	},
	{
		name: "Sunglasses Try On",
		company: "Eyes 360",
		description:
			"Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",
		videoURL:
			"https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",
		order: {
			date: 9,
			interest: 1,
		},
	},
];

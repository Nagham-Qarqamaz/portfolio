import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function Projects() {
	return (
		<Section title="Projects">
			<div className="grid grid-cols-2 gap-8">
				<ProjectCard
					name="Personal OpenGL Project"
					description="Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations."
					videoURL="https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7"
				/>
				<ProjectCard
					name="University 4th-Year Project"
					description="Developed using WebGL for the front end. I was responsible for the WebGL implementation and played an active role in project discussions and conceptual development."
					videoURL="https://www.youtube.com/embed/Nw-1ZhRH1qc?si=5sLAjAwFHYfFKsvg"
				/>
				<ProjectCard
					name="University 5th-year Project"
					description="we used three.js and blender for this project. I had various tasks, some of them: build stairs and accurately adjest the camera when going up and down. adjust main points to find the suggested search path for the player when searched. setting borders for the player not to move throught a wall, column, ect... "
					videoURL="https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6"
				/>
				<ProjectCard
					name="E-buy"
					description=""
					videoURL="https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox"
				/>
				<ProjectCard
					name="IDB"
					description=""
					videoURL="https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb"
				/>
			</div>
		</Section>
	);
}

export default Projects;

import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function FunFacts() {
	return (
		<Section title="Fun Facts">
			<div className="max-w-[40rem] mx-auto">
				<ProjectCard
					description="In 2019, I created a problem and solved it in my sleep—literally! While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious. Take a look inside my brain through this video:"
					videoURL="https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku"
				/>
			</div>
		</Section>
	);
}

export default FunFacts;

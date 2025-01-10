import Header from "./components/Header";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";
import Achievements from "./sections/Achievements";
import Languages from "./sections/Languages";
import Container from "./components/Container";
import FunFacts from "./sections/FunFacts";

const App = () => {
	return (
		<div>
			<Header />
			<section id="home">
				<Banner />
			</section>
			<Container>
				<section id="about">
					<About />
				</section>
				<section id="skills">
					<Skills />
				</section>
				<section id="experience">
					<Experience />
				</section>
				<section id="projects">
					<Projects />
				</section>
				<section id="education">
					<Education />
				</section>
				<section id="certificates">
					<Certificates />
				</section>
				<section id="achievements">
					<Achievements />
				</section>
				<section id="fun-facts">
					<FunFacts />
				</section>
				<section id="languages">
					<Languages />
				</section>
			</Container>
		</div>
	);
};

export default App;

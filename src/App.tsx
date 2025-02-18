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
import { useTheme } from "./contexts/ThemeContext";
import { loadImage } from "./utils/loadImage";
import { useMemo } from "react";

const generateRandomCircles = (count = 10) => {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		left: `${Math.random() * 100}%`,
		top: `${Math.random() * 100}%`,
		size: `${Math.random() * 30 + 10}rem`,
		opacity: Math.random() * 0.1 + 0.2,
		color: Math.random() > 0.5 ? "bg-primary" : "bg-pumpkin",
	}));
};

const App = () => {
	const { theme } = useTheme();
	const circles = useMemo(() => generateRandomCircles(100), []);

	return (
		<div
			className={`relative overflow-hidden bg-secondary-800 ${
				theme == "light" ? "text-black" : "text-white"
			}`}
		>
			{theme == "light" &&
				circles.map(({ id, left, top, size, opacity, color }) => (
					<div
						key={id}
						style={{
							left,
							top,
							width: size,
							height: size,
							opacity,
						}}
						className={`absolute rounded-full blur-3xl ${color}`}
					/>
				))}
			<div className="relative z-10">
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
				<img
					className="w-full h-40"
					src={loadImage("images/wave.png")}
				/>
			</div>
		</div>
	);
};

export default App;

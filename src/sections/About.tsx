import Typewriter from "typewriter-effect";
import useShow from "../hooks/useShow";
import FadeIn from "../components/animation/FadeIn";
import Section from "../components/Section";

function About() {
	const [ref, hasShown] = useShow({ threshold: 0.1 });

	return (
		<Section title="About Me">
			<div className="flex justify-between items-center gap-12">
				<div
					ref={ref}
					className="flex-grow self-start text-[1rem] mx-auto text-left h-[18rem]"
				>
					{hasShown && (
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString(
										"<li class='custom-bullet pb-3'><span class='text-pumpkin-400 font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>"
									)
									.pauseFor(300)
									.typeString(
										"<li class='custom-bullet pb-3'><span class='text-pumpkin-400 font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin-400 font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>"
									)
									.pauseFor(300)
									.typeString(
										"<li class='custom-bullet pb-3'>Over 2+ years of experience as a <span class='text-pumpkin-400 font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture, now focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>"
									)
									.pauseFor(300)
									.typeString(
										"<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin-400 font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin-400 font-bold'>problem-solving</span> and code complexity analysis.</li>"
									)
									.pauseFor(300)
									.typeString(
										"<li class='custom-bullet pb-3'><span class='text-pumpkin-400 font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through college projects.</li>"
									)
									.pauseFor(300)
									.typeString(
										"<li class='custom-bullet pb-3'>Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team.</li>"
									)
									.pauseFor(300)
									.start();
							}}
							options={{
								loop: false,
								delay: 1,
								cursor: "",
							}}
						/>
					)}
				</div>
				<FadeIn>
					<img
						className="max-h-[16rem] min-w-[16rem] rounded-[30px]"
						src="/images/on-laptop.png"
					/>
				</FadeIn>
			</div>
		</Section>
	);
}

export default About;

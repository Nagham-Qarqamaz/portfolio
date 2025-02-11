import Typewriter from "typewriter-effect";
import useShow from "../hooks/useShow";
import FadeIn from "../components/animation/FadeIn";
import Section from "../components/Section";
import { loadImage } from "../utils/loadImage";
import LazyImage from "../components/LazyImage";
import { useTheme } from "../contexts/ThemeContext";

function About() {
	const [ref, hasShown] = useShow({ threshold: 0.1 });
	const { theme } = useTheme();

	return (
		<Section title="About Me">
			<div className="flex flex-col md:flex-row justify-between items-center gap-12">
				<div
					ref={ref}
					className="order-1 md:order-0 flex-grow self-start text-[1rem] mx-auto text-left sm:h-[24rem] md:h-[34rem] lg:h-[24rem] xl:h-[18rem]"
				>
					<div className="hidden sm:block">
						{hasShown && (
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(
											"<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>"
										)
										.pauseFor(300)
										.typeString(
											"<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>"
										)
										.pauseFor(300)
										.typeString(
											"<li class='custom-bullet pb-3'>Over 2+ years of experience as a <span class='text-pumpkin font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture, now focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>"
										)
										.pauseFor(300)
										.typeString(
											"<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin font-bold'>problem-solving</span> and code complexity analysis.</li>"
										)
										.pauseFor(300)
										.typeString(
											"<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through college projects.</li>"
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
					<div className="sm:hidden">
						<ul>
							<li className="custom-bullet pb-3">
								<span className="text-pumpkin-400 font-bold">
									Valedictorian
								</span>{" "}
								graduate with a 92.08% rate, excelling in
								problem-solving and data structures.
							</li>
							<li className="custom-bullet pb-3">
								<span className="text-pumpkin-400 font-bold">
									Regional Contestant
								</span>{" "}
								in the Arab and African Collegiate Programming
								Contest (ACPC) and a
								<span className="text-pumpkin-400 font-bold">
									gold medalist
								</span>{" "}
								in ACPC for Girls (2020).
							</li>
							<li className="custom-bullet pb-3">
								Over 2+ years of experience as a{" "}
								<span className="text-pumpkin-400 font-bold">
									Full-Stack Developer
								</span>
								, specializing in Laravel and MVC architecture,
								now focusing on Front-End Development with
								React, Next.js, and RESTful APIs.
							</li>
							<li className="custom-bullet pb-3">
								Proficient in{" "}
								<span className="text-pumpkin-400 font-bold">
									C++ development
								</span>{" "}
								for over 4 years, with expertise in
								<span className="text-pumpkin-400 font-bold">
									problem-solving
								</span>{" "}
								and code complexity analysis.
							</li>
							<li className="custom-bullet pb-3">
								<span className="text-pumpkin-400 font-bold">
									Skilled in 3D rendering
								</span>{" "}
								technologies like OpenGL, WebGL, Three.js, and
								Blender through college projects.
							</li>
							<li className="custom-bullet pb-3">
								Passionate about innovation and committed to
								excellence, ready to contribute effectively to
								any software development team.
							</li>
						</ul>
					</div>
				</div>
				<div className="relative order-0 md:order-1">
					{theme == "light" && (
						<div className="absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-30 w-[30rem] h-[30rem] bg-primary rounded-full blur-3xl" />
					)}
					<div>
						<FadeIn>
							<LazyImage
								className="max-h-[16rem] md:min-w-[16rem] rounded-[30px]"
								src={loadImage("images/on-laptop.png")}
							/>
						</FadeIn>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default About;

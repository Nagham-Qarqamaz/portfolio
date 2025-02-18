import FadeIn from "../components/animation/FadeIn";
import SlideLeft from "../components/animation/SlideLeft";
import SlideRight from "../components/animation/SlideRight";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import { useTheme } from "../contexts/ThemeContext";

const Experience = () => {
	const { theme } = useTheme();

	return (
		<Section title="Experience">
			<div className="relative hidden md:flex gap-8 justify-between text-left">
				{theme == "light" && (
					<>
						<div className="absolute -z-10 right-[80%] bottom-[80%] opacity-40 w-[20rem] h-[20rem] bg-pumpkin rounded-full blur-3xl" />
						<div className="absolute -z-10 right-[60%] bottom-[65%] opacity-40 w-[20rem] h-[20rem] bg-primary rounded-full blur-3xl" />
					</>
				)}
				<div>
					<div className="mt-48 lg:mt-40">{eyes360}</div>
					<div className="mt-44 lg:mt-36">{aratech}</div>
				</div>
				<div>
					<div className="mt-0">{starkTechnologies}</div>
					<div className="mt-44 lg:mt-36">{divcodes}</div>
					<div className="mt-60 lg:mt-44">{icpc}</div>
				</div>
			</div>
			<div className="md:hidden space-y-4 sm:space-y-8">
				{starkTechnologies}
				{eyes360}
				{divcodes}
				{aratech}
				{icpc}
			</div>
		</Section>
	);
};

export default Experience;

const starkTechnologies = (
	<div className="relative">
		<FadeIn>
			<div className="hidden md:block absolute right-full top-20 w-[75%] h-32 border-t-4 border-l-4 border-primary-500 border-dashed rounded-tl-[40px]" />
		</FadeIn>
		<SlideRight>
			<SimpleCard className="p-8">
				<div className="flex justify-between items-center flex-wrap gap-x-8">
					<h3 className="text-xl font-semibold">
						Freelance Web Developer
					</h3>
					<span className="text-pumpkin-100 font-bold">
						11/2024 – Present
					</span>
				</div>
				<p className="italic text-pumpkin-100">
					Stark Technologies, Serbia (Remote)
				</p>
				<ul className="list-disc list-inside mt-2 space-y-1 text-left">
					<li className="custom-bullet">
						Developing diverse projects using React and Next.js.
					</li>
					<li className="custom-bullet">
						Crafting high-performance, interactive frontend
						experiences.
					</li>
				</ul>
			</SimpleCard>
		</SlideRight>
	</div>
);
const eyes360 = (
	<div className="relative">
		<FadeIn>
			<div className="hidden md:block absolute top-28 lg:top-20 left-full w-[75%] h-32 border-t-4 border-r-4 border-primary-500 border-dashed rounded-tr-[40px]" />
		</FadeIn>
		<div className="relative z-10">
			<SlideRight>
				<SimpleCard className="p-8">
					<div className="flex justify-between items-center flex-wrap gap-x-8">
						<h3 className="text-xl font-semibold">
							Freelance Web Developer
						</h3>
						<span className="text-pumpkin-100 font-bold">
							08/2024 – Present
						</span>
					</div>
					<p className="italic text-pumpkin-100">
						Eyes360, Cairo, Egypt (Remote)
					</p>
					<ul className="list-disc list-inside mt-2 space-y-1 text-left">
						<li className="custom-bullet">
							Working on WebGL projects, integrating 3D rendering
							into web applications.
						</li>
						<li className="custom-bullet">
							Delivering optimized, interactive frontend
							solutions.
						</li>
					</ul>
				</SimpleCard>
			</SlideRight>
		</div>
	</div>
);
const divcodes = (
	<div className="relative">
		<FadeIn>
			<div className="hidden md:block absolute right-full top-24 w-[75%] h-32 border-t-4 border-l-4 border-primary-500 border-dashed rounded-tl-[40px]" />
		</FadeIn>
		<SlideLeft>
			<SimpleCard className="p-8">
				<div className="flex justify-between items-center flex-wrap gap-x-8">
					<h3 className="text-xl font-semibold">
						Front-End Web Developer
					</h3>
					<span className="text-pumpkin-100 font-bold">
						02/2024 – 09/2024
					</span>
				</div>
				<p className="italic text-pumpkin-100">
					Divcodes, Beirut, Lebanon (Remote)
				</p>
				<ul className="list-disc list-inside mt-2 space-y-1 text-left">
					<li className="custom-bullet">
						Worked in Front-End Development using React, Next.js,
						and TypeScript.
					</li>
					<li className="custom-bullet">
						Involved in 2 projects, enhancing React development
						skills.
					</li>
					<li className="custom-bullet">
						Utilized RESTful APIs in both projects and integrated
						Next.js.
					</li>
				</ul>
			</SimpleCard>
		</SlideLeft>
	</div>
);
const aratech = (
	<div className="relative z-10">
		<SlideRight>
			<SimpleCard className="p-8">
				<div className="flex justify-between items-center flex-wrap gap-x-8">
					<h3 className="text-xl font-semibold">
						Full-Stack Web Developer
					</h3>
					<span className="text-pumpkin-100 font-bold">
						09/2022 – 02/2024
					</span>
				</div>
				<p className="italic text-pumpkin-100">
					Aratech, Dubai, UAE (Remote)
				</p>
				<ul className="list-disc list-inside mt-2 space-y-1 text-left">
					<li className="custom-bullet">
						Gained 1.5 years of experience in Laravel and MVC
						architecture.
					</li>
					<li className="custom-bullet">
						Worked on 10+ projects using HTML, CSS, JavaScript.
					</li>
					<li className="custom-bullet">
						Developed 5+ projects using PHP, Laravel Framework,
						Tailwind, and jQuery.
					</li>
					<li className="custom-bullet">
						Contributed to 2 projects using Laravel Nova and Google
						Map API.
					</li>
					<li className="custom-bullet">
						Worked on 5 WordPress projects.
					</li>
				</ul>
			</SimpleCard>
		</SlideRight>
	</div>
);
const icpc = (
	<div className="relative">
		<FadeIn>
			<div className="hidden md:block absolute right-full top-0 w-[75%] h-32 border-b-4 border-l-4 border-primary-500 border-dashed rounded-bl-[40px]" />
		</FadeIn>
		<SlideLeft>
			<SimpleCard className="p-8">
				<div className="flex justify-between items-center flex-wrap gap-x-8">
					<h3 className="text-xl font-semibold">
						ICPC Contestant - Problem Setter - Coach
					</h3>
					<span className="text-pumpkin-100 font-bold">
						2018 – 2021
					</span>
				</div>
				<ul className="list-disc list-inside mt-2 space-y-1 text-left">
					<li className="custom-bullet">
						Regional Contestant in ACPC 2021.
					</li>
					<li className="custom-bullet">
						Silver medal in the SCPC 2021.
					</li>
					<li className="custom-bullet">
						Golden medal in the Girls ACPC 2020.
					</li>
					<li className="custom-bullet">
						Problem Setter at SCPC 2020.
					</li>
					<li className="custom-bullet">
						Expert rank on Codeforces website.
					</li>
				</ul>
			</SimpleCard>
		</SlideLeft>
	</div>
);

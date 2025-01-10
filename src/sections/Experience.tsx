import FadeIn from "../components/animation/FadeIn";
import SlideLeft from "../components/animation/SlideLeft";
import SlideRight from "../components/animation/SlideRight";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";

const Experience = () => (
	<Section title="Experience">
		<div className="flex gap-8 justify-between text-left">
			<div className="space-y-[12rem]">
				{/* Freelance Web Developer - Eyes360 */}
				<div className="relative">
					<FadeIn>
						<div className="absolute top-20 left-full w-[75%] h-32 border-t-4 border-r-4 border-tamarillo border-dashed rounded-tr-[40px]" />
					</FadeIn>
					<SlideRight>
						<SimpleCard className="p-8">
							<div className="flex justify-between items-center">
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
							<ul className="list-disc list-inside mt-2 space-y-1">
								<li className="custom-bullet">
									Working on WebGL projects, integrating 3D
									rendering into web applications.
								</li>
								<li className="custom-bullet">
									Delivering optimized, interactive frontend
									solutions.
								</li>
							</ul>
						</SimpleCard>
					</SlideRight>
				</div>

				{/* Full-Stack Developer - Aratech */}
				<div className="relative z-10">
					<SlideRight>
						<SimpleCard className="p-8">
							<div className="flex justify-between items-center">
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
							<ul className="list-disc list-inside mt-2 space-y-1">
								<li className="custom-bullet">
									Gained 1.5 years of experience in Laravel
									and MVC architecture.
								</li>
								<li className="custom-bullet">
									Worked on 10+ projects using HTML, CSS,
									JavaScript.
								</li>
								<li className="custom-bullet">
									Developed 5+ projects using PHP, Laravel
									Framework, Tailwind, and jQuery.
								</li>
								<li className="custom-bullet">
									Contributed to 2 projects using Laravel Nova
									and Google Map API.
								</li>
								<li className="custom-bullet">
									Worked on 5 WordPress projects.
								</li>
							</ul>
						</SimpleCard>
					</SlideRight>
				</div>
			</div>

			<div className="space-y-[15rem] mt-[11rem]">
				{/* Front-End Developer - Divcodes */}
				<div className="relative">
					<FadeIn>
						<div className="absolute right-full top-44 lg:top-24 w-[75%] h-32 border-t-4 border-l-4 border-tamarillo border-dashed rounded-tl-[40px]" />
					</FadeIn>
					<SlideLeft>
						<SimpleCard className="p-8">
							<div className="flex justify-between items-center">
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
							<ul className="list-disc list-inside mt-2 space-y-1">
								<li className="custom-bullet">
									Worked in Front-End Development using React,
									Next.js, and TypeScript.
								</li>
								<li className="custom-bullet">
									Involved in 2 projects, enhancing React
									development skills.
								</li>
								<li className="custom-bullet">
									Utilized RESTful APIs in both projects and
									integrated Next.js.
								</li>
							</ul>
						</SimpleCard>
					</SlideLeft>
				</div>

				{/* ICPC Contestant and Coach */}
				<div className="relative">
					<FadeIn>
						<div className="absolute right-full top-20 lg:top-0 w-[75%] h-32 border-b-4 border-l-4 border-tamarillo border-dashed rounded-bl-[40px]" />
					</FadeIn>
					<SlideLeft>
						<SimpleCard className="p-8">
							<div className="flex justify-between items-center">
								<h3 className="text-xl font-semibold">
									ICPC Contestant - Problem Setter - Coach
								</h3>
								<span className="text-pumpkin-100 font-bold">
									2018 – 2021
								</span>
							</div>
							<ul className="list-disc list-inside mt-2 space-y-1">
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
			</div>
		</div>
	</Section>
);

export default Experience;

import SlideRight from "../components/animation/SlideRight";
import SlideLeft from "../components/animation/SlideLeft";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";

const Achievements = () => (
	<Section title="Achievements">
		<div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-8">
			<SlideRight>
				<SimpleCard className="p-8">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-semibold">
							Sharpening Skills Through Noon's Selection Process
						</h3>
						<span className="text-pumpkin-100 font-bold">2023</span>
					</div>
					<p className="italic text-pumpkin-100">Dubai, UAE</p>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li className="custom-bullet">
							Completed a rigorous hiring process with noon, a
							leading e-commerce company.
						</li>
						<li className="custom-bullet">
							Solved 14 out of 16 problems in a problem-solving
							test and succeeded in 3 interviews.
						</li>
						<li className="custom-bullet">
							Enhanced knowledge in e-commerce, databases, and
							systems through 4+ months of training.
						</li>
						<li className="custom-bullet">
							Solved 30+ SQL problems on LeetCode and 15+ on
							HackerRank.
						</li>
					</ul>
				</SimpleCard>
			</SlideRight>

			<SlideLeft>
				<SimpleCard className="p-8">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-semibold">
							Expert Ranking on Codeforces
						</h3>
						<span className="text-pumpkin-100 font-bold">
							2018 – 2021
						</span>
					</div>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li className="custom-bullet">
							Demonstrated expertise in solving algorithmic
							problems using data structures.
						</li>
					</ul>
				</SimpleCard>
			</SlideLeft>

			<SlideRight>
				<SimpleCard className="p-8">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-semibold">
							Top ICPC Medals:
						</h3>
					</div>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li className="custom-bullet">
							Gold Medalist, ACPC for Girls (2020)
						</li>
						<li className="custom-bullet">
							Silver Medal, SCPC (2021)
						</li>
					</ul>
				</SimpleCard>
			</SlideRight>
		</div>
	</Section>
);

export default Achievements;

import Section from "../components/Section";

const Achievements = () => (
	<Section title="Achievements">
		<div className="max-w-4xl mx-auto text-left space-y-10">
			{/* Noon Software Engineer Program */}
			<div>
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-semibold">
						Prime Candidate: Noon’s Next Software Engineer
					</h3>
					<span className="text-gray-500">2023 | Dubai, UAE</span>
				</div>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>
						Completed a rigorous hiring process with noon, a leading
						e-commerce company.
					</li>
					<li>
						Solved 14 out of 16 problems in a problem-solving test
						and succeeded in 3 interviews.
					</li>
					<li>
						Enhanced knowledge in e-commerce, databases, and systems
						through 4+ months of training.
					</li>
					<li>
						Solved 30+ SQL problems on LeetCode and 15+ on
						HackerRank.
					</li>
				</ul>
			</div>

			{/* Codeforces Expert Ranking */}
			<div>
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-semibold">
						Expert Ranking on Codeforces
					</h3>
					<span className="text-gray-500">2018 – 2021</span>
				</div>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>
						Demonstrated expertise in solving algorithmic problems
						using data structures.
					</li>
				</ul>
			</div>

			{/* Other Achievements */}
			<div>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Gold Medalist, ACPC for Girls (2020)</li>
					<li>Silver Medal, SCPC (2021)</li>
				</ul>
			</div>
		</div>
	</Section>
);

export default Achievements;

import SlidUp from "../components/animation/SlideUp";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";

function Languages() {
	const languages = [
		{ language: "Arabic", proficiency: "Native", prof_desc: null },
		{
			language: "English",
			proficiency: "C1 Level",
			prof_desc: "Full working proficiency",
		},
		{
			language: "Spanish",
			proficiency: "B1 Level",
			prof_desc: "Limited working proficiency",
		},
	];

	return (
		<Section title="Languages">
			<SlidUp>
				<div className="w-[40rem] mx-auto">
					<SimpleCard>
						<div className="px-8">
							{languages.map((lang, idx) => (
								<div
									key={idx}
									className="flex justify-between items-center py-3"
								>
									<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200">
										{lang.language}
									</h3>
									<span className="text-xl text-gray-300">
										{lang.prof_desc && (
											<span className="mr-4 text-sm text-pumpkin-200 italic">
												{lang.prof_desc}
											</span>
										)}
										{lang.proficiency}
									</span>
								</div>
							))}
						</div>
					</SimpleCard>
				</div>
			</SlidUp>

			<SlidUp>
				<video
					src="/videos/languages.mp4"
					width="600"
					controls
					className="mx-auto mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
				></video>
			</SlidUp>
		</Section>
	);
}

export default Languages;

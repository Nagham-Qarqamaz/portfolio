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
				<div className="max-w-[40rem] mx-auto">
					<SimpleCard>
						<div className="px-8">
							{languages.map((lang, idx) => (
								<div
									key={idx}
									className="flex flex-col sm:flex-row justify-between items-center py-3"
								>
									<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200">
										{lang.language}
									</h3>
									<span className="hidden sm:block text-xl text-white">
										{lang.prof_desc && (
											<span className="mr-4 text-sm text-pumpkin-200 italic">
												{lang.prof_desc}
											</span>
										)}
										{lang.proficiency}
									</span>
									<div className="sm:hidden text-sm text-pumpkin-200 italic">
										{lang.prof_desc}
									</div>
									<div className="sm:hidden text-xl text-white">
										{lang.proficiency}
									</div>
								</div>
							))}
						</div>
					</SimpleCard>
				</div>
			</SlidUp>

			<SlidUp>
				<iframe
					className="max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
					src="https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</SlidUp>
		</Section>
	);
}

export default Languages;

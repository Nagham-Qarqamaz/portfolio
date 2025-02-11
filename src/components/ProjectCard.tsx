import FadeIn from "./animation/FadeIn";
import SimpleCard from "./SimpleCard";

interface ProjectCardProps {
	name?: string;
	company?: string;
	description?: string;
	skills?: { name: string; isSelected: boolean }[];
	videoURL?: string;
}

function ProjectCard({
	name,
	company,
	description,
	skills,
	videoURL,
}: ProjectCardProps) {
	console.log(skills);

	return (
		<SimpleCard>
			<div className="flex flex-col justify-between h-full">
				<div className="text-center mb-4">
					{name && <h3 className="text-xl font-semibold">{name}</h3>}
					{company && <p>({company})</p>}
					{description && (
						<p className="mt-2 space-y-1 text-base text-left">
							{description}
						</p>
					)}
					{skills && (
						<div className="flex flex-wrap gap-2 mt-4">
							{skills.map((skill, index) => (
								<div key={index} className="flex-grow">
									<FadeIn>
										<div
											key={index}
											className={`text-center text-primary-800 rounded-xl p-[6px] font-[800] ${
												skill.isSelected
													? "bg-white"
													: "bg-gray-400"
											}`}
										>
											{skill.name}
										</div>
									</FadeIn>
								</div>
							))}
						</div>
					)}
				</div>
				{videoURL && (
					<iframe
						className="w-full h-[19rem] rounded-xl"
						src={videoURL}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				)}
			</div>
		</SimpleCard>
	);
}

export default ProjectCard;

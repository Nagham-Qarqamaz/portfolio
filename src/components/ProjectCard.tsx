import SimpleCard from "./SimpleCard";

interface ProjectCardProps {
	name?: string;
	company?: string;
	description?: string;
	videoURL?: string;
}

function ProjectCard({
	name,
	company,
	description,
	videoURL,
}: ProjectCardProps) {
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

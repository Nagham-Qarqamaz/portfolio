import ImageCard from "../components/ImageCard";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import { loadImage } from "../utils/loadImage";

const Education = () => (
	<Section title="Education">
		<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
			<div className="flex flex-wrap justify-center gap-4">
				<ImageCard
					src={loadImage("certificates/Graduation Certificate.jpg")}
					title="Graduation Certificate"
				/>
				<ImageCard
					src={loadImage("certificates/Bachelor's Degree.jpg")}
					title="Bachelor's Degree"
				/>
			</div>
			<SimpleCard className="p-8">
				<div className="text-left">
					<div className="flex flex-wrap gap-8 justify-between items-center">
						<h3 className="text-xl font-semibold">
							Bachelor of Software Engineering
						</h3>
						<span className="text-pumpkin-100 font-bold">
							2018 – 2022
						</span>
					</div>
					<p className="italic text-pumpkin-100">
						Tishreen University, Latakia, Syria
					</p>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li>Valedictorian with an average of 92.08%</li>
						<li>GPA: 3.50/4.0</li>
					</ul>
				</div>
			</SimpleCard>
		</div>
	</Section>
);

export default Education;

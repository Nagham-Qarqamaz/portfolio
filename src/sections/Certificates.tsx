import FadeIn from "../components/animation/FadeIn";
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";

function Certificates() {
	return (
		<Section glow={false} title="Certificates">
			<FadeIn>
				<div className="shadow-pumpkin p-8 rounded-[3rem]">
					<div>
						<div className="text-3xl font-semibold mb-6">
							Al-Basel Certificates for Academic Excellence
						</div>
						<div className="flex justify-center gap-4">
							<ImageCard
								src="/certificates/Al-Basel Certificate - 1st year.jpg"
								title="2017 / 2018"
							/>

							<ImageCard
								src="/certificates/Al-Basel Certificate - 2nd year.jpg"
								title="2018 / 2019"
							/>

							<ImageCard
								src="/certificates/Al-Basel Certificate - 3rd year.jpg"
								title="2019 / 2020"
							/>

							<ImageCard
								src="/certificates/Al-Basel Certificate - 4th year.jpg"
								title="2020 / 2021"
							/>

							<ImageCard
								src="/certificates/Al-Basel Certificate - 5th year.jpg"
								title="2021 / 2022"
							/>
						</div>
					</div>
				</div>
			</FadeIn>
			<FadeIn>
				<div className="shadow-pumpkin p-8 rounded-[3rem] mt-16">
					<div>
						<div className="text-3xl font-semibold mb-6">
							International Collegiate Programming Contest
							Certificates
						</div>
						<div className="flex flex-col">
							<div className="flex justify-between gap-4">
								<div className="bg-dark-800 p-8 rounded-[3rem]">
									<div className="text-lg font-semibold mb-6">
										The 2018 International Collegiate
										Programming Contest
									</div>
									<div className="flex justify-center gap-4">
										<ImageCard
											src="/certificates/ICPC 2018 - TCPC - Fifty Eighth Place.jpg"
											title="Tishreen University"
										/>

										<ImageCard
											src="/certificates/ICPC 2018 - SCPC - Sixteenth Place.jpg"
											title="SCPC: Syrian"
										/>
									</div>
								</div>
								<div className="bg-dark-800 p-8 rounded-[3rem]">
									<div className="text-lg font-semibold mb-6">
										The 2019 International Collegiate
										Programming Contest
									</div>
									<div className="flex justify-center gap-4">
										<ImageCard
											src="/certificates/ICPC 2019 - TCPC - Eighteenth Place.jpg"
											title="Tishreen University"
										/>

										<ImageCard
											src="/certificates/ICPC 2019 - SCPC - Eighth Place.jpg"
											title="SCPC: Syrian"
										/>
									</div>
								</div>
							</div>
							<div className="bg-dark-800 p-8 rounded-[3rem]">
								<div className="text-lg font-semibold mb-6">
									The 2020 Africa and Arab Collegiate
									Programming Contest for GIRLS
								</div>
								<div className="flex justify-center gap-4">
									<ImageCard
										src="/certificates/GirlsACPC 2020 - Fourth Place.jpg"
										title="Fourth Place"
									/>

									<ImageCard
										src="/certificates/GirlsACPC 2020 - Extreme Programmers.jpg"
										title="Extreme Programmers"
									/>

									<ImageCard
										src="/certificates/GirlsACPC 2020 - Solid Programmers.jpg"
										title="Solid Programmers"
									/>

									<ImageCard
										src="/certificates/GirlsACPC 2020 - Steadfast Gurus.jpg"
										title="Steadfast Gurus"
									/>

									<ImageCard
										src="/certificates/GirlsACPC 2020 - First to solve problem A.jpg"
										title="First to solve problem A"
									/>
								</div>
							</div>
							<div className="bg-dark-800 p-8 rounded-[3rem]">
								<div className="text-lg font-semibold mb-6">
									The 2022 International Collegiate
									Programming Contest
								</div>
								<div className="flex justify-center gap-4">
									<ImageCard
										src="/certificates/ICPC 2022 - TCPC - Fourth Place.jpg"
										title="Tishreen University"
									/>
									<ImageCard
										src="/certificates/ICPC 2022 - SCPC - Seventh Place.jpg"
										title="SCPC: Syrian"
									/>
									<ImageCard
										src="/certificates/ICPC 2022 - ACPC - Fifty Seventh Place.jpg"
										title="ACPC: Arabic"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FadeIn>
		</Section>
	);
}

export default Certificates;

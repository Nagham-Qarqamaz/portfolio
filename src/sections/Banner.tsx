import Codeforces from "../assets/icons/Codeforces";
import Date from "../assets/icons/Date";
import Email from "../assets/icons/Email";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import FadeIn from "../components/animation/FadeIn";
import SlideLeft from "../components/animation/SlideLeft";
import SlideRight from "../components/animation/SlideRight";
import Container from "../components/Container";

const Banner = () => {
	return (
		<div className="bg-[url('/images/cover.jpg')] bg-cover">
			<div className="h-screen bg-[#000000E9]">
				<Container>
					<div className="relative h-screen flex justify-between items-center">
						<div>
							<SlideRight>
								<div className="text-[1.4rem] flex flex-col gap-2">
									<div className="flex items-center gap-6">
										<Email />
										<a
											href="mailto:nagham.qarqamaz.kp@gmail.com"
											className="hover:underline"
										>
											nagham.qarqamaz.kp@gmail.com
										</a>
									</div>
									<div className="flex items-center gap-6">
										<Phone />
										<a
											href="tel:+963992803522"
											className="hover:underline"
										>
											+963 992 803 522
										</a>
									</div>
									<div className="flex items-center gap-6">
										<WhatsApp />
										<a
											href="https://wa.me/+963992803522"
											className="hover:underline"
											target="_blank"
										>
											+963 992 803 522
										</a>
									</div>
									<div className="flex items-center gap-6">
										<Location />
										<div>
											<a
												href="https://www.google.com/maps/place/Latakia,+Syria"
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline"
											>
												Syria, Latakia
											</a>
											<span className="text-pumpkin text-[1.2rem] italic ml-2">
												(Willing To Relocate)
											</span>
										</div>
									</div>
									<div className="flex items-center gap-6">
										<Date />
										<div>November 10th, 1999</div>
									</div>
									<div className="flex items-center gap-6">
										<LinkedIn />
										<a
											href="https://www.linkedin.com/in/nagham-qarqamaz/"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline"
										>
											/in/nagham-qarqamaz
										</a>
									</div>
									<div className="flex items-center gap-6">
										<Codeforces />
										<a
											href="https://codeforces.com/profile/Nagham_Qarqamaz"
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline"
										>
											/profile/Nagham_Qarqamaz
										</a>
									</div>
								</div>
							</SlideRight>
						</div>
						<div className="flex-grow">
							<SlideLeft>
								<div className="flex flex-col items-center justify-center text-white">
									<FadeIn>
										<img
											className="mb-4 h-[13rem] rounded-[30px]"
											src="/images/sketch.png"
										/>
									</FadeIn>
									<h1 className="text-[3rem] font-bold">
										Nagham Qarqamaz
									</h1>
									<p className="text-[1.4rem]">
										Software Engineer & Full-Stack Developer
									</p>
									<a
										href="/resume/Nagham Qarqamaz Resume.pdf"
										download="Nagham Qarqamaz Resume.pdf"
										className="mt-6 text-2xl bg-pumpkin-600 hover:bg-pumpkin-700 px-4 py-2 rounded transform hover:scale-105 transition-transform duration-300 inline-block"
									>
										Download Resume
									</a>
								</div>
							</SlideLeft>
						</div>
					</div>
				</Container>
			</div>
			<div className="h-[2rem] bg-gradient-to-b from-black to-dark-900" />
		</div>
	);
};

export default Banner;

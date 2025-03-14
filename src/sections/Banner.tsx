import { useState } from "react";
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
import LazyImage from "../components/LazyImage";
import { useTheme } from "../contexts/ThemeContext";
import { loadImage } from "../utils/loadImage";

const Banner = () => {
	const { theme } = useTheme();
	const [loading, setLoading] = useState(false);

	const handleDownload = async () => {
		setLoading(true);
		try {
			const link = document.createElement("a");
			link.href = loadImage("resume/Nagham Qarqamaz Resume.pdf");
			link.download = "Nagham Qarqamaz Resume.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error downloading file:", error);
		} finally {
			setTimeout(() => setLoading(false), 2000);
		}
	};

	return (
		<div className="bg-[url('/images/cover.jpg')] bg-cover">
			<div
				className={`${
					theme === "light" ? "bg-[#FFFFFFDD]" : "bg-[#000000DD]"
				} min-h-screen relative`}
			>
				<img
					className="absolute bottom-0 w-full h-40"
					src={loadImage("images/wave.png")}
				/>
				<Container>
					<div className="font-bold relative min-h-screen flex flex-col sm:flex-row justify-between items-center gap-8 py-20">
						<div className="order-1 sm:order-0">
							<SlideRight>
								<div className="lg:text-[1.2rem] flex flex-col gap-2">
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
											<span className="text-pumpkin lg:text-[1.2rem] italic ml-2">
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
						<div className="flex-grow order-0 sm:order-1">
							<SlideLeft>
								<div className="flex flex-col items-center justify-center text-center">
									<FadeIn>
										<LazyImage
											className="mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]"
											imgClass="shadow-primary"
											src={loadImage("images/sketch.png")}
										/>
									</FadeIn>
									<h1 className="text-[1.8rem] lg:text-[3rem] mb-2">
										Nagham Qarqamaz
									</h1>
									<p className="lg:text-[1.3rem]">
										Software Engineer & Full-Stack Developer
									</p>
									<button
										onClick={handleDownload}
										className="text-white mt-6 text-xl lg:text-2xl bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-2xl transform hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
										disabled={loading}
									>
										{loading ? (
											<>
												<img
													className="w-7 h-7"
													src={loadImage(
														"images/loading.gif"
													)}
												/>
												Downloading...
											</>
										) : (
											"Download Resume"
										)}
									</button>
								</div>
							</SlideLeft>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Banner;

import { useState } from "react";
import FadeIn from "../components/animation/FadeIn";
import SlideLeft from "../components/animation/SlideLeft";
import SlideRight from "../components/animation/SlideRight";
import Container from "../components/Container";
import LazyImage from "../components/LazyImage";
import { useTheme } from "../contexts/ThemeContext";
import { loadImage } from "../utils/loadImage";
import Button from "../components/Button";
import ContactInfo from "../components/ContactInfo";

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
                                <ContactInfo />
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
                                    <Button
                                        text="Download Resume"
                                        onClick={handleDownload}
                                        loading={loading}
                                        loadingText="Downloading..."
                                    />
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

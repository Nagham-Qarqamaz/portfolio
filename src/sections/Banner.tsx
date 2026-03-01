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
    const [resumeLoading, setResumeLoading] = useState(false);

    const handleResumeDownload = async () => {
        setResumeLoading(true);
        try {
            const link = document.createElement("a");
            link.href =
                "https://drive.google.com/uc?export=download&id=1y28hFL12G0CY4RWtNMtOrWqFDVZqoLSp";
            link.download = "Nagham_Qarqamaz_Work_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading work resume:", error);
        } finally {
            setTimeout(() => setResumeLoading(false), 2000);
        }
    };

    const resumeButtons = (
        <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <Button
                text="Download Resume"
                onClick={handleResumeDownload}
                loading={resumeLoading}
                loadingText="Downloading..."
                fixedWidth={true}
            />
        </div>
    );

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
                    <div className="font-bold relative min-h-screen flex flex-col sm:flex-row sm:justify-between items-center gap-8 py-20">
                        <div className="order-1 sm:order-0">
                            <SlideRight>
                                <ContactInfo />
                                <div className="sm:hidden">{resumeButtons}</div>
                            </SlideRight>
                        </div>
                        <div className="sm:flex-grow order-0 sm:order-1">
                            <SlideLeft>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <FadeIn>
                                        <LazyImage
                                            className="mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]"
                                            imgClass={
                                                theme == "light"
                                                    ? "shadow-primary"
                                                    : "shadow-pumpkin"
                                            }
                                            src={loadImage("images/sketch.png")}
                                        />
                                    </FadeIn>
                                    <h1 className="text-[1.8rem] lg:text-[3rem] mb-2">
                                        Nagham Qarqamaz
                                    </h1>
                                    <p className="lg:text-[1.3rem]">
                                        Software Engineer & Full-Stack Developer
                                    </p>
                                    <div className="hidden sm:block">
                                        {resumeButtons}
                                    </div>
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

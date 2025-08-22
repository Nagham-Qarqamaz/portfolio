import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import Button from "../components/Button";
import HighschoolTranscript from "../components/HighschoolTranscript";
import UniversityTranscript from "../components/UniversityTranscript";
import { useTheme } from "../contexts/ThemeContext";
import FadeIn from "../components/animation/FadeIn";
import UniversityEducation from "../components/UniversityEducation";
import UniversityProjects from "../components/UniversityProjects";
import HighSchoolEducation from "../components/HighSchoolEducation";

const Education = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <Section glow={false} title="Education">
            <div className="flex flex-col gap-8 space-y-16">
                <FadeIn>
                    <SimpleCard hoverEffect={false}>
                        <div className="text-center p-2">
                            <h3 className="text-2xl font-semibold mb-4">
                                Educational Certificates
                            </h3>
                            <p
                                className={`text-lg ${
                                    theme === "light"
                                        ? "text-gray-700"
                                        : "text-gray-300"
                                }`}
                            >
                                View all my educational certificates, academic
                                excellence awards, graduation documents, and
                                collegiate programming contest achievements from
                                my university period in the dedicated
                                certificates section.
                            </p>
                            <Button
                                text="View All Certificates"
                                onClick={() =>
                                    navigate("/portfolio/certificates")
                                }
                                loading={false}
                                loadingText=""
                                variant="white"
                            />
                        </div>
                    </SimpleCard>
                </FadeIn>

                <FadeIn>
                    <div
                        className={`${
                            theme == "light"
                                ? "text-primary-900"
                                : "shadow-pumpkin bg-secondary-900"
                        } overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                    >
                        <div className="text-3xl font-semibold mb-6">
                            University Education
                        </div>
                        <div className="space-y-12">
                            <FadeIn>
                                <UniversityEducation />
                            </FadeIn>
                            <FadeIn>
                                <UniversityProjects theme={theme} />
                            </FadeIn>
                            <FadeIn>
                                <SimpleCard hoverEffect={false}>
                                    <UniversityTranscript />
                                </SimpleCard>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div
                        className={`${
                            theme == "light"
                                ? "text-primary-900"
                                : "shadow-pumpkin bg-secondary-900"
                        } overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                    >
                        <div className="text-3xl font-semibold mb-6">
                            Secondary School Education
                        </div>
                        <div className="space-y-12">
                            <FadeIn>
                                <HighSchoolEducation />
                            </FadeIn>
                            <FadeIn>
                                <SimpleCard hoverEffect={false}>
                                    <HighschoolTranscript />
                                </SimpleCard>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};

export default Education;

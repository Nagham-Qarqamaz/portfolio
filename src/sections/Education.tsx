import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import Button from "../components/Button";
import HighschoolTranscript from "../components/HighschoolTranscript";
import UniversityTranscript from "../components/UniversityTranscript";
import { useTheme } from "../contexts/ThemeContext";
import UniversityEducation from "../components/UniversityEducation";
import UniversityProjects from "../components/UniversityProjects";
import HighSchoolEducation from "../components/HighSchoolEducation";
import ThemedContainer from "../components/ThemedContainer";

const Education = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <Section glow={false} title="Education">
            <div className="flex flex-col gap-8">
                <ThemedContainer>
                    <div className="text-3xl font-semibold mb-6">
                        Educational Certificates
                    </div>
                    <SimpleCard hoverEffect={false}>
                        <div className="text-center p-2">
                            <p className="text-lg mb-4">
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
                </ThemedContainer>

                <ThemedContainer>
                    <div className="text-3xl font-semibold mb-6">
                        University Education
                    </div>
                    <div className="space-y-12">
                        <UniversityEducation />
                        <UniversityProjects theme={theme} />
                        <SimpleCard hoverEffect={false}>
                            <UniversityTranscript />
                        </SimpleCard>
                    </div>
                </ThemedContainer>

                <ThemedContainer>
                    <div className="text-3xl font-semibold mb-6">
                        Secondary School Education
                    </div>
                    <div className="space-y-12">
                        <HighSchoolEducation />
                        <SimpleCard hoverEffect={false}>
                            <HighschoolTranscript />
                        </SimpleCard>
                    </div>
                </ThemedContainer>
            </div>
        </Section>
    );
};

export default Education;

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
import AccordionCard from "../components/AccordionCard";
import AccordionContainer from "../components/AccordionContainer";

const Education = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <Section glow={false} title="Education">
            <AccordionContainer>
                <AccordionCard title="Educational Certificates">
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
                </AccordionCard>

                <AccordionCard title="University Education">
                    <div className="space-y-12">
                        <UniversityEducation />
                        <UniversityProjects theme={theme} />
                        <SimpleCard hoverEffect={false}>
                            <UniversityTranscript />
                        </SimpleCard>
                    </div>
                </AccordionCard>

                <AccordionCard title="Secondary School Education">
                    <div className="space-y-12">
                        <HighSchoolEducation />
                        <SimpleCard hoverEffect={false}>
                            <HighschoolTranscript />
                        </SimpleCard>
                    </div>
                </AccordionCard>
            </AccordionContainer>
        </Section>
    );
};

export default Education;

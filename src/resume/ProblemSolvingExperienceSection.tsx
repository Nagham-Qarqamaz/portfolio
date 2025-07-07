import ExperienceCard from "./ExperienceCard";
import ResumeSectionTitle from "./ResumeSectionTitle";

function ProblemSolvingExperienceSection() {
    return (
        <div>
            <ResumeSectionTitle text="PROBLEM SOLVING EXPERIENCE" />
            <div>
                <ExperienceCard
                    title="ICPC Competitor · Problem Setter · Coach"
                    organization="International Collegiate Programming Contest"
                    date="2018 - 2021"
                    bulletPoints={[
                        "Gold Medalist (4th place), ACPC for Girls 2020.",
                        "Silver Medalist (7th place), SCPC 2021.",
                        "Competed in ACPC 2021 as Tishreen University’s regional contestant.",
                        "Authored problems for SCPC 2020.",
                        "Reached Expert rank on Codeforces (2018–2021).",
                        "Received 12 certificates recognizing participation and achievements in ICPC contests.",
                        "Provided mentorship and training to over 30 younger participants preparing for ICPC competitions.",
                    ]}
                />
            </div>
        </div>
    );
}

export default ProblemSolvingExperienceSection;

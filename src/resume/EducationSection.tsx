import ExperienceCard from "./ExperienceCard";
import ResumeSectionTitle from "./ResumeSectionTitle";

function EducationSection() {
    return (
        <div>
            <ResumeSectionTitle text="EDUCATION" />
            <div>
                <ExperienceCard
                    title="Bachelor of Software Engineering"
                    organization="Tishreen University"
                    date="2018 - 2022"
                    location="Latakia, Syria"
                    bulletPoints={[
                        "Valedictorian with an average of 92.08% (approx. GPA: 3.8/4.0).",
                        "Awarded Al-Basel Certificates for Academic Excellence consecutively from 2017 to 2022.",
                        "Obtained deep experience in algorithms, data structures, and complexity through 4 years of competitive programming contests.",
                    ]}
                />
            </div>
        </div>
    );
}

export default EducationSection;

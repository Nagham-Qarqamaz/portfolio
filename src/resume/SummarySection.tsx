import ResumeSectionTitle from "./ResumeSectionTitle";
import ResumeUnorderedList from "./ResumeUnorderedList";

function SummarySection() {
    return (
        <div>
            <ResumeSectionTitle text="SUMMARY" />
            <div>
                <p>
                    Valedictorian Software Engineer with 3+ years of experience
                    building high-impact frontend and full-stack applications.
                    Gold Medalist in ACPC for Girls, combining competitive
                    programming skills with practical product delivery.
                </p>
                <ResumeUnorderedList
                    items={[
                        "Delivered 15+ scalable projects with optimized performance and clean architecture.",
                        "Fast learner and problem solver, writing maintainable code and adapting quickly.",
                        "Boosted development speed by 80% using AI-assisted tools.",
                        "Expanding backend expertise and integrating advanced 3D web technologies.",
                    ]}
                />
            </div>
        </div>
    );
}

export default SummarySection;

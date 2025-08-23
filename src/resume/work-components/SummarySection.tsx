import ResumeSectionTitle from "../ResumeSectionTitle";
import ResumeUnorderedList from "../ResumeUnorderedList";

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
                        "Fast learner, built a functional app using 2 new frameworks after just 4 days of learning.",
                        "Problem solver with over 4 years of experience during college, solved 768 problems on Codeforces and many more on other platforms. Earned 12 certifications in programming contests.",
                        "Boosted development speed by 80% using AI-assisted tools.",
                        "Gained backend experience by solving 26 MySQL problems on LeetCode and building a few backend apps. Currently aiming to strengthen and expand my backend development skills.",
                        "Experience in Web 3D rendering with 2 academic projects and 1 professional project.",
                    ]}
                />
            </div>
        </div>
    );
}

export default SummarySection;

import ResumeSectionTitle from "../ResumeSectionTitle";
import ResumeUnorderedList from "../ResumeUnorderedList";

// Academic Skills Section
const AcademicSkillsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="TECHNICAL SKILLS" />
            <div className="space-y-4 text-[15px]">
                <div>
                    <div className="text-[15px] font-bold mb-2">
                        Programming Languages
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "C++ (Expert level - ICPC)",
                            "JavaScript/TypeScript",
                            "Python, Java, PHP, C, C#",
                        ]}
                    />
                </div>
                <div>
                    <div className="text-[15px] font-bold mb-2">
                        Web Development
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "React.js, Next.js, Angular",
                            "Laravel, Django, Spring Boot",
                            "WebGL, Babylon.js, Three.js",
                            "RESTful APIs, MySQL",
                        ]}
                    />
                </div>
                <div>
                    <div className="text-[15px] font-bold mb-2">
                        Academic Specializations
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "Algorithm Design & Analysis",
                            "Machine Learning & AI",
                            "Software Engineering",
                            "Competitive Programming",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default AcademicSkillsSection;
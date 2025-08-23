import ResumeSectionTitle from "../ResumeSectionTitle";
import ResumeUnorderedList from "../ResumeUnorderedList";

// Academic Summary Section
const AcademicSummarySection = () => {
    return (
        <div className="text-[15px]">
            <ResumeSectionTitle text="ACADEMIC PROFILE" />
            <div>
                <p>
                    Valedictorian Informatics Engineering graduate combining exceptional academic performance with proven software development expertise. 
                    Seeking advanced academic opportunities to further develop research skills and contribute to technological innovation.
                </p>
                <ResumeUnorderedList
                    items={[
                        "Maintained #1 ranking throughout entire academic career from high school through university graduation.",
                        "9 perfect scores (100%) including Linear Algebra, Theory of Computation, Computer-aided Drawing, and Compiler Structure.",
                        "Strong theoretical foundation in algorithms, machine learning, and software engineering with practical application experience.",
                        "Expert-level competitive programmer with 768+ problems solved and extensive coaching experience.",
                        "3+ years of professional experience applying academic knowledge to real-world projects.",
                        "Multilingual capabilities: Native Arabic, Professional English (C1), Working Spanish (B1).",
                        "Proven fast learner: Built full application with Spring Boot and Angular in 4 days from zero knowledge.",
                    ]}
                />
            </div>
        </div>
    );
};

export default AcademicSummarySection;
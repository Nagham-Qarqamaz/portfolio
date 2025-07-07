import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import LanguagesSection from "./LanguagesSection";
import ProblemSolvingExperienceSection from "./ProblemSolvingExperienceSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

const ResumeBody = () => {
    return (
        <div className="flex mt-12 gap-20">
            <div className="w-[65%] space-y-8">
                <ExperienceSection />
                <ProblemSolvingExperienceSection />
            </div>
            <div className="w-[35%] space-y-8">
                <SummarySection />
                <SkillsSection />
                <EducationSection />
                <LanguagesSection />
            </div>
        </div>
    );
};

export default ResumeBody;

import AcademicEducationSection from "./AcademicEducationSection";
import CompetitionAchievementsSection from "./CompetitionAchievementsSection";
import AcademicProfessionalExperienceSection from "./AcademicProfessionalExperienceSection";
import AcademicReferencesSection from "./AcademicReferencesSection";
import AcademicSummarySection from "./AcademicSummarySection";
import AcademicSkillsSection from "./AcademicSkillsSection";
import AcademicAdditionalAchievementsSection from "./AcademicAdditionalAchievementsSection";
import AcademicLanguagesSection from "./AcademicLanguagesSection";

// Academic Body Component
const AcademicResumeBody = () => {
    return (
        <div>
            <div className="flex mt-6 gap-8">
                <div className="w-[68%] space-y-6">
                    <AcademicEducationSection />
                    <CompetitionAchievementsSection />
                    <AcademicProfessionalExperienceSection />
                </div>
                <div className="w-[32%] space-y-5">
                    <AcademicSummarySection />
                    <AcademicSkillsSection />
                    <AcademicAdditionalAchievementsSection />
                    <AcademicLanguagesSection />
                </div>
            </div>
            <div className="mt-8">
                <AcademicReferencesSection />
            </div>
        </div>
    );
};

export default AcademicResumeBody;
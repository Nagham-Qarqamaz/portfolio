import ResumeSectionTitle from "../ResumeSectionTitle";
import ResumeUnorderedList from "../ResumeUnorderedList";

// Additional Achievements Section
const AcademicAdditionalAchievementsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="ADDITIONAL ACHIEVEMENTS" />
            <div className="space-y-4 text-[15px]">
                <div>
                    <div className="text-[15px] font-bold">
                        Fast Learning Capability
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "Spring Boot/Angular mastery: Zero to functional application in 4 days.",
                            "Manager testimonial: 'Exceptional progression from minimal experience to complex implementations' - Toni Elias, Aratech.",
                        ]}
                    />
                </div>
                <div>
                    <div className="text-[15px] font-bold">
                        Problem-Solving Excellence
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "768+ Codeforces problems solved, 45+ SQL challenges completed (LeetCode/HackerRank).",
                            "First-year student qualifying for Syrian CPC (national level competition).",
                            "Early algorithm exposure through competitions enhanced formal coursework understanding.",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default AcademicAdditionalAchievementsSection;
import ResumeSectionTitle from "../ResumeSectionTitle";
import AcademicExperienceCard from "./AcademicExperienceCard";

// Competition Achievements Section
const CompetitionAchievementsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="COMPETITIVE PROGRAMMING ACHIEVEMENTS" />
            <div className="space-y-4">
                <AcademicExperienceCard
                    title="International Collegiate Programming Contest (ICPC)"
                    organization="ICPC Foundation"
                    date="2018 - 2021"
                    bulletPoints={[
                        "Girls' ACPC 2020: Gold Medal (4th Place) - Individual competition with 4 special awards: First to Solve, Extreme Programmers, Solid Programmers, Steadfast Gurus.",
                        "TCPC 2021: 4th Place - Only team to solve exclusive problem.",
                        "SCPC 2021: Silver Medal (7th Place) in Syrian national contest.",
                        "Problem Setter for Aleppo CPC 2020.",
                        "Codeforces Expert rank (peak rating during 2018-2021).",
                        "Core skills developed: Advanced algorithms, data structures, rapid problem-solving, teamwork under pressure.",
                        "Coaching impact: Trained 30+ ICPC participants in competitive programming fundamentals.",
                    ]}
                />
            </div>
        </div>
    );
};

export default CompetitionAchievementsSection;
import Email from "../assets/icons/Email";
import LinkedIn from "../assets/icons/LinkedIn";
import Phone from "../assets/icons/Phone";
import Website from "../assets/icons/Website";
import Date from "../assets/icons/Date";
import Location from "../assets/icons/Location";
import ResumeSectionTitle from "./ResumeSectionTitle";
import ResumeUnorderedList from "./ResumeUnorderedList";

// Academic Resume Header Component
const AcademicResumeHeader = () => {
    return (
        <div className="text-center mb-6">
            <div className="text-[36px] font-bold mb-2">NAGHAM QARQAMAZ</div>
            <div className="text-[#008CFF] text-[24px] mb-2">
                Software Engineer Pursuing Advanced Studies
            </div>
            <div className="text-[16px] text-[#3D3D3D] mb-4">
                <Location className="!fill-[#3D3D3D] !w-4 !h-4 inline mr-1" />
                Latakia, Syria
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap text-[14px]">
                <div className="flex items-center gap-1">
                    <Phone className="!fill-[#008CFF] !w-4 !h-4" />
                    <a className="underline" href="https://wa.me/+963992803522">
                        +963992803522
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <Email className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="mailto:nagham.qarqamaz.kp@gmail.com"
                    >
                        nagham.qarqamaz.kp@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <LinkedIn className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="https://linkedin.com/in/nagham-qarqamaz"
                    >
                        linkedin.com/in/nagham-qarqamaz
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <Website className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="https://nagham-qarqamaz.github.io/portfolio/"
                    >
                        nagham-qarqamaz.github.io/portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

// Academic Experience Card Component
interface AcademicExperienceCardProps {
    title: string;
    organization: string;
    date: string;
    location?: string;
    bulletPoints: string[];
}

const AcademicExperienceCard = ({
    title,
    organization,
    date,
    location,
    bulletPoints,
}: AcademicExperienceCardProps) => {
    return (
        <div className="mb-4">
            <div className="text-[20px] font-bold">{title}</div>
            <div className="text-[17px] font-bold text-[#008CFF]">
                {organization}
            </div>
            <div className="flex gap-4 text-[#3D3D3D] text-[14px] mb-1">
                <div className="flex gap-1 items-center">
                    <Date className="!text-[#3D3D3D] !w-3 !h-3" />
                    {date}
                </div>
                {location && (
                    <div className="flex gap-1 items-center">
                        <Location className="!fill-[#3D3D3D] !w-3 !h-3" />
                        {location}
                    </div>
                )}
            </div>
            <div className="text-[#3D3D3D] text-[14px]">
                <ResumeUnorderedList items={bulletPoints} />
            </div>
        </div>
    );
};

// Academic Summary Section
const AcademicSummarySection = () => {
    return (
        <div>
            <ResumeSectionTitle text="ACADEMIC PROFILE" />
            <div>
                <p>
                    Valedictorian Informatics Engineering graduate from Tishreen
                    University with 92.08% overall average, 5 consecutive years
                    of Academic Excellence Awards (2017-2022), and Gold Medal at
                    Girls' ACPC 2020. Combining academic excellence with 3+
                    years of professional software development experience.
                    Seeking advanced academic opportunities to further develop
                    research skills and contribute to technological innovation.
                </p>
                <ResumeUnorderedList
                    items={[
                        "Graduated with Honors from Tishreen University with 92.08% overall average in Informatics Engineering.",
                        "Perfect scores in multiple university subjects: Linear Algebra (100%), Theory of Computation (100%), Computer-aided Drawing (100%).",
                        "Awarded Al-Basel Academic Excellence Certificates for 5 consecutive years (2017-2022).",
                        "Gold Medalist (4th Place) at Girls' Arab Collegiate Programming Contest 2020 with multiple special awards.",
                        "Expert rank on Codeforces with 4+ years of competitive programming experience and coaching 30+ participants.",
                        "3+ years of professional software development experience with international companies (Aratech, Divcodes, Eyes360).",
                        "Strong academic foundation with recommendation letters from multiple university professors and work certificates.",
                    ]}
                />
            </div>
        </div>
    );
};

// Academic Education Section
const AcademicEducationSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="EDUCATION" />
            <div className="space-y-4">
                <AcademicExperienceCard
                    title="Bachelor in Informatics Engineering - Software and Information Systems"
                    organization="Tishreen University"
                    date="2017 - 2022"
                    location="Latakia, Syria"
                    bulletPoints={[
                        "Graduated with Honors (Valedictorian) - Overall average: 92.08% with 'Excellent' appreciation.",
                        "Outstanding academic performance: Year 2 (96.16%), Year 1 (94.3%), Year 3 (93.5%), Year 4 (91.58%).",
                        "Achieved 9 perfect scores (100%) and excelled in core subjects: Algorithms (87%), Software Engineering (96%), Operating Systems (99%), Computer Networks (87%), Databases (98%), Web Applications (92%).",
                        "Awarded Al-Basel Certificates for Academic Excellence for 5 consecutive years (2018-2022).",
                        "Specialized in algorithms, data structures, software engineering, 3D graphics, and web applications.",
                        "4th Year Project (96%): Developed interactive WebGL interface for problem-solving website, applying OpenGL expertise to web environment.",
                        "Graduation Project (97%): Built 3D virtual campus tour using Three.js and Blender, implementing pathfinding, collision detection, and camera controls.",
                        "Applied 3D rendering skills from academic projects (OpenGL, WebGL, Three.js) to professional work at Eyes360, developing real-time face tracking applications.",
                        "Active member of competitive programming team with regional experience (Arab and North Africa competitions).",
                    ]}
                />
                <AcademicExperienceCard
                    title="General Certificate of High School Education"
                    organization="Martyr Jihad Nasour Secondary School"
                    date="2015 - 2017"
                    location="Latakia, Syria"
                    bulletPoints={[
                        "Scientific Section specialization with 95.9% overall average.",
                        "Perfect score in English Language (300/300 - 100%).",
                        "Near-perfect scores: Physics (99.8%), Mathematics (99.7%).",
                        "Top student in all academic years in a highly competitive environment.",
                        "Strong foundation in sciences, mathematics, and languages.",
                    ]}
                />
            </div>
        </div>
    );
};

// Competition Achievements Section
const CompetitionAchievementsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="COMPETITION ACHIEVEMENTS" />
            <div className="space-y-4">
                <AcademicExperienceCard
                    title="Girls' Arab Collegiate Programming Contest - Gold Medal"
                    organization="ACPC Organization"
                    date="2020"
                    bulletPoints={[
                        "4th Place Overall (Gold Medal) - Top performer among participating teams from across the Arab world.",
                        "First to Solve Problem A - Demonstrated exceptional speed and accuracy under pressure.",
                        "Extreme Programmers Award - Recognition for outstanding programming skills and technique.",
                        "Solid Programmers Award - Acknowledgment of consistent performance throughout competition.",
                        "Steadfast Gurus Award - Honor for persistence and systematic problem-solving approach.",
                        "One of the most prestigious achievements in competitive programming for female participants in the Arab region.",
                    ]}
                />
                <AcademicExperienceCard
                    title="International Collegiate Programming Contest (ICPC)"
                    organization="ICPC Foundation"
                    date="2018 - 2021"
                    bulletPoints={[
                        "TCPC 2021: 4th Place - Best performance in regional competition representing Tishreen University.",
                        "SCPC 2021: 7th Place (Silver Medal) - Consistent top-10 performance in Syrian national contest.",
                        "ACPC 2021: Regional Contestant - Competed at the highest level representing Tishreen University.",
                        "SCPC 2019: 8th Place - Maintained excellence across multiple years of competition.",
                        "SCPC 2018: 16th Place - Strong debut performance in competitive programming at university level.",
                        "Problem Setter for SCPC 2020 - Contributed to contest design and problem creation.",
                        "Expert rank on Codeforces (2018-2021) - Demonstrated consistent high-level algorithmic problem-solving.",
                        "Received 12 certificates recognizing participation and achievements in ICPC contests.",
                        "Coached and mentored 30+ younger participants preparing for ICPC competitions.",
                    ]}
                />
            </div>
        </div>
    );
};

// Academic Skills Section
const AcademicSkillsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="TECHNICAL SKILLS" />
            <div className="space-y-4">
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

// Languages Section
const LanguagesSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="LANGUAGES" />
            <div className="space-y-2">
                <div className="flex justify-between text-[14px]">
                    <span className="font-semibold">Arabic</span>
                    <span className="text-[#3D3D3D]">Native Speaker</span>
                </div>
                <div className="flex justify-between text-[14px]">
                    <span className="font-semibold">English</span>
                    <span className="text-[#3D3D3D]">
                        Full Professional Proficiency (C1)
                    </span>
                </div>
                <div className="flex justify-between text-[14px]">
                    <span className="font-semibold">Spanish</span>
                    <span className="text-[#3D3D3D]">
                        Limited Working Proficiency (B1)
                    </span>
                </div>
                <div className="flex justify-between text-[14px]">
                    <span className="font-semibold">French</span>
                    <span className="text-[#3D3D3D]">
                        Elementary Proficiency (School Level)
                    </span>
                </div>
                <div className="flex justify-between text-[14px]">
                    <span className="font-semibold">Korean</span>
                    <span className="text-[#3D3D3D]">
                        Basic Reading & Writing (Hangul)
                    </span>
                </div>
            </div>
        </div>
    );
};

// References Section
const ReferencesSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="REFERENCES" />
            <div className="space-y-3">
                <div>
                    <div className="text-[15px] font-bold mb-2">
                        Academic References
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <div className="text-[14px] font-bold">
                                Dr. Raed Jaberi
                            </div>
                            <div className="text-[13px] text-[#008CFF]">
                                Professor, Tishreen Univ.
                            </div>
                            <div className="text-[12px] text-[#3D3D3D]">
                                Ph.D., TU Ilmenau, Germany
                            </div>
                            <div className="text-[12px] text-[#7f8c8d]">
                                Jaberi.raed@gmail.com
                            </div>
                        </div>
                        <div>
                            <div className="text-[14px] font-bold">
                                Dr. Basel Hasan
                            </div>
                            <div className="text-[13px] text-[#008CFF]">
                                Lecturer, Informatics
                            </div>
                            <div className="text-[12px] text-[#3D3D3D]">
                                Ph.D., U. Oldenburg, Germany
                            </div>
                            <div className="text-[12px] text-[#7f8c8d]">
                                basel.hasan@tishreen.edu.sy
                            </div>
                        </div>
                        <div>
                            <div className="text-[14px] font-bold">
                                Dr. Gaith Bilal
                            </div>
                            <div className="text-[13px] text-[#008CFF]">
                                Assistant Professor
                            </div>
                            <div className="text-[12px] text-[#3D3D3D]">
                                Ph.D., Applied Math & Programming
                            </div>
                            <div className="text-[12px] text-[#7f8c8d]">
                                gaithbelal7@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-[15px] font-bold mb-2">
                        Professional References
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <div className="text-[14px] font-bold">
                                Toni Elias
                            </div>
                            <div className="text-[13px] text-[#008CFF]">
                                Manager, Aratech
                            </div>
                            <div className="text-[12px] text-[#3D3D3D]">
                                Dubai, UAE
                            </div>
                            <div className="text-[12px] text-[#7f8c8d]">
                                toni1elias@outlook.com
                            </div>
                        </div>
                        <div>
                            <div className="text-[14px] font-bold">
                                Ali Jaber
                            </div>
                            <div className="text-[13px] text-[#008CFF]">
                                Technical Lead, Divcodes
                            </div>
                            <div className="text-[12px] text-[#3D3D3D]">
                                Beirut, Lebanon
                            </div>
                            <div className="text-[12px] text-[#7f8c8d]">
                                admin@divcodes.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Professional Experience Section
const ProfessionalExperienceSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="POST-GRADUATION PROFESSIONAL EXPERIENCE" />
            <div className="text-[14px] text-[#3D3D3D] mb-4 italic">
                Applied academic knowledge in professional software development
                roles following university graduation
            </div>
            <div className="space-y-3">
                <AcademicExperienceCard
                    title="Web Developer"
                    organization="Anon (Stark Technologies)"
                    date="11/2024 - Present"
                    location="Serbia (Remote)"
                    bulletPoints={[
                        "Built bilingual Next.js website with modern UI/UX, delivering 20+ pages within 1 month.",
                        "Updated production Shopify project with 6,100+ customers, integrating multiple APIs.",
                    ]}
                />
                <AcademicExperienceCard
                    title="Frontend Web Developer"
                    organization="Eyes360"
                    date="08/2024 - 01/2025"
                    location="Cairo, Egypt (Remote)"
                    bulletPoints={[
                        "Applied university 3D graphics knowledge to develop real-time face and hand tracking applications using Babylon.js.",
                        "Implemented advanced computer vision algorithms with motion latency under 50ms.",
                    ]}
                />
                <AcademicExperienceCard
                    title="Front-End Web Developer"
                    organization="Divcodes"
                    date="02/2024 - 09/2024"
                    location="Beirut, Lebanon (Remote)"
                    bulletPoints={[
                        "Developed scalable React applications applying software engineering principles from academic studies.",
                        "Received professional recommendation certificate recognizing technical performance.",
                    ]}
                />
                <AcademicExperienceCard
                    title="Full-Stack Web Developer"
                    organization="Aratech"
                    date="09/2022 - 02/2024"
                    location="Dubai, UAE (Remote)"
                    bulletPoints={[
                        "First professional role post-graduation, applying algorithms and database knowledge to real-world projects.",
                        "Received experience certificate for 1.5+ years of professional software development.",
                    ]}
                />
            </div>
        </div>
    );
};

// Additional Achievements Section
const AdditionalAchievementsSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="ADDITIONAL ACHIEVEMENTS" />
            <div className="space-y-4">
                <div>
                    <div className="text-[15px] font-bold">
                        Fast Learning Capability
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "Built fully functional application using Spring Boot and Angular after just 4 days - starting from zero knowledge of these frameworks and learning them completely from scratch.",
                            "Toni Elias (Manager at Aratech, see references) impressed with rapid learning progression: started with minimal web development experience but immediately contributed to full-stack solutions, advancing from simple tasks to complex implementations.",
                        ]}
                    />
                </div>
                <div>
                    <div className="text-[15px] font-bold">
                        Problem-Solving Excellence
                    </div>
                    <ResumeUnorderedList
                        items={[
                            "Solved 768+ problems on Codeforces and hundreds more on various platforms.",
                            "Solved 30+ SQL problems on LeetCode and 15+ on HackerRank during Noon training.",
                            "Developed exceptional problem-solving skills through ICPC participation during college years: qualified for Syrian CPC from first participation as a first-year student, culminating in Gold Medal at Girls' ACPC 2020. Excelled simultaneously in academic and practical programming while ICPC provided early exposure to algorithms and complexity theory before formal coursework, creating deeper understanding of computer science fundamentals.",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

// Academic Body Component
const AcademicResumeBody = () => {
    return (
        <div className="flex mt-6 gap-8">
            <div className="w-[68%] space-y-6">
                <AcademicEducationSection />
                <CompetitionAchievementsSection />
                <ProfessionalExperienceSection />
                <ReferencesSection />
            </div>
            <div className="w-[32%] space-y-5">
                <AcademicSummarySection />
                <AcademicSkillsSection />
                <AdditionalAchievementsSection />
                <LanguagesSection />
            </div>
        </div>
    );
};

const ResumeAcademic = () => {
    return (
        <div className="p-8 text-black">
            <style>
                {`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                        color: #000000;
                    }
                    
                `}
            </style>
            <AcademicResumeHeader />
            <AcademicResumeBody />
        </div>
    );
};

export default ResumeAcademic;

import ResumeSectionTitle from "../ResumeSectionTitle";
import AcademicExperienceCard from "./AcademicExperienceCard";

// Academic Education Section
const AcademicEducationSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="EDUCATION" />
            <div className="space-y-4">
                <AcademicExperienceCard
                    title="Bachelor in Informatics Engineering - Software and Information Systems"
                    organization="Tishreen University"
                    date="2018 - 2022"
                    location="Latakia, Syria"
                    bulletPoints={[
                        "Valedictorian with 92.08% overall average - 'Excellent' appreciation.",
                        "Consistent #1 ranking across all 5 years (2018-2022) with Al-Basel Excellence Awards.",
                        "Year-by-year performance: Y1: 94.3%, Y2: 96.16%, Y3: 93.5%, Y4: 91.58%, Y5: 84.9%.",
                        "Core subject excellence: Operating Systems (99%), Databases (98%), Software Engineering (96%), Web Applications (92%).",
                        "Specialized track: Software and Information Systems with focus on 3D graphics and algorithms.",
                        "4th Year Project (96%): Interactive WebGL interface integrating OpenGL expertise.",
                        "Graduation Project (97%): 3D virtual campus tour with pathfinding and collision detection using Three.js/Blender.",
                        "Teaching experience: Developed materials for GATE Library (8+ subjects) and instructed at START Institute.",
                        "ICPC team member with regional competition experience (details in Competition section).",
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

export default AcademicEducationSection;
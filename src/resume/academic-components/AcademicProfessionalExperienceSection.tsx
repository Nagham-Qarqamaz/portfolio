import ResumeSectionTitle from "../ResumeSectionTitle";
import AcademicExperienceCard from "./AcademicExperienceCard";

// Professional Experience Section
const AcademicProfessionalExperienceSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="POST-GRADUATION PROFESSIONAL EXPERIENCE" />
            <div className="space-y-3">
                <AcademicExperienceCard
                    title="Web Developer"
                    organization="Anon (Stark Technologies)"
                    date="11/2024 - 07/2025"
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
                        "Applied academic 3D rendering expertise to commercial AR/VR applications.",
                        "Developed virtual try-on features: makeup (WebGL), sunglasses and watches (Babylon.js).",
                        "Integrated Google Face/Hand Landmarks for real-time tracking and model positioning.",
                    ]}
                />
                <AcademicExperienceCard
                    title="Front-End Web Developer"
                    organization="Divcodes"
                    date="02/2024 - 09/2024"
                    location="Beirut, Lebanon (Remote)"
                    bulletPoints={[
                        "Developed 3+ scalable React/Next.js applications with TypeScript.",
                        "Integrated 30+ RESTful APIs across multiple client projects.",
                    ]}
                />
                <AcademicExperienceCard
                    title="Full-Stack Web Developer"
                    organization="Aratech"
                    date="09/2022 - 02/2024"
                    location="Dubai, UAE (Remote)"
                    bulletPoints={[
                        "First post-graduation role: 15-person team collaboration on 10+ projects.",
                        "Full-stack development: Laravel, PHP, JavaScript, WordPress, Google Maps API.",
                    ]}
                />
            </div>
        </div>
    );
};

export default AcademicProfessionalExperienceSection;

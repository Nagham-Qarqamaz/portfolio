import ExperienceCard from "./ExperienceCard";
import ResumeSectionTitle from "../ResumeSectionTitle";

function ExperienceSection() {
    return (
        <div>
            <ResumeSectionTitle text="EXPERIENCE" />
            <div>
                <div className="border-b border-[#CCCCCC] border-dashed pb-4">
                    <ExperienceCard
                        title="Web Developer"
                        organization="Anon"
                        date="11/2024 - 07/2025"
                        location="Serbia (Remote)"
                        bulletPoints={[
                            "Built a full-scale bilingual Next.js website with modern UI/UX and responsive design, delivering 20+ pages within 1 month.",
                            "Updated a production Shopify project with 6,100+ customers, learning Liquid and integrating multiple third-party APIs.",
                        ]}
                    />
                </div>
                <div className="border-b border-[#CCCCCC] border-dashed py-4">
                    <ExperienceCard
                        title="Frontend Web Developer"
                        organization="Eyes360"
                        date="08/2024 - 01/2025"
                        location="Cairo, Egypt (Remote)"
                        bulletPoints={[
                            "Developed makeup try-on feature: eyebrow color application using Google Face Landmarks with WebGL for real-time eyebrow coloring.",
                            "Built sunglasses try-on system by detecting face movements with Google Landmarks and adjusting 3D model position/rotation using Babylon.js.",
                            "Created watch try-on feature using hand tracking with Google Landmarks to position and adjust watch models on user's hand.",
                        ]}
                    />
                </div>
                <div className="border-b border-[#CCCCCC] border-dashed py-4">
                    <ExperienceCard
                        title="Front-End Web Developer"
                        organization="Divcodes"
                        date="02/2024 - 09/2024"
                        location="Beirut, Lebanon (Remote)"
                        bulletPoints={[
                            "Developed 3+ scalable React and Next.js applications with TypeScript.",
                            "Integrated 30+ RESTful APIs to connect frontend with backend systems.",
                            "Led frontend components for client-facing dashboards and e-commerce features across 20+ interactive pages.",
                        ]}
                    />
                </div>
                <div className="pt-4">
                    <ExperienceCard
                        title="Full-Stack Web Developer"
                        organization="Aratech"
                        date="09/2022 - 02/2024"
                        location="Dubai, UAE (Remote)"
                        bulletPoints={[
                            "Collaborated with a 15-person dev team on 10+ projects using Laravel, JavaScript, and Tailwind CSS.",
                            "Built 5+ admin dashboards using Laravel Nova with Google Maps API integrations.",
                            "Contributed to 5+ WordPress websites, including full custom theme development.",
                            "Gained extensive experience working onsite in a friendly and highly collaborative team of around 15 members for a Dubai-based company.",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;

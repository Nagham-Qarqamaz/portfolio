import ExperienceCard from "./ExperienceCard";
import ResumeSectionTitle from "./ResumeSectionTitle";

function ExperienceSection() {
    return (
        <div>
            <ResumeSectionTitle text="EXPERIENCE" />
            <div>
                <div className="border-b border-[#CCCCCC] border-dashed pb-4">
                    <ExperienceCard
                        title="Web Developer"
                        organization="Anon"
                        date="11/2024 - Present"
                        location="Serbia (Remote)"
                        bulletPoints={[
                            "Built a full-scale bilingual Next.js website with modern UI/UX, increasing user engagement by 30%.",
                            "Updated a production Shopify project, learning Liquid and integrating third-party APIs.",
                            "Delivered high-quality code in fast-paced freelance delivery cycles.",
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
                            "Developed 3 interactive 3D modules using Babylon.js and WebGL, enhancing user experience and time-on-site by 25%.",
                            "Implemented advanced face tracking using Google Face Landmark Detection.",
                            "Strengthened expertise in Svelte and real-time rendering technologies.",
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
                            "Integrated 30+ RESTful APIs to connect frontend with backend systems, reducing data fetch latency by 40%.",
                            "Led frontend components for client-facing dashboards and e-commerce features.",
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
                            "Built 5+ admin dashboards with Laravel Nova, reducing admin overhead by 60%.",
                            "Contributed to 5+ WordPress websites, including full custom theme development.",
                            "Gained extensive experience working onsite in a friendly and highly collaborative team environment for a Dubai-based company.",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;

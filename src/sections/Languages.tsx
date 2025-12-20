import SlidUp from "../components/animation/SlideUp";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";

function Languages() {
    const languages = [
        { language: "Arabic", proficiency: "Native", prof_desc: null },
        {
            language: "English",
            proficiency: "C1 Level",
            link: "https://drive.google.com/file/d/1jnZlaxyqg4_9l8pHE78WWs4QJDBMRJii/view?usp=drive_link",
            prof_desc: "Full Professional Proficiency",
        },
        {
            language: "Spanish",
            proficiency: "B1 Level",
            prof_desc: "Limited Working Proficiency",
        },
        {
            language: "French",
            proficiency: "School Level",
            prof_desc: "Elementary Proficiency",
        },
        {
            language: "Korean",
            proficiency: "Basic",
            prof_desc: "Reading & Writing (Hangul)",
        },
    ];

    return (
        <Section title="Languages">
            <SlidUp>
                <div className="max-w-[40rem] mx-auto">
                    <SimpleCard>
                        <div className="px-8">
                            {languages.map((lang, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col sm:flex-row justify-between items-center py-3"
                                >
                                    <div className="flex gap-2 items-center">
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200">
                                            {lang.language}
                                        </h3>
                                        {lang.link && (
                                            <a href={lang.link} target="_blank">
                                                <svg
                                                    fill="#FFFFFF"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20px"
                                                    height="20px"
                                                    viewBox="0 0 52 52"
                                                    enable-background="new 0 0 52 52"
                                                >
                                                    <g>
                                                        <path
                                                            d="M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17
		c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9
		c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z"
                                                        />
                                                        <path
                                                            d="M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21
		C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28
		c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <span className="hidden sm:block text-xl text-white">
                                        {lang.prof_desc && (
                                            <span className="mr-4 text-sm text-pumpkin-200 italic">
                                                {lang.prof_desc}
                                            </span>
                                        )}
                                        {lang.proficiency}
                                    </span>
                                    <div className="sm:hidden text-sm text-pumpkin-200 italic">
                                        {lang.prof_desc}
                                    </div>
                                    <div className="sm:hidden text-xl text-white">
                                        {lang.proficiency}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SimpleCard>
                </div>
            </SlidUp>

            <SlidUp>
                <iframe
                    className="max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-4 sm:mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    src="https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </SlidUp>
        </Section>
    );
}

export default Languages;

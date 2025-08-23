import ResumeSectionTitle from "../ResumeSectionTitle";

// Languages Section
const AcademicLanguagesSection = () => {
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

export default AcademicLanguagesSection;
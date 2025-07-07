import ResumeSectionTitle from "./ResumeSectionTitle";

function LanguagesSection() {
    return (
        <div>
            <ResumeSectionTitle text="LANGUAGES" />
            <div className="flex border-b border-[#CCCCCC] border-dashed pb-1">
                <div className="w-20">Arabic</div>
                <div className="text-[#3D3D3D]">Native</div>
            </div>
            <div className="flex border-b border-[#CCCCCC] border-dashed py-1">
                <div className="w-20">English</div>
                <div className="text-[#3D3D3D]">
                    Full Professional Proficiency (C1 Level)
                </div>
            </div>
            <div className="flex pt-1">
                <div className="w-20">Spanish</div>
                <div className="text-[#3D3D3D]">
                    Limited Working Proficiency (B1 Level)
                </div>
            </div>
        </div>
    );
}

export default LanguagesSection;

import ResumeSectionTitle from "../ResumeSectionTitle";

// References Section
const AcademicReferencesSection = () => {
    return (
        <div>
            <ResumeSectionTitle text="REFERENCES" />
            <div className="flex gap-8">
                <div className="w-[68%]">
                    <div className="text-[18px] font-bold mb-2">
                        Academic References
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <div className="text-[15px] font-bold">
                                Dr. Raed Jaberi
                            </div>
                            <div className="text-[14px] text-[#008CFF]">
                                Professor, Tishreen Univ.
                            </div>
                            <div className="text-[13px] text-[#3D3D3D]">
                                Ph.D., TU Ilmenau, Germany
                            </div>
                            <div className="text-[13px] text-[#7f8c8d]">
                                jaberi.raed@gmail.com
                            </div>
                        </div>
                        <div>
                            <div className="text-[15px] font-bold">
                                Dr. Basel Hasan
                            </div>
                            <div className="text-[14px] text-[#008CFF]">
                                Lecturer, Informatics
                            </div>
                            <div className="text-[13px] text-[#3D3D3D]">
                                Ph.D., U. Oldenburg, Germany
                            </div>
                            <div className="text-[13px] text-[#7f8c8d]">
                                basel.hasan@tishreen.edu.sy
                            </div>
                        </div>
                        <div>
                            <div className="text-[15px] font-bold">
                                Dr. Gaith Bilal
                            </div>
                            <div className="text-[14px] text-[#008CFF]">
                                Assistant Professor
                            </div>
                            <div className="text-[13px] text-[#3D3D3D]">
                                Ph.D., Applied Math & Programming
                            </div>
                            <div className="text-[13px] text-[#7f8c8d]">
                                gaithbelal7@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="text-[18px] font-bold mb-2">
                        Professional References
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <div className="text-[15px] font-bold">
                                Toni Elias
                            </div>
                            <div className="text-[14px] text-[#008CFF]">
                                Manager, Aratech
                            </div>
                            <div className="text-[13px] text-[#3D3D3D]">
                                Dubai, UAE
                            </div>
                            <div className="text-[13px] text-[#7f8c8d]">
                                toni1elias@outlook.com
                            </div>
                        </div>
                        <div>
                            <div className="text-[15px] font-bold">
                                Ali Jaber
                            </div>
                            <div className="text-[14px] text-[#008CFF]">
                                Technical Lead, Divcodes
                            </div>
                            <div className="text-[13px] text-[#3D3D3D]">
                                Beirut, Lebanon
                            </div>
                            <div className="text-[13px] text-[#7f8c8d]">
                                admin@divcodes.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicReferencesSection;
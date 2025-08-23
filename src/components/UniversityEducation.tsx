import SimpleCard from "./SimpleCard";

const UniversityEducation = () => {
    return (
        <SimpleCard hoverEffect={false}>
            <div className="text-center mb-8">
                <div className="text-left max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">
                            Bachelor in Informatics Engineering - Software and
                            Information Systems
                        </h3>
                        <div className="text-pumpkin-100 font-bold text-lg">
                            2018 – 2022
                        </div>
                    </div>
                    <p className="italic text-pumpkin-100 text-lg mb-4">
                        Tishreen University, Latakia, Syria
                    </p>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">
                            Academic Excellence
                        </h4>
                        <div className="grid md:grid-cols-2 gap-x-12 px-4">
                            <ul className="list-disc space-y-1">
                                <li>
                                    Graduated with Honors (Valedictorian),
                                    Unbroken record as #1 student across all
                                    years of university
                                </li>
                                <li>Overall average: 92.08%</li>
                                <li>9 perfect scores (100%)</li>
                                <li>
                                    5 consecutive Al-Basel Excellence Awards
                                    (2018-2022)
                                </li>
                            </ul>
                            <ul className="list-disc space-y-1">
                                <li>
                                    Built innovative university projects:
                                    Interactive online judge with WebGL
                                    interface (96%) and realistic 3D virtual
                                    tour of faculty building (97%)
                                </li>
                                <li>
                                    Active participation in collegiate
                                    programming competitions enhanced core
                                    problem-solving and analytical reasoning
                                    abilities
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
};

export default UniversityEducation;

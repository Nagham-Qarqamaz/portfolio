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
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">
                                Academic Excellence
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Graduated with Honors (Valedictorian)</li>
                                <li>Overall average: 92.08%</li>
                                <li>9 perfect scores (100%)</li>
                                <li>
                                    5 consecutive Al-Basel Excellence Awards
                                    (2018-2022)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-2">
                                Key Subjects
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Algorithms & Data Structures</li>
                                <li>Software Engineering (96%)</li>
                                <li>Operating Systems (99%)</li>
                                <li>Databases (98%)</li>
                                <li>Computer Graphics & 3D Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
};

export default UniversityEducation;

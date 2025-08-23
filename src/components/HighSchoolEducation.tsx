import SimpleCard from "./SimpleCard";

const HighSchoolEducation = () => {
    return (
        <SimpleCard hoverEffect={false}>
            <div className="text-center mb-6">
                <div className="text-left max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">
                            General Certificate of High School Education
                        </h3>
                        <div className="text-pumpkin-100 font-bold text-lg">
                            2015 – 2017
                        </div>
                    </div>
                    <p className="italic text-pumpkin-100 text-lg mb-4">
                        Martyr Jihad Nasour Secondary School, Latakia, Syria
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">
                                Academic Performance
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Scientific Section specialization</li>
                                <li>Overall average: 95.9%</li>
                                <li>Top student in all academic years</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-2">
                                Top Scores
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>English Language: 100%</li>
                                <li>Physics: 99.8%</li>
                                <li>Mathematics: 99.7%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
};

export default HighSchoolEducation;

import { university_transcript } from "../utils/university_transcript";

const UniversityTranscript = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">
                Transcript of Grades
            </h3>
            <div className="mb-8">
                <p>
                    <strong>Degree:</strong> {university_transcript.degree}
                </p>
                <p>
                    <strong>University:</strong>{" "}
                    {university_transcript.university}
                </p>
                <p>
                    <strong>Overall Average:</strong>{" "}
                    {university_transcript.overall_average}%
                </p>
                <p>
                    <strong>Overall Appreciation:</strong>{" "}
                    {university_transcript.overall_appreciation}
                </p>
            </div>
            <div className="space-y-8 mb-4">
                {university_transcript.years.map((yearData) => {
                    const academicYear = `${2016 + yearData.year}-${
                        2017 + yearData.year
                    }`;
                    const yearNames = [
                        "First",
                        "Second",
                        "Third",
                        "Fourth",
                        "Fifth",
                    ];
                    return (
                        <div key={yearData.year}>
                            <h4 className="text-lg font-semibold mb-3 text-white">
                                {yearNames[yearData.year - 1]} Year /
                                {academicYear}/ - Average: {yearData.average}%
                            </h4>
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-1 overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-primary-500">
                                            <tr>
                                                <th
                                                    className="border px-4 py-2 text-center"
                                                    colSpan={2}
                                                >
                                                    First Term
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className="border px-4 py-2 text-center">
                                                    Subject
                                                </th>
                                                <th className="border px-4 py-2 text-center">
                                                    Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {yearData.terms.first_term.map(
                                                (subject, index) => (
                                                    <tr
                                                        key={index}
                                                        className={`${
                                                            index % 2 == 1 &&
                                                            "bg-[#FFFFFF1B]"
                                                        }`}
                                                    >
                                                        <td className="border px-4 py-2 text-start">
                                                            {subject.subject}
                                                        </td>
                                                        <td className="border px-4 py-2 text-center">
                                                            {subject.grade}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex-1 overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-primary-500">
                                            <tr>
                                                <th
                                                    className="border px-4 py-2 text-center"
                                                    colSpan={2}
                                                >
                                                    Second Term
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className="border px-4 py-2 text-center">
                                                    Subject
                                                </th>
                                                <th className="border px-4 py-2 text-center">
                                                    Grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {yearData.terms.second_term.map(
                                                (subject, index) => (
                                                    <tr
                                                        key={index}
                                                        className={`${
                                                            index % 2 == 1 &&
                                                            "bg-[#FFFFFF1B]"
                                                        }`}
                                                    >
                                                        <td className="border px-4 py-2 text-start">
                                                            {subject.subject}
                                                        </td>
                                                        <td className="border px-4 py-2 text-center">
                                                            {subject.grade}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UniversityTranscript;

import { highschool_transcript } from "../utils/highschool_transcript";

const HighschoolTranscript = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">
                Transcript of Grades
            </h3>
            <div className="mb-4">
                <p>
                    <strong>Certificate:</strong>{" "}
                    {highschool_transcript.certificate}
                </p>
                <p>
                    <strong>Specialization:</strong>{" "}
                    {highschool_transcript.specialization}
                </p>
                <p>
                    <strong>Year:</strong> {highschool_transcript.year}
                </p>
                <p>
                    <strong>Overall Average:</strong>{" "}
                    {highschool_transcript.average}%
                </p>
            </div>
            <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse">
                    <thead className="bg-primary-500">
                        <tr>
                            <th className="border px-4 py-2 text-center">
                                Subject
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Grade
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Max Grade
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Percentage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {highschool_transcript.subjects.map(
                            (subject, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 == 1 && "bg-[#FFFFFF1B]"
                                    }`}
                                >
                                    <td className="border px-4 py-2">
                                        {subject.subject}
                                    </td>
                                    <td className="border px-4 py-2 text-center">
                                        {subject.grade}
                                    </td>
                                    <td className="border px-4 py-2 text-center">
                                        {subject.max}
                                    </td>
                                    <td className="border px-4 py-2 text-center">
                                        {(
                                            (subject.grade / subject.max) *
                                            100
                                        ).toFixed(1)}
                                        %
                                    </td>
                                </tr>
                            )
                        )}
                        <tr className="font-semibold bg-primary-500">
                            <td className="border px-4 py-2">Total</td>
                            <td className="border px-4 py-2 text-center">
                                {highschool_transcript.totals.earned}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {highschool_transcript.totals.max}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {highschool_transcript.average}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HighschoolTranscript;

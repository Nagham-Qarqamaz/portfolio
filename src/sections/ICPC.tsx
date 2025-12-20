import SlideRight from "../components/animation/SlideRight";
import SlideLeft from "../components/animation/SlideLeft";
import Section from "../components/Section";
import SimpleCard from "../components/SimpleCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ICPC = () => {
    const navigate = useNavigate();

    return (
        <Section title={`International Collegiate Programming Contest`}>
            <div className="max-w-4xl mx-auto text-left space-y-8">
                <SlideLeft>
                    <SimpleCard className="p-8 text-center">
                        <p className="text-2xl mb-2">2018 – 2022</p>
                        <p className="text-lg">
                            🔗{" "}
                            <a
                                href="https://icpc.global/ICPCID/TS6FYUG56NMC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Check My Official ICPC ID
                            </a>
                        </p>
                    </SimpleCard>
                </SlideLeft>

                <SlideRight>
                    <SimpleCard className="p-8 text-center">
                        <p className="text-lg mb-4">
                            My ICPC certificates, awards, and achievements are
                            included among many other certificates I have
                            earned. You can view all of them in the dedicated
                            Certificates page.
                        </p>
                        <Button
                            text="View All Certificates"
                            onClick={() => navigate("/portfolio/certificates")}
                            loading={false}
                            loadingText=""
                            variant="white"
                        />
                    </SimpleCard>
                </SlideRight>

                <SlideLeft>
                    <SimpleCard className="p-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Major ICPC Achievements
                        </h3>

                        <ul className="list-disc list-inside space-y-2">
                            <li className="custom-bullet">
                                <strong>Gold Medal (5th place):</strong> ACPC
                                for Girls 2020, individual (solo); received four
                                special awards: First to Solve, Extreme
                                Programmers, Solid Programmers, and Steadfast
                                Gurus.
                            </li>
                            <li className="custom-bullet">
                                <strong>Qualified to Regional Level:</strong>{" "}
                                Arab & African Collegiate Programming Contest
                                (ACPC) 2021.
                            </li>
                            <li className="custom-bullet">
                                <strong>Bronze Medal (7th place):</strong> SCPC
                                2021, national level; key contributor in solving
                                a particularly challenging problem.
                            </li>
                            <li className="custom-bullet">
                                <strong>Silver Medal (4th place):</strong> TCPC
                                2021.
                            </li>
                        </ul>
                    </SimpleCard>
                </SlideLeft>

                <SlideRight>
                    <SimpleCard className="p-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Roles & Contributions
                        </h3>

                        <ul className="list-disc list-inside space-y-2">
                            <li className="custom-bullet">
                                <strong>Main Role: Contestant</strong>, actively
                                participated in national and regional ICPC
                                contests.
                            </li>
                            <li className="custom-bullet">
                                <strong>Problem Setter:</strong> Aleppo
                                Collegiate Programming Contest 2020.
                            </li>
                            <li className="custom-bullet">
                                <strong>Coach:</strong> Trained 30+ students in
                                competitive programming and ICPC fundamentals.
                            </li>
                            <li className="custom-bullet">
                                <strong>Codeforces Expert</strong> (peak
                                2018–2021); solved hundreds of algorithmic
                                problems.
                            </li>
                        </ul>
                    </SimpleCard>
                </SlideRight>

                <SlideLeft>
                    <SimpleCard className="p-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Competitive Growth & Highlights
                        </h3>

                        <ul className="list-disc list-inside space-y-2">
                            <li className="custom-bullet">
                                Developed strong skills in{" "}
                                <strong>
                                    advanced algorithms, data structures,
                                    problem-solving under pressure, and teamwork
                                </strong>
                                .
                            </li>
                            <li className="custom-bullet">
                                Progressed from first participation in 2018 to
                                national-level contests as a{" "}
                                <strong>young contestant</strong> competing
                                among top programmers across Syria.
                            </li>
                            <li className="custom-bullet">
                                In the 2019 national contest,{" "}
                                <strong>
                                    first to solve one of the problems
                                </strong>
                                ; trusted with the team’s only computer.
                            </li>
                        </ul>
                    </SimpleCard>
                </SlideLeft>
            </div>
        </Section>
    );
};

export default ICPC;

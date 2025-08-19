import FadeIn from "../components/animation/FadeIn";
import ImageCard from "../components/ImageCard";
import Section from "../components/Section";
import { useTheme } from "../contexts/ThemeContext";
import { loadImage } from "../utils/loadImage";

function Certificates() {
    const { theme } = useTheme();

    return (
        <Section glow={false} title="Certificates">
            <FadeIn>
                <div
                    className={`${
                        theme == "light"
                            ? "text-primary-900"
                            : "shadow-pumpkin bg-secondary-900"
                    } overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mb-16`}
                >
                    <div>
                        <div className="text-3xl font-semibold mb-6">
                            International Collegiate Programming Contest
                            Certificates
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
                                <div
                                    className={`${
                                        theme == "light"
                                            ? ""
                                            : "bg-secondary-700"
                                    } overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                                >
                                    <div className="text-lg font-semibold mb-6">
                                        The 2018 International Collegiate
                                        Programming Contest
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {icpc2018}
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        theme == "light"
                                            ? ""
                                            : "bg-secondary-700"
                                    } overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                                >
                                    <div className="text-lg font-semibold mb-6">
                                        The 2019 International Collegiate
                                        Programming Contest
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {icpc2019}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${
                                    theme == "light" ? "" : "bg-secondary-700"
                                } overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                            >
                                <div className="text-lg font-semibold mb-6">
                                    The 2020 Africa and Arab Collegiate
                                    Programming Contest for GIRLS
                                </div>
                                <div className="hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                    {girlsACPC2020}
                                </div>
                                <div className="sm:hidden flex flex-wrap justify-center gap-4">
                                    {girlsACPC2020}
                                </div>
                            </div>
                            <div
                                className={`${
                                    theme == "light" ? "" : "bg-secondary-700"
                                } overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                            >
                                <div className="text-lg font-semibold mb-6">
                                    The 2021 International Collegiate
                                    Programming Contest
                                </div>
                                <div className="hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {icpc2021}
                                </div>
                                <div className="sm:hidden flex flex-wrap justify-center gap-4">
                                    {icpc2021}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div
                    className={`${
                        theme == "light"
                            ? "text-primary-900"
                            : "shadow-pumpkin bg-secondary-900"
                    } overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                >
                    <div>
                        <div className="text-3xl font-semibold mb-6">
                            Al-Basel Certificates for Academic Excellence
                        </div>
                        <div className="hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                            {academicExcellenceCertificates}
                        </div>
                        <div className="sm:hidden flex flex-wrap justify-center gap-4">
                            {academicExcellenceCertificates}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}

export default Certificates;

const academicExcellenceCertificates = (
    <>
        <ImageCard
            src={loadImage("certificates/Al-Basel Certificate - 1st year.jpg")}
            title="2017 / 2018"
        />

        <ImageCard
            src={loadImage("certificates/Al-Basel Certificate - 2nd year.jpg")}
            title="2018 / 2019"
        />

        <ImageCard
            src={loadImage("certificates/Al-Basel Certificate - 3rd year.jpg")}
            title="2019 / 2020"
        />

        <ImageCard
            src={loadImage("certificates/Al-Basel Certificate - 4th year.jpg")}
            title="2020 / 2021"
        />

        <ImageCard
            src={loadImage("certificates/Al-Basel Certificate - 5th year.jpg")}
            title="2021 / 2022"
        />
    </>
);

const icpc2018 = (
    <>
        <ImageCard
            src={loadImage(
                "certificates/ICPC 2018 - TCPC - Fifty Eighth Place.jpg"
            )}
            title="Tishreen University"
        />
        <ImageCard
            src={loadImage(
                "certificates/ICPC 2018 - SCPC - Sixteenth Place.jpg"
            )}
            title="SCPC: Syrian"
        />
    </>
);

const icpc2019 = (
    <>
        <ImageCard
            src={loadImage(
                "certificates/ICPC 2019 - TCPC - Eighteenth Place.jpg"
            )}
            title="Tishreen University"
        />
        <ImageCard
            src={loadImage("certificates/ICPC 2019 - SCPC - Eighth Place.jpg")}
            title="SCPC: Syrian"
        />
    </>
);

const girlsACPC2020 = (
    <>
        <ImageCard
            src={loadImage("certificates/GirlsACPC 2020 - Fourth Place.jpg")}
            title="Fourth Place"
        />

        <ImageCard
            src={loadImage(
                "certificates/GirlsACPC 2020 - Extreme Programmers.jpg"
            )}
            title="Extreme Programmers"
        />

        <ImageCard
            src={loadImage(
                "certificates/GirlsACPC 2020 - Solid Programmers.jpg"
            )}
            title="Solid Programmers"
        />

        <ImageCard
            src={loadImage("certificates/GirlsACPC 2020 - Steadfast Gurus.jpg")}
            title="Steadfast Gurus"
        />

        <ImageCard
            src={loadImage(
                "certificates/GirlsACPC 2020 - First to solve problem A.jpg"
            )}
            title="First to solve problem A"
        />
    </>
);

const icpc2021 = (
    <>
        <ImageCard
            src={loadImage("certificates/ICPC 2021 - TCPC - Fourth Place.jpg")}
            title="Tishreen University"
        />
        <ImageCard
            src={loadImage("certificates/ICPC 2021 - SCPC - Seventh Place.jpg")}
            title="SCPC: Syrian"
        />
        <ImageCard
            src={loadImage(
                "certificates/ICPC 2021 - ACPC - Fifty Seventh Place.jpg"
            )}
            title="ACPC: Arabic"
        />
    </>
);

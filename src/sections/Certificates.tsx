import FadeIn from "../components/animation/FadeIn";
import PdfCard from "../components/PdfCard";
import Section from "../components/Section";
import { useTheme } from "../contexts/ThemeContext";

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
                    } overflow-hidden py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mb-16`}
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
                                    } overflow-hidden p-4 sm:py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
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
                                    } overflow-hidden p-4 sm:py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
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
                                } overflow-hidden p-4 sm:py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
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
                                } overflow-hidden p-4 sm:py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                            >
                                <div className="text-lg font-semibold mb-6">
                                    The 2022 International Collegiate
                                    Programming Contest
                                </div>
                                <div className="hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {icpc2022}
                                </div>
                                <div className="sm:hidden flex flex-wrap justify-center gap-4">
                                    {icpc2022}
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
                    } overflow-hidden py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`}
                >
                    <div>
                        <div className="text-3xl font-semibold mb-6">
                            Academic Outstanding Certificates
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
            <FadeIn>
                <div
                    className={`${
                        theme == "light"
                            ? "text-primary-900"
                            : "shadow-pumpkin bg-secondary-900"
                    } overflow-hidden py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mt-16`}
                >
                    <div>
                        <div className="text-3xl font-semibold mb-6">
                            University Certificates
                        </div>
                        <div className="hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {universityCertificates}
                        </div>
                        <div className="sm:hidden flex flex-wrap justify-center gap-4">
                            {universityCertificates}
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
                    } overflow-hidden py-8 px-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mt-16`}
                >
                    <div>
                        <div className="text-3xl font-semibold mb-6">
                            High School Certificates
                        </div>
                        <div className="hidden sm:grid justify-self-center sm:grid-cols-2 gap-4">
                            {highSchoolCertificates}
                        </div>
                        <div className="sm:hidden flex flex-wrap justify-center gap-4">
                            {highSchoolCertificates}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}

export default Certificates;

const icpc2018 = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1yOUu_ugBDhia143sGRzz_tqFwxFnrmVa/view?usp=drive_link"
            title="Tishreen University"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1TIzEsuN9N87fSKr_cApxW7PZ0QUBINVk/view?usp=drive_link"
            title="SCPC: Syrian"
        />
    </>
);

const icpc2019 = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1qYHabPucKVRbvpN807oC8VhdDwJBuK8B/view?usp=drive_link"
            title="Tishreen University"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1o-R3FrsHU2zQK6D0N0GBFCpob74U8xuw/view?usp=drive_link"
            title="SCPC: Syrian"
        />
    </>
);

const girlsACPC2020 = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1bNRpZLROCasslgfP7YVtZdD1TpTRzx3c/view?usp=drive_link"
            title="Fourth Place"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1k4bZ_zU8ovfrR49hzvA0TumRBVekfJm_/view?usp=drive_link"
            title="Extreme Programmers"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1A7jHtEwZ2T6C74Vng-52kHOE7F9Whm54/view?usp=drive_link"
            title="Solid Programmers"
        />

        <PdfCard
            src="https://drive.google.com/file/d/17OpQoGrx-6AdThCCYhFfQPrOV34m2aKl/view?usp=drive_link"
            title="Steadfast Gurus"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1IUV5dYJsEkyUitRIfcwLEAuTxwMS7FmK/view?usp=drive_link"
            title="First to solve problem A"
        />
    </>
);

const icpc2022 = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1f8gRedctZNoP8as5V9aV4fp48yleoELT/view?usp=drive_link"
            title="Tishreen University"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1jyvGxdESV68OzpB0To2_BfSIELyP1xwa/view?usp=drive_link"
            title="SCPC: Syrian"
        />
        <PdfCard
            src="https://drive.google.com/file/d/13t779-hwczNUrCF4gdDY3p3pQSwesitE/view?usp=drive_link"
            title="ACPC: Arabic"
        />
    </>
);

const academicExcellenceCertificates = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1BBRqo8204JToOmeuTSu6-uY8JfFNr3VM/view?usp=drive_link"
            title="2017 / 2018"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1wilDS5L3kqUtACHyZL4kEaNeGHlLKwe4/view?usp=drive_link"
            title="2018 / 2019"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1HliJy0vEqCOo_uC8rNWmFmqAVn5Tqv3P/view?usp=drive_link"
            title="2019 / 2020"
        />

        <PdfCard
            src="https://drive.google.com/file/d/1tPGbclkRuQoqvvxDZw4km_f8ZoXX_ePn/view?usp=drive_link"
            title="2020 / 2021"
        />

        <PdfCard
            src="https://drive.google.com/file/d/18aCO2mIrE0qRPJ1wcEoUN4s8mwQ_I7IE/view?usp=drive_link"
            title="2021 / 2022"
        />
    </>
);

const universityCertificates = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1k2Qul8MPJCqazq4bx96vIPH8CBRNeZQd/view?usp=drive_link"
            title="Bachelor's Certificate"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1U7OOiAKb22TOzmRhY0Z3Py4gTDHsTarN/view?usp=drive_link"
            title="Graduation Certificate"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1SxEBPgwK9yFYziMQeJV62DHaKgidw4u0/view?usp=drive_link"
            title="Transcript of Grades"
        />
    </>
);

const highSchoolCertificates = (
    <>
        <PdfCard
            src="https://drive.google.com/file/d/1LX9wHAcuHoAUd9MO9Ax8VkK-SFxY2Z9Y/view?usp=drive_link"
            title="High School Certificate"
        />
        <PdfCard
            src="https://drive.google.com/file/d/1UkuT0vAQ14xYKFGcmwBpFMJU3MNQ2o1G/view?usp=drive_link"
            title="General High School Certificate"
        />
    </>
);

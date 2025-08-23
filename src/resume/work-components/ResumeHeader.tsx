import Email from "../../assets/icons/Email";
import LinkedIn from "../../assets/icons/LinkedIn";
import Phone from "../../assets/icons/Phone";
import Website from "../../assets/icons/Website";

const ResumeHeader = () => {
    return (
        <div className="flex">
            <div className="w-[65%]">
                <div className="text-[40px] font-bold">NAGHAM QARQAMAZ</div>
                <div className="text-[#008CFF] text-[28px] -mt-2">
                    Software Engineer
                </div>
                <div className="mt-4">
                    <div className="flex items-center gap-2">
                        <Phone className="!fill-[#008CFF] !w-5 !h-5" />{" "}
                        <a
                            className="underline"
                            href="https://wa.me/+963992803522"
                        >
                            +963992803522
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Email className="!fill-[#008CFF] !w-5 !h-5" />{" "}
                        <a
                            className="underline"
                            href="mailto:nagham.qarqamaz.kp@gmail.com"
                        >
                            nagham.qarqamaz.kp@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <LinkedIn className="!fill-[#008CFF] !w-5 !h-5" />{" "}
                        <a
                            className="underline"
                            href="https://linkedin.com/in/nagham-qarqamaz"
                        >
                            https://linkedin.com/in/nagham-qarqamaz
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Website className="!fill-[#008CFF] !w-5 !h-5" />{" "}
                        <a
                            className="underline"
                            href="https://nagham-qarqamaz.github.io/portfolio/"
                        >
                            https://nagham-qarqamaz.github.io/portfolio/
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[35%] flex justify-end items-center">
                <img
                    className="rounded-full w-52 h-52"
                    src="https://nagham-qarqamaz.github.io/portfolio/images/profile.jpg"
                />
            </div>
        </div>
    );
};

export default ResumeHeader;

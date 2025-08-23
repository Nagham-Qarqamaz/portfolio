import Email from "../../assets/icons/Email";
import LinkedIn from "../../assets/icons/LinkedIn";
import Phone from "../../assets/icons/Phone";
import Website from "../../assets/icons/Website";
import Location from "../../assets/icons/Location";

// Academic Resume Header Component
const AcademicResumeHeader = () => {
    return (
        <div className="text-center mb-6">
            <div className="text-[36px] font-bold mb-2">NAGHAM QARQAMAZ</div>
            <div className="text-[#008CFF] text-[24px] mb-2">
                Software Engineer Pursuing Advanced Studies
            </div>
            <div className="text-[16px] text-[#3D3D3D] mb-4">
                <Location className="!fill-[#3D3D3D] !w-4 !h-4 inline mr-1" />
                Latakia, Syria
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap text-[14px]">
                <div className="flex items-center gap-1">
                    <Phone className="!fill-[#008CFF] !w-4 !h-4" />
                    <a className="underline" href="https://wa.me/+963992803522">
                        +963992803522
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <Email className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="mailto:nagham.qarqamaz.kp@gmail.com"
                    >
                        nagham.qarqamaz.kp@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <LinkedIn className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="https://linkedin.com/in/nagham-qarqamaz"
                    >
                        linkedin.com/in/nagham-qarqamaz
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <Website className="!fill-[#008CFF] !w-4 !h-4" />
                    <a
                        className="underline"
                        href="https://nagham-qarqamaz.github.io/portfolio"
                    >
                        nagham-qarqamaz.github.io/portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AcademicResumeHeader;

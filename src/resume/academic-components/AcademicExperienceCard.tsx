import Date from "../../assets/icons/Date";
import Location from "../../assets/icons/Location";
import ResumeUnorderedList from "../ResumeUnorderedList";

// Academic Experience Card Component
interface AcademicExperienceCardProps {
    title: string;
    organization: string;
    date: string;
    location?: string;
    bulletPoints: string[];
}

const AcademicExperienceCard = ({
    title,
    organization,
    date,
    location,
    bulletPoints,
}: AcademicExperienceCardProps) => {
    return (
        <div className="mb-4">
            <div className="text-[20px] font-bold">{title}</div>
            <div className="text-[17px] font-bold text-[#008CFF]">
                {organization}
            </div>
            <div className="flex gap-4 text-[#3D3D3D] text-[14px] mb-1">
                <div className="flex gap-1 items-center">
                    <Date className="!text-[#3D3D3D] !w-3 !h-3" />
                    {date}
                </div>
                {location && (
                    <div className="flex gap-1 items-center">
                        <Location className="!fill-[#3D3D3D] !w-3 !h-3" />
                        {location}
                    </div>
                )}
            </div>
            <div className="text-[15px]">
                <ResumeUnorderedList items={bulletPoints} />
            </div>
        </div>
    );
};

export default AcademicExperienceCard;

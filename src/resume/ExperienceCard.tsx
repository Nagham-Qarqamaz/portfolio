import Date from "../assets/icons/Date";
import Location from "../assets/icons/Location";
import ResumeUnorderedList from "./ResumeUnorderedList";

interface ExperienceCardProps {
    title: string;
    organization: string;
    date: string;
    location?: string;
    bulletPoints: string[];
}

function ExperienceCard({
    title,
    organization,
    date,
    location,
    bulletPoints,
}: ExperienceCardProps) {
    return (
        <div>
            <div className="text-[22px] font-bold">{title}</div>
            <div className="text-[19px] font-bold text-[#008CFF]">
                {organization}
            </div>
            <div className="flex gap-6 text-[#3D3D3D] text-[15px]">
                <div className="flex gap-1 items-center">
                    <Date className="!text-[#3D3D3D] !w-4 !h-4" />
                    {date}
                </div>
                {location && (
                    <div className="flex gap-1 items-center">
                        <Location className="!fill-[#3D3D3D] !w-4 !h-4" />
                        {location}
                    </div>
                )}
            </div>
            <div className="text-[#3D3D3D]">
                <ResumeUnorderedList items={bulletPoints} />
            </div>
        </div>
    );
}

export default ExperienceCard;

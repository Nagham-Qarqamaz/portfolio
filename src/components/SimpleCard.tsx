import { ReactNode } from "react";
interface SimpleCardProps {
    children: ReactNode;
    hoverEffect?: boolean;
    className?: string;
}

function SimpleCard({
    children,
    // hoverEffect = true,
    className = "",
}: SimpleCardProps) {
    return (
        <div
            className={`text-white p-4 rounded-[1rem] shadow-lg text-[16px] h-full border border-white hover:shadow-primary bg-primary-800 ${className}`}
        >
            {/* ${hoverEffect && "transform hover:scale-105 transition-transform duration-300"} */}
            {children}
        </div>
    );
}

export default SimpleCard;

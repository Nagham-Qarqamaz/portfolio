import { useTheme } from "../contexts/ThemeContext";
import SlidUp from "./animation/SlideUp";

interface PdfCardProps {
    src: string;
    title?: string;
    description?: string;
}

function PdfCard({ src, title, description }: PdfCardProps) {
    const { theme } = useTheme();
    const openPdf = () => {
        window.open(src, "_blank");
    };

    return (
        <div className="cursor-pointer" onClick={openPdf}>
            <SlidUp>
                <div
                    className={`
                    relative group overflow-hidden rounded-xl p-6 w-[12rem] 
                    ${
                        theme === "light"
                            ? "bg-white border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg"
                            : "bg-secondary-800 border-2 border-secondary-600 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/20"
                    }
                    transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]
                `}
                >
                    <div
                        className={`absolute inset-0 opacity-5 ${
                            theme === "light"
                                ? "bg-gradient-to-br from-primary-400 to-primary-600"
                                : "bg-gradient-to-br from-primary-400 to-primary-600"
                        }`}
                    ></div>

                    <svg
                        className={`w-8 h-8 mb-3 ${
                            theme === "light"
                                ? "text-primary-600"
                                : "text-primary-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <div className="font-semibold text-center text-sm">
                        {title}
                    </div>
                    {description && (
                        <div className="text-xs mt-1 text-center">
                            {description}
                        </div>
                    )}

                    <div
                        className={`
                        absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-300
                    `}
                    ></div>
                </div>
            </SlidUp>
        </div>
    );
}

export default PdfCard;

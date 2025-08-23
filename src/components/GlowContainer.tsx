import { useTheme } from "../contexts/ThemeContext";

interface GlowContainerProps {
    children: React.ReactNode;
    glow?: boolean;
    className?: string;
}

const GlowContainer: React.FC<GlowContainerProps> = ({
    children,
    glow = true,
    className = "",
}) => {
    const { theme } = useTheme();

    return (
        <div
            className={`${
                theme == "dark"
                    ? glow
                        ? "py-8 mt-8 shadow-pumpkin overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]"
                        : "py-8"
                    : ""
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default GlowContainer;
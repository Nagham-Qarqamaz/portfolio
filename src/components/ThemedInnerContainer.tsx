import { useTheme } from "../contexts/ThemeContext";

interface ThemedInnerContainerProps {
    children: React.ReactNode;
    className?: string;
}

const ThemedInnerContainer: React.FC<ThemedInnerContainerProps> = ({
    children,
    className = "",
}) => {
    const { theme } = useTheme();

    return (
        <div
            className={`${
                theme == "light"
                    ? ""
                    : "bg-secondary-700 p-4 sm:py-8 rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default ThemedInnerContainer;
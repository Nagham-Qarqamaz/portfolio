import { useTheme } from "../contexts/ThemeContext";

interface ThemedContainerProps {
    children: React.ReactNode;
    className?: string;
}

const ThemedContainer: React.FC<ThemedContainerProps> = ({
    children,
    className = "",
}) => {
    const { theme } = useTheme();

    return (
        <div
            className={`${
                theme == "light"
                    ? "text-primary-900"
                    : "shadow-pumpkin bg-secondary-900 py-8 rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
            } px-4 sm:px-8 ${className}`}
        >
            {children}
        </div>
    );
};

export default ThemedContainer;
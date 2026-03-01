import { ReactNode } from "react";
import ThemedContainer from "./ThemedContainer";

interface AccordionCardProps {
    title: string;
    children: ReactNode;
    index?: number;
    isOpen?: boolean;
    onToggle?: () => void;
}

export default function AccordionCard({
    title,
    children,
    index,
    isOpen = false,
    onToggle,
}: AccordionCardProps) {
    const handleClick = () => {
        onToggle?.();

        // Wait for React render + layout shift
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const element = document.getElementById(
                    `accordion-button-${index}`
                );
                if (!element) return;

                const offset = 70; // 8rem = 128px

                const elementTop =
                    element.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth",
                });
            });
        });
    };

    return (
        <ThemedContainer
            className={`
                ${isOpen ? "!pt-0 my-8" : "!py-0 m-0"}
            `}
        >
            <button
                id={`accordion-button-${index}`}
                onClick={handleClick}
                className="p-6 w-full flex items-center justify-between text-left"
                aria-expanded={isOpen}
            >
                <span className="text-xl font-semibold">{title}</span>

                <span
                    className={`ml-4 transition-transform duration-500 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    ▼
                </span>
            </button>

            <div
                className={`
                    overflow-hidden
                    ${
                        isOpen
                            ? "opacity-100 mt-6 delay-200"
                            : "max-h-0 opacity-0"
                    }
                `}
            >
                {children}
            </div>
        </ThemedContainer>
    );
}

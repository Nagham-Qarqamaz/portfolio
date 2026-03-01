import { ReactNode, useState, Children, isValidElement } from "react";
import AccordionCard from "./AccordionCard";

interface AccordionContainerProps {
    children: ReactNode;
}

export default function AccordionContainer({
    children,
}: AccordionContainerProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) return child;

                return (
                    <AccordionCard
                        {...child.props}
                        key={index}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex((prev) =>
                                prev === index ? null : index
                            )
                        }
                    />
                );
            })}
        </div>
    );
}

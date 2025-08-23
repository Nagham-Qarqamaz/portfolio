import { ReactNode } from "react";
import Title from "./Title";
import FadeIn from "./animation/FadeIn";
import GlowContainer from "./GlowContainer";

interface SectionProps {
    title: string;
    children: ReactNode;
    glow?: boolean;
}

function Section({ title, children, glow = true }: SectionProps) {
    return (
        <div className="py-20 text-center">
            <FadeIn>
                <Title text={title} />
                <GlowContainer glow={glow}>
                    {children}
                </GlowContainer>
            </FadeIn>
        </div>
    );
}

export default Section;

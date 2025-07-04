import { useEffect, useState, useRef } from "react";

const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        const el = ref.current;
        if (el) {
            observer.observe(el);

            if (typeof window !== "undefined") {
                const rect = el.getBoundingClientRect();
                const windowHeight =
                    window.innerHeight || document.documentElement.clientHeight;
                const windowWidth =
                    window.innerWidth || document.documentElement.clientWidth;
                const isInView =
                    rect.top < windowHeight &&
                    rect.bottom > 0 &&
                    rect.left < windowWidth &&
                    rect.right > 0;

                if (isInView) {
                    setIsVisible(true);
                }
            }
        }

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [options]);

    return [ref, isVisible] as const;
};

export default useOnScreen;

import { useEffect, useState, useRef } from "react";

// Custom hook to detect when an element is in the viewport
const useOnScreen = (options: IntersectionObserverInit) => {
	// Define ref type explicitly as HTMLDivElement or null
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Define the observer logic
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, options);

		// Only observe if ref.current is set
		if (ref.current) {
			observer.observe(ref.current);
		}

		// Cleanup observer when component unmounts or ref changes
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	// Return ref and visibility state
	return [ref, isVisible] as const;
};

export default useOnScreen;

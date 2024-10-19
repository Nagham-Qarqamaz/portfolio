import { useState } from "react";
import useOnScreen from "./useOnScreen";

const useShow = (options: IntersectionObserverInit) => {
	const [ref, isVisible] = useOnScreen(options);
	const [hasShown, setHasShown] = useState(false);

	// Set hasShown to true when the element is visible for the first time
	if (isVisible && !hasShown) {
		setHasShown(true);
	}

	// Return the ref and a flag indicating if the element should be shown
	return [ref, hasShown] as const;
};

export default useShow;

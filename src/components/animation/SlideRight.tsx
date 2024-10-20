import { ReactNode } from "react";
import useShow from "../../hooks/useShow";

function SlideRight({ children }: { children: ReactNode }) {
	const [ref, hasShown] = useShow({ threshold: 0.1 });
	return (
		<div
			ref={ref}
			className={`w-full h-full ${
				hasShown ? "animate-slide-in-from-left" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}

export default SlideRight;
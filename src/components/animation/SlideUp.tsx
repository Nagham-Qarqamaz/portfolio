import { ReactNode } from "react";
import useShow from "../../hooks/useShow";

function SlidUp({ children }: { children: ReactNode }) {
	const [ref, hasShown] = useShow({ threshold: 0.1 });
	return (
		<div
			ref={ref}
			className={`w-full h-full ${
				hasShown ? "animate-slide-in-from-bottom" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}

export default SlidUp;

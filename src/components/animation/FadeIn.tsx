import { ReactNode } from "react";
import useShow from "../../hooks/useShow";

function FadeIn({ children }: { children: ReactNode }) {
	const [ref, hasShown] = useShow({ threshold: 0.1 });
	return (
		<div
			ref={ref}
			className={`transition-opacity duration-[1500ms] ${
				hasShown ? "opacity-100" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}

export default FadeIn;

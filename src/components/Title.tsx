import { useTheme } from "../contexts/ThemeContext";

function Title({ text }: { text: string }) {
	const { theme } = useTheme();

	return (
		<div
			className={`mb-4 w-full flex justify-center`}
		>
			<h2
				className={`w-fit text-[13vw] sm:text-[3rem] font-bold ${
					theme == "light"
						? "text-primary"
						: "bg-gradient-to-r text-transparent bg-clip-text from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"
				}`}
			>
				{text}
			</h2>
		</div>
	);
}

export default Title;

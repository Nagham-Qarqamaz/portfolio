import { useTheme } from "../contexts/ThemeContext";

function Title({ text }: { text: string }) {
	const { theme } = useTheme();

	return (
		<div
			className={`mb-4 ${
				theme == "light"
					? "w-full flex justify-center border-t-4 border-b-4 border-primary"
					: ""
			}`}
		>
			<h2
				className={`w-fit text-[13vw] sm:text-[5rem] font-bold ${
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

import { useTheme } from "../contexts/ThemeContext";

function Title({ text }: { text: string }) {
	const { theme } = useTheme();

	return (
		<div
			className={`mb-4 ${
				theme == "light" ? "w-full flex justify-center" : ""
			}`}
		>
			<h2
				className={`w-fit text-[2.5rem] sm:text-[5rem] font-bold bg-gradient-to-r text-transparent bg-clip-text ${
					theme == "light"
						? "from-pumpkin-500 via-pumpkin-600 to-pumpkin-700"
						: "from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"
				}`}
			>
				{text}
			</h2>
		</div>
	);
}

export default Title;

function Title({ text }: { text: string }) {
	return (
		<h2 className="w-fit text-[3.2rem] font-bold mb-6 text-pumpkin bg-gradient-to-r from-pumpkin-300 via-pumpkin-500 to-pumpkin-700 text-transparent bg-clip-text">
			{text}
		</h2>
	);
}

export default Title;

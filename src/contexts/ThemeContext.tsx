import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		return (localStorage.getItem("theme") as Theme) || "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);

		const themeColors: Record<Theme, Record<string, string>> = {
			dark: {
				"--primary-50": "#e23239",
				"--primary-100": "#e0272e",
				"--primary-200": "#d01e25",
				"--primary-300": "#ba1a21",
				"--primary-400": "#a3171d",
				"--primary-500": "#8d1419",
				"--primary-600": "#801217",
				"--primary-700": "#721014",
				"--primary-800": "#650e12",
				"--primary-900": "#570c0f",
				"--primary-950": "#510b0e",

				"--secondary-50": "#62666f",
				"--secondary-100": "#5c6068",
				"--secondary-200": "#50535b",
				"--secondary-300": "#44474d",
				"--secondary-400": "#383a40",
				"--secondary-500": "#2c2e32",
				"--secondary-600": "#25272a",
				"--secondary-700": "#1e1f22",
				"--secondary-800": "#17181a",
				"--secondary-900": "#0f1011",
				"--secondary-950": "#0c0c0d",
			},
			light: {
				"--primary-50": "#3A3A91",
				"--primary-100": "#39398D",
				"--primary-200": "#363686",
				"--primary-300": "#33337F",
				"--primary-400": "#303077",
				"--primary-500": "#2D2D70",
				"--primary-600": "#2A2A69",
				"--primary-700": "#272761",
				"--primary-800": "#24245A",
				"--primary-900": "#212153",
				"--primary-950": "#20204F",

				"--secondary-50": "#FAF8F6",
				"--secondary-100": "#FAF8F6",
				"--secondary-200": "#FAF8F6",
				"--secondary-300": "#FAF8F6",
				"--secondary-400": "#FAF8F6",
				"--secondary-500": "#FAF8F6",
				"--secondary-600": "#FAF8F6",
				"--secondary-700": "#FAF8F6",
				"--secondary-800": "#FAF8F6",
				"--secondary-900": "#FAF8F6",
				"--secondary-950": "#FAF8F6",
			},
		};

		Object.entries(themeColors[theme]).forEach(([key, value]) => {
			document.documentElement.style.setProperty(key, value);
		});
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		console.warn("useTheme must be used within a ThemeProvider");
		return { theme: "dark", setTheme: () => {} };
	}
	return context;
};

import { useEffect, useRef, useState } from "react";
import Hamburger from "../assets/icons/Hamburger";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
	const [visible, setVisible] = useState(false);
	const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
	const { theme, setTheme } = useTheme();
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	// Close the menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsHamburgerVisible(false);
			}
		};

		if (isHamburgerVisible) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isHamburgerVisible]);

	return (
		<header
			className={`fixed w-full top-0 left-0 backdrop-blur-lg shadow-xl z-50 transition-opacity duration-[1500ms] ${
				theme == "light"
					? "bg-white bg-opacity-50"
					: "bg-black bg-opacity-60"
			} ${visible ? "opacity-100" : "opacity-0"}`}
		>
			<nav className="container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center">
				<div className="lg:hidden relative" ref={menuRef}>
					<button
						onClick={() =>
							setIsHamburgerVisible(!isHamburgerVisible)
						}
						className="cursor-pointer"
					>
						<Hamburger />
					</button>
					<div
						className={`${
							isHamburgerVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-10 pointer-events-none"
						} bg-secondary-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`}
					>
						<ul className="flex flex-col gap-4">
							{navItems.map((item, index) => (
								<div
									key={index}
									onClick={() => setIsHamburgerVisible(false)}
								>
									<NavItem
										href={item.href}
										text={item.text}
									/>
								</div>
							))}
						</ul>
					</div>
				</div>
				<ul className="hidden lg:flex space-x-6">
					{navItems.map((item, index) => (
						<NavItem
							key={index}
							href={item.href}
							text={item.text}
						/>
					))}
				</ul>
				<button
					onClick={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
					className="relative w-12 h-7 rounded-full transition-all duration-300 bg-gradient-to-b from-pumpkin-500 to-pumpkin-700 shadow-lg shadow-inner"
				>
					<span
						className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 bg-gradient-to-b from-pumpkin-100 to-white border border-pumpkin-600 shadow-md ${
							theme === "dark" ? "translate-x-5" : "translate-x-0"
						}`}
					/>
				</button>
			</nav>
		</header>
	);
};

export default Header;

const navItems = [
	{ href: "home", text: "Home" },
	{ href: "about", text: "About" },
	{ href: "skills", text: "Skills" },
	{ href: "experience", text: "Experience" },
	{ href: "projects", text: "Projects" },
	{ href: "education", text: "Education" },
	{ href: "certificates", text: "Certificates" },
	{ href: "achievements", text: "Achievements" },
	{ href: "fun-facts", text: "Fun Facts" },
	{ href: "languages", text: "Languages" },
	{ href: "home", text: "Contact" },
];

const NavItem = ({ href, text }: { href: string; text: string }) => {
	const { theme } = useTheme();

	const handleScroll = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<li
			onClick={() => handleScroll(href)}
			className="relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]"
		>
			{text}
			<span
				className={`${
					theme == "light" ? "bg-black" : "bg-white"
				} absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`}
			></span>
		</li>
	);
};

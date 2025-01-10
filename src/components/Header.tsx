import { useEffect, useState } from "react";
import Hamburger from "../assets/icons/Hamburger";

const Header = () => {
	const [visible, setVisible] = useState(false);
	const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 left-0 bg-shark-800 bg-opacity-70 backdrop-blur-lg text-white shadow-xl z-50 transition-opacity duration-[1500ms] ${
				visible ? "opacity-100" : "opacity-0"
			}`}
		>
			<nav className="container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center">
				<div className="lg:hidden relative">
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
						} bg-shark-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`}
					>
						<ul className="flex flex-col gap-4">
							{navItems.map((item, index) => (
								<NavItem
									key={index}
									href={item.href}
									text={item.text}
								/>
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
				{/* <div className="text-2xl font-extrabold text-white tracking-wider">
					Nagham Qarqamaz
				</div> */}
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
	const handleScroll = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<li
			onClick={() => handleScroll(href)}
			className="relative group transition cursor-pointer"
		>
			{text}
			<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
		</li>
	);
};

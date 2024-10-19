import { useEffect, useState } from "react";

const Header = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 left-0 bg-black bg-opacity-70 backdrop-blur-lg text-white shadow-xl z-50 transition-opacity duration-[1500ms] ${
				visible ? "opacity-100" : "opacity-0"
			}`}
		>
			<nav className="container mx-auto p-4 flex justify-between items-center">
				<div className="text-2xl font-extrabold text-white tracking-wider">
					Nagham Qarqamaz
				</div>
				<ul className="flex space-x-6">
					{navItems.map((item) => (
						<NavItem
							key={item.href}
							href={item.href}
							text={item.text}
						/>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

const navItems = [
	{ href: "#home", text: "Home" },
	{ href: "#about", text: "About" },
	{ href: "#skills", text: "Skills" },
	{ href: "#experience", text: "Experience" },
	{ href: "#projects", text: "Projects" },
	{ href: "#education", text: "Education" },
	{ href: "#certificates", text: "Certificates" },
	{ href: "#achievements", text: "Achievements" },
	{ href: "#languages", text: "Languages" },
	{ href: "#contact", text: "Contact" },
];

const NavItem = ({ href, text }: { href: string; text: string }) => {
	return (
		<li>
			<a href={href} className="relative group transition">
				{text}
				<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
			</a>
		</li>
	);
};

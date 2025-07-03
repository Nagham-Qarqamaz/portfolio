import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

interface NavItemProps {
    href: string;
    text: string;
    whiteLine?: boolean;
}

export const navItems = [
    { href: "", text: "Home" },
    { href: "skills", text: "Skills" },
    { href: "experience", text: "Experience" },
    { href: "projects", text: "Projects" },
    { href: "education", text: "Education" },
    { href: "certificates", text: "Certificates" },
    { href: "achievements", text: "Achievements" },
    { href: "fun-facts", text: "Fun Facts" },
    { href: "languages", text: "Languages" },
    { href: "contact", text: "Contact" },
];

export const NavItem = ({ href, text, whiteLine = false }: NavItemProps) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <li
            onClick={() => navigate(`portfolio/${href}`)}
            className="relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]"
        >
            {text}
            <span
                className={`${
                    theme === "light"
                        ? whiteLine
                            ? "bg-white"
                            : "bg-black"
                        : "bg-white"
                } absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`}
            />
        </li>
    );
};

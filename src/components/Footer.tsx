import { loadImage } from "../utils/loadImage";
import { navItems, NavItem } from "./navLinks";

export default function Footer() {
    return (
        <footer>
            <img className="w-full h-40" src={loadImage("images/wave.png")} />
            <div className="bg-pumpkin text-white pb-8 px-4 max-w-6xl mx-auto space-y-6 text-sm">
                <ul className="flex justify-center flex-wrap gap-x-4 gap-y-2">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            href={item.href}
                            text={item.text}
                            whiteLine
                        />
                    ))}
                </ul>
                <p className="text-center">
                    © {new Date().getFullYear()} Nagham Qarqamaz. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

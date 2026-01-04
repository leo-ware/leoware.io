import Link from "next/link"
import NavbarHamburger from "./navbarHamburger"

export const links: [string, string][] = [
    ["About", "/about"],
    ["Projects", "/projects"],
    ["CV", "/cv"],
];

const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-neutral-200 fixed top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="group">
                    <div className="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                        Leo Ware
                    </div>
                </Link>

                <div className="hidden md:flex flex-row gap-8 items-center">
                    {links.map(([name, href]) => (
                        <Link
                            key={name}
                            href={href}
                            className="text-lg font-medium text-neutral-700 hover:text-primary-700 transition-colors relative group"
                        >
                            {name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200"></span>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <NavbarHamburger />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

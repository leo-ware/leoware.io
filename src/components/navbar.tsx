import Link from "next/link"
import NavbarHamburger from "./navbarHamburger"

export const links: [string, string][] = [
    ["About", "/about"],
    ["Projects", "/projects"],
    ["CV", "/cv"],
];

const Navbar = () => {
    return (
        <div className="w-full flex justify-between px-10 py-2 items-center border-b-2 border-b-black bg-white relative z-0">
                <Link href="/">
                    <div className="text-xl font-semibold">Leo Ware</div>
                </Link>
                
                <div className="hidden md:flex flex-row justify-between w-1/4">
                    {links.map(([name, href]) => (
                        <Link key={name} href={href}>
                            <div className="sm:px-2 text-lg lg:text-xl font-semibold">{name}</div>
                        </Link>
                    ))}
                </div>
                <div className="md:hidden w-fit h-fit">
                    <NavbarHamburger />
                </div>
        </div>
    );
};

export default Navbar;

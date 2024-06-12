import Link from "next/link"
import NavbarHamburger from "./navbarHamburger"

export const links: [string, string][] = [
    ["About", "/about"],
    ["Projects", "/projects"],
    ["CV", "/cv"],
];

const Navbar = () => {
    return (
        <div className="col-span-12 grid grid-cols-subgrid border-b-2 border-b-black bg-white relative z-0">
            <div className="col-span-10 col-start-2 py-2 flex flex-row flex-row justify-between items-end">
                <Link href="/">
                    <div className="text-xl font-semibold">Leo Ware</div>
                </Link>
                
                <div className="hidden md:flex flex-row justify-between w-1/4">
                    {links.map(([name, href]) => (
                        <Link key={name} href={href}>
                            <div className="sm:px-2 text-xl font-semibold">{name}</div>
                        </Link>
                    ))}
                </div>
                <div className="md:hidden w-4 h-6 align-end">
                    <NavbarHamburger />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import Link from "next/link";

const links = [
    ["About", "/about"],
    ["Projects", "/projects"],
    ["CV", "/cv"],
];

const Navbar = () => {
    return (
        <div className="col-span-12 grid grid-cols-subgrid border-b-2 border-b-black bg-white">
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
                        {Array(5).fill(0).map(i => (
                            <div key={i} className="h-0.5 w-4 odd:bg-black br-1"/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

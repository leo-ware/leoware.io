"use client"
import Link from "next/link"
import { links } from "./navbar"
import { useState } from "react"

const NavbarHamburger = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onClick={() => setOpen(!open)}>
                {Array(5).fill(0).map(i => (
                    <div key={i} className="h-0.5 w-4 odd:bg-black br-1" />
                ))}
            </div>

            {open && <div
                style={{bottom: -100, width: "100vw", zIndex: -10}}
                className="border-b-2 border-l-2 border-black absolute top-0 right-0 bg-white z-10 flex justify-center items-end">
                <div className="p-4" onClick={() => setOpen(false)}>
                    {links.map(([name, href]) => (
                        <Link key={href} href={href}>
                            <div className="sm:px-2 text-l font-semibold">{name}</div>
                        </Link>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default NavbarHamburger

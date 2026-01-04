"use client"
import Link from "next/link"
import { links } from "./navbar"
import { useState } from "react"

const NavbarHamburger = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex flex-col gap-1.5 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                <span className={`h-0.5 w-6 bg-primary-900 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-6 bg-primary-900 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-6 bg-primary-900 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu */}
            {open && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-neutral-900 bg-opacity-20 z-40"
                        onClick={() => setOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-16 right-4 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 min-w-[200px]">
                        <div className="py-2">
                            {links.map(([name, href]) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block px-6 py-3 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default NavbarHamburger

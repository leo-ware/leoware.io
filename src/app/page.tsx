"use client"

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import MeSitting from "../assets/me-sitting-cropped.jpg"

type SocialLink = {
    name: string
    icon: React.ReactNode
    href?: string
    onClick?: () => void
}

export default function Home() {
    const [showCopied, setShowCopied] = useState(false)

    const handleEmailClick = () => {
        navigator.clipboard.writeText("leobpware@gmail.com")
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
    }

    const socialLinks: SocialLink[] = [
        { name: "GitHub", icon: <FaGithub className="w-7 h-7" />, href: "https://github.com/leo-ware" },
        { name: "LinkedIn", icon: <FaLinkedin className="w-7 h-7" />, href: "https://www.linkedin.com/in/leo-ware-8b8580b6/" },
        { name: "Email", icon: <HiMail className="w-7 h-7" />, onClick: handleEmailClick },
        { name: "Telegram", icon: <FaTelegram className="w-7 h-7" />, href: "https://leoware.t.me" }
    ]

    return (
        <div className="h-full w-full flex items-center justify-center px-6 py-16">
            <div className="max-w-4xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src={MeSitting}
                            alt="Leo Ware"
                            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary-100"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-primary-900 mb-4">
                                Leo Ware
                            </h1>
                            <p className="text-xl text-primary-700 font-medium mb-2">
                                MS Biostatistics, West Virginia University
                            </p>
                            <p className="text-lg text-neutral-600">
                                Graduating May 2026
                            </p>
                        </div>

                        {/* <div className="h-px bg-neutral-200 w-24"/> */}

                        <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
                            I focus on <span className="font-semibold text-primary-800">causal inference methods for healthcare applications</span>.
                            My work combines statistical methodology with hands-on implementation—I've found and fixed bugs in major libraries and built
                            high-performance tools for causal identification.
                        </p>

                        {/* CTA Links */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                href="/projects"
                                className="btn-primary inline-block"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="/cv"
                                className="btn-secondary inline-block"
                            >
                                Resume
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <div className="flex items-center gap-2 relative">
                                {socialLinks.map((link) => (
                                    link.onClick ? (
                                        <button
                                            key={link.name}
                                            onClick={link.onClick}
                                            className="text-neutral-600 hover:text-primary-700 transition-colors p-3 rounded-lg hover:bg-primary-50"
                                            aria-label={link.name}
                                            title={link.name}
                                        >
                                            {link.icon}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href!}
                                            key={link.name}
                                            className="text-neutral-600 hover:text-primary-700 transition-colors p-3 rounded-lg hover:bg-primary-50"
                                            aria-label={link.name}
                                            title={link.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.icon}
                                        </Link>
                                    )
                                ))}
                                {showCopied && (
                                    <div className="absolute -bottom-12 left-0 text-sm bg-primary-800 text-white px-3 py-2 rounded-md shadow-lg animate-fade-in">
                                        Email copied to clipboard!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

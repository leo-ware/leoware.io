"use client"

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMail } from "react-icons/hi";

import MeSitting from "../assets/me-sitting.png"
import GHLogo from "../assets/gh_bw.png"
import LiLogo from "../assets/li_bw.png"
import TgLogo from "../assets/tg_bw.png"

type SocialLink = {
    name: string
    logo: StaticImageData | "email-icon"
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
    { name: "GitHub", logo: GHLogo, href: "https://github.com/leo-ware" },
    { name: "LinkedIn", logo: LiLogo, href: "https://www.linkedin.com/in/leo-ware-8b8580b6/" },
    { name: "Email", logo: "email-icon", onClick: handleEmailClick },
    { name: "Telegram", logo: TgLogo, href: "https://leoware.t.me" }
  ]

  return (
    <div className="h-full w-full flex flex-col gap-8 sm:flex-row items-center justify-center">
        <Image src={MeSitting} alt="Me" className="w-48 sm:w-64  "/>
        <div className="max-w-96 max-h-32">
            <div className="text-xl font-bold">{"Hi, I'm Leo"}</div>
            <p>
                I'm a Master's student in Biostatistics at West Virginia University, graduating May 2026. My research focuses on causal inference methods for healthcare applications.

                Check out my <Link className="link" href={"/projects"}>projects</Link> or reach out below.
            </p>
            <div className="flex flex-row items-center relative">
                {socialLinks.map((link) => (
                    link.onClick ? (
                        <button
                            key={link.name}
                            onClick={link.onClick}
                            className="cursor-pointer"
                            aria-label={link.name}
                        >
                            <HiMail className="w-6 h-6 my-2 mr-2 animate-fade-in" style={{ filter: "brightness(0)" }} />
                        </button>
                    ) : (
                        <Link href={link.href!} key={link.name}>
                            <Image src={link.logo as StaticImageData} alt={link.name + " logo"} className="w-6 h-6 my-2 mr-2 animate-fade-in"/>
                        </Link>
                    )
                ))}
                {showCopied && (
                    <div className="absolute -bottom-8 left-0 text-xs bg-black text-white px-2 py-1 rounded animate-fade-in">
                        Email copied to clipboard!
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

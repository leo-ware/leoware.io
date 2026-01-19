"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import MeSitting from "../assets/me-sitting-cropped.jpg";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("leobpware@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-7 h-7" />,
      href: "https://github.com/leo-ware",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-7 h-7" />,
      href: "https://www.linkedin.com/in/leo-ware-8b8580b6/",
    },
    {
      name: "Email",
      icon: <HiMail className="w-7 h-7" />,
      onClick: handleEmailClick,
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-7 h-7" />,
      href: "https://leoware.t.me",
    },
  ];

  return (
    <div className="h-fit min-h-full w-full flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        <div className="relative flex-shrink-0 rounded-full border-4 border-primary-700">
          <Image
            src={MeSitting}
            alt="Leo Ware"
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover [filter:grayscale(100%)_brightness(0.95)_contrast(1.5)_sepia(100%)_hue-rotate(180deg)_saturate(0.5)]"
            priority
          />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-900 mb-4">
              Leo Ware
            </h1>
            <p className="text-xl text-primary-700 font-medium mb-2">
              Data Scientist & Full-Stack Developer
            </p>
            <p className="text-lg text-neutral-600">
              MS Biostatistics, WVU '26
            </p>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
            My background combines statistical training with hands-on
            engineering—I've shipped web apps, built LLM pipelines, and found
            bugs in Microsoft's causal inference library.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/projects" className="btn-primary inline-block">
              View Projects
            </Link>
            <Link href="/cv" className="btn-secondary inline-block">
              Resume
            </Link>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 relative">
              {socialLinks.map((link) =>
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-primary-800 hover:text-primary-700 transition-colors p-3 rounded-lg hover:bg-primary-50"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.icon}
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    key={link.name}
                    className="text-primary-800 hover:text-primary-700 transition-colors p-3 rounded-lg hover:bg-primary-50"
                    aria-label={link.name}
                    title={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </Link>
                ),
              )}
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
  );
}

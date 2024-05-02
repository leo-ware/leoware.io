import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import MeSitting from "../assets/me-sitting.png"
import GHLogo from "../assets/gh_bw.png"
import MdLogo from "../assets/md_bw.png"
import LiLogo from "../assets/li_bw.png"
import TgLogo from "../assets/tg_bw.png"

const socialLinks: [string, StaticImageData, string][] = [
    ["GitHub", GHLogo, "https://github.com/leo-ware"],
    ["LinkedIn", LiLogo, "https://www.linkedin.com/in/leo-ware-8b8580b6/"],
    ["Medium", MdLogo, "https://leoware.medium.com/"],
    ["Telegram", TgLogo, "https://leoware.t.me"]
]


export default function Home() {
  return (
    <div className="col-span-10 h-full flex flex-col sm:flex-row items-center justify-center">
        <Image src={MeSitting} alt="Me" className="w-48 sm:w-64  "/>
        <div className="max-w-96 max-h-32">
            <div className="text-xl font-bold">Hi, I'm Leo</div>
            <p>
                I'm interested in causal inference and computational statistics.
                I'm currently existing in an academic liminal space.
                Check out my <Link className="link" href={"/projects"}>projects</Link> or reach out below.
            </p>
            <div className="flex flex-row">
                {socialLinks.map(([name, logo, link]) => (
                    <Link href={link} key={name}>
                        <Image src={logo} alt={name + " logo"} className="w-6 h-6 my-2 mr-2 animate-fade-in"/>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}

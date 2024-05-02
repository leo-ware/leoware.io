import fs from "fs"
import Link from "next/link"
import { parseProjectMd } from "./utils"

const Projects = () => {
    const projectFiles = fs.readdirSync("src/projects").filter((file) => file.endsWith(".md"))
    const mdProjects = projectFiles.map(parseProjectMd)

    return (
        <div className="col-span-6 col-start-2">
            <div className="text-4xl font-bold flex justify-center my-10">Projects</div>
            <ul className="list-disc col-span-6 col-start-2">
                {mdProjects.map(p => (
                    <li key={p.slug}>
                        <Link href={`/projects/${p.slug}`} className="link">{p.metadata.title}</Link>
                        {" "}
                        {p.metadata.desc}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects
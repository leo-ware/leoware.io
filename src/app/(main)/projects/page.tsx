import fs from "fs"
import { parseProjectMd, parseProjectNb } from "./utils"
import ProjectsList from "@/components/ProjectsList"

const Projects = () => {
    const projectFiles = fs.readdirSync("src/projects")

    const projectFilesMd = projectFiles.filter(file => file.endsWith(".md"))
    const mdProjects = projectFilesMd.map(parseProjectMd)

    const projectFilesNb = projectFiles.filter(file => file.endsWith(".ipynb"))
    const nbProjects = projectFilesNb.map(parseProjectNb)

    const projects = mdProjects.concat(nbProjects)

    const projectsWithDate = projects.map(p => ({
        ...p,
        date: p.metadata.date ? new Date(p.metadata.date) : null
    })).sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))

    return (
        <div className="w-full h-full">
            <div className="text-4xl font-bold flex justify-center my-10">Projects</div>
            <ProjectsList projects={projectsWithDate} />
        </div>
    );
}

export default Projects
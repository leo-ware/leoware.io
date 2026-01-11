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
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 min-h-full">
            <h1 className="text-5xl font-bold text-primary-900 mb-4">Projects</h1>
            <p className="text-xl text-neutral-600 mb-12">
                Research and technical work in causal inference and statistical computing
            </p>
            <ProjectsList projects={projectsWithDate} />
        </div>
    );
}

export default Projects
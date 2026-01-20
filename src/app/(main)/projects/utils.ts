import parseMd from "parse-md"
import type { NotebookType } from "./nbType"
import fs from "fs"
import path from "path"

export const projectsRoot = "src/projects"

type MetadataType = {
    title?: string
    desc?: string
    date?: string
    github?: string
    tags?: string[]
    category?: "Research" | "Consulting" | "Writing"
}

type ProjectType = {
    slug: string
    metadata: MetadataType
    content: NotebookType | string
}

export const parseProjectNb = (fname: string): ProjectType => {
    fname = fname.endsWith(".ipynb") ? fname : fname + ".ipynb"
    const slug = fname.replace(".ipynb", "")
    const filePath = path.join(process.cwd(), projectsRoot, fname)
    console.log(filePath)
    const fileContents = fs.readFileSync(filePath, {encoding: 'utf8'})
    const nb = JSON.parse(fileContents) as NotebookType

    return {
        slug,
        metadata: {
            title: nb.metadata.title || slug.replace("-", " ")
        },
        content: nb
    }
}

export const parseProjectMd = (fname: string): ProjectType => {
    fname = fname.endsWith(".md") ? fname : fname + ".md"
    const slug = fname.replace(".md", "")

    const filePath = path.join(process.cwd(), projectsRoot, fname)
    const fileContents = fs.readFileSync(filePath, {encoding: 'utf8'})

    const {metadata, content} = parseMd(fileContents) as {
        content: string,
        metadata?: MetadataType
    }
    return {content, slug, metadata: {
        title: metadata?.title || "",
        desc: metadata?.desc || "",
        date: metadata?.date || "",
        github: metadata?.github,
        tags: metadata?.tags,
        category: metadata?.category
    }}
}

export const parseProject = (fname: string): ProjectType => {
    try {
        return parseProjectMd(fname)
    } catch (e) {
        return parseProjectNb(fname)
    }
}
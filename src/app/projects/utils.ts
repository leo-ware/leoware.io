import parseMd from "parse-md"
import fs from "fs"
import path from "path"

export const mdRoot = "src/projects"

export const parseProjectMd = (fname: string) => {
    fname = fname.endsWith(".md") ? fname : fname + ".md"
    const slug = fname.replace(".md", "")

    const filePath = path.join(process.cwd(), mdRoot, fname)
    // const filePath = `${mdRoot}/${fname}`
    const fileContents = fs.readFileSync(filePath, {encoding: 'utf8'})
    
    const {metadata, content} = parseMd(fileContents) as {
        content: string,
        metadata?: {
            title?: string,
            desc?: string,
            date?: string
        }
    }
    return {content, slug, metadata: {
        title: metadata?.title || "",
        desc: metadata?.desc || "",
        date: metadata?.date || ""
    }}
}

import Nb from "@/components/nb"
import { parseProject } from "../utils"
import Markdown from "@/components/markdown"

const ProjectPage = ({ params }: { params: { slug: string } }) => {
    const p = parseProject(params.slug)
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <div>
                <div className="text-4xl font-bold flex justify-start my-10">{p.metadata.title || p.slug}</div>
                {/* <div>{p.metadata.date?.toLocaleDateString()}</div> */}
                <div className="">
                    {typeof p.content === "string"
                        ? <Markdown source={p.content} />
                        : <Nb nb={p.content} />}
                </div>
                <div className="h-4" />
            </div>
        </div>
    )
}

export default ProjectPage
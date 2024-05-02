import { parseProjectMd } from "../utils"
import Markdown from "@/components/markdown"

const ProjectPage = ({params}: {params: {slug: string}}) => {
    const p = parseProjectMd(params.slug)
    return (
        <div className="col-span-6 col-start-2">
            <div className="text-4xl font-bold flex justify-center my-10">{p.metadata.title || p.slug}</div>
            <div>{p.metadata.date}</div>
            <div className="col-span-6 col-start-2">
                <Markdown source={p.content}/>
            </div>
            <div className="h-4"/>
        </div>
        // <div className="col-span-8 row-span-8 grid grid-cols-subgrid grid-rows-subgrid">
        //     <div className="text-4xl col-span-8 row-span-1 row-start-2 font-bold flex justify-center">
        //         {p.metadata.title || p.slug}
        //     </div>
        //     <div className="row-span-1 row-start-3 col-span-6 col-start-2">
        //         <Markdown source={p.content}/>
        //     </div>
        // </div>
    )
}

export default ProjectPage
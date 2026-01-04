import Nb from "@/components/nb"
import { parseProject } from "../utils"
import Markdown from "@/components/markdown"
import Link from "next/link"

const ProjectPage = ({ params }: { params: { slug: string } }) => {
    const p = parseProject(params.slug)

    return (
        <div className="w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
            <div className="w-full flex justify-center px-4">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 py-10">
                    {/* Main Content */}
                    <div className="flex-1 min-w-0 lg:max-w-3xl">
                        <div className="text-4xl font-bold flex justify-start mb-10">{p.metadata.title || p.slug}</div>
                        <div className="">
                            {typeof p.content === "string"
                                ? <Markdown source={p.content} />
                                : <Nb nb={p.content} />}
                        </div>
                        <div className="h-4" />
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-72 flex-shrink-0">
                        <div className="lg:sticky lg:top-4 bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm font-bold mb-4">Project Info</div>

                            {p.metadata.date && (
                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-600 mb-1">Date</div>
                                    <div className="text-sm">{new Date(p.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
                                </div>
                            )}

                            {p.metadata.github && (
                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-600 mb-1">Repository</div>
                                    <Link href={p.metadata.github} className="text-sm link break-all">
                                        GitHub →
                                    </Link>
                                </div>
                            )}

                            {p.metadata.tags && p.metadata.tags.length > 0 && (
                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-600 mb-1">Tags</div>
                                    <div className="flex flex-wrap gap-1">
                                        {p.metadata.tags.map((tag: string) => (
                                            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
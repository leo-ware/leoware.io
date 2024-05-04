import { MDXRemote } from 'next-mdx-remote/rsc'

import remarkMath from 'remark-math'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

import Code from './code'
import Mermaid from './mermaid'
import MdImage from './mdImage'

const components = {
    code: (props: {className?: string, children?: React.ReactNode}) => {
        const classes = (props.className || "").split(" ")
        if (classes.includes("language-math")) {
            if (classes.includes("math-inline")) {
                return <InlineMath math={props.children as string}/>
            } else {
                return <BlockMath math={props.children as string}/>
            }
        } else {
            const language = classes.find((c) => c.startsWith("language-"))?.slice(9)
            if (language === "mermaid") {
                return <Mermaid code={props.children as string}/>
            }
            return <Code language={language || ""} code={props.children as string}/>
        }
    },
    pre: (props: {children?: React.ReactNode}) => <>{props.children}</>,
    img: MdImage,
}

type MarkdownType = {
    source: string
    className?: string
}

const Markdown = async (props: MarkdownType) => {
    return (
        <div className={"prose prose-md" + " " + props.className}>
            <MDXRemote
                source={props.source}
                components={components}
                options={{
                    mdxOptions: {
                        remarkPlugins: [
                            remarkMath,
                        ],
                    }
                }}
                />
        </div>
    )
}

export default Markdown
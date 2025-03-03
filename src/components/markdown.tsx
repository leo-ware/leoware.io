import { MDXRemote } from 'next-mdx-remote/rsc'

import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
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
    table: (props: {children?: React.ReactNode}) => (
        <table className="min-w-full divide-y divide-gray-200">
            {props.children}
        </table>
    ),
    thead: (props: {children?: React.ReactNode}) => <thead>{props.children}</thead>,
    tbody: (props: {children?: React.ReactNode}) => <tbody>{props.children}</tbody>,
    tr: (props: {children?: React.ReactNode}) => <tr>{props.children}</tr>,
    th: (props: {children?: React.ReactNode}) => <th className="px-6 py-3 text-left">{props.children}</th>,
    td: (props: {children?: React.ReactNode}) => <td className="px-6 py-4">{props.children}</td>
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
                            [remarkGfm, { singleTilde: false }],
                        ],
                    }
                }}
            />
        </div>
    )
}

export default Markdown
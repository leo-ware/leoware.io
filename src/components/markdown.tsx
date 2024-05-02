import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

import Code from './code'

type MarkdownType = {
    source: string
    className?: string
}

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
            return <Code language={"python"} code={props.children as string}/>
        }
    },
    pre: (props: {children?: React.ReactNode}) => <>{props.children}</>,
    img: (props: {src?: string, alt?: string}) => (
        <span className='w-full h-auto flex justify-center'>
            <Image
                src={props.src || ""}
                alt={props.alt || ""}
                width={500}
                height={200}
                className="animate-fade-in h-auto"/>
        </span>
        ),
}

const Markdown = async (props: MarkdownType) => {
    return (
        <div className={"prose prose-md" + " " + props.className}>
            <MDXRemote
                source={props.source}
                components={components}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkMath],
                        // rehypePlugins: [rehypeKatex]
                    }
                }}
                />
        </div>
    )
}

export default Markdown
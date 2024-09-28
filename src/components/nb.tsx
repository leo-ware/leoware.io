import type { NotebookType } from "@/app/(main)/projects/nbType"
import Markdown from "./markdown"
import Code from "./code"

const Nb = (props: {nb: NotebookType}) => {
    return (
        props.nb.cells.map((cell) => (
            cell.cell_type == "markdown"
                ? <Markdown source={cell.source.join("\n")} />
                : <Code language="python" code={cell.source.join("\n")} />
        ))
    )
}

export default Nb
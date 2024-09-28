type _CellTypeBase = {
    metadata: any
    source: string[]
}

type CellType = (
    ({cell_type: "markdown"} & _CellTypeBase) |
    ({cell_type: "code"} & _CellTypeBase & {
        execution_count: number | null
        outputs: OutputType[]
    })
)

type _OutputTypeDisplay = {
    output_type: "display_data" | "execute_result"
    data: {
        "text/plain"?: string | string[]
        "img/png"?: string
    }[]
}

type _OutputTypeStream = {
    output_type: "stream"
    text: string[]
}

type _OutputTypeError = {
    output_type: "error"
    ename: string
    evalue: string
    traceback: string[]
}

type OutputType = _OutputTypeDisplay | _OutputTypeError | _OutputTypeStream

export type NotebookType = {
    cells: CellType[]
    metadata?: any
}
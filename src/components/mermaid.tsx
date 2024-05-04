"use client"

import { useState, useEffect, useRef } from "react"
import mermaid from "mermaid"
mermaid.initialize({theme: "neutral"})

const Mermaid = ({ code }: { code: string }) => {
    const idRef = useRef(`mermaid-${Math.random().toString(36).substring(7)}`)
    const id = idRef.current

    const [renderedSvg, setSvg] = useState("")
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        mermaid.render(id, code)
            .then(({svg}) => {
                setSvg(svg)
                setError(null)
            })
            .catch((e) => {
                setError(e.message)
            })
    }, [code])

    const nativeErrorDisabler = (
        <style dangerouslySetInnerHTML={{__html: (error || "") && `
            #${id} {
                display: none !important;
            }
            `}}/>
    )

    const tryDeleteNativeError = () => {
        if (error) {
            const el = document.getElementById(id)
            if (el) {
                el.remove()
            } else {
                setTimeout(tryDeleteNativeError, 100)
            }
        }
    }
    useEffect(tryDeleteNativeError, [error])

    return (
        <div className="">
            {nativeErrorDisabler}
            {error
                ? <div className="w-full h-auto bg-red-200 rounded-sm p-1 text-sm">
                    <span className="font-bold text-red-400">Error Parsing Mermaid: </span>
                    {error}
                </div>
                : <div className="w-full h-auto flex justify-center">
                    <div dangerouslySetInnerHTML={{__html: renderedSvg}}/>
                </div>
            }
        </div>
        
    )
}

export default Mermaid
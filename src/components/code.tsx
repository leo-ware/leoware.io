"use client"

// @ts-ignore
import Highlight from 'react-highlight'
import "../../node_modules/highlight.js/styles/a11y-light.css"

const Code = ({language, code}: {language: string, code: string}) => {
    return (
        <div className='not-prose border-grey-200 border rounded-sm'>
            <Highlight language={language}>
                {code}
            </Highlight>
            <div className="text-xs font-light m-1 float-right">{language}</div>
        </div>
    )
}

export default Code
---
title: On Using Mermaid in React
desc: how I got mermaid working for this site
---

*Reference doc for future-Leo or others interested in getting Mermaid working with React/Next/MDX.*

**Versions**: node 20.12, react 18, next 14, mermaid 10.9, tailwind 3.4

[Mermaid](https://mermaid.js.org/) is a declarative, domain specific language for describing diagrams.
It comes with a reference implementation in javascript, mermaid.js, that you can use for including diagrams in websites. If you're like me, and you are often use diagrams in your website, this is very useful.

For my use-case, I wanted to get it working inside of MDX in a Next/React app using server components. So, the goal was to be able to put a mermaid code block into a markdown document and have this render as a diagram.

So, this MDX code,

```markdown
'''mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
'''
```

should render as this document,

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
(*Note I've replaced backticks with single quotes in example markdown.*)

The general plan here is to write an MDX component that will capture mermaid code, transform it into svg, and then render it using dangerouslySetInnerHTML. Originally, I also wanted this to happen in a Next server component. Unfortunately, the function in Mermaid.js that generates svg code, mermaid.render, references the document object, which is undefined during server side rendering and will throw. 

The library is designed to be dropped into the site in a script tag and left to imperatively edit the DOM wherever it detects Mermaid code. This isn't ideal in React context because it would require uncontrolled components and could lead to annoying hydration errors. I considered editing the source code to abstract this functionality, but it's written in a fairly tangled imperative style, and it seemed easier to just accept client-side rendering.

Thankfully, it *is* possible to use the render function to generate raw svg on the client side with minimal global effects.

Here's my code:

```tsx
"use client"

import { useState, useEffect, useRef } from "react"
import mermaid from "mermaid"
mermaid.initialize({theme: "neutral"})

const Mermaid = ({ code }: { code: string }) => {
    const idRef = useRef(`mermaid-${
        Math.random().toString(36).substring(7)}`)
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
                    <span className="font-bold text-red-400">
                        Error Parsing Mermaid: 
                    </span>
                    {error}
                </div>
                : <div className="w-full h-auto flex justify-center">
                    <div
                        style={{display: error? "none": "block"}}
                        dangerouslySetInnerHTML={{__html: renderedSvg}}/>
                </div>
            }
        </div>
        
    )
}

export default Mermaid
```

Let's walk through it line by line

```tsx
import mermaid from "mermaid"
mermaid.initialize({theme: "neutral"})
```

I'm using mermaid 10.9 which was the latest on npm at the time. The call to initialize can apparently only run once, so it needs to be outside the component. The list of themes is [here](https://mermaid.js.org/config/theming.html). (I guess if you want different themes on different parts of your site, you're out of luck.)

```tsx
const idRef = useRef(`mermaid-${
    Math.random().toString(36).substring(7)}`)
const id = idRef.current
```

Each call to render requires a unique id that will be used as the id of the svg element in the DOM. I used a ref to ensure that the random id is generated only once for each diagram.

```tsx
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
```

Render is an async function, presumably because of the DOM manipulation that goes on inside. If it encounters invalid code, the promise will reject returning a helpful syntax error (good behavior) and will also insert an error message svg into the DOM (bad behavior).

This error message svg is particularly pernicious because it is inserted into to DOM at the end of the html tag, i.e. outside of the React component. Thankfully, it uses the id you pass to render, so it is possible to find it. The first thing I do is ensure that this error never gets displayed on the page by setting display none using a dynamic style tag.

```tsx
const nativeErrorDisabler = (
    <style dangerouslySetInnerHTML={{__html: (error || "") && `
        #${id} {
            display: none !important;
        }
        `}}/>
)
```

The hides the error message on the current page, but because the error message isn't tracked by react, it won't be unmounted on navigation. So, in addition, we actually need to manually delete it. I don't actually know how the underlying insertion code works (i.e. whether it's wrapped in an async), so I added a feature that, just for good measure, will keep trying to delete the message every 100 milliseocnds if it hasn't been found yet, just in case it hasn't been inserted by the first time tryDeleteNativeError is run.

```tsx
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
```

Finally, we assemble the finished component.

```tsx
return (
    <div>
        {nativeErrorDisabler}
        {error
            ? <div className="w-full h-auto bg-red-200 rounded-sm p-1 text-sm">
                <span className="font-bold text-red-400">
                    Error Parsing Mermaid: 
                </span>
                {error}
            </div>
            : <div className="w-full h-auto flex justify-center">
                <div dangerouslySetInnerHTML={{__html: renderedSvg}}/>
            </div>
        }
    </div>
    
)
```

Since this is for my personal site, I opted to display a the syntax error when render failed, but if the requirements for your site are different you could display a generic error or simply hide the component.

E.g.,

```mermaid
foo bar
```

Alright, if you're currently working on a similar project, I hope that helped.
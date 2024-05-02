import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: (props) => (
    //     <h1 {...props} className="text-4xl font-bold">
    //         {props.children}
    //     </h1>
    // ),
    ...components,
  }
}
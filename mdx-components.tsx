import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props} itemProp="headline">{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props} itemProp="text">{children}</p>,
    a: ({ children, ...props }) => <a {...props} rel="noopener noreferrer">{children}</a>,
  }
}
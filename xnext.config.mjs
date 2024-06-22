/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;


// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 

// export default withMDX(nextConfig)
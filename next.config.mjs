/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {},
})
const nextConfig = {
    experimental: {
      mdxRs: true,
    },
}
   
// const withMDX = require('@next/mdx')()
// module.exports = withMDX(nextConfig)
export default withMDX(nextConfig)
import path from 'path'
import fs from 'fs/promises'
import { cache } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/app/blog/[slug]/components/markdownComponents'


// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./src/posts/')

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./src/posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        // const { data, content } = matter(postContent)
        const {content, frontmatter} = await compileMDX({
            source: postContent,
            components: mdxComponents,
            options: {
                parseFrontmatter: true,
            },
          })
        const data = frontmatter;

        if (data.published === false) {
          return null
        }

        return { ...data, body: content }
      })
  )
})

export async function getPost(slug) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts
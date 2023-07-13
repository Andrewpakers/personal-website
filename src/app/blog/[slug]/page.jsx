import getPosts, {getPost} from '@/lib/posts'
import { notFound } from 'next/navigation'
import './post.css'
import profilePic from '/src/assets/images/profile.jpeg'
import Image from 'next/image'


export async function generateMetadata({ params, searchParams }, parent) {
    const post = await getPost(params.slug)

   
    return {
      title: post?.title,
      description: post?.description,
      openGraph: {
        title: post?.title,
        description: post?.description,
        url: '/blog/' + post?.slug,
        siteName: 'Andrew Akers',
        images: [
          {
            url: post?.shareImg,
            width: 800,
            height: 600,
          },
          {
            url: post?.shareImg,
            width: 1800,
            height: 1600,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    }
  }

export default async function PostPage({
  params,
}) {
  const post = await getPost(params.slug)
  // notFound is a Next.js utility
  if (!post) return notFound()

  return (
    <div className=' mb-48 max-w-[1000px] prose prose-p:my-2 dark:prose-invert flex flex-col'>
        <h1 className='mt-3 mb-3'>{post?.title}</h1>
        <div className='flex gap-6 items-center'>
            <Image className='rounded-full' width={80} src={profilePic} alt='profile pic'/>
            <div className='flex flex-col'>
                <span className='text-md font-light'>{post?.date}</span>
                <span className='text-md font-light'>{post?.author}</span>
            </div>
        </div>
        {post?.body}
    </div>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

export const mdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
  ImageCenter: (params) => {
    // You need to do some work here to get the width and height of the image.
    // See the details below for my solution.
    return (
      <div className={`flex justify-center items-center`}>
        <Image unoptimized={true} className='m-1' src={params.src} alt={params?.alt} height={params?.height} width={params?.width} />
      </div>
      )
  },
  ImageGallery: (params) => {
    const images = params?.images.map((image, index) => {
      return (
        <Image key={index} src={image?.src} alt={image?.alt} height={image?.height} width={image?.width} />
      );
    })
    return (
      <div className='flex flex-wrap'>
        {images}
      </div>
    );
  },
  // any other components you want to use in your markdown
}
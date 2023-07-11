import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew Akers',
  description: 'Andrew Akers is a product marketing manager with 10 years of experience in the cybersecurity industry',
  metadataBase: new URL('https://personal-website-khaki-zeta.vercel.app/'),
  openGraph: {
    title: "Andrew Akers",
    description: "Andrew Akers is a a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.",
    // url: 'https://nextjs.org',
    siteName: 'Andrew Akers',
    images: [
    {
        url: '/profile.jpeg',
        width: 800,
        height: 600,
    },
    {
        url: '/profile.jpeg',
        width: 1800,
        height: 1600,
    },
    ],
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cake" className='[&>*]:text-base-content' >
      <body className={inter.className + " bg-transparent"}>
        <div className='w-full flex flex-col items-center mx-auto'>
            <Navbar />
          <div className='w-full p-1 flex flex-col items-center'>{children}</div>
        </div>
      </body>
    </html>
  )
}

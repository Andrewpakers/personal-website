import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew Akers',
  description: 'Andrew Akers is a product marketing manager with 10 years of experience in the cybersecurity industry',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cake" className='[&>*]:text-base-content' >
      <body className={inter.className + " bg-transparent"}>
        <div className='w-full flex flex-col items-center mx-auto'>
          {/* <div className='animate-fadeIn w-full flex justify-center border-b-[3px] border-primary'> */}
            <Navbar />
          {/* </div> */}
          <div className='w-full p-1 flex flex-col items-center'>{children}</div>
        </div>
      </body>
    </html>
  )
}

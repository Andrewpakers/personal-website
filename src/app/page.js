import Image from 'next/image'
import profilePic from '../assets/images/profile.jpeg'
import chtraiPic from '../assets/images/chtrai4.png'
import Item from '@/components/item'
import Blade from '@/components/blade'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] });


export default function Home() {
  return (
    <main className='h-full bg-base-100 w-full max-w-[1300px] p-1'>
      <div className='ml-2 sm:ml-6 flex flex-wrap items-center justify-around'>
        <div className='animate-fadeInLeft'>
          <h1 className='sm:mt-28 sm:text-8xl text-6xl font-bold w-fit max-w-[600px] my-[24px]'>Hey there.<br />I&apos;m Andrew</h1>
          <span className={`sm:text-3xl sm:mt-4 inline-block text-xl max-w-[600px]`}>I&apos;m a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.</span>
        </div>
        <div className=' rounded-[10px] xl max-sm:ml-2 max-sm:max-h-[300px] max-md:self-center max-h-[400px] max-w-[400px] border-solid border-primary border-[3px]
          aspect-square mx-auto mt-10 sm:mt-40 animate-fadeInRight shadow-[15px_17px_0] shadow-neutral'>
            <Image
              className='rounded-[7px]'
              src={profilePic}
              width={400}
              height={400}
              alt='Andrew Akers. Blonde hair, wearing sunglasses, looking back at the camera from on top of a mountain.'
            />
        </div>
      </div>
      <Blade 
      title='Projects' 
      link='/projects'
      className="" >
        <div className='flex flex-col items-center justify-center'>
          <Item
          image={chtraiPic}
          imgAlt='Screenshot of chtr-ai, a AI-powered chatroom proof of concept built by Andrew Akers'
          >
            <div className=' relative'>
              <svg className='rounded-[10px] w-96 h-[480px] z-0 absolute top-[17px] left-[15px]' fill="currentColor" role="img" aria-hidden="true" ><title>Diagonal A Dense</title><pattern id="DiagonalADense-pattern-10" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect><rect x="1" y="2" width="1" height="1" fill="currentColor"></rect><rect x="1" y="3" width="1" height="1" fill="currentColor"></rect><rect y="3" width="1" height="1" fill="currentColor"></rect><rect x="3" width="1" height="1" fill="currentColor"></rect><rect x="3" y="1" width="1" height="1" fill="currentColor"></rect><rect x="2" y="1" width="1" height="1" fill="currentColor"></rect></pattern><rect width="100%" height="100%" fill="url(#DiagonalADense-pattern-10)"></rect></svg>
              <div className={inconsolata.className + ' ' + 'rounded-[10px] border-solid border-primary border-[2px] bg-[#e8e4e6] p-6 ' +
              'h-[480px] w-96 max-w-96 relative z-1 flex flex-col justify-center items-center'}>
                <h2 className={inconsolata.className +
                  ' text-2xl font-bold border-solid border-primary border-[3px] ' +
                  'rounded-[10px] px-8 py-3 text-3xl bg-base-100 ' +
                  'shadow-[8px_8px_0] shadow-primary' }>
                    chtr.ai
                </h2>
                <p className='text-xl mt-12'>Built as a small proof of concept, Chtr.ai is chatroom app with a twist — all chatrooms include AI participants. Powered by OpenAI&apos;s ChatGPT, each bot has a personality and background, and they converse with eachother and human participants seamlessly.</p>
              </div>
            </div>
          </Item>
        </div>
      </Blade>
      <Blade
      title='Content'
      link='/content'
      colorValue='bg-[#c3f0ca]'
      className=''>

      </Blade>

    </main>
  )
}

import Image from 'next/image'
import profilePic from '../assets/images/profile.jpeg'
import chtraiPic from '../assets/images/chtrai4.png'
import SSEPic from '../assets/images/SSE_Assessment.png'
import brokenAuthPic from '../assets/images/broken_auth_cover.webp'
import credStuffingPic from '../assets/images/cred_stuffing_cover.webp'
import Item from '@/components/item'
import Blade from '@/components/blade'
import Content from '@/components/content'
import ContentVideo from '@/components/contentVideo'
import { Inconsolata } from 'next/font/google'
import getPosts from '@/lib/posts'

const inconsolata = Inconsolata({ subsets: ['latin'] });

export async function generateMetadata() {
  return {
      title: "Andrew Akers",
      description: "Andrew Akers is a a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.",
      openGraph: {
          title: "Andrew Akers",
          description: "Andrew Akers is a a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.",
          url: '/',
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
}

export default async function Home() {
  const posts = await getPosts();
  const renderedPosts = posts.map((post, index) => {
      return (
          <div className=" mt-10 max-sm:w-[340px] rounded-[10px] border-solid border-primary border-[2px] bg-[#e8e4e6] h-[480px] w-96 p-6 max-w-96" key={index}>
              <a href={`/blog/${post?.slug}`} className="flex flex-col gap-4 justify-center items-center">
                  <Image src={post?.shareImg} alt={post?.title} width={280} height={280} className='rounded-[10px]' />
                  <div className="flex flex-col">
                      <span className=" font-bold">{post?.title}</span>
                      <span className="text-sm font-light">{post?.date}</span>
                      <span className="text-sm font-light">{post?.author}</span>
                  </div>
                  <span className="">{post?.description}</span>
              </a>
          </div>
      );
  });
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
              <svg className='rounded-[10px] max-sm:w-[340px] w-96 h-[480px] z-0 absolute top-[17px] left-[15px]' fill="currentColor" role="img" aria-hidden="true" ><title>Diagonal A Dense</title><pattern id="DiagonalADense-pattern-10" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect><rect x="1" y="2" width="1" height="1" fill="currentColor"></rect><rect x="1" y="3" width="1" height="1" fill="currentColor"></rect><rect y="3" width="1" height="1" fill="currentColor"></rect><rect x="3" width="1" height="1" fill="currentColor"></rect><rect x="3" y="1" width="1" height="1" fill="currentColor"></rect><rect x="2" y="1" width="1" height="1" fill="currentColor"></rect></pattern><rect width="100%" height="100%" fill="url(#DiagonalADense-pattern-10)"></rect></svg>
              <div className={inconsolata.className + ' ' + ' max-sm:w-[340px] rounded-[10px] border-solid border-primary border-[2px] bg-[#e8e4e6] p-6 ' +
              'h-[480px] w-96 max-w-96 relative z-1 flex flex-col justify-center items-center'}>
                <a href="https://chtr-ai.web.app/">
                  <h2 className={inconsolata.className +
                    ' text-2xl font-bold border-solid border-primary border-[3px] ' +
                    'rounded-[10px] px-8 py-3 text-3xl bg-base-100 ' +
                    'shadow-[8px_8px_0] shadow-primary hover:bg-neutral' }>
                      chtr.ai
                  </h2>
                </a>
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
        <div className='flex flex-wrap items-center justify-center'>
          <Content
          image={credStuffingPic}
          imgAlt='Screenshot of the cover of a PDF titled Credential Stuffing Attacks: What Are They and How to Combat Them'
          link={'https://auth0.com/resources/whitepapers/credential-stuffing-attacks/'}
          linkText='Read the whitepaper'
          text={"Learn how credential stuffing attacks work, how to detect them, and how to prevent them."}
          />
          <Content
          image={SSEPic}
          imgAlt='Screenshot of the cover of a PDF titled SSE assessment, which is provided to users who complete an interactive assessment on their Security Services Edge capabilities'
          link={'https://www.cisco.com/c/m/en_us/products/security/sse-assessment-tool.html'}
          linkText='Take the assessment'
          text={'This interactive assessment evaluates your Security Service Edge (SSE) capabilities and creates a customized report based on your maturity.'}
          />
          <Content
          image={brokenAuthPic}
          imgAlt='Screenshot of the cover of a PDF titled Fixing Broken Auth'
          link={'https://auth0.com/resources/whitepapers/broken-authentication'}
          linkText='Read the whitepaper'
          text={'Broken Authentication is the second most critical security risk to applications, according to OWASP. Learn how to prevent it.'}
          />
        </div>
        <div>
          <h2 className='text-lg font-bold text-center mt-12 mb-3'>Video Content</h2>
          <div className='flex flex-wrap items-center justify-center gap-12'>
            <ContentVideo
            videoID={'EiQ7JfmNMWU'}
            text={'Kubernetes is a lynchpin for the majority of container deployments, but it is also a major target for attackers'}
            videoProps={{
              opts: {
                height: '350',
                width: '600',
                playerVars: {
                  autoplay: 0,
                },
              },
            }}
            />
            <ContentVideo
            videoID={'feP745bb0YQ'}
            text={'Cisco Stealthwatch Cloud provides visibility and threat detection across your public cloud, private network, and hybrid environment.'}
            videoProps={{
              opts: {
                height: '350',
                width: '600',
                playerVars: {
                  autoplay: 0,
                },
              },
            }}
            />
          </div>
        </div>
      </Blade>
      <Blade
      title='Blog'
      link='/blog'
      colorValue='bg-secondary'
      className=''>
         <div className="flex flex-wrap">
          {renderedPosts}
        </div>
      </Blade>

    </main>
  )
}

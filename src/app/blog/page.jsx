import getPosts from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
    return {
        title: "Andrew Akers - Blog",
        description: "Andrew Akers is a a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.",
        openGraph: {
            title: "Andrew Akers - Blog",
            description: "Andrew Akers is a a writer, tech enthusiast, programmer, product marketer and creator of content and side projects.",
            url: '/blog',
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

export default async function Blog() {
    const posts = await getPosts();
    const renderedPosts = posts.map((post, index) => {
        return (
            <div className=" mt-10 max-sm:w-[340px] rounded-[10px] border-solid border-primary border-[2px] bg-[#e8e4e6] h-[480px] w-96 p-6 max-w-96" key={index}>
                <Link href={`/blog/${post?.slug}`} className="flex flex-col gap-4 justify-center items-center">
                    <Image src={post?.shareImg} alt={post?.title} width={280} height={280} className='rounded-[10px]' />
                    <div className="flex flex-col">
                        <span className=" font-bold">{post?.title}</span>
                        <span className="text-sm font-light">{post?.date}</span>
                        <span className="text-sm font-light">{post?.author}</span>
                    </div>
                    <span className="">{post?.description}</span>
                </Link>
            </div>
        );
    });
    return (
        <div className="w-full max-w-[1250px] mt-10">
            <h1 className="text-4xl font-bold">Blog</h1>
            <div className="flex flex-wrap">
                {renderedPosts}
            </div>
        </div>
    );
}
import Link from "next/link";
export function LoadingNavbar() {
    <div className="h-[68]" />
}

function Navbar() {
    return (
        <div className="animate-fadeIn max-sm:-translate-y-2 sm:max-lg:mt-5 border-b-[3px] border-primary ml-7 sm:ml-9 navbar bg-base-100 max-w-[1300px] lg:h-24 p-0 pr-4">
            <div className="navbar-start h-full">
                    <div className="h-full flex items-end overflow-hidden max-sm:translate-y-[11px]">
                        <div className="bg-secondary animate-fadeInTop 
                        border-solid border-primary border-x-[3px] border-t-[3px] 
                        px-1 py-1 sm:px-4 sm:py-5">
                            <Link className="font-medium normal-case text-lg sm:text-2xl text-primary whitespace-nowrap" href="/">Andrew Akers</Link>
                        </div>
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            
            </div>
            <div className="navbar-end">
                <ul className="animate-fadeInRight menu menu-horizontal px-1 hidden sm:flex flex-nowrap">
                    <li className=""><Link className="hover:underline text-lg" href="/blog">Blog</Link></li>
                    <li className=""><Link className="hover:underline text-lg" href="/projects">Projects</Link></li>
                    <li className=""><Link className="hover:underline text-lg" href="/content">Content</Link></li>
                    <li tabIndex={0}>
                        <details className="">
                        <summary className="hover:underline text-lg">Social</summary>
                        <ul className="shadow-none rounded-none ">
                            <li className="rounded-none border-solid border-primary border-[3px]"><Link className="hover:underline" href="https://www.linkedin.com/in/andrewpakers/">LinkedIn</Link></li>
                            <li className="rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="hover:underline" href="https://github.com/Andrewpakers/">GitHub</Link></li>
                            <li className="rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="hover:underline" href="https://bsky.app/profile/apa.bsky.social">Bluesky</Link></li>
                            <li className="rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="hover:underline" href="https://infosec.exchange/@andrewpakers">Mastodon</Link></li>
                        </ul>
                        </details>
                    </li>
                </ul>
                <div className="max-sm:translate-y-1 dropdown dropdown-end animate-fadeInRight">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] bg-base-100 rounded-none
                         p-0 w-screen">
                        <li className="bg-base-100 rounded-none border-solid border-primary border-[3px]"><Link className="active:bg-base-100 " href="/blog">Blog</Link></li>
                        <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="/projects">Projects</Link></li>
                        <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="/content">Content</Link></li>
                        <li>
                        <details className="dropdown open:max-w-[calc(100vw-0.1px)]">
                            <summary id="socialList" className=" marker:bg-base-100 max-w-screen bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]" href="">Social</summary>
                            <ul tabIndex={1} className="p-0 w-screen -translate-x-4">
                                <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="https://github.com/Andrewpakers">GitHub</Link></li>
                                <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="https://www.linkedin.com/in/andrewpakers/">LinkedIn</Link></li>
                                <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="https://bsky.app/profile/apa.bsky.social">Bluesky</Link></li>
                                <li className="bg-base-100 rounded-none border-solid border-primary border-b-[3px] border-x-[3px]"><Link className="" href="https://infosec.exchange/@andrewpakers">Mastodon</Link></li>
                            </ul>
                        </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
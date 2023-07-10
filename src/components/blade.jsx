import Link from "next/link";
export default function Blade({ title, link, children, colorValue = 'bg-accent', isLeft = true, className }) {
    if (isLeft) {
        return (
            <div className={ "mt-10 flex flex-col " + className }>
                <div className=" animate-fadeIn flex w-full ml-2 sm:ml-6 border-solid border-primary border-b-[3px]">
                    <div className={`${colorValue} mr-auto animate-fadeInRight border-solid border-primary border-x-[3px] border-t-[3px] px-1 py-1 sm:px-4 sm:py-5`}>
                        <Link href={link} className="animate-fadeInLeft font-medium normal-case text-lg sm:text-2xl text-primary">{title}</Link>
                    </div>
                </div>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        );
    }
    return (
        <div>

        </div>
    );
}
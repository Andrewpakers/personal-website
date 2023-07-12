import Image from "next/image";
export default function Item({ children, image, imgAlt = "", className, imgClassName, link }) {
    return (
        <div className={" "
        + "mt-6 "
        + "w-full mx-36 my-12 flex flex-wrap "
        + " justify-center gap-20 " + className}>
            <div>
                {children}
            </div>
            <div className=" self-center border-solid border-primary border-[2px] rounded-[10px]">
                <a href={link}>
                    <Image
                    className={"rounded-[7px] min-w-[400px] " + imgClassName}
                    src={image}
                    height={400}
                    alt={imgAlt} />
                </a>
            </div>
        </div>
    );
}
import Image from "next/image";
export default function Content({ image, imgAlt = "", link, linkText = "View", text, imgClassName = "", className = "", btnClassName = "" }) {
    return (
        <div className={`flex flex-col items-center mt-3 gap-3 w-96 ` + className}>
            <div className="h-[400px] flex items-center">
                <a href={link}>
                    <Image
                    className={"border-solid border-primary border-[2px] rounded-[10px] " + imgClassName}
                    src = {image}
                    width = {280}
                    alt={imgAlt}
                    />
                </a>
            </div>
            <div className="h-[100px] flex items-center">
                <span className=" text-center">{text}</span>
            </div>
            <button
            className={"btn btn-neutral " + btnClassName} 
             >
                <a href={link}>{linkText}</a>
            </button>
        </div>
    );
}
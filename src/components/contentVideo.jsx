'use client'
import YouTube from 'react-youtube';

export default function ContentVideo({ videoID, videoProps, text, videoClassName = "", className = "" }) {
    return (
        <div className={`flex flex-col items-center mt-3 gap-3 w-fit ` + className}>
            <YouTube
            iframeClassName={'sm:w-[560px] sm:h-[315px] w-[280px] h-[157.5px] border-solid border-primary border-[2px] rounded-[10px] ' + videoClassName}
            videoId = {videoID}
            {...videoProps}
            />
            <span className=" w-96 text-center">{text}</span>
        </div>
    );

}
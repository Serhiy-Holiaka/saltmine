import { useState, useEffect } from "react";
import Tab from "./tab/Tab";
import Video from "./video/Video";
import { VIDEO_LIST } from "../../constants/constants";

const Videos = () => {
    const [videoArray, setVideoArray] = useState(VIDEO_LIST);
    const [activeId, setActiveId] = useState('1');
    useEffect(() => {
        const tempArray = videoArray.filter(item => item.id !== activeId);
        const firstItem = videoArray.find(item => item.id === activeId);
        tempArray.unshift(firstItem);
        setVideoArray(tempArray);
    }, [activeId]);

    return (
        <div className="grid grid-cols-video gap-[4%]">
            <div>
                <ul className='relative w-full h-full'>
                {videoArray.map(({ video, id }, i) => {
                    const zIndex = VIDEO_LIST.length - i;
                    return (
                        <li key={id} style={{ zIndex: zIndex }} className={`absolute border border-transparent pointer-events-none  ${i === 0 ? 'w-[92%] h-full top-0 left-[4%] bg-[#bcbcbc4d] border-[#bcbcbc4d] pointer-events-auto animate-fade' : i === 1 ?  'w-[96%] h-[90%] top-[5%] left-[2%] opacity-80' : i === 2 ? 'w-full h-[80%] top-[10%] left-0 opacity-50' : 'w-[86%] h-[86%] top-[7%] left-[7%] opacity-10'} rounded-lg overflow-hidden`}>
                            <Video sourcesList={video} />
                        </li>
                    )})}
                </ul>
            </div>
            <div>
                <ul>
                    {VIDEO_LIST.map(({ text, id }) => (
                        <li key={id} className="[&>button]:py-3 [&_button]:last:pb-0 [&>button]:first:pt-0">
                            <Tab
                                text={text}
                                onClick={() => setActiveId(id)}
                                isActive={id === activeId}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Videos;

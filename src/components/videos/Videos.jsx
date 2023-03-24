import { useState } from "react";
import Tab from "./tab/Tab";
import Video from "./video/Video";
import { VIDEO_LIST } from "../../constants/constants";

const Videos = () => {
    const [activeId, setActiveId] = useState('1');
    return (
        <div className="grid grid-cols-video gap-[1%]">
            <div>
                <ul>
                {VIDEO_LIST.map(({ video, id }) => (
                        <li key={id}>
                            <Video sourcesList={video} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {VIDEO_LIST.map(({ text, id }) => (
                        <li key={id} className="[&>button]:py-4 [&_button]:last:pb-0 [&>button]:first:pt-0">
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

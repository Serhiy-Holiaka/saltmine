import { useRef, useState } from 'react';
import YouTubeIcon from "../../ui/icons/YouTubeIcon";

const Videos = ({ sourcesList }) => {
  const [isPlay, steIsPlay] = useState(false);
  const videoRef = useRef(null);

  const handlePlayStop = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      steIsPlay(true);
    } else {
      videoRef.current.pause();
      steIsPlay(false);
    }
  };

  return (
    <div className={`relative w-full h-full ${isPlay ? '[&>button]:invisible [&>button]:opacity-0 [&>button]:hover:visible [&>button]:hover:opacity-100' : '[&>button]:visible [&>button]:opacity-100'}`}>
      <video
        ref={videoRef}
        preload='metadata'
        onClick={handlePlayStop}
        className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover'
      >
        {sourcesList &&
          sourcesList.map((item, i) => (
            <source key={i} src={item.src} type={item.type} />
          ))}
        Your browser is not suported!
      </video>
      <button
        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[45px] h-[32px] hover:[&_svg]:scale-110 active:[&_svg]:scale-100 transition duration-200'
        onClick={handlePlayStop}
      >
        <YouTubeIcon className="w-full h-full [&>path]:fill-white transition duration-200" />
      </button>
    </div>
  );
};

export default Videos;

import YouTubeIcon from "../../ui/icons/YouTubeIcon";

const Tab = ({ text, onClick, isActive = false }) => {
    const handleClick = typeof onClick === 'function' ? onClick : null;

    return (
        <button type="button" onClick={handleClick} className={`flex text-lg leading-[150%] text-left w-full font-medium ${isActive ? 'text-yellow border-b border-b-yellow' : 'text-black-light'} transition`}>
            {isActive && <YouTubeIcon className="mr-[10px] mt-1 min-w-[22px]" />}<span>{text}</span>
        </button>
    );
};

export default Tab;
import { useState } from "react";

const MobileMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`relative ${isOpen ? 'z-[4]' : 'z-[3]'} xl:hidden ml-2`}>
            <div
                onClick={() => setIsOpen(false)}
                className={`${
                    isOpen ? "visible" : "invisible"
                } fixed top-0 left-0 right-0 bottom-0 z-[5]`}
            />
            <button
                type="button"
                onClick={handleClick}
                className="relative flex flex-col items-center justify-around w-10 h-7 z-[3]"
            >
                <span
                    className={`absolute w-7 h-[2px] bg-gray ${isOpen ? 'rotate-[135deg] top-[14px]' : 'rotate-0 top-[6px]'} transition-transform duration-200`}
                />
                <span
                    className={`absolute w-7 h-[2px] bg-gray ${isOpen ? 'invisible' : 'visible'}`}
                />
                <span
                    className={`absolute w-7 h-[2px] bg-gray ${isOpen ? '-rotate-[135deg] top-[14px]' : 'rotate-0 top-[20px]'} transition-transform duration-200`}
                />
            </button>
            <nav
                className={`absolute top-[40px] right-0 z-[5] flex flex-col w-[300px] bg-white rounded-lg transition-all duration-150 shadow-lg ${isOpen ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'}`}
            >{children}</nav>
        </div>
    );
};

export default MobileMenu;

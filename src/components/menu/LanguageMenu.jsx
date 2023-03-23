import { useState } from "react";
import ArrowDownIcon from "../ui/icons/ArrowDownIcon";

const LanguageMenu = ({ children, locale, labelColor = 'text-black-light', arrowColor = 'dark' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const iconColor =  arrowColor === 'dark' ? '[&>path]:stroke-black-light' : '[&>path]:stroke-gray-light';

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`relative ml-4 ${isOpen ? "z-[4]" : "z-[3]"}`}>
            <div
                onClick={() => setIsOpen(false)}
                className={`${
                    isOpen ? "visible" : "invisible"
                } fixed top-0 left-0 right-0 bottom-0 z-[5]`}
            />
            <button
                type="button"
                onClick={handleClick}
                className="relative flex flex-row items-center justify-around h-7 z-[3]"
            >
                <img width={30} height={18} src={`/images/icon/${locale.icon}`} alt="flag" />
                <span className={`pl-[12px] pr-[5px] font-medium ${labelColor}`}>{locale.label}</span>
                <ArrowDownIcon className={iconColor} />
            </button>
            <nav
                className={`absolute top-[40px] right-0 z-[5] flex flex-col w-[150px] bg-white rounded-lg ${
                    isOpen
                        ? "translate-y-0 opacity-1 visible"
                        : "-translate-y-10 opacity-0 invisible"
                } transition-all duration-150 shadow-lg`}
            >
                {children}
            </nav>
        </div>
    );
};

export default LanguageMenu;

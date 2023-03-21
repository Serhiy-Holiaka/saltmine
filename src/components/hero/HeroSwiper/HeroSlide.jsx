import ArrowIcon from '../../ui/icons/ArrowIcon';

const HeroSlide = ({ image, href, title }) => {
    return (
        <div className="grid grid-cols-2 h-full w-full">
            <div className="flex flex-col pt-[15%] px-[70px]">
                <h1 className="text-[60px] 2xl:text-[72px] leading-[70px] 2xl:leading-[85px] font-medium">{title}</h1>
                <div className="py-10 inline-flex items-center"><img width={57} height={32} src="/images/icon/360_icon.svg" alt="360-icon"/><span className="text-xl ml-4">Virtual tour</span></div>
                <div>
                    <a href={href} className="py-[20px] px-[26px] bg-yellow inline-flex items-center rounded-lg border border-transparent hover:border-yellow hover:bg-yellow-200 active:bg-yellow [&>svg]:hover:transform [&>svg]:hover:translate-x-[6px] transition-colors duration-200"><span>Find out the cost of a salt room</span><ArrowIcon className="ml-4 [&>path]:stroke-black-light transition-transform duration-200" /></a>
                </div>
            </div>
            <div className="relative rounded-l-lg overflow-hidden">
                <img className="absolute w-full h-full object-cover" width={945} height={820} src={`/images/${image}`} alt="slide-img"/>
            </div>
        </div>
    );
};

export default HeroSlide;

import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlider from "./HeroSlide";

const HeroSwiper = () => {
    return (
        <div className="relative w-full h-full">
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="h-full"
            >
                <SwiperSlide>
                    <HeroSlider />
                </SwiperSlide>
                <SwiperSlide className="bg-gray-400">Slide 2</SwiperSlide>
                <SwiperSlide className="bg-gray-500">Slide 3</SwiperSlide>
                <SwiperSlide className="bg-gray-600">Slide 4</SwiperSlide>
            </Swiper>
            <div className="absolute bottom-0 left-0 w-3/4 bg-black-light h-[199px] z-10">

            </div>
        </div>
    );
};

export default HeroSwiper;

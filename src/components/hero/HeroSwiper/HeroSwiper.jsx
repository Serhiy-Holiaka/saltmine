import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import CallIcon from '../../ui/icons/CallIcon';
import HeroSlider from './HeroSlide';
import { SLIDER_LIST } from '../../../constants/constants';
import ArrowIcon from '../../ui/icons/ArrowIcon';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSwiper = () => {
  return (
    <div className='relative w-full h-full'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        pagination={{
          clickable: true,
          el: '#pagination',
          bulletClass: 'bullet-custom',
          bulletActiveClass: 'active-point',
          renderBullet: function (_, className) {
            return `<svg class="${className} mr-7 last:mr-0" height="10" width="10">
            <circle cx="5" cy="5" r="4" stroke="#393939" stroke-width="1" fill-opacity="0" />
        </svg>`;
          },
        }}
        className='h-full'
      >
        {SLIDER_LIST.map(({ title, href, image }, i) => (
          <SwiperSlide key={i}>
            <HeroSlider title={title} href={href} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute bottom-0 left-0 w-full xl:w-3/4 flex justify-end bg-black-light h-[199px] xl:rounded-tr-xl z-10 overflow-hidden'>
        <div className='flex items-center justify-between w-2/3 pl-[70px] pr-[125px]'>
          <div className='flex'>
            <button
              id='prev'
              className='flex items-center justify-center w-[36px] h-[36px] mr-4 rounded-full border border-[#393939] hover:border-yellow [&_path]:hover:stroke-white transition'
            >
              <ArrowIcon className='[&>path]:stroke-[#393939] transition rotate-180' />
            </button>
            <button
              id='next'
              className='flex items-center justify-center w-[36px] h-[36px] ml-4 rounded-full border border-[#393939] hover:border-yellow [&_path]:hover:stroke-white transition'
            >
              <ArrowIcon className='[&>path]:stroke-[#393939] transition' />
            </button>
          </div>
          <div id='pagination' className='!w-auto flex' />
        </div>
        <div className='flex flex-col justify-center w-2/5 xl:w-1/3 pl-[4%] pr-[1%] 2xl:pl-[8%] 2xl:pr-[2%] bg-black-dark h-full self-end'>
          <h6 className='text-base text-gray-light font-medium'>
            If you have any questions, call right now
          </h6>
          <div className='flex items-center mt-5'>
            <div className='text-xl text-white font-bold'>
              <p>
                <span className='text-sm text-[#7B8487]'>+38</span> (093)
                833-29-99
              </p>
              <p>
                <span className='text-sm text-[#7B8487]'>+38</span> (066)
                591-47-67
              </p>
              <p>
                <span className='text-sm text-[#7B8487]'>+38</span> (093)
                652-05-62
              </p>
            </div>
            <CallIcon className='ml-[10%]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSwiper;

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import slide4 from './slide4.jpg';

const Chefs= ()=>{
    const SwiperSettings = {
        spaceBetween: 20,
        preloadImages: false,
        className: 'expertButton',
        slidesPerView: 1,
        loop: true,
        speed: 300,
        modules: [Autoplay],
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
      breakpoints: {
          640: {
              slidesPerView: 1,
          },
          900: {
              slidesPerView: 2,
          },
          1140: {
          slidesPerView: 3,
          },
      },
  };
    return(
        <>
          <section className="chef-first-section">
      <Swiper {...SwiperSettings} pagination={{ clickable: true }}>
          <SwiperSlide>
            <Image src={slide1} alt="" width={500} height={450} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} alt="" width={500} height={450} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} alt="" width={500} height={450} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} alt="" width={500} height={450} />
          </SwiperSlide>
        </Swiper>
      </section>
        </>
    )
}
export default Chefs
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import { PrevButton } from "components/carouselArrows/carouselArrows"
import { NextButton } from "components/carouselArrows/carouselArrows";
const Trusted = ()=>{
    const SwiperSettings = {
        spaceBetween: 0,
        preloadImages: false,
        className: 'expertButton',
        slidesPerView: 4,
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
                slidesPerView: 3,
            },
            1140: {
                slidesPerView: 4,
            },
        },
    };
    return(
        <>
     
            <section className='trusted'>
                <h3> Highly Trusted Brands</h3>
                <div className='trusted-content'>
                <Swiper  {...SwiperSettings}>
                <SwiperSlide>
                    <Image src="https://winsfolio.net/html/foodio/assets/img/sponsor-1.png" alt="" height={180} width={180} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image src="https://winsfolio.net/html/foodio/assets/img/sponsor-6.png" alt="" height={180} width={180} /> 
                      </SwiperSlide>
                    <SwiperSlide>
                    <Image src="https://winsfolio.net/html/foodio/assets/img/sponsor-2.png" alt="" height={180} width={180} />  
                     </SwiperSlide>
                    <SwiperSlide>
                    <Image src="https://winsfolio.net/html/foodio/assets/img/sponsor-3.png" alt="" height={180} width={180} />  
                     </SwiperSlide>
                    <SwiperSlide>
                    <Image src="https://winsfolio.net/html/foodio/assets/img/sponsor-4.png" alt="" height={180} width={180} /> 
                      </SwiperSlide>
                   
                    <PrevButton />        <NextButton />
              </Swiper>
                </div>
            </section>
        </>
    )
}
export default Trusted
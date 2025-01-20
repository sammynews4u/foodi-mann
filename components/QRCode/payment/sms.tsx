import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { PrevButton, NextButton } from 'components/carouselArrows/carouselArrows';
import twi from './twi.png'
import nex from './nex.png'
import tele from './tele.png'
import clicka from './clicka.png'
import msg from './msg.png'
import blk from './blk.png'
import fac from './fac.png'
import bul from './bul.png'
const Sms=()=>{
    const SwiperSettings = {
        spaceBetween: 30,
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
                slidesPerView: 6,
            },
        },
    };
    return(
        <>
                        <section className="paying-method">
                            <h1>SMS Gateways</h1>
                        <Swiper
    {...SwiperSettings}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500 }}
>
    {[
        nex, twi, bul, blk, msg,
        clicka, tele, fac
    ].map((src, index) => (
        <SwiperSlide className="paids" key={index}>
            <div className="image-container">
                <Image src={src} alt="" />
            </div>
        </SwiperSlide>
    ))}
</Swiper>

                            
</section>
        </>
    )
}
export default Sms;
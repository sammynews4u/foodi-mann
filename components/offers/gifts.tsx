import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from './one.jpg'
// import two from './two.jpg'
import thre from './thre.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import Image from 'next/image'

const Gifts = ()=>{
         const SwiperSettings = {
        spaceBetween: 50,
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
                slidesPerView: 4,
            },
        },
    };
    return(
        <>
    <section className="paying-method">
        <h1>All Gifts And Vouchers Offers</h1>
        <Swiper
    {...SwiperSettings}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500 }}
>
    {[
      one,  thre, five,six,three
    ].map((src, index) => (
        <SwiperSlide className="vochers" key={index}>
            <div className="vochers-image">
                <Image src={src} alt="" width={330} height={300}/>
            </div>
        </SwiperSlide>
    ))}
</Swiper>
</section>
        </>
    )
}
export default Gifts
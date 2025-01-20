
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import { PrevButton } from "components/carouselArrows/carouselArrows"
import { NextButton } from "components/carouselArrows/carouselArrows";
import one from  './one.png'
import two from './two.png'
import three from './three.png'
import Link from "next/link";


const Taste = () => {
    const SwiperSettings = {
        className: 'expertButton',
        slidesPerView: 3,
        spaceBetween: 15,
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

    return (
        <section className="taste-section">
            <div className="content-container">
                <div className="text-content">
                    <h6>Get Your Recipes</h6>
                    <h3>Taste Our New Recipe</h3>
                    <p>
                    Easy Cooking guides to Learn how to Cook better. Recipes for Families and Friends with easy guides, 
                    instructions, and videos to make you a cooking professional at home or at your restaurant
                    </p>
                    <Link href="/recipes">
                    <button className="reciepes">View Reciepe</button></Link>
                </div>
                <div className="slider-container">
                    <Swiper {...SwiperSettings} autoplay={{ delay: 2500 }}>
                        <SwiperSlide>
                            <Image src={one} alt="Recipe 1" width={200} height={200} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={two} alt="Recipe 2" width={200} height={200} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={three} alt="Recipe 3" width={200} height={200} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={one} alt="Recipe 1" width={200} height={200} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Taste;

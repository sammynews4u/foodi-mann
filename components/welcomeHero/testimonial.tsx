import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';


const Testimonial = ()=>{
   
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
                slidesPerView: 1,
            },
            1140: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <>
            <section className="customer">
                <div className="customer-intro">
                    <div className="customer-details">
                        <h5> Testimonials & Reviews</h5>
                        <h2>    Our Customer Feedbacks</h2>
                        <Swiper  {...SwiperSettings}>
                            <SwiperSlide>
                                <div className="customer-words">
                                    <p className="tests">A good restaurant is like a vacation; it transports you, and it becomes a
                                        lot more than just about the food. All great deeds and all great thoughts</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="customer-words">
                                    <p className="tests">A good restaurant is like a vacation; it transports you, and it becomes a
                                        lot more than just about the food. All great deeds and all great thoughts</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="customer-words">
                                    <p className="tests">A good restaurant is like a vacation; it transports you, and it becomes a
                                        lot more than just about the food. All great deeds and all great thoughts</p>
                                </div>
                            </SwiperSlide>
                           
                        </Swiper>
                    </div>
                    <div className="customer-images">
                        <div className="second">
                            <Image src="https://winsfolio.net/html/foodio/assets/img/bratlee-hamint-2.jpg" alt="" width={300} height={300} />
                        </div>
                        <div className="first">
                            <Image src="https://winsfolio.net/html/foodio/assets/img/bratlee-hamint-1.jpg" alt="" width={200} height={200} />
                        </div>
                        <div className="third">
                            <Image src="https://winsfolio.net/html/foodio/assets/img/bratlee-hamint-3.jpg" alt="" width={300} height={300} />
                        </div>
                    </div>

                </div>
            </section>
        
          
            </>
            )
}
export default Testimonial
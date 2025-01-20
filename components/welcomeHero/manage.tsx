import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';;
import Image from 'next/image';

const  Manage=()=>{
 return(
        <section className="manageIntro">
            <div className="manage1">
<h5>BEST APP FOR FOODS And events ORDERING</h5>
<h1>Manage Your Business Anytime! Anywhere!</h1>
<ul>

<li>	Higher Reach - Minimal Effort</li>
<li>	Showcase your Brand</li>
<li>	Exclusive offers & discounts</li>
</ul>
</div>
<div className="manages">     
<Swiper  className=''
            modules={[Pagination, Autoplay]}
                        spaceBetween={5}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                speed={300} 
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            900: {
                                slidesPerView: 2
                            },
                            1100: {
                                slidesPerView: 2
                              },
                            }}>
                                <SwiperSlide>
                                    <Image src="https://winsfolio.net/html/foodio/assets/img/photo-gallery-1.jpg" alt="" width={300} height={300}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="https://winsfolio.net/html/foodio/assets/img/photo-gallery-2.jpg" alt=""width={300} height={300}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="https://winsfolio.net/html/foodio/assets/img/photo-gallery-3.jpg" alt=""width={300} height={300} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="https://winsfolio.net/html/foodio/assets/img/photo-gallery-4.jpg" alt=""width={300} height={300}/>
                                </SwiperSlide>
                                </Swiper>
</div>
        </section>
    )
}
export default Manage
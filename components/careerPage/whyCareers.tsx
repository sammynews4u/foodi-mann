import Image from 'next/image';
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import slide4 from './slide4.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const WhyCareers=()=>{
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
<section className="why-work-at-foodiman">
 
    <h2 className="section-title">Why Work at Foodiman?</h2>
    
    <Swiper {...SwiperSettings} pagination={{ clickable: true }}>
    <SwiperSlide>
        <div className="reason-content">
          <Image src={slide1} alt="Innovation"  width={200} height={300}/>
          <div className="text-overlay">
            <h5 className="reason-title">Innovative Culture</h5>
            <p className="reason-text">
              Be part of a company that values creativity and embraces cutting-edge solutions to revolutionize the food industry.
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="reason-content">
          <Image src={slide2} alt="Growth"  width={100} height={300}/>
          <div className="text-overlay">
            <h5 className="reason-title">Professional Growth</h5>
            <p className="reason-text">
              We provide opportunities for skill development, mentorship, and career advancement to help you reach your full potential.
            </p>
          </div>
        </div> </SwiperSlide>
        <SwiperSlide>
        <div className="reason-content">
          <Image src={slide3} alt=""  width={100} height={300}/>
          <div className="text-overlay">
            <h5 className="reason-title">Collaborative Environment</h5>
            <p className="reason-text">
              Join a supportive team where every voice is heard and collaboration drives our success.
            </p>
          </div>
        </div> </SwiperSlide>
        <SwiperSlide>
        <div className="reason-content">
          <Image src={slide4} alt="Benefits"   width={100} height={300}/>
          <div className="text-overlay">
            <h5 className="reason-title">Employee Benefits</h5>
            <p className="reason-text">
              Enjoy competitive perks, including flexible schedules, health benefits, and exclusive Foodiman discounts.
            </p>
          </div>
        </div> </SwiperSlide>
      </Swiper>
   
</section>
   )
}
export default  WhyCareers;
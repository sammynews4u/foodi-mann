import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { PrevButton, NextButton } from 'components/carouselArrows/carouselArrows';
import mer from './mer.png'
import paypal from './paypal.png'
import cashfree from './cashfree.png'
import raz from './raz.png'
import fluu from './fluu.png'
import bkash from './bkash.png'
import paytm from './paytm.png'
import skrill from './skrill.png'
import phonepe from './phonepe.png'
import ssl from './ssl.png'
import st from './st.png'
import pst from './pst.png'
import sen from './sen.png'
import payfast from './payfast.png'
import apps from './apps.png'
import google from './google.svg'
import waiter from './waiter.png'
import pos from './pos.png'
import Sms from './sms'

const Payments = ()=>{
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
        <h1>Payment Gateways</h1>
        <Swiper
    {...SwiperSettings}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500 }}
>
    {[
        bkash, cashfree, fluu, paypal, paytm,
        phonepe, pst, raz, sen, skrill, ssl, st
    ].map((src, index) => (
        <SwiperSlide className="paids" key={index}>
            <div className="image-container">
                <Image src={src} alt="" />
            </div>
        </SwiperSlide>
    ))}
</Swiper>
    </section>
    <div className="welcome-container">
        <div className="app_mobileAppBanner">
            <div className="app_left">
                <div className="app_linkBtn__jUCeR">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M26.2789 17.8748L17.5624 9.15832L19.8604 6.86023L32.5 19.4998L19.8604 32.1392L17.5624 29.8412L26.2789 
                21.1248H6.5V17.8748H26.2789Z" fill="#171717"></path></svg></div>
                <h3>Download the mobile app</h3></div>
                <div className="app_right__XpIqR">
                    <h2>Enjoy exclusive content on our app, including personalized product</h2>
                    <div className="app_storeLinks__tRHdZ">
                       <div>
                        <Image src={apps} alt="" width={300} height={100}/>
                        </div>
                        <div>
                        <Image src={google} alt="" width={300} height={150}/></div> </div>
                        <div className="app_storeLinks__tRHdZ">
                        <div>
                        <Image src={pos} alt="" width={300} height={100}/></div>
                        <div>
                        <Image src={waiter} alt="" width={300} height={100}/></div>
                       </div>
                       
                        </div></div></div>
                   <Sms/>    
        </>
    )
}
export default Payments
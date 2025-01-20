import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AboutTestimony = ()=>{
    return(
        <>
        <div  className='slideIntro'>
           <h4 className='center'>Testimonial</h4>
           <h3>Foodimann Customers Stories</h3>
           
           <Swiper  className='slide'
            modules={[Pagination, Autoplay]}
                        spaceBetween={15}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        speed={300} 
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            900: {
                                slidesPerView: 3
                            },
                            1100: {
                                slidesPerView: 3
                              },
                            }}>
   
           <SwiperSlide>
            <div  className='testimonial' >
         <img src="https://accupay-vue.vercel.app/images/testimonial2.png" alt="" width={100} height={100}/>
          <p className="tests">‘’ FoodiMann personalized Services has been a game-changer for our small business.
             Efficient service booking processing and payment system.’’ </p> 
            <h5>Hunter Romero </h5>
            <p className="tests">Business Manager  
            </p></div>
           </SwiperSlide>
           <SwiperSlide>
            <div  className='testimonial' >
            <img src="https://accupay-vue.vercel.app/images/testimonial3.png" alt="" width={100} height={100}/>
          <p className="tests">‘’FoodiMann Superior Solutions have transformed product ordering Processes 
            at Retail Innovations Ltd. The Platform is User-friendly‘’
          </p>  
            <h5>Ora Wong</h5>
            <p className="tests">Marking &Sales Director – Goshopping Africa</p></div>
           </SwiperSlide>
           <SwiperSlide >
            <div className='testimonial' >
           <img src="https://accupay-vue.vercel.app/images/testimonial4.png" alt="" width={100} height={100}/>
          <p className="tests">‘’ FoodiMann is so easy & Seamless… a must have app for quick management of online food and stores ordering. The analysis to ordering records is
             so easy. The reports are customizable and insightful to us. 
          </p>  
          <h5>Terry Cruzdi </h5>
          <p className="tests">Founder/CEO, Global Eco-Foods Inc.</p></div>
           </SwiperSlide>
           <SwiperSlide>
            <div  className='testimonial' >
           <img src="https://accupay-vue.vercel.app/images/testimonial6.png" alt="" width={100} height={100}/>
          <p className="tests">‘’ FoodiMann is simply the best app for any business seeking a digital presence on the internet, super useful 
            and pocket freindly.Extremely efficient & guaranteed foolproof.
          </p>  
        <h5>  Sarah McTavish</h5>
<p className="tests">Restaurant Owner  </p></div>

           </SwiperSlide>
           <SwiperSlide >
          <div  className='testimonial' >
           <img src="https://accupay-vue.vercel.app/images/testimonial5.png" alt="" width={100} height={100}/>
          <p className="tests">FoodiMann client support team came up with the most suitable recommendations to overhaul the existing
             outdated internal process of handling our online ordering System
          </p>  
        <h5>  Matthew Kenneth </h5>
<p className="tests">HR Manager – Kings Group  </p></div>

           </SwiperSlide>
           <SwiperSlide >
            <div className='testimonial'>
           <img src="https://accupay-vue.vercel.app/images/testimonial1.png" alt="" width={100} height={100}/>
          <p className="tests">With FoodiMann, my team can now process Sales and POS, reservation, kiosk, kitchen and online orders
             and payments with the click of a button, we have the web and mobile which make it easy for everyone. 
          </p>  
        <h5> Mr. Chris Johnson </h5>
<p className="tests">Director – Operation Coppa E-commence  </p></div>

           </SwiperSlide>
           <SwiperSlide>
            <div  className='testimonial' >
           <img src="https://accupay-vue.vercel.app/images/testimonial8.png" alt="" width={100} height={100}/>
          <p className="tests">I vouch for FoodiMann as the ideal hotel, restaurant and lounge Software for any fast past, policy driven, cost-conscious and dynamic organization globally.

          </p>  
        <h5>  Amy Gutierrez</h5>
<p className="tests">CFO, Food Solutions Pty </p></div>

           </SwiperSlide>
           <SwiperSlide >
            <div className='testimonial' >
           <img src="https://accupay-vue.vercel.app/images/testimonial7.png" alt="" width={100} height={100}/>
          <p className="tests">FoodiMann Standard reports along with the app’s easy to create generate reports and dynamic dashboards gave our
             business managers the right tools to manage productivity and manpower cost.
          </p>  
        <h5>  Isabelle McKinney </h5>
<p className="tests">Product Manager.  </p></div>

           </SwiperSlide>
          
           </Swiper>     
           </div>
        </>
    )
}
export default AboutTestimony
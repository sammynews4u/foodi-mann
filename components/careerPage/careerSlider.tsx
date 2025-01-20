// import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import slider1 from './slider1.jpeg';
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpeg';

const CareerSlider = () => {
  const slides = [
    {
      image: slider1,
      title: 'Explore Your Career',
      description: 'Take your first step towards a bright future.',
      backgroundColor: '#0000ff', 
    },
    {
      image: slider2,
      title: 'Join Our Team',
      description: 'Be a part of something extraordinary.',
      backgroundColor: '#00ff00', 
    },
    {
      image: slider3,
      title: 'Shape Your Dreams',
      description: 'Achieve your goals with us.',
      backgroundColor: '#282E33'
    },
  ];

  return (
    <section className="slider-sec">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="career-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container"  style={{ backgroundColor: slide.backgroundColor }}>
          
              <div className="imageContaining">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={600}
                  height={500}
                  className="slidingCareerImage"
                />
              </div>
              {/* Text Section */}
              <div
                className="text-container"
               
              >
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 
      <style jsx>{`
        .slide-container {
          display: flex;
          align-items: center;
        //   justify-content: center;
          height: 100%;
          width: 100%;
          position:relative;
        }

        .image-container {
          flex: 1;
          overflow: hidden;
        }

        .text-container {
          flex: 1;
          padding: 20px;
          color: white;
          display: flex;
          position:absolute;
          z-index:1;
          right:10rem;
          flex-direction: column;
        //   justify-content: center;
          align-items: center;
          animation: slideUp 1s ease-out;
          transition: background-color 1s ease-in-out;
        }
@media screen and (max-width:990px){
  .text-container{
    right:3rem;
  }
}
        .slide-title {
          font-size: 3rem;
          font-weight: bold;
          margin: 0;
        }

        .slide-description {
          font-size: 1rem;
          margin-top: 10px;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default CareerSlider;

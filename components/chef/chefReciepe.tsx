import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import one from './one.webp'
import two from './two.webp'
import twos from './twos.jpeg'
import three from './three.webp'
import Image from 'next/image'


const ChefRecipe = () => {
  const recipes = [
    { id: 1, title: 'Test-``',
         image: one, time: '321 min', kcal: '12 kkl', shop: 'Uzum market' },
    { id: 2, title: 'image', image: two, time: '3 hours', kcal: '2 kkl', shop: 'Another Shop' },
    { id: 3, title: 'sdsd', image: three, time: '30 min', kcal: '23 kkl', shop: 'Sony' },
      {  id: 4,title: 'sdsd', image: twos,time:'30min', kcal: '23 kkl', shop: 'Sony'},
    ]

  return (
    <div className='carouselContainer'>
    <div className="productCardHeader">
       <div>
        <h3> Chef Recipes</h3>
        </div>
        <div>
            <p> View all</p>
            </div> 
          </div>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[ Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="productSwiper">
      {recipes.map((recipe) => (
        <section className='recipe-chef' key={recipe.id}>
        <SwiperSlide>
          <div className="recipeCard_wrapper">
            <Image src={recipe.image} alt={recipe.title} className="recipeCard_image" width={300}height={300}/>
              {/* <h3>{recipe.title}</h3> */}
            <div className="recipeCard_body">
              <div className="times">
             <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"></path></svg>
               <div>
              <p className="tests">{recipe.time}</p>
                </div>
                </div>
                <div className="times">
                <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"></path></svg>
            <div>
              <p className="tests"> {recipe.kcal}</p></div>
              </div>
            </div>
            <div className="recipeCard_footer">
              <h5>{recipe.shop}</h5>
            </div>
          </div>
        </SwiperSlide>
          </section>
      ))}
    </Swiper>
    </div>
  );
};

export default ChefRecipe;

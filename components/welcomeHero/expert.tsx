


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { PrevButton, NextButton } from 'components/carouselArrows/carouselArrows';

const Expert = () => {
    const router = useRouter();

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
                slidesPerView: 5,
            },
        },
    };

    const chefs = [
        {
            id: '1',
            name: 'Chef A',
            image: 'https://img.freepik.com/premium-photo/female-chef-with-tray-food-hand-isolated-white_70216-4216.jpg?w=360',
        },
       
        {
            id: '3',
            name: 'Chef C',
            image: 'https://img.freepik.com/free-photo/medium-shot-professional-chef-working_23-2151232222.jpg?t=st=1721514287~exp=1721517887~hmac=d4cda3e171b7c6176af9ae2a014dbe1925613968f0461d3ed4c48bca90906894&w=360',
        },
        {
            id: '4',
            name: 'Chef D',
       image:'https://img.freepik.com/premium-photo/playful-culinary-master-confident-young-african-chef-white-uniform-throwing-pepper_425904-20618.jpg?ga=GA1.1.19934630005.1719432824&semt=ais_use',
        },
        {
        id: '5',
        name: 'Chef E',
       image:'https://winsfolio.net/html/foodio/assets/img/chef-1.png',
        },
        {
            id: '6',
            name: 'Chef F',
       image:'https://img.freepik.com/premium-photo/portrait-smiling-head-chef-presenting-salad_107420-37710.jpg?ga=GA1.1.19934630005.1719432824&semt=ais_user',
        },
        {
            id: '7',
            name: 'Chef G',
       image:'https://winsfolio.net/html/foodio/assets/img/chef-3.png',
        },
        {
            id: '8',
            name: 'Chef H',
       image:'https://winsfolio.net/html/foodio/assets/img/chef-2.png',
        },
    ];

    const navigateToChefPage = (id) => {
        router.push(`/chef-details/${id}`);
    };

    return (
        <section className="experts">
            <h1>Meet Our Experts Chefs</h1>
            <div className="line"></div>
            <div className="expert-intro">
                <Swiper {...SwiperSettings} pagination={{ clickable: true }}>
                    {chefs.map((chef) => (
                        <SwiperSlide key={chef.id}>
                            <div className="expert-sec"
                                onClick={() => navigateToChefPage(chef.id)}
                                style={{ cursor: 'pointer' }}>
                                <Image
                                    src={chef.image}
                                    alt={chef.name}
                                    width={350}
                                    height={350}
                                />
                                  {/* <div className="ourchefContent"> */}
                                {/* <h4>{chef.name}</h4> */}
                                {/* </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                    <PrevButton />
                    <NextButton />
                </Swiper>
                <Link href="/chefs">
                <button className="explore">Explore More</button></Link>
            </div>
        </section>
    );
};

export default Expert;

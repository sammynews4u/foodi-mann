import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from 'swiper/modules';

const Provide = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 48 48"><g fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="white" fill-rule="evenodd" d="M2 20c0 12.15 6 22 18 22s18-9.85 18-22z" clip-rule="evenodd"/><path d="M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572Q38.46 22 39 22c3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377"/></g></svg>
      ),
      title: "Afternoon Tea",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001l2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12-.001a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1.148-7H17V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.57-2.94zM9 8H4v3h5zm11-3h-3v2h3zM9 5H4v1h5z"/></svg>
      ),
      title: "Takeaway & Delivery",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M6.75 2.25c-.69 0-1.25.56-1.25 1.25v5.75A5.75 5.75 0 0 0 11.25 15v5.25H8.4a.75.75 0 0 0 0 1.5h7.2a.75.75 0 0 0 0-1.5h-2.85V15a5.75 5.75 0 0 0 5.75-5.75V3.5c0-.69-.56-1.25-1.25-1.25z"/></svg>
      ),
      title: "Wine & Cocktails",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/></svg>
      ),
      title: "Private Dining",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><g fill="white" stroke="white" stroke-width="1.5"><path stroke-linecap="round" d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44M9 22v-5"/><path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/></g></svg>
      ),
      title: "Private Chef for Vacation Homes.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 256 256"><path fill="white" d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-24.46 0h-51.42a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104m-26.06-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72"/></svg>
      ),
      title: "Food Styling and Photography.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 256 256"><path fill="white" d="M184 90q-2.59 0-5.16.24a54 54 0 1 0-101.69 0c-1.7-.16-3.42-.24-5.15-.24a54 54 0 1 0 27.85 100.28l-9.6 32A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-9.6-32A54 54 0 1 0 184 90m0 96a41.92 41.92 0 0 1-35.06-18.87a6 6 0 0 0-10.76 5L151.94 218h-47.88l13.76-45.84a6 6 0 0 0-10.76-5a42 42 0 1 1-20.91-62.69a6 6 0 0 0 7-9a42 42 0 1 1 69.72 0a6 6 0 0 0 7 9A42 42 0 1 1 184 186"/></svg>
      ),
      title: "Pop-up Supper Clubs",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linejoin="round" stroke-width="1.5" d="m7.687 9.687l2.66 1.426A3.5 3.5 0 0 0 12 11.53M7.687 9.687L3.884 7.65m3.803 2.038l8.496-4.555l.128-.07M3.884 7.648a3.5 3.5 0 0 0-.51 1.82v5.061a3.5 3.5 0 0 0 1.845 3.085l5.127 2.748A3.5 3.5 0 0 0 12 20.78M3.884 7.649a3.5 3.5 0 0 1 1.335-1.264l5.127-2.748a3.5 3.5 0 0 1 3.308 0L16.31 5.06M12 11.53a3.5 3.5 0 0 0 1.654-.416l6.462-3.464M12 11.529v9.25m0 0a3.5 3.5 0 0 0 1.654-.416l5.127-2.748a3.5 3.5 0 0 0 1.846-3.085V9.47a3.5 3.5 0 0 0-.511-1.821m0 0a3.5 3.5 0 0 0-1.335-1.264l-2.47-1.324"/></svg>
      ),
      title: "Corporate Gift Boxes Special Delivery",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95zm2 6h4v-.285L18.992 10H17zm.5 6a1.5 1.5 0 1 0 0-3.001a1.5 1.5 0 0 0 0 3.001M7 17.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"/></svg>
),
   title: "Food Truck or Mobile Catering.",
           
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M8 21q-1.237 0-2.119-.881T5 18V8q0-1.237.881-2.119T8 5h1.5V3.5q0-.213.144-.356T10.001 3t.356.144t.143.356V5h3V3.5q0-.213.144-.356T14.001 3t.356.144t.143.356V5H16q1.238 0 2.119.881T19 8v10q0 1.238-.881 2.119T16 21zM9 9.5h6q.213 0 .356-.144t.144-.357t-.144-.356T15 8.5H9q-.213 0-.356.144t-.144.357t.144.356T9 9.5m2.997 7.827q.822 0 1.394-.568q.57-.569.57-1.36q0-.328-.08-.56t-.298-.541l-1.123-1.335q-.187-.217-.461-.217q-.275 0-.451.214l-1.137 1.343q-.216.311-.294.535t-.078.555q0 .797.567 1.366q.568.568 1.39.568"/></svg>
      ),
      title: "Gastronomic Consultations",
    },
    {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51L2.1 2.1l19.8 19.8zM6.17 9L5 7.83V9zM9 2H7v2.17l2 2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02"/></svg>
      ),
      title: "Catering for Events and Parties",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><circle cx="5" cy="19" r="1" fill="white"/><path fill="white" d="M4 4h2v9H4z"/><path fill="white" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m0 19H3V3h4Zm7-18v7h-3V3zm1-1h-5v9h5zm6 1v7h-3V3zm1-1h-5v9h5zm-8 12v7h-3v-7zm1-1h-5v9h5zm6 1v7h-3v-7zm1-1h-5v9h5z"/></svg>
      ),
      title: "Cooking Classes and Workshops",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 2048 2048"><path fill="white" d="M1668 129h124v1919H256V129h126V0h128v129h258V0h128v129h258V0h128v129h258V0h128zm-4 1791V257H384v1663zM1408 513v128H640V513zM640 1666v-128h768v128zm0-513v-128h768v128z"/></svg>
      ),
      title: "Specialized Dietary Cuisine",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M22 18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2h12zM4 3h10a2 2 0 0 1 2 2v9H8v5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 3v2h2V6zm10 2V6H8v2zM4 10v2h2v-2zm4 0v2h6v-2zm-4 4v2h2v-2z"/></svg>
      ),
      title: "Nutrition and Wellness-Based Cooking",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M10.5 19.27q-.213 0-.357-.145T10 18.77v-1.384q0-.27-.173-.443t-.442-.173H4q-.213 0-.356-.144t-.144-.357t.144-.356T4 15.77h5.385q.666 0 1.14.475t.475 1.14v1.385q0 .213-.144.357t-.357.143m3 0q-.213 0-.356-.143T13 18.769v-1.384q0-.667.475-1.141t1.14-.475H20q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143h-5.384q-.27 0-.443.173t-.173.442v1.385q0 .213-.144.357t-.357.143M6.5 14q-1.042 0-1.77-.73Q4 12.543 4 11.5v-2q0-.343.232-.575t.576-.233h14.384q.344 0 .576.232T20 9.5v2q0 1.042-.73 1.77q-.728.73-1.77.73zm0-1h11q.617 0 1.059-.441Q19 12.117 19 11.5V9.692H5V11.5q0 .617.441 1.059Q5.883 13 6.5 13m-2-6.077q-.213 0-.356-.144Q4 6.635 4 6.422t.144-.356t.356-.143h5V5.5q0-.343.23-.575t.587-.233h3.366q.358 0 .587.233t.23.575v.423h5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM5 13V9.692z"/></svg>
      ),
      title: "In-home Cooking Demonstrations.",
    },
   
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="white" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/></svg>
      ),
      title: "Corporate and Team-building.",
    },
  ];
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
      slidesPerView: 5,
      },
  },
};
  return (
    <section className="provide">
      <h2>We provide the best services</h2>
      
            <Swiper {...SwiperSettings} pagination={{ clickable: true }}>
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="best-solutions-service">
              <i>{service.icon}</i>
              <h3>{service.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Provide;

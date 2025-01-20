/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import cls from "./aboutUs.module.scss";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import fracis from '../aboutUs/fracis.jpg'
import people  from '../aboutUs/people.webp'
import  wels from './wels.jpg'
// import Values from './values'
import Value from '../aboutUs/value'
import Contract from '../aboutUs/contract'
import AboutQuestion from './AboutQuestion'
import AboutTestimony from './AboutTestimony'

export default function AboutUs() {
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);
  const toggleText2 = () => setIsExpanded2(!isExpanded2);
  const toggleText3 = () => setIsExpanded3(!isExpanded3);
  const toggleText4 = () => setIsExpanded4(!isExpanded4);
  const toggleText5 = () => setIsExpanded5(!isExpanded5);
  const toggleText6 = () => setIsExpanded6(!isExpanded6);
  const toggleText7 = () => setIsExpanded7(!isExpanded7);


  return (
    <div className={cls.container}>
      <div className="container">
      <div className={cls.header}>
       
        <h1>Partner with FoodiMann</h1>
        <p className='tests'>Welcome to FoodiMann, where Products excellence meets personalized services.</p>
        <p className='tests'> At FoodiMann, we understand the intricacies of Food ordering and Delivery transactions processing.</p>
        
       <div className={cls.hero}>
     <Image src={wels}alt=""width={1250} height={750}/>
     </div>
      </div> 
     <div className={cls.aboutFoodiman}>
      <div>
        <p className='tests'>Foodimann is an innovative online marketplace dedicated to
connecting customers with a diverse array of gourmet foods
and grocery products, hotel and Services Online Booking and
ordering System. We aim to create a seamless and enjoyable
shopping experience for food enthusiasts while providing a
robust platform for vendors to reach a wider range of
audience. Our platform is designed to offer a diverse array of
high-quality food products and services, making gourmet and
everyday essentials accessible to everyone. At Foodimann we
place strong emphasis on customer experience. Our online
platform is user-friendly, with detailed descriptions and pairing
suggestions for each product. We offer a subscription service,
allowing customers to receive a handpicked selection of
gourmet items delivered to their doorstep regularly. Our
dedication to quality and customer satisfaction has earned us a
loyal following among food lovers and connoisseurs. Whether
you&#39;re looking for a unique gift or wanting to indulge in
gourmet treats, Foodimann offers a diverse and delightful
range of products to suit any palate.</p>
      </div>
      <div>
        <Image src="https://winsfolio.net/html/foodio/assets/img/photo-gallery-7.jpg" alt="" width={550}height={400}/>
        </div>
     </div>
      
    
  
    {/* <div className="AbtUs"> */}
    <div className={cls.story}>
      <div className={cls.stories}>

    <h6 className={cls.food}>FoodiMann Story</h6>
          <h1> In 2023, an exciting journey began with a daring vision. </h1>
          <p className="uppercase text-bodyText tests"> MESSAGE FROM OUR CEO </p>
          <h5 className="uppercase text-bodyText "> “A successful team requires members<br></br> with complementary experience and skill sets </h5>
          <Image src={fracis} alt=""
           className="rounded-full"
            width={100} height={100}
            />
           <p className="tests">Mr. Francis Erikefe  </p>
           <p className="tests"> Founder/CEO </p>
      
           </div>
           <div className={cls.vision}>
<div>
         <h3>  Our Vision </h3>
<p className='tests'>Foodimann envisions a world where gourmet
   and high-quality food products are easily accessible to
    everyone, fostering a community that appreciates and 
    celebrates culinary excellence. </p>
    {isExpanded2 ? (
      <>
 <p className='tests'>   Our goal is to revolutionize 
    the way people discover, purchase, and enjoy food by creating a
     dynamic online marketplace that connects discerning customers with top-tier vendors.</p>
   <h6>  Key Elements of Our Vision</h6>

<li> <b>Universal Access to Quality:</b>
 We strive to make premium, ethically sourced food products available to
consumers everywhere, transcending geographical limitations.</li>

<li><b>Sustainability and Responsibility:</b>
 Our commitment to sustainability guides our efforts to support eco-friendly
practices, from sourcing to packaging, ensuring that our impact on the planet is
positive and responsible.</li>

<li> <b>Innovation in Food Shopping And Booking :</b>
We aim to lead the way in innovative online food shopping and booking
experiences, leveraging technology to provide personalized recommendations,
seamless transactions, and convenient delivery options.</li>
     <span onClick={toggleText2} style={{ color: "blue", cursor: "pointer" }}>
     See Less
   </span>
</>
) : (
 <span onClick={toggleText2} style={{ color: "blue", cursor: "pointer" }}>
   See More.....
 </span>
)}
     </div>
     <div>
   <h3>  Our Mission</h3>
<p className='tests'>At Foodimann, our mission is to 
  transform the way people shop for food,
   groceries and book online services by providing a 
   seamless, enjoyable, and innovative online experience.</p>
   {isExpanded3 ? (
    <>
   <p className='tests'> We aim to connect consumers with the finest products
     from around the globe while supporting ethical and 
     sustainable practices.
      We aim to bring the finest 
     food products from around the world directly to your 
     doorstep. We believe in the joy of discovering new flavors
      and the importance of high-quality, ethically sourced ingredients. 
      Foodimann is committed to sustainability, community, and culinary excellence.
</p>
<span onClick={toggleText3} style={{ color: "blue", cursor: "pointer" }}>
See Less
</span>
</>
) : (
<span onClick={toggleText3} style={{ color: "blue", cursor: "pointer" }}>
See More....
</span>
)}</div>
<div>
<h3>Expert Team</h3>
<p className='tests'>Our team of experienced professionals brings a 
wealth of knowledge to every client interaction.
 From Creating user-friendly and efficient online platforms 
 for ordering food and groceries and booking services </p>
   {isExpanded4 ? (
    <>
 <p className='tests'>   including promotions, loyalty programs, 
   and personalized recommendations, Managing relationships with
    food and grocery suppliers to ensure a diverse and high-quality 
    product selection, Analyzing customer behavior and order data to 
    improve services, predict trends, and enhance the overall customer
     experience, Providing support and assistance to customers, handling 
     inquiries, and resolving issues promptly, we have the expertise to guide and help your business grow.</p>
     <span onClick={toggleText2} style={{ color: "blue", cursor: "pointer" }}>
     See Less
   </span>
</>
) : (
 <span onClick={toggleText2} style={{ color: "blue", cursor: "pointer" }}>
   See More....
 </span>
)}
</div>
<div>
<h3>Our Long-Term Goals</h3>
<li><b> Innovation Leadership:</b> Continually innovate our platform and services to stay ahead in
the digital food ordering and service booking Marketplace, integrating the latest
technologies and trends.</li>
   {isExpanded5 ? (
    <>
<li><b>Global Reach:</b> Expand our marketplace to serve customers and vendors worldwide,
creating a truly global network of culinary excellence.</li>
  <li><b>  Sustainable Practices:</b> Achieve and maintain the highest standards of sustainability in
every aspect of our operations, setting a benchmark for the industry.</li>
<li><b> Culinary Influence:</b> Become a leading voice in the culinary world, influencing food
trends, promoting healthy eating, and supporting the growth of small and artisanal food
producers. Foodimann envisions a future where every meal is an opportunity for joy,
discovery, and connection, making the world a tastier, more sustainable place, one bite at
a time.</li>
      <span onClick={toggleText5} style={{ color: "blue", cursor: "pointer" }}>
     See Less
   </span>
</>
) : (
 <span onClick={toggleText5} style={{ color: "blue", cursor: "pointer" }}>
   See More....
 </span>
)}

           </div>  
           <div>
<h3>Our Commitment</h3>
<p className='tests'>Foodimann is commitment to culinary excellence and innovation. We collaborate with top chefs
and food experts to curate unique and exquisite food experiences. This includes seasonal
collections,</p>
   {isExpanded6 ? (
    <>
   <p className='tests'> limited-edition items, and curated gift boxes that cater to food enthusiasts looking
    for something special.</p>
    <p className='tests'>By combining a diverse selection of high-quality products with a user-
centric online shopping experience, Foodimann makes gourmet food accessible and enjoyable
for everyone. Whether you&#39;re a seasoned food connoisseur or simply looking to explore new
culinary delights, our online ordering and booking service offers something for every palate.</p>
<p className='tests'>Our seven point commitments include:</p>
<li className='tests'><b className='tests'> Quality Assurance:</b> Ensuring that all products and service meet high standards of quality
and freshness.</li>
<li><b> Customer Satisfaction: </b>Providing exceptional customer service and support to ensure a
positive experience for all users.</li>
<li><b> Timely Delivery: </b>Committing to reliable and timely delivery of orders.</li>
      <span onClick={toggleText6} style={{ color: "blue", cursor: "pointer" }}>
     See Less
   </span>
</>
) : (
 <span onClick={toggleText6} style={{ color: "blue", cursor: "pointer" }}>
   See More....
 </span>
)}
 </div>
           </div>  
           </div>
      <Value/>    
         <AboutTestimony/>  
           <Contract/>
        <AboutQuestion/>
       
     
      </div>     
    </div>
  );
}

import React, { useState } from "react";

const Value= ()=>{
    const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleText1 = () => setIsExpanded1(!isExpanded1);
  const toggleText2 = () => setIsExpanded2(!isExpanded2);
  const toggleText3 = () => setIsExpanded3(!isExpanded3);
  const toggleText4 = () => setIsExpanded4(!isExpanded4);
    return(
        <section className="values-intro">
        <section className="values-section">
            {/* <div>
<h5>Our Long-Term Goals</h5>
<li>	Global Reach: Expand our marketplace to serve customers and vendors worldwide, creating
     a truly global network of culinary excellence.</li>
<li>	Innovation Leadership: Continually innovate our platform and services to stay 
    ahead in the digital food ordering and service booking Marketplace, integrating the
     latest technologies and trends.</li>
<li>	Sustainable Practices: Achieve and maintain the highest standards 
    of sustainability in every aspect of our operations, setting a benchmark for the industry.</li>
<li>	Culinary Influence: Become a leading voice in the culinary world, influencing food trends, promoting healthy eating, 
and supporting the growth of small and artisanal food producers. Foodimann envisions a future where every meal
 is an opportunity for joy, discovery, and connection, making the world a tastier, more sustainable place, one bite at a time.</li>
 </div> */}

{/* <div>
      <h5>Our Commitment</h5>
      <p>
        Foodimann is committed to culinary excellence and innovation. We collaborate with top chefs and food experts to
        curate unique and exquisite food experiences. This includes seasonal collections, limited-edition items, and
        curated gift boxes that cater to food enthusiasts looking for something special. By combining a diverse
        selection of high-quality products with a user-centric online shopping experience, Foodimann makes gourmet food
        accessible and enjoyable for everyone. Whether you're a seasoned food connoisseur or simply looking to explore
        new culinary delights, our online ordering and booking service offers something for every palate. Our seven
        point commitments include:
      </p>
      <li>Quality Assurance: Ensuring that all products and service meet high standards of quality and freshness.</li>
      <li>
        Customer Satisfaction: Providing exceptional customer service and support to ensure a positive experience for
        all users.
      </li> */}
{/* 
      {isExpanded1 ? (
        <>
          <li>Timely Delivery: Committing to reliable and timely delivery of orders.</li>
          <li>
            Sustainability: Implementing eco-friendly practices, such as using sustainable packaging and reducing food
            waste.
          </li>
          <li>Innovation: Continuously improving technology and processes to enhance the user experience.</li>
          <li>Transparency: Being clear and honest about product sourcing, pricing, and policies.</li>
          <li>
            Community Engagement: Supporting local communities and suppliers, and contributing to social causes.
          </li>
          <span onClick={toggleText1} style={{ color: "blue", cursor: "pointer" }}>
            See Less
          </span>
        </>
      ) : (
        <span onClick={toggleText1} style={{ color: "blue", cursor: "pointer" }}>
          See More
        </span>
      )}
    </div> */}


{/* <div>
   <h5> What We Offer On Our Platform</h5>
<p>To Customers:</p>
<li>	Diverse Product and Service Selection: Browse an extensive range of products and services,
     from daily necessities to gourmet delights, including artisanal cheeses, premium meats, exotic 
     spices, fine wines, and handcrafted sweets.</li>
<li>	Curated Experiences: Enjoy specially curated collections such as seasonal selections, unique 
    gift boxes, and personalized subscription services tailored to your tastes.</li>
<li>	User-Friendly Shopping: Benefit from detailed product and services descriptions, customer 
    reviews, and tailored recommendations to help you find exactly what you need.</li>
    {isExpanded1 ? ( */}
{/* //         <>
// <li>	Convenient Delivery: Choose from multiple delivery options, including express and same-day 
//     delivery in select locations, ensuring your products arrive fresh and on time.</li>
// To Vendors:
// <li>	Expanded Market Reach: Gain access to a broad customer base eager for quality and unique food products and services.</li>
// <li>	Marketing and Promotion: Leverage our platforms marketing tools and promotional campaigns to enhance your brand visibility 
//     and boost sales.</li>
// <li>	Analytics and Insights: Utilize comprehensive sales data 
//     and analytics to optimize your product and service offerings and business strategies.</li>
// <li>	Community and Collaboration: Engage with our vibrant community through events, collaborations, 
//     and feature opportunities on our platform</li>
//     <span onClick={toggleText1} style={{ color: "blue", cursor: "pointer" }}>
//             See Less
//           </span>
//         </>
//       ) : (
//         <span onClick={toggleText1} style={{ color: "blue", cursor: "pointer" }}>
//           See More
//         </span>
//       )}
//     </div> */}


</section>
<div className="our-value">
    <h2>Our Values</h2>
   <p className='tests'> At Foodimann, our values are the foundation of everything we do.</p>
   <p className='tests'> They reflect our commitment to 
    excellence, integrity, and client success.</p>

    <div className="value-content">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="3rem" height="3rem" fill="#00ff00"><g><path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z"></path></g></svg>
    <h5>	Quality and Excellence</h5>
    <p className='tests'> We are dedicated to offering only the finest products, rigorously curated from trusted and reputable sources.</p>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="3rem" height="3rem" fill="#00ff00"><g><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></g></svg>
<h5>	Sustainability and Ethics</h5>
<p className='tests'> We prioritize eco-friendly practices and support vendors who uphold sustainable and ethical standards.</p>

</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="3rem" height="3rem" fill="#00ff00"><g><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></g></svg>
<h5>	Transparency and Trust</h5>
<p className='tests'> We provide clear, accurate information about product origins, ingredients, and 
practices to empower informed decision-making</p></div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="3rem" height="3rem" fill="#00ff00"><g><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></g></svg>
<h5>	Customer Satisfaction</h5>
<p className='tests'> We strive to deliver exceptional service and support, ensuring a delightful shopping experience for every customer.</p>

        </div> 
    </div></div>
        </section>

    )
}
export default Value

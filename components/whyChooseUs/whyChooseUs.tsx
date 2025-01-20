import React from "react";
import cls from "./whyChooseUs.module.scss";
import useLocale from "hooks/useLocale";
import { ILandingPageData } from "interfaces/page.interface";

type Props = {
  data?: ILandingPageData;
};

export default function WhyChooseUs({ data }: Props) {
  const { t, locale } = useLocale();

  return (
    <div className={cls.container}>
      <div className="welcome-container">
        <section className={cls.wrapper}>
          {!!data?.features.length && (
            <h1 className={cls.title}>{t("why.choose.us")}</h1>
          )}
          <div className={cls.flex}>
            {/* {data?.features.map((item, idx) => ( */}
                {/* <div className={cls.number}>0{idx + 1}</div> */}
               
                {/* <video loop muted autoPlay>
                  <source src={item.img} />
                </video> */}
               <div className={cls.card}>
               <div className="whyChooseUs_number__su9RD">01</div>
               <h3 className="whyChooseUs_cardTitle__2U4eQ">Add Your Businesses</h3>
                <video loop muted autoPlay>
                  <source src="https://foodyman.s3.amazonaws.com/public/images/languages/107-1685612031.feature-1.mp4"></source></video>
                  <p className="whyChooseUs_text__QDmED">Grow Your Restaurant And Businesses With Powerful Marketing and Ordering System by

FoodiMann.</p>
              </div>
              <div  className={cls.card} >
              <div className="whyChooseUs_number__su9RD">02</div>
              <h3 className="whyChooseUs_cardTitle__2U4eQ">Subscribe &amp; Start Selling</h3>
                   <video loop muted autoPlay>
              <source src="https://foodyman.s3.amazonaws.com/public/images/languages/107-1685612034.feature-2.mp4"></source>
              </video>
              <p className="whyChooseUs_text__QDmED">We connect you with various Types of customers, who Place an order, book a table or order a

delivery directly.</p>
              </div>
             
              <div className={cls.card}>
              <div className="whyChooseUs_number__su9RD">03</div>
              <h3 className="whyChooseUs_cardTitle__2U4eQ">Promote with low Cost</h3> 
              <video loop muted autoPlay>
                <source src="https://foodyman.s3.amazonaws.com/public/images/languages/107-1685612037.feature-3.mp4"></source></video>
                <p className="whyChooseUs_text__QDmED">Start promoting your business with our cutting edge and top notch solutions Order Online, Book A

Table, QR Codes etc.</p>
              </div>
            {/* ))} */}
          </div>
        </section>
      </div>
    </div>
  );
}

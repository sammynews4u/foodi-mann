import React from "react";
import cls from "./faq.module.scss";
import { Faq } from "interfaces";
import useLocale from "hooks/useLocale";
import FaqItem from "./faqItem";
import Image from 'next/image';
type Props = {
  data?: Faq[];
};

export default function FaqContainer({ data }: Props) {
  const { t } = useLocale();

  return (
    <div className={cls.container}>
      <div className="welcome-container">
          <h1 className={cls.title}>{t("faq")}</h1>
        <section className={cls.wrapper}>

         
          <div>
          <details>
  <summary>
  <h5>How can I create an account?</h5>
    </summary>
    <p> Click on 'Login & Sign up' at the top of the page. 
       Then fill out your information in the 'Create an account' section 
       and click the 'Sign Up' button. You can also create an account directly 
       after placing an order. Your delivery address and the order details will then be saved in your account.</p>
  </details>
  <details>
  <summary>
  <h5>I don’t remember my password?</h5>
    </summary>
    <p>You have already created an account but you can't remember your password? Click on 'Login/Sign Up' at the top of the page. Then click on 'Forgot Password?'.
       Fill out your phone number and a password recovery will be sent to you by phone</p>
      
  </details>
  <details>
  <summary>
  <h5>How do I know status of my order?</h5>
    </summary>
    <p>After you place your order, it is sent immediately to any Restaurant our Platform, which
starts preparing it without any delay. The kitchen or Restaurant does everything to
process your order as quickly as possible. However, sometimes FoodiMann receives
large amount of orders, or drivers get stuck in heavy traffic this might cause little delays.</p>
      
  </details>
  <details>
  <summary>
  <h5>How can I cancel or change my order?</h5>
    </summary>
    <p> Please contact helpline Number as soon as possible, we can let the kitchen know
before it starts preparing your order. Once the order goes in the process, it cannot be
changed. With regard to any refund of a payment you have made online, please contact
Foody Man delivery. Please contact FoodiMann delivery.</p>
      
  </details>
  <details>
  <summary>
  <h5>Do I have to create an account to place an order?</h5>
    </summary>
    <p>Creating an account is mandatory, but you can see order without having to sign up. We
make sure that ordering food online at FoodiMann delivery is quick and fuss-free. After
placing your order, you will have the option of creating an account.</p>
      
  </details>
  <details>
  <summary>
  <h5>Did not receive order confirmation SMS?</h5>
    </summary>
    <p>  Please check if your text message. If not, please share the details via customer Support team..</p>
      
  </details></div>
          <div>
            <Image src='https://winsfolio.net/html/foodio/assets/img/slide2_2-img.png' alt="" width={500} height={400}/>
            </div>
        </section>
      </div>
    </div>
  );
}

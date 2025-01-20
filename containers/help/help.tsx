// import React from "react";
// import { Grid, useMediaQuery } from "@mui/material";
// import { Faq } from "interfaces";
// import { useTranslation } from "react-i18next";
 import cls from "./help.module.scss";

// type Props = {
//   data: Faq[];
//   children: any;
// };

// export default function HelpContainer({ data, children }: Props) {
//   const { t } = useTranslation();
//   const isDesktop = useMediaQuery("(min-width:1140px)");

//   return (
//     <section className={cls.root}>
//       <div className="container">
//         <div className={cls.wrapper}>
//           <h1 className={cls.title}>{t("help")}</h1>
//           <Grid container spacing={isDesktop ? 4 : 2}>
//             {data.map((item) => (
//               <Grid key={item.id} item xs={12} md={6} lg={4}>
//                 <h4 className={cls.boldText}>{item.translation?.question}</h4>
//                 <p className={cls.text}>{item.translation?.answer}</p>
//               </Grid>
//             ))}
//           </Grid>
//           <div className={cls.help}>{children}</div>
//         </div>
//       </div>
//     </section>
//   );
// }


const Help = ()=>{
  return(
    <>
     <div className={cls.helpContainers}>
      <h1>Help Center</h1>
      <div className={cls.welcomeContainer}>
          
        <section className={cls.Helpwrapper}>
          <div>
    <details>
  <summary>
  <h5>Is FoodiMann delivery apps available throughout Nigeria?</h5>
    </summary>
    <p> Yes, FoodiMann delivery platforms is available nationwide. However, availability may vary depending on certain regions or cities.
    </p>
  </details>
  <details>
  <summary>
  <h5>Can I pay for my orders using cash?
  </h5>
    </summary>
    <p> FoodiMann apps offer cash-on-delivery as a payment option, we also provide secure online payment methods for added convenience.
    </p>
  </details>
  <details>
  <summary>
  <h5>How long does it usually take for an order to arrive?
  </h5>
    </summary>
    <p> The delivery time varies depending on factors such as distance and restaurant preparation time. However, most of our deliveries are completed within 30-60 minutes.
    </p>
  </details>
  <details>
  <summary>
  <h5>Are there any additional charges or fees when using these apps?
  </h5>
    </summary>
    <p>FoodiMann apps charges delivery fees or minimum order requirements. It’s important to check the FoodiMann app’s terms and conditions for any applicable charges. And threesome items that comes with services charges.
    </p>
  </details>
  <details>
  <summary>
  <h5>Can I schedule a food delivery in advance?</h5>
    </summary>
    <p> Yes, FoodiMann apps let you schedule deliveries ahead of time, so you can plan your meals in advance</p>
  </details>
  <details>
  <summary>
  <h5>What if something is wrong with my order?</h5>
    </summary>
    <p> If there’s anything wrong with your order, like missing items or wrong deliveries, you can contact FoodiMann app’s customer support for help. You can also make an in app chats</p>
  </details>
  <details>
  <summary>
  <h5>Are these food delivery apps safe to use?</h5>
    </summary>
    <p> FoodiMann apps priorities safety and work closely with partner restaurants to ensure hygienic practices. We also employ secure payment gateways to protect your financial information. Ordering food through delivery FoodiMann apps saves time and gives you many different food choices. So why wait? Start exploring the world of food delivery today!
    </p>
  </details>
  <details>
  <summary>
  <h5>Who are the Delivery Man?</h5>
    </summary>
    <p>Delivery Man are independent professionals connected to our platform. Together with a smartphone and their own vehicle, they're eager to help you with your delivery activities as quickly and effectively as possible.
Do you want to be a courier? Great! Just fill out the form in this link.
</p>
  </details>
  <details>
  <summary>
  <h5>How do I place an order?</h5>
    </summary>
   <p> Ordering your first FoodiMann is really easy. Just follow these steps:</p>
<li> Go to the "Manage payment methods" section in your profile and add a debit/credit card.</li>
<li> Go back to the main screen and set the delivery address. Remember to choose the correct city from the drop-down menu.
If you have a promo code, don't forget to validate it in your profile before ordering.</li>
<p>Now you have 2 options:</p>
<li> Buy something: from a restaurant or store. Choose from any of our partners in any of the categories.</li>
<li>Send something: with just a pick-up point and destination, you can use the FoodiMann Delivery Man to send anything.</li>
<p>Follow the steps required for each option and once you’re finished, a FoodiMann Delivery Man will accept your
   order and deliver it in minutes. If you need to add more than one delivery address, you'll need to place the order on our website  </p>

  </details>
  
  <details>
  <summary>
  <h5>How much does delivery cost?</h5>
    </summary>
  <p>  The price of our service is optimized by distance, so the closer it is, the cheaper it is.</p>
  <p>If you use the FoodiMann Delivery Man, the app calculates the distance between the pick-up point 
    and delivery address and only shows the total delivery cost.</p>
    <p>If you’re ordering from one of the stores available on the app, you can see the item’s price beforehand. There will be a pre-established delivery cost depending on our agreement with the store in question, which you can see by clicking on the store. So before you confirm the order, you’ll know the total cost of the service.
Occasionally, the price of the product may differ to what is shown on the app. If
 the price difference is less than 30%, FoodiMann will automatically proceed to buy 
 the products for you. You'll be able to see the updated price at check out and the receipt 
 of the purchase. However, if the difference in price is over 30%, the Restaurant or shop will contact
  you to ask if you’d still like to proceed with the purchase. (For night deliveries, there might be
   an extra service charge applied to each item’s price. The amount applied depends on the city and 
   store, and you’ll see this surcharge when you’re at the checkout stage in the app.)</p>

  </details>
  <details>
  <summary>
  <h5>When is FoodiMann open?</h5>
    </summary>
    <p>Many cities in which FoodiMann operates offer a 24/7 service. However, all stores have their own schedule so they might be closed despite FoodiMann being available. To guide you, open stores have a full color picture whereas closed ones are in gray.
    </p>
  </details>
  <details>
  <summary>
  <h5>How do I schedule an order and change details of my scheduled order?
  </h5>
    </summary>
    <p> Scheduling orders has never been easier! You can schedule your order and choose when you want it delivered, so that you receive it whenever is best for you! If you want to change details of your scheduled order or simply want to cancel it, you'll need to go to your scheduled order and click on "Cancel order". You won't be charged for cancelling. Once the order is cancelled, place a new one with your required items and delivery details.
    </p>
  </details>
  <details>
  <summary>
  <h5>What can I order?</h5>
    </summary>
    <p>You can buy and receive products as well as send deliveries or express messages within your city. Want us to go to the pharmacy for you? Need to buy a pair of shoes? Want something to eat? Need to ship a package? Forgot your keys...again?
We mean it: Anything you want, delivered in minutes.
</p>
  </details>
  <details>
  <summary>
  <h5>What do you need to start delivering using FoodiMann?</h5>
    </summary>
   <p> You need to be at least 18 years old, hold a valid work permit and have a smartphone 
    (iOS or Android) to start delivering. No delivery experience needed!</p>
   <p> Other compulsory permits and insurances may be needed depending on whether you want to deliver by
     car, scooter, bicycle, or by foot</p>
  </details>
  <details>
  <summary>
  <h5>How long does the registration process take?</h5>
    </summary>
    <p>It typically takes no more than 30 minutes to complete the registration form and upload the documents.</p>
<p>After you register, your profile will be validated for security reasons. If you are verified, you
 are ready to get your material and download the Delivery Man App.</p>
  </details>
  <details>
  <summary>
  <h5>How do I get my earnings?
  </h5>
    </summary>
    <p>Your earnings will be transferred to the bank account you provided when you registered in FoodiMann.</p>
    <p>At the beginning of a billing period, your earnings will be transferred to your bank account. The transfer 
      might take up to 1 to 2 business days to process depending on your bank account.</p>
  </details>
  <details>
  <summary>
  <h5>Why should I register as a delivery driver in FoodiMann?</h5>
    </summary>
    <p>Being a delivery driver with FoodiMann makes you experience the freedom to be in charge of your own decisions, you can set your schedule and deliver when it suits you. Whether it's one hour a day, only on weekends, or 6 days a week; you decide.
</p>
  </details>
  
  <details>
  <summary>
  <h5>What type of vehicles do FoodiMann use for delivery?<br></br> How big can my orders be??</h5>
    </summary>
    <p>Our Delivery Men use motorcycles or bikes so they can carry whatever you want, as long as it’s under 9 kg in weight (3-4 shopping bags in volume) and fits in a box sized 40x40x30 cm. FoodiMann is happy to transport anything you need bearing these dimensions in mind.    .</p>
  </details>
  <details>
  <summary>
  <h5>Do you transport animals?</h5>
    </summary>
    <p>While we'd love to deliver your beloved cat or Pet, this isn't something we offer at the moment. Maybe someday in the future...
    </p>
  </details>
  <details>
  <summary>
  <h5>I want to return a product. What do I do?</h5>
    </summary>
    <p>We connect or assign your orders to delivery Man; we make the purchase in your name, so you continue being the purchaser and final user. Any returns or complaints about products should be made directly to the restaurant or shop. (Except for, in the specific case of orders placed on the Platform through the drop-down menu of restaurants or shops products, the customer should contact FoodiMann directly.)</p>
  </details>
  <details>
  <summary>
  <h5>What is FoodiMann?</h5>
    </summary>
    <p>Foodimann is an innovative online marketplace dedicated to connecting customers with a diverse array of gourmet foods and grocery products, hotel and Services Online Booking and ordering System. We aim to create a seamless and enjoyable shopping experience for food enthusiasts while providing a robust platform for vendors to reach a wider range of audience. Our platform is designed to offer a diverse array of high-quality food products and services, making gourmet and everyday essentials accessible to everyone. At Foodimann we place strong emphasis on customer experience. Our online platform is user-friendly, with detailed descriptions and pairing suggestions for each product. We offer a subscription service, allowing customers to receive a handpicked selection of gourmet items delivered to their doorstep regularly. Our dedication to quality and customer satisfaction has earned us a loyal following among food lovers and connoisseurs. Whether you're looking for a unique gift or wanting to indulge in gourmet treats, Foodimann offers a diverse and delightful range of products to suit any palate FoodiMann helps you get products in your city in minutes - just tell us what you want, where you want it, and we'll deliver it. What kind of products? Chargers, smoothies, groceries, food from your favourite restaurant…Any weird and wonderful thing you can think of! Anything in your city, delivered in minutes.</p>
  </details>
 
  <details>
  <summary>
  <h5>How do I find what I want?</h5>
    </summary>
    <p>At the top of your screen, there's a search bar that lets you find any product or restaurant, shop and business in your city.
</p>
  </details>
  </div>
  <div>
  <details>
  <summary>
  <h5>How do I unsubscribe from the FoodiMann Newsletter?</h5>
    </summary>
    <p>We’re sad to hear you don’t want to continue receiving our messages. If you don't want to receive our newsletter anymore, you just need to click on the link at the bottom of any of our newsletter emails.</p>
  </details>
  <details>
  <summary>
  <h5>How do I change my phone number?</h5>
    </summary>
    <p>You can change your contact number on your profile details. Once updated, you'll receive a verification code. When confirmed, your phone number will be changed immediately. In case you did not receive the confirmation code, please contact us </p>
  </details>
  
  <details>
  <summary>
  <h5>How do I change my email address?</h5>
    </summary>
    <p>You can change the email address associated with your account on your profile details. Once updated, you’ll receive a verification alert. When confirmed, the new email will be changed immediately.</p>
  </details>
  <details>
  <summary>
  <h5>How do I change my password?</h5>
    </summary>
    <p>You can change the password associated with your account on your profile details. Once updated, you’ll receive a notification alert. When confirmed, the new password will be changed immediately.</p>
  </details>
  <details>
  <summary>
  <h5>I cannot log in to my account. What can I do?
  </h5>
    </summary>
  <p>  In case you have lost access to the email address associated with your FoodiMann account, you will need to 
    create a new user account with a different email address that is not already active on our platform.</p>
<p>If you have lost access to the phone number associated with your FoodiMann account, please follow the steps below:</p>
<li>	Once you log in, in order to verify your identity, a verification code will be sent to your phone number via SMS.</li>
<li>	Fail the verification attempt 3 times and click on the option “Contact Support”. This will open a chat with Customer Support.</li>
<li>	Ask Customer Support to let you change your phone number associated with your FoodiMann account. One of our agents will guide
   you on the next steps.</li>

  </details>
  <details>
  <summary>
  <h5>How do I change my payment method?</h5>
    </summary>
    <p>You can change your preferred payment method on your profile details or during checkout. There, you can add or remove cards. Once updated, it will immediately be changed so that you can continue ordering FoodiMann.
    </p>
  </details>
  <details>
  <summary>
  <h5>Why should I use FoodiMann?
  </h5>
    </summary>
    <p>Do you feel like your favorite food? No time for running errands? Are you at a party at a friend's and short of ice? Just ask for whatever you want and we’ll deliver it to wherever you want. From food to groceries, items from the pharmacy, presents or snacks, FoodiMann delivers anything in your city... You ask, we deliver!
You can download our App for both tablets and smartphones on iOS devices (at App Store) and Android devices (Play Store).
For optimal service, please, allow the App to access your location and send you notifications.
If you still haven't downloaded the App, don't worry, you can also order at www.foodimann.com
</p>
  </details>
 
  <details>
  <summary>
  <h5>When will my order arrive?</h5>
    </summary>
    <p>As long as you have an assigned Delivery Man, you can follow your order in real time and communicate with the Delivery Man if you have any questions. If you don't have an assigned Delivery Man, your order remains in the system pending allocation. If large delays are anticipated, we will notify you of this with a yellow message at the top of the app. If a Delivery Man hasn't been assigned to your order and you'd like to cancel, you can do this yourself from your current order at no extra cost.</p>
  </details>
  <details>
  <summary>
  <h5>There are missing or incorrect products in the order.
  </h5>
    </summary>
    <p>If you received an incomplete or incorrect order, please go to your profile on the app and click ‘Help’. We'll get back to you with a resolution as soon as possible.
    </p>
    <h6>The order has arrived in poor condition.</h6>
<p>If your order arrived in poor condition, please go to your profile on the app and 
  click ‘Help’. We'll get back to you with a resolution as soon as possible.</p>

  </details>
  <details>
  <summary>
  <h5>I want to cancel my order. Will I be charged for cancellation?</h5>
    </summary>
    <p>You can cancel orders but cancellation fees may apply.
    </p>
    <p>For food related orders, you'll be charged an amount depending on the following factors.</p>
<li> If the store has already accepted and started to prepare your order, you'll be charged the price of the products.</li>
<li> If a Delivery Man has already been assigned to your order, you'll be charged a cancellation fee.</li>
<li> If the store has already accepted and started to prepare your order, and a Delivery Man has been assigned to deliver 
  it, you'll be charged the price of the products and a cancellation fee.</li>
<li> If the Delivery Man reaches the delivery area and finalizes the order, you'll be charged the price of the 
  products and the delivery fee. Please bear in mind, food related orders cannot be returned.</li>
<p>For non-food related orders, you can cancel an order free of charge, up until a Delivery Man accepts your request. However, if you cancel after a Delivery Man has been assigned to your order, you'll be charged the total cost of the basic delivery service. If a Delivery Man has already picked up the order or is couriering at the time of cancellation, you can ask the Delivery Man if it's possible to return the product. If this happens, you'll still have to pay the full price of the products and delivery fee, as well as the cost of the return service. If the Delivery Man is able to return the product, the value of the product will be refunded back to you. To clarify: you'll be charged for the total cost of the delivery service, including the cost of the product and delivery fee, and the return service.</p>
  </details>
  <details>
  <summary>
  <h5>What if I just want to modify my order?</h5>
    </summary>
    <p>If you want to change your order, you just have to contact your Delivery Man. From the moment a Delivery Man accepts your order, you can contact each other by phone to answer any queries that may arise.</p>
  </details>
  <details>
  <summary>
  <h5>I didn’t order this. What do I do?</h5>
    </summary>
    <p>Is the product not exactly what you expected? Please let our Customer
       Services team know, as we'd like to avoid situations like this in the
        future. However, any returns or complaints about products should be 
        made directly to the restaurant, shop or business, without the involvement o
        f Delivery Man or FoodiMann. Notwithstanding the foregoing: in the specific case of orders placed on the Platform through the drop-down menu of any Restaurant or Shop products, the customer should contact FoodiMann directly.
    </p>
  </details>
  <details>
  <summary>
  <h5>What type of payment cards do you accept?</h5>
    </summary>
    <p>
We accept Visa, MasterCard, and American Express and any other card accepted by our payment partners.</p>
  </details>
  <details>
  <summary>
  <h5>What are the payment method options?</h5>
    </summary>
    <p>
    FoodiMann is currently operating with different payment methods depending on the country. You will see the methods available in your country when placing an order and will be able to choose from the drop-down menu. When card payments are enabled, we accept credit or debit cards, including Visa, MasterCard or American Express. When cash payments are enabled, we only accept local currency.</p>
  </details>
  <details>
  <summary>
  <h5>Is it safe to add my debit/credit card?</h5>
    </summary>
    <p>
    Our payment system through the app is completely safe. To further ensure your security, we avoid storing any banking data. We use the same payment platform that companies like Twitter, Shopify or Instacart use.</p>
  </details>
  <details>
  <summary>
  <h5>How do I request an invoice?</h5>
    </summary>
    <p>If you need an invoice for your products, please contact the store directly.
If you want to receive invoices for FoodiMann services, you just need to fill in the invoicing data fields you can find in your profile within the App. If you have any issues or need more information, you can contact customer service.
If you want to stop receiving invoices, you then need to click on "Delete data and stop receiving invoices" on the same profile page.
</p>
  </details>
  <details>
  <summary>
  <h5>Why have I been asked to verify my identity?</h5>
    </summary>
    <p>We’re committed to ensuring our platform is trustworthy and safe for you and all our FoodiMann customers. That’s why, if any unfamiliar action is detected, our agents might ask you for some proof of identity. If this happens, you’ll need to attach the documents we request in order to continue using your FoodiMann account.</p>
  <p>Safety is crucial for us so please, don’t share your account or payment details with anyone who isn’t an internal FoodiMann collaborator. We would also like to remind you of the importance of having different passwords for each platform you use. If you suspect someone is using your credit/debit card on our platform without your consent, please contact us immediately through the contact form and take the necessary legal actions with your bank and the authorities.
  </p>
  </details>
  <details>
  <summary>
  <h5>How can I redeem my promo code?</h5>
    </summary>
    <p>Within your profile, you'll see a section called 'Promo Codes'. Just enter the code* to activate it and you'll be able to enjoy the discount.
*The validity and expiration of the code may be subject to changes without prior notice on the part of FoodiMann, according to requirements of promotional campaigns.
</p>
  </details>
  <details>
  <summary>
  <h5>Should I tip my Delivery Man?</h5>
    </summary>
    <p>Up to you! If you think they deserve it, why not? Delivery Man are free to accept or decline tips, but they should never ask for it.
</p>
  </details>
  <details>
  <summary>
  <h5>What is the product fee?</h5>
    </summary>
    <p>The product fee is the management commission that we apply on the product cost.
</p>
  </details>
  <details>
  <summary>
  <h5>How do I check the details of my promo code / balance?</h5>
    </summary>
    <p>If you were granted a free delivery or credit balance and want to check the amount or don't know how to use it, you can find all the information in the "Promo codes" area on your profile. Your promo codes will apply by default when you order your next FoodiMann. All unused credit after placing one order will be saved for your next order.
If you were granted a special promo code* from a store or advert, you can add it on the same promo code profile page and it will automatically apply to your next order.
*Bear in mind that these promo codes are subject to specific conditions and might expire
</p>
  </details>
  <details>
  <summary>
  <h5>Why is there a pending charge on my account and when does it get released?</h5>
    </summary>
    <p>An 'authorization amount' is the temporary hold you'll see on some of your funds, 
    which may appear next to your actual payments (depending on your bank). It’s how 
    FoodiMann guarantees that there are available funds to pay for the order. Here are the
     possible scenarios after an authorization has been made:</p>
      <li> If the order has been completed 
     successfully, we ‘capture’ the authorization, meaning it becomes a charge and the funds are
      transferred from your account to FoodiMann </li>
      <li> If the final amount is lower than the authorization 
      (e.g. some products were missing), we capture only what was owed for the order, meaning a part of 
      the authorization will be released back to your account.</li>
      <li> If the final amount is higher, we’ll 
      release the authorization immediately and attempt to capture another payment with the correct final amount. 
      In most cases, the hold will be cleared and funds released back to your bank account almost instantly. However, 
      with some banks, this may take a few business days, depending on their policy. For specific information on your
       statements, please contact your bank directly</li>
  </details>
  {/* <details>
  <summary>
  <h5>Can the User receive access to the chat history conducted as part of the GLOVO platform or application and how?</h5>
    </summary>
    <p>The user may at any time obtain the history of each chat conducted via the FoodiMann platform or application.
The chat history can be made available after contacting an agent through the correct reason: "Right of restriction" (Help > Policies > Right of restriction). After the correct reason is selected, an agent will attend the conversation and provide the requested information.

</p>
  </details> */}
</div>
  </section>
  </div>
  </div>
    </>
  )
}
export default Help
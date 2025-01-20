import React from "react";


import useLocale from "hooks/useLocale";

import Image from 'next/image';

const BusinessFaq=()=>{
  const { t } = useLocale();

  return (
    <div className='businessFaq'>
          <h1 className='title'></h1>
      <div className="welcome-container">
       

         
        
          <details>
  <summary>
  <h5>How do I sign up with FoodiMann?</h5>
    </summary>
    <p> Signing your local business up to our apps is easy. After choosing the
Business Type you want to start with, all you have to do is fill out the
form that you’ll find on the home page or footer of our
website: Delivery with FoodiMann or Signup as a Store.</p>
  </details>
  <details>
  <summary>
  <h5>What is a fee?</h5>
    </summary>
    <p>When you list your business on FoodiMann, you pay a percentage of
the order subtotal — known as a &quot;fee&quot; — for each order processed
through our platform.</p>
      
  </details>
  <details>
  <summary>
  <h5>What does this fees covers?</h5>
    </summary>
    <p>FoodiMann charges fees to bring value to your local business and
community. Some of the services covered by the fees include
advertising and marketing, delivery couriers’ costs, Calls and email,
customer service and support for consumers, merchants, and
couriers, Back office Admin cost, equipment maintenance cost,
technology platform costs etc...</p>
      
  </details>
  <details>
  <summary>
  <h5>Does FoodiMann Charge Delivery Fees on Subscription
  clients?</h5>
    </summary>
    <p> Yes absolutely, when you choose the subscription plan against the
commission plan, we charge you a minimal prepared monthly or
annually fees that excludes all delivery charges, so your customers
during check-out are billed delivery charges based on distance, zone ,
items and other factors like surge or pick time.</p>
      
  </details>
  <details>
  <summary>
  <h5>Will my menu displayed in the app be eligible for in-store
  pick-up?</h5>
    </summary>
    <p>Yes, if you have pick-up enabled, customers will be able to choose if
they prefer to collect the products at your store or to have them
delivered instead with our connection service.</p>
      
  </details>
  <details>
  <summary>
  <h5>How does FoodiMann deal with complaints related to in-
  store pick-up orders?</h5>
    </summary>
    <p>  If a customer complains at your store, their complaint can often be
dealt with more quickly by your staff. If a customer requires a refund
for a pick-up order, after they’ve left your business they can request
this in the FoodiMann app.</p>
      
  </details>

  <details>
  <summary>
  <h5>What other fees does FoodiMann charge?</h5>
    </summary>
    <p> FoodiMann does not charge a cancelation fee, contract fee, or any
hidden fees. However, certain fees may be applicable for additional
products or services as you opt in. An activation fee may be applicable
in some countries. We also provide minimal subscription fee to
encourage more small businesses who prefer this plan above the
commission plan.</p>
      
  </details>
  <details>
    <summary>
      <h5>Does Foodimann Provide Free Trails?</h5>
      </summary>
      <p>Yes, we provide free extra 14 days package period for first time customers that pay for
monthly subscription plan and free extra 60 days package for customers that pay for
annual subscription plan, within this trial period you can explore our solutions and
services. You can also explore our videos or contact our customer service expert to
book you for a free Demo or our Tech Expert to show you round our solutions and
services or answer any of your questions and concerns before subscribing for any plan.</p>
   </details>       
     
      </div>
    </div>
  );
}
export default BusinessFaq

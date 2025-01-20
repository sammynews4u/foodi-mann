import React, { useState } from "react";
import SubSwitcher from './SubSwitcher'
import Link from "next/link";
import BusinessFaq from './businessFaq'
import Commission from './commission'



const BusinessPlan = () => {
  const [selectedBase, setSelectedBase] = useState(null);

  const handleBaseClick = (base) => {
    setSelectedBase(base === selectedBase ? null : base); 
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option); 
  };
  return (
    <section className="business-package-intro">
     <h2>Choose Your Business Plan</h2>
      <div className="business-package">
      <div className={`base ${selectedBase === "commission" ? "active" : ""}`} onClick={() => handleBaseClick("commission")} >
          <h5>
            Commission Base
            {selectedBase === "commission" && (
              <span className="tick-mark">✔</span>
            )}
          </h5>
          <p className="tests">
            Your Store or Business will pay 10 - 20% commission to FoodiMann
            from each order placed on the Platform. You will get access to all
            the features and options in store dashboard or panel, app and
            interaction with user.
          </p>
        </div>
      
        <div
          className={`base ${selectedBase === "subscription" ? "active" : ""}`}
          onClick={() => handleBaseClick("subscription")}
        >
          <h5>
            Subscription Base
            {selectedBase === "subscription" && (
              <span className="tick-mark">✔</span>
            )}
          </h5>
          <p className="tests">
            Run your Store or Business by purchasing the subscription packages.
            You will have access to the features on your paid plan on your store
            dashboard or panel, app, and interaction with the user according to
            the subscription packages.
          </p>
        </div>
      </div>

      {selectedBase === "commission" && <Commission />}
      {selectedBase === "subscription" && <SubSwitcher />}
      <div className="commission">
                <div>
               <h2> In-store QR Codes &amp; Menu Mgt.</h2>
<p className="tests">Customers Scan to order directly anywhere &amp; Anytime.</p>
<li>
     Get access to FoodiMann Apps to list your store</li>
<li> Enjoy lower marketplace fees</li>
<li> Delivery fees may apply depend on customer delivery choice</li>
<li> Integrated Payment Gateways</li>

<li> And Many More Features &amp; Benefits</li>
<h6>*Fees may differ depending on your city or Country</h6>
                    </div>
                    <div>
                        <h3>N50, 000:00 </h3>
                        <h5>One Time fee</h5>
                        <button className="started">Get Started</button>
                        </div>
                </div>
      <BusinessFaq/>
    </section>
  );
};

export default BusinessPlan;

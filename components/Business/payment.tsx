
import React, { useState } from "react";
// import SubSwitcher from './SubSwitcher'
import Link from "next/link";
import BusinessFaq from './businessFaq'
// import Commission from './commission'
import PaymentOptions from "./PaymentOptions";
const Payment = () => {
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
     <h2>Choose Your Payment Plan</h2>
      <div className="business-package pay-package">
       
        <div
          className={`base ${selectedBase === "commission" ? "active" : ""}`}
          onClick={() => handleBaseClick("commission")}
        >
          <h5>
          Monthly Subscription Plan – Pay Now!
            {selectedBase === "commission" && (
              <span className="tick-mark">✔</span>
            )}
          </h5>
          <p className="tests">
          Enjoy Extra 14 Days Free plan when you pay for a month subscription
          </p>
        </div>
      
        <div
          className={`base ${selectedBase === "subscription" ? "active" : ""}`}
          onClick={() => handleBaseClick("subscription")}
        >
          <h5>
          Annual Subscription Plan – Pay Now!
            {selectedBase === "subscription" && (
              <span className="tick-mark">✔</span>
            )}
          </h5>
          <p className="tests">
          Enjoy Extra Two (2) Months Free Plan when you pay for a Year subscription
          </p>
        </div>
      </div>

      {selectedBase === "commission" && <PaymentOptions/>}
      {selectedBase === "subscription" && <PaymentOptions/>}
    
        <div className="next-btns">
     <Link href="/business-plan">
      <button className="Back">Back</button></Link>
     <Link href="/registration-success">
      <button className="next1">Next</button></Link>
      </div>
      <BusinessFaq/>
    </section>
  );
};

export default Payment;

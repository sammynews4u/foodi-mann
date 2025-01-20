import React, { useState } from "react";

const Commission = ()=>{
    const [selectedCommission, setSelectedCommission] = useState(null);

    const handleCommissionClick = (commission) => {
      setSelectedCommission(commission === selectedCommission ? null : commission);
    };
    return(
        <section className='commission-intro'>
            <h1>Pay As You Sell Pricing</h1>
            <div
        className={`commission ${
          selectedCommission === "delivery" ? "active-border" : ""
        }`}
      >
                <div>
                <h2>
            Delivery with FoodiMann
            {selectedCommission === "delivery" && (
              <span className="tick-mark">✔</span>
            )}
          </h2>
<p className="tests">Receive orders from customers and couriers deliver them.</p>
<li>
     Get access to FoodiMann Apps to list your store</li>
<li> Complete Kitchen Solutions</li>
<li> Integrated Kitchen Order Tickets</li>
<li> Dedicated Dashboard for Owner &amp; Staff</li>
<li> Track your orders in real-time</li>
<li> Manage Multiple Stores or Branch Orders</li>
<li> Add marketing programs when you need them</li>
<li> And Many More Features &amp; Benefits</li>
<h6>*Fees may differ depending on your city or Country</h6>
                    </div>
                    <div>
                        <h3>20%</h3>
                        <h5>Comes With Delivery</h5>
                        <button
            className={`started ${
              selectedCommission === "delivery" ? "active" : ""
            }`}
            onClick={() => handleCommissionClick("delivery")}
          >
            Get Started
          </button>
                        </div>
                </div>
                <div
        className={`commission ${
          selectedCommission === "pick" ? "active-border" : ""
        }`}
      >
                <div>
               <h2>In-store Dine-In & pickup
               {selectedCommission === "pick" && (
              <span className="tick-mark">✔</span>
            )}
               </h2>
<p className="tests">Customers collect their orders directly from your store.</p>
<li>
     Get access to FoodiMann Apps to list your store</li>
<li> Complete Kitchen Solutions</li>
<li> Integrated Kitchen Order Tickets</li>
<li> Dedicated Dashboard for Owner &amp; Staff</li>
<li> Track your orders in real-time</li>
<li> Manage Multiple Stores or Branch Orders</li>
<li>Vcard for owner &amp; Chefs</li>
<li> No one pays delivery fees</li>
<li> And Many More Features &amp; Benefits</li>
<h6>*Fees may differ depending on your city or Country</h6>
                    </div>
                    <div>
                        <h3>10%</h3>
                        <h5>Pick-up fee</h5>
                        <button
            className={`started ${
              selectedCommission === "pick" ? "active" : ""
            }`}
            onClick={() => handleCommissionClick("pick")}
          >
            Get Started
          </button>
                        </div>
                </div>
                <div
        className={`commission ${
          selectedCommission === "store" ? "active-border" : ""
        }`}
      >
                <div>
               <h2> In-store Kiosk, POS &amp; Waiter Mgt.
               {selectedCommission === "store" && (
              <span className="tick-mark">✔</span>
            )}
               </h2>
<p className="tests">Customers collect their orders directly from your stores.</p>
<li>
     Get access to FoodiMann Apps to list your store</li>
<li> Enjoy lower marketplace fees</li>
<li>No one pays delivery fees</li>
<li> We Share Kiosk Installation Fees</li>

<li> And Many More Features &amp; Benefits</li>
<h6>*Fees may differ depending on your city or Country</h6>
                    </div>
                    <div>
                        <h3>10%</h3>
                        <h5>Pick-up fee</h5>
                        <button
            className={`started ${
              selectedCommission === "store" ? "active" : ""
            }`}
            onClick={() => handleCommissionClick("store")}
          >
            Get Started
          </button>
                        </div>
                </div>
                
        </section>
    )
}
export default Commission
import React, { useState } from "react";

const HotelYearly = ({
    selectedPlan,
    setSelectedPlan,
}: {
    selectedPlan: string | null;
    setSelectedPlan: (plan: string | null) => void; 
}) => {
    const handleSelection = (plan: string) => {
       
        setSelectedPlan(selectedPlan === plan ? null : plan);
    };
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const toggleText2 = () => setIsExpanded2(!isExpanded2);
    const toggleText1 = () => setIsExpanded1(!isExpanded1);

    return (
        <>
            <div className="pricing-sub">
                {/* Startup Plan */}
                <div
                    className={`pricing-card ${selectedPlan === "Startup" ? "selected" : ""}`}
                    onClick={() => handleSelection("Startup")}
                >
                    <h6>Startup</h6>
                    <p className="tests">Good for Sole Traders, New businesses, Self-Employed and Freelancer.</p>
                    <h6>₦33,000</h6>
                    <h6>What’s included:</h6>
                    <div className="pricing-list">
                        <ul>
                        <li>60 Days Free Extra Pack</li>
                            <li>Limited Access Rights</li>
                            <li>Unlimited Monthly in App Messages
                            </li>
                            <li>Limited Users (Staff)</li>
                            
                            <li>Manage Single Online Store</li>
                            <li>Manage Online Products & Services</li>
                            {isExpanded1 ? (
                                            <>
                            <li>Manage Payments & Collections</li>
                            <li>Access to Paid POS Terminals</li>
                            <li>Sales to Unlimited Customers</li>
                            <span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
    See Less
  </span>
</>
) : (
<span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
  See More.....
</span>
)}  
       
                        </ul>
                    </div>
                    {selectedPlan === "Startup" && <div className="tick-marks">✔</div>}
                    <button className="started">Get Started</button>
                </div>

               
                <div
                    className={`pricing-card ${selectedPlan === "Growth" ? "selected" : ""}`}
                    onClick={() => handleSelection("Growth")}
                >
                    <h6>Growth</h6>
                    <p className="tests">Good for growing small to medium-sized businesses.</p>
                    <h6>₦82,500</h6>
                    <h6>What’s included:</h6>
                    <div className="pricing-list">
                        <ul>
                            <li>All Options in Startup Plan</li>
                           
                            <li>Limited Monthly in App Voice Calls</li>
                            <li>POS Mgt. Single Outlet</li>
                            
                            <li>Manage off line and Online Transactions</li>
                            <li>24/7 Customer Support Services</li>
                            <li>Limited Database Storage</li>
                        </ul>
                    </div>
                    {selectedPlan === "Growth" && <div className="tick-marks">✔</div>}
                    <button className="started">Get Started</button>
                </div>

                {/* Enterprise Plan */}
                <div
                    className={`pricing-card ${selectedPlan === "Enterprise" ? "selected" : ""}`}
                    onClick={() => handleSelection("Enterprise")}
                >
                    <h6>Enterprise</h6>
                    <p className="tests">Good for established businesses of all sizes with multiple branches.</p>
                    <h6>₦165,000</h6>
                    <h6>What’s included:</h6>
                    <div className="pricing-list">
                        <ul>
                        <li>All Options in Startup Plan</li>
                            <li>limited Monthly in App Video Calls
                            </li>
                            <li>All Options in Growth Plan</li>
                            <li> Unlimited Users (Staff)</li>
                            <li>Marketing of Brands</li>
                            <li>Invoices & Purchases Mgt.</li>
                            <li>Manage Multiple Branches </li>
                            {isExpanded1 ? (
                                <>
                                <li>Multiple POS Mgt.</li>
                            <li>Unlimited Store Mgt.</li>
                            <li>Dedicated Account Manager</li>
                            <span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
    See Less
  </span>
</>
) : (
<span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
  See More.....
</span>
)}  
    
                        </ul>
                    </div>
                    {selectedPlan === "Enterprise" && <div className="tick-marks">✔</div>}
                    <button className="started">Get Started</button>
                </div>
            </div>
        </>
    );
};

export default HotelYearly;

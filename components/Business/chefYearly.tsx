import {useState} from 'react'


const ChefYearly = ({
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
                
            <div
                className={`pricing-card ${selectedPlan === "Startup" ? "selected" : ""}`}
                onClick={() => handleSelection("Startup")}
            >
                        <h6>Startup Chef</h6>
                        <p className="tests">Good for Solo-Chef, New
businesses, Self-Employed
and Home Base Chef.</p> 
                                     
                                        
                                  
                               
                    <h6>₦55,000 </h6>
                                    <h6>What’s included:</h6>
                              
                                <div className="pricing-list">
                                    <ul>
                                        <li>60 Days Free Extra Pack</li>
                                        <li>Limited Access Rights</li>
                                        <li>Limited Users (Staff)
                                        </li>
                                        <li>Manage Single Chef Profile</li>
                                        <li>Manage Single Online Store</li>
                                     
                                        <li>Max Order (Unlimited)</li>
                                        <li>POS Mgt. Single Outlet</li>
                                        <li>Manage &amp; Sale Recipes</li>
                                        <li>Manage Chef Booking</li>
                                        <li>Manage Online Inventory Store</li>
                                        {isExpanded2 ? (
                                            <>
                                            <li>Max Products &amp; Services (Unlimited)</li>
                                        <li>Manage Online &amp; Offline Appointments</li>
                                        <li>Manage Payments &amp; Collections</li>
                                        <li>Mobile App (Android &amp; IOS)</li>
                                        <li>Access to Paid POS Terminals</li>
                                        <span onClick={toggleText2} style={{ color: "#00ff00", cursor: "pointer" }}>
    See Less
  </span>
</>
) : (
<span onClick={toggleText2} style={{ color: "#00ff00", cursor: "pointer" }}>
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

                       <h6>Premium Chef</h6>
                                        <p className="tests">Good for fast growing and
coaching chefs that want
to take their personal
brand to the next level</p>
                                      
                                    <h6>₦330,000</h6>
                                    <h6>What’s included:</h6>
                               
                                <div className="pricing-list">
                                    <ul>
                                        <li>All Options in Startup Plan</li>
                                        <li>limited Monthly in App Voice Calls</li>
                                        <li>Manage Five Chef Profile
                                        </li>
                                        <li>Manage off line and Online
                                        Transactions</li>
                                        <li>24/7 Customer Support Services</li>
                                        <li>Limited Database Storage</li>
                                        <li>Unlimited Inventory Mgt.</li>
                                        <li>Manage off line and Online Transactions</li>
                                        <li>POS Mgt. Five Outlet</li>
                                        
                                    </ul>
                                </div>
                                {selectedPlan === "Growth" && <div className="tick-marks">✔</div>}
                                <button className="started">Get Started</button>
                            </div>
                       
                            <div
                className={`pricing-card ${selectedPlan === "VIP" ? "selected" : ""}`}
                onClick={() => handleSelection("VIP")}
            >
                     
                            
                                        <h6>VIP Chef
                                        </h6>
                                   <p className="tests">Good for established Chef
that services VIP Clients
like politicians and high
profile individuals</p>
                                
                         
                                    <h6>₦1,100,000</h6>
                                    <h6>What’s included</h6>
                               
                                <div className="pricing-list">
                                    <ul>
                                        <li>All Options in Startup Plan</li>
                                        <li>All Options in Premium Chef Plan
                                        </li>
                                        <li>Manage Unlimited Chef Profile</li>
                                        <li> Unlimited Users (Staff)</li>
                                        <li>limited Monthly in App Video Calls</li>
                                        <li>Co-Marketing of Brands</li>
                                        <li>Manage Multiple Branches </li>
                                        <li>Multiple POS Mgt.</li>
                                        <li>Unlimited Store Mgt.</li>
                                        <li>Dedicated Account Manager</li>
                                       

                                    </ul>
                                </div>
                                {selectedPlan === "Enterprise" && <div className="tick-marks">✔</div>}
                                <button className="started">Get Started</button>
                            </div>
                            <div
                className={`pricing-card ${selectedPlan === "Celebrity" ? "selected" : ""}`}
                onClick={() => handleSelection("Celebrity")}
            >
                     
                            
                                        <h6>Celebrity Chef
                                        </h6>
                                   <p className="tests">Good for established Chef
that services celebrity
Clients like celebrity arties,
politicians and high profile
individuals with multiple
branches and users</p>
                                
                         
                                    <h6>₦1,650,000</h6>
                                    <h6>What’s included</h6>
                               
                                <div className="pricing-list">
                                    <ul>
                                        <li>All Options in Startup Plan</li>
                                        <li>Manage Multiple Branches
                                        </li>
                                        <li>Co-Marketing of Brands</li>
                                        <li> Unlimited Users (Staff)</li>
                                        <li>limited Monthly in App Video Calls</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>Manage Multiple Branches </li>
                                        <li>Multiple POS Mgt.</li>
                                        <li>Unlimited Store Mgt.</li>
                                        {isExpanded1 ? (
                                            <>
                                            <li>Dedicated Account Manager</li>
                                        <li>Custom Design Solutions</li> 
                                        <li>Advance Reports &amp; Analytics</li>
                                        <li>Access to Add – Ons Solutions</li> 
<li>Access to Third Party Integration</li>
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
                                {selectedPlan === "Celebrity" && <div className="tick-marks">✔</div>}
                                <button className="started">Get Started</button>
                            </div>
                    
            </div>
        </>
    )
}
export default ChefYearly;
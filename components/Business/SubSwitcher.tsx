import { useState } from 'react';
import SubsMonthly from './SubsMonthly';
import SubsYearly from './SubsYearly';
import ChefMonthly from './chefMonthly'
import ChefYearly from './chefYearly'
import HotelMonthly from './hotelMonthly'
import HotelYearly from './hotelYearly'
// import HotelYearly from '../componens/Business/hotelYearly'
import Link from "next/link";

const SubSwitcher = () => {
  const [tab, setTab] = useState(1);  
  const [selectedOption, setSelectedOption] = useState("monthly");  
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const handleToggleChange = () => {
    setSelectedOption(prevOption => (prevOption === "monthly" ? "yearly" : "monthly"));
  };
    
  const handleSelection = (plan: string, price: number) => {
    setSelectedPlan(plan);
    setSelectedPrice(price);
  };
  return (
    <section className="business-chefs">
    <h2>Subscription Pricing Plan</h2>
      <div id="pricetab">
        <hgroup>
          <button onClick={() => { setTab(1); }} className={tab === 1 ? 'active' : ''}>Business</button>
          <button onClick={() => { setTab(2); }} className={tab === 2 ? 'active' : ''}>Chefs</button>
          <button onClick={() => { setTab(3); }} className={tab === 3 ? 'active' : ''}>Hotels & Lounge</button>
        </hgroup>

      
        <div className="status-toggle switching" onClick={handleToggleChange}>
          <div className={`toggle-option ${selectedOption === "monthly" ? "active" : ""}`}>
            <span className={`switch-label ${selectedOption === "monthly" ? "active" : ""}`}>Monthly</span>
          </div>

          <div className="toggle-switch">
            <div className={`switch ${selectedOption === "monthly" ? "left" : "right"}`}></div>
          </div>

          <div className={`toggle-option ${selectedOption === "yearly" ? "active" : ""}`}>
            <span className={`switch-label ${selectedOption === "yearly" ? "active" : ""}`}>Yearly</span>
          </div>
        </div>
      </div>

    
      
       {tab === 1 && (
  <div className="tab-content">
    {selectedOption === "monthly" 
      ? <SubsMonthly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /> 
      : <SubsYearly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
  </div>
)}
   {tab === 2 && (
  <div className="tab-content">
    {selectedOption === "monthly" 
      ? <ChefMonthly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /> 
      : <ChefYearly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
  </div>
)}
      {tab === 3 && (
  <div className="tab-content">
    {selectedOption === "monthly" 
      ? <HotelMonthly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /> 
      : <HotelYearly selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
  </div>
)}
      <div className="next-btns">
  <Link href="/business-form-registration">
    <button className="Back">Back</button>
  </Link>
  {/* <Link href={selectedPlan ? "/payment-method" : "#"} passHref>
    <button 
      className={`next ${selectedPlan ? 'active' : 'inactive'}`} 
      disabled={!selectedPlan}
    >
      Next
    </button>
  </Link> */}
  <Link 
          href={selectedPlan ? {
            pathname: "/payment-method",
            query: { plan: selectedPlan, price: selectedPrice } 
          } : "#"} passHref>
          <button 
            className={`next ${selectedPlan ? 'active' : 'inactive'}`} 
            disabled={!selectedPlan}>
            Next
          </button>
        </Link>
</div>
    </section>
  );
};

export default SubSwitcher;



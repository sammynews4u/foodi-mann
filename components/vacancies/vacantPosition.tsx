import Link from 'next/link'
import React, { useState } from "react";




const VacantPosition = ()=>{
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true);
      };
    const closePopup = () => {
        setShowPopup(false);
      };
    return(
        <section className="position-content">
<p className="tests">FoodiMann is no longer just about food delivery from restaurants. We have transformed from a 
    food delivery leader into a quick commerce company. We currently work with more than 6,600 
    restaurants and shops. Our vision is a satisfied customer to whom we deliver almost anything in the shortest possible time.</p>
   <h2> Commercial Operations Senior Specialist for FoodiMann</h2>
<p className="tests">We are looking for a colleague to join our Quick Commerce team who will provide
 administrative support for our processes, manage price lists and ensure the accuracy
  of all data about our products. We are looking for an enthusiastic, team-oriented and
   customer-oriented partner who will help us improve our services at supersonic speed.</p>
 <h2>  What will you do with us?</h2>
<li>	Responsible for managing partner profiles on the platform, including training them in the application and business systems.</li>
<li>	Review and edit listings, item descriptions, and photos to ensure partners have an attractive and 
    accurate product presentation.</li>
<li>	Providing technical support to partners when working with ordering devices.</li>
<li>	Close cooperation with the sales team and account managers to ensure quality and quick activation of profiles.</li>
<li>	Active management of partner profiles in Salesforce, solving operational issues and support for promotions and online banners.</li>
<li>	Constant contact with partners and departments across FoodiMann for smooth and dynamic operation.</li>
<h2>What do we expect from you?</h2>
<li>	Ability to work independently and carefully</li>
<li>	Good organizational skills</li>
<li>	Flexibility and adaptability</li>
<li>	Knowledge of working in MS Office, especially Excel: working with functions, vlookup, countif, etc.</li>
<li>	Ability to communicate with partners by email and phone</li>
<li>	Knowledge of Google Workspace is a plus</li>
<h2>What do we offer for it?</h2>
<li>	Flexible working hours</li>
<li>	Home Office up to twice a week</li>
<li>	5 weeks vacation</li>
<li>	Monthly allowance for FoodiMann orders in the amount of CZK 2,200 and a free FoodiMann PRO account</li>
<li>	A wide range of inclusive and flexible benefits including paid time off for the childs first day of
     kindergarten or school, birthday, wedding, funeral, artificial insemination and gender affirmation, as well
      as the possibility of a full home office after returning from parental leave or before the birth for partners 
      of expectant mothers or adoptive mothers parents (beyond legal standards)</li>
<li>	A contribution to the Multisportka or to the local gym directly in the building of our headquarters</li>
<li>	Massage directly at the workplace</li>
<li>	Full freezers of ice cream, unlimited fruit and coffee</li>
<li>	Individual or group AJ lessons</li>
<li>	Employee discount at Mall, Alza and iStyle</li>
<li>	Advanto – the possibility of withdrawing the earned salary at any time during the month</li>
<li>	Having a unique opportunity to implement ideas that change the way of eating and shopping</li>
<li>	A modern, pleasant and dog & children friendly office in DOCK IN in Prague 8</li>
<h2>How does our recruitment process work?</h2>
<li><b>	Online interview:</b> Lets get to know each other and talk more about the role and the foodor</li>
<li><b>	Personal meeting:</b> You will get to know your potential supervisor and other colleagues from FoodiMann</li>
<li><b>	Reference Check:</b> The last step and its almost done</li>
<li><b>Do you think we could work together?</b> Send us your CV or LinkedIn link. We look forward to it!</li>
<li>At FoodiMann, we benefit from diversity, already in recruitment - we do not discriminate on the basis of race, religion,
 skin color, nationality, gender, sexual orientation, age, marital status or any other aspect that makes you who you are.</li>
<li>The position is also suitable for graduates.</li>
<li>The position is also suitable for PWDs. With access to the company with barrier-free access. Also suitable for: others.</li>
<li><b>Type of employment:</b>Full time job</li>
<li><b>Type of contractual relationship:</b> Contract of employment</li>
<li><b>Length of employment:</b> For an indefinite period</li>
<h2>Benefits</h2>
<li>Children-friendly office, Dog-friendly office, Vacation 5 weeks, Company
     event, Flexible start/end of working hours, Individual working time schedule,
      Mobile phone, Possibility of occasional work from home, Possibility of working hours, 
      Laptop, Snacks at the workplace, Allowance for sport/culture/leisure, Education allowance,
       Discount on company products/services, Meal vouchers/meal allowance, Own organization of work 
       content, Educational courses, training</li>
<li><b>Required education:</b> High school or vocational training with high school diploma</li>
<li><b>Required languages:</b> English (Basic) and Czech (Excellent)</li>
<div className="apply-sec">
    <Link href="/application-form">
    <button className="demo" onClick={handleButtonClick}>Apply </button></Link>
        <div>
            <Link href="jobs-vacancies">
            <h6>Back to list of positions</h6></Link>
            </div>
    </div>
        </section>
    )
}
export default VacantPosition
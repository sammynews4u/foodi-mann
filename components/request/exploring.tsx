import so from './so.png'
import ki from './ki.png'
import self from './self.svg'
import Image from 'next/image'
import React, { useState } from "react";
import QRPop from '../QRCode/QRpop'



const Exploring = ()=>{
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
    return(
        <>
        <section className="exploring">
    <div className="container">
        <h2>Exploring State-of-the-Art Design Trends</h2>
        <div className="exploring-content">
            <div className="col-lg-4">
                <Image src={so} alt="" width={500} height={500}/>
            </div>
            <div className="explore-kiosk">
                <h3 className="explore-kiosk">Software Features</h3>
                <li className='tests'>Open to Integration with your existing industry level POS</li>
                <li className='tests'>Advanced Menu Management</li>
                <li className='tests'>Brand Reflective Colour Scheme while Developing App</li>
                <li className='tests'>Self-Order : UPI based QR code, Pay at counter, Pay via Cards</li>
                <li className='tests'>In-store Promotions : Promo Code and Loyalty Point</li>
                <li className='tests'>Outlet Level Personalized Banners</li>
                <li className='tests'>Real time updates at customer’s mobile</li>
            </div>
        </div>
    </div>
    <section className="exploring">
    <div className="container">
        <div className="exploring-content">
            <div className="explore-kiosk">
                <h3>Hardware Features</h3>
               <li className="tests">32 inch Professional Grade Display</li>
               <li className="tests">Multiple Smart Sensors</li>
               <li className="tests">4G, Wifi and Ethernet Capability</li>
               <li className="tests">Inbuilt Printer for Order Receipt</li>
               <li className="tests">Sturdy Metal Stand for Screen</li>
               <li className="tests">Inbuilt Camera</li>
               <li className="tests">Toughened Glass</li>
            </div>
            <div className="col-lg-offset-1 col-md-offset-1 col-lg-6 col-md-6 col-sm-7 col-xs-12 orderm1">
            <Image src={ki} alt="" width={500} height={500}/>
            </div>
        </div>
    </div>
</section>
<section className="maximise">
        <div className="maximise-content">
            <div className="explore-kiosk">
                <h3>Maximise your revenue with our powerful<br></br> revenue- generating kiosk solution today!</h3>
                <button className="books" onClick={handleButtonClick}>Request a Kiosk</button>
                {showPopup && (
          <>
           <div className="popup-overlay">
        <div className="popup">
        <h3>Request a Kiosk</h3>
               <button className="close-button" onClick={closePopup}>&times;</button>
              <QRPop/>
              </div>
              </div>
          </>
             )}
            </div>     
    </div>
</section>
<section className="why-section">
    <div className="container">
        <h2 >Why FoodiMann Kiosks Are the Smart <br></br> Choice for Your Restaurant?</h2>
        <p className="tests">FoodiMann’s Kiosks revolutionize QSR operations, enhancing customer experiences and
             fostering rapid business growth through adaptable, cost-effective technology. 
             Their sleek design sets restaurants apart, maintaining a competitive edge in the market.</p>
        <div className="row adjustbxflex aligncenterflex">
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
            <Image src={self} alt="" width={400} height={500}/>
            </div>
            <div className="why-kiosk">
                <div className="kiosk-heading">
                    <h5>Subscription based</h5>
                    <p className="tests">Economical, No Commissions on orders &amp; No upfront investment. we’re offering it as “Kiosk as a service” model, delivers immediate ROI.</p>
                </div>
                <div className="kiosk-heading">
                    <h5>Hardware + Software</h5>
                    <p className="tests">Both H/W &amp; S/W are designed &amp; built in-house. So Software is smartly integrated with Hardware.</p>
                </div>
                <div className="kiosk-heading">
                    <h5>Plug &amp; Play</h5>
                    <p className="tests">SelfServe kiosk is very easy to install and operate. Easy Integration with existing POS &amp; other Softwares.</p>
                </div>
                <div className="kiosk-heading">
                    <h5>Customer Support</h5>
                    <p className="tests">Our customer support team is availaible whenever you need. We support online and offline.</p>
                </div>
            </div>

        </div>
    </div>
</section>
</section>
        </>
    )
}
export default Exploring;
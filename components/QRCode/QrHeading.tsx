import scan from './scan.png'
import Image from 'next/image'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import glass from './glass.png'
import res from './res.png'
import firs from './firs.png'
import sec from './sec.png'
import qr from './qr.png'
import foodlogo from './foodlogo.png'
import Module from './module'
import Payments from '../QRCode/payment/payments'
import React, { useState } from "react";
import QRPop from './QRpop'

const QrHeading = ()=>{
    const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
        <section className="qr-code-intro">
<div className="code-content">
    <h2>QR Code Restaurant Menu Maker and Contactless Table Ordering System with Restaurant POS</h2>
    <p className="tests">Efficient and Easy Digital Menu Ordering and Contactless Payment System for In-House Dining Restaurants, Bars or Cafes,
         Customers can enjoy a contactless ordering Experience.</p>
         <button className="request-code" onClick={handleButtonClick}>Request A QR Codes</button>
             {showPopup && (
              <>
              
        <div className="popup-overlay">
        <div className="popup">
        <h3>Request a QR Code</h3>
               <button className="close-button" onClick={closePopup}>&times;</button>
              <QRPop/>
              </div>
              </div>
              </>
                 )}
   
<Image src="https://qr-web-saas.netlify.app/images/welcome-hero-vector.png" alt="" width={500} height={490} className="vector"/>
         <Image src={one} alt="" width={180} height={180} className="one"/>
         <Image src={two} alt="" width={150} height={150} className="two"/>
         <Image src={three} alt="" width={150} height={150} className="third"/>
    </div>
    <div className='qr-section-image'>
        <div className="scanner">
        <Image src={scan} width={300} height={350} alt=""/>
        </div>
        </div>
        </section>
        <section className="works-section">
            <h1>How it works ?</h1>
        <section className="how-it-works">
        <div className="works-carding">
            <div className="placed">
                <h3>QR Scanning</h3>
                <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M26.006 15.2981L12.0203 29.2838L9.72223 26.9857L23.7079 13H11.3811V9.75H29.256V27.625H26.006V15.2981Z" 
                fill="currentColor"></path></svg>
                </div></div>
                <h2>Use your Native camera , Google Lenses or any QR
                Codes scanner</h2>
        <div className="place-image">
            <Image src="https://qr-web-saas.netlify.app/images/service2.png" alt="banenr"  width={400} height={400}/></div>
            </div>
        <div className="works-carding">
            <div className="placed">
                <h3>Open The Menu</h3>
                <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M26.006 15.2981L12.0203 29.2838L9.72223 26.9857L23.7079 13H11.3811V9.75H29.256V27.625H26.006V15.2981Z" 
                fill="currentColor"></path></svg>
                </div></div>
                <h2>Open the Menu to add your item to Cart</h2>
        <div className="place-image">
        <Image src="https://qr-web-saas.netlify.app/images/service3.png" alt="banenr"  width={400} height={400}/>
          </div>
            </div>
            <div className="works-carding">
            <div className="placed">
                <h3>Place Your Order</h3>
                <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M26.006 15.2981L12.0203 29.2838L9.72223 26.9857L23.7079 13H11.3811V9.75H29.256V27.625H26.006V15.2981Z" 
                fill="currentColor"></path></svg>
                </div></div>
                <h2>Order your preferred items and make payment
                and choose your delivery Method.</h2>
        <div className="place-image">
        <Image src="https://qr-web-saas.netlify.app/images/service1.png" alt="banenr"  width={400} height={400}/> </div>
            </div>
           
</section>
<h3 id="easily">Easily guided, the customer selects<br></br> suitable dishes and makes an order.</h3>
<div className="see-all">
    <div>
        <button className="see">See All</button>
        </div>
<div>
    <h2>Everything your customers <br></br> need in one service</h2>
    </div>
    </div>
            </section>
            <section className="contact-table">
                <div>
           <h3> Contactless Table Ordering System</h3>
<p className="tests">Customers can use their smartphones to scan the QR code on their 
    table, which directs them to the digital menu. The digital menu 
    allows customers to browse through items, select their choices, 
    and place orders directly from their devices. Orders are sent to
     the kitchen or bar, reducing the need for physical menus, paper 
     order slips, and direct interaction with waiter or staff.</p>
     </div>
     <div>
        <Image src={sec} alt="" width={500}height={500}/>
     </div>
                </section>
            <section className="online-table">
    <div className="reservation">
        <div className="reservation_left">
    <Image src={glass}alt="" width={500} height={400}/>
            
            </div>
        <div className="reservation_right">
            <div className="reservation-top">
            <h2>Advantages</h2>
            <h3>Online <br></br>table reservation</h3>
                </div>
            <div className="reservation-bottom">
                <h3>Find your table for any occasion</h3>
    <button className="demo" onClick={handleButtonClick}>Explore more</button>
        {showPopup && (
          <>
           <div className="popup-overlay">
        <div className="popup">
        <h3>Request a QR Code</h3>
               <button className="close-button" onClick={closePopup}>&times;</button>
              <QRPop/>
              </div>
              </div>
          </>
             )}
   
    </div></div></div>
            </section>
            
                <section className="contact-table">
                <div>
           <h3> QR Code Menu Maker</h3>
<p className="tests">This feature allows restaurants to create digital menus in the form of QR
codes. Restaurants can input menu items, descriptions, prices, and possibly images into
a system. The system generates a QR code for each table or the entire restaurant.</p>
     </div>
     <div>
        <Image src={qr} alt="" width={500}height={500}/>
     </div>
                </section>
                <section className="contact-table">
                    <div>
                        <Image src={res} alt="" width={500} height={500}/>
                        </div>
                        <div>
                     <h3> Restaurant POS Integration</h3>
                   <p className="tests"> Integration with the restaurants POS system ensures that orders
                     placed through the contactless system are seamlessly processed. The POS
                      system may also handle payment processing, allowing customers to pay through 
                      the app or other contactless methods.</p>
                            </div>
                    </section>
    <Module/>
                    <Payments/>

        </>
    )
}
export default QrHeading;
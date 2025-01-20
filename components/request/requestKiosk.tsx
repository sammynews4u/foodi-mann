import one from './one.svg'
import two from './two.svg'
import three from './three.svg'
import Image from 'next/image';
import Exploring from '../request/exploring'
import Started from '../request/started'
import banner from './banner.png'
import tup from './tup.png'
import re from './re.png'
import ab from './ab.png'
import fo from './fo.png'
import React, { useState } from "react";
import QRPop from '../QRCode/QRpop'

const RequestKiosk = ()=>{
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
    return(
        <section className="ordering-intro">
            <div className="orders">
                <div>
<h1>Self-Ordering Just Got Smarter</h1>
<p className="tests">Provide a seamless ordering experience for your customers with FoodiMann’s self 
    ordering kiosk. A quick and easy way to place their orders. Reduce wait times, Increase Revenue and Grow your business.</p>
    <button className="demo" onClick={handleButtonClick}>Request A Kiosk</button>
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
    <h2>Trusted by</h2>
    <div className="trusted-by"> 
        <Image src={tup} alt="" width={50} height={100}/>
        <Image src={re} alt="" width={100} height={100}/>
        <Image src={ab} alt="" width={100} height={100}/>
        <Image src={fo} alt="" width={100} height={100}/>
        </div>
    </div>
    <div className="ban">
        <Image src={banner}alt="" width={600} height={400}/>
        </div>
    </div>
    <div className='serve-kiosk'>
       <h2> Why Are Self-Serve Kiosks the Future <br></br>for
        Restaurant Ordering?</h2>
        <div className="serve-content">
        <div className="serve">
            <div className="serves">
                    <Image src={one} alt="" width={80} height={80}/></div>
                    <h3>Faster Service</h3>
                  <p className='tests'>  With self-serve kiosks, customers can place their orders swiftly, 
                    reducing wait times during peak hours, resulting in improved efficiency and customer satisfaction.</p>
                </div>
                <div className="serve">
                <div className="serves">
                    <Image src={two} alt=""  width={80} height={80}/></div>
                    
                        <h3>Save Money</h3>
                    <p className="tests">    Implementing self-serve kiosks reduces the need for additional order-taking staff,
                         lowering labor costs and enabdivng efficient resource allocation for other critical tasks.</p>
                </div>
                <div className="serve">
                <div className="serves">
                    <Image src={three} alt=""  width={80} height={80}/></div>
                    <h3>Upsell Opportunities</h3>
                    <p className='tests'>Interactive kiosks can suggest complementary items or upgrades based on customer preferences,
                         effectively driving additional sales by prompting customers to explore and add more to their orders.</p>
                </div>
            </div>
        </div>
        <Exploring/>
        <Started/>
        </section>
    )
}
export default RequestKiosk
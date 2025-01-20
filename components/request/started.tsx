import first from './first.svg'
import sec from './sec.svg'
import third from './third.svg'
import rec from './rec.png'
import Image from 'next/image'
import React, { useState } from "react";
import QRPop from '../QRCode/QRpop'
const Started = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true);
    };
    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <>
            <section className="get-started">
                <h2 >Getting Started is Easy in 3 Simple Steps</h2>
                <p className="tests easy">Go from sign up to receiving orders on an all-new revenue channel in 3 simple steps.</p>

                <div className="started-content">

                    <div className="starting-section">
                        <div className="starting">
                            <Image src={first} alt="" width={50} height={50} /></div>
                        <article><h3>Switch ON</h3>
                            <p className="tests">Enable FoodiMann Kiosk at your restaurant, and customize it to suit your branding.</p></article>
                    </div>
                    <div className="starting-section">
                        <div className="starting">
                            <Image src={sec} alt="" width={50} height={50} /></div>
                        <article>
                            <h3>Sync Your Menu</h3>
                            <p className="tests">  Add beautiful item images, mark availabidivty, sync with a cdivck. Create effective ads to drive sales.</p></article>
                    </div>
                    <div className="starting-section">
                        <div className="starting">
                            <Image src={third} alt="" width={50} height={50} />
                        </div>
                        <article><h3>Connect Payments</h3>
                            <p className="tests">Set up diverse payment methods, and connect terminals to accept payments digitally. Start seldivng!</p></article>
                    </div>
                </div>
            </section>
            <section className="maximise">
                <div className="maximise-content">
                    <div className="explore-kiosk">
                        <h3>Run your business faster, smarter, and better.<br></br>
                            Order Your FoodiMann Kiosk Today!</h3>
                        <button className="books" onClick={handleButtonClick}>Get Started</button>
                        {showPopup && (
                            <>
                                <div className="popup-overlay">
                                    <div className="popup">
                                        <h3>Request a Kiosk</h3>
                                        <button className="close-button" onClick={closePopup}>&times;</button>
                                        <QRPop />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className="kiosk">
                <div className="kiosk-orders">
                    <div className="">
                        <h2>Get FoodiMann Kiosk for your restaurant</h2>
                        <p className="tests">FoodiMann Kiosk comes with software and hardware bundles to best suit your business.</p>

                        <ul>
                            <li>FoodiMann Kiosk Software License with 12-month Subscription</li>
                            <li>FoodiMann Kiosk Hardware with 1-year Warranty</li>
                            <li>iPad 12.9 with 2-year AppleCare</li>
                            <li>Epson Printer TM-M30</li>
                            <li>Payment Terminal Holder</li>
                        </ul>

                    </div>
                    <div className="">
                        <Image src={rec} alt="" width={500} height={500} />
                    </div>
                </div>

            </section>
            <div className='request-faq'>
                <div className="">
                    <h1></h1>
                    <div>
                        <details>
                            <summary>
                                <h5>What is a FoodiMann kiosk?</h5>
                            </summary>
                            <p> FoodiMann Kiosk is a self-ordering kiosk designed exclusively for restaurants. You can start a beautiful self-ordering channel in minutes to give your customers a quick and convenient ordering experience. With FoodiMann Kiosk, increase revenue, reduce wait times, free up staff, and save labor costs at your business. The best part, it’s fully integrated with FoodiMann’s restaurant management suite for streamlined operations.</p>
                        </details>
                        <details>
                            <summary>
                                <h5>How much does it cost?</h5>
                            </summary>
                            <p>FoodiMann Kiosk comes with several software and hardware bundles to best suit your business. For more details on pricing, you can simply submit your details and one of our Product Specialists will get in touch with a quote.</p>

                        </details>
                        <details>
                            <summary>
                                <h5>What are the supported payment terminals for digital payments?</h5>
                            </summary>
                            <p>
                                With FoodiMann Kiosk, you can offer your customers the flexibility of secure digital payments. Our supported terminals include Stripe, Adyen, Geidea, and Epay.</p>

                        </details>
                        <details>
                            <summary>
                                <h5> Does FoodiMann Kiosk work on iOS and Andoid?</h5>
                            </summary>
                            <p>
                                Yes, FoodiMann Kiosk is available on iOS and Android. It works great with a 12.9″ iPad for iOS, and is compatible with screen sizes of up to 32″ for Android.</p>

                        </details>
                    </div>
                    <div>
                        {/* <Image src='https://winsfolio.net/html/foodio/assets/img/slide2_2-img.png' alt="" width={500} height={400}/> */}
                    </div>

                </div>
            </div>
        </>

    )
}
export default Started
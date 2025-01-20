// import Image from 'next/image';


// const BusinessBottom = () => {
//     return (
//         <>
//             <div className="business-bottom">
//                 <div className="images-containers">
//                     <Image 
//                         src="https://jungleworks.com/wp-content/uploads/2021/09/seamless_integrations@2x.png"
//                         alt="Seamless Integrations"
//                         width={200}
//                         height={400}
//                     />
//                 </div>
//                 <div className="content">
//                     <h5>Seamless Integrations To Accounting System</h5>
//                     <p>A smart way to manage business. Integrate with the Accounting software that simplifies your business.</p>
//                     <p>Integrate effortlessly with multiple third-party applications like payment gateways, POS systems, Google Analytics, and more that are best suitable for your business. Provide the best experience for your customers and integrate your systems in a jiffy without technical expertise.</p>
//                 </div>
//             </div>

//             <div className="business-bottom ">
//                 <div className="contents">
//                     <h5>Multilingual with 25+ Payment Gateways</h5>
//                     <p>Communicate in the language of your target audience &amp; ensure easy online
//                     payment..</p>
//                     <p>Communicate in over 80 languages with your customers and ensure customer
//                     retention.Choose from Leading Payment Gateways Supported in 180+ Countries.</p>
//                 </div>
//                 <div className="images-containers">
//                     <Image 
//                         src="https://jungleworks.com/wp-content/uploads/2021/09/payment_gateways@2x-1.png"
//                         alt="Seamless Integrations"
//                         width={200}
//                         height={400}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BusinessBottom;


import Image from 'next/image';


const BusinessBottom = () => {
    return (
        <div className='businessContainer'>
            {/* First Block */}
            <div className='businessBottom'>
                <div className='imageContainer'>
                    <Image 
                        src="https://jungleworks.com/wp-content/uploads/2021/09/seamless_integrations@2x.png"
                        alt="Seamless Integrations"
                        width={600}
                        height={400}
                    />
                </div>
                <div className='contents'>
                    <h5>Seamless Integrations To Accounting System</h5>
                    <p>A smart way to manage business. Integrate with the Accounting software that simplifies your business.</p>
                    <p>Integrate effortlessly with multiple third-party applications like payment gateways, POS systems, Google Analytics, and more that are best suitable for your business. Provide the best experience for your customers and integrate your systems in a jiffy without technical expertise.</p>
                </div>
            </div>

            <div className='businessBottom'>
            <div className='content'>
                    <h5>Multilingual with 25+ Payment Gateways</h5>
                    <p>Communicate in the language of your target audience &amp; ensure easy online payment.</p>
                    <p>Communicate in over 80 languages with your customers and ensure customer retention. Choose from Leading Payment Gateways Supported in 180+ Countries.</p>
                </div>
                <div className='imageContainer'>
                    <Image 
                        src="https://jungleworks.com/wp-content/uploads/2021/09/payment_gateways@2x-1.png"
                        alt="Multilingual with 25+ Payment Gateways"
                        width={600}
                        height={400}
                    />
                </div>
                
            </div>
        </div>
    );
};

export default BusinessBottom;


import Image from 'next/image';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import Contact2 from './contact2'


const ContactUs =()=>{
    return(

        <section className="contact-section">
            <Image src="https://media.istockphoto.com/id/1911521660/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=jZr-CasP4ScJvlIW2V3D3KY5OLYEYPY2PYA_mP7NML8="alt=""
            width={1200}height={600}/>
       
<Contact2/>
<div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126451.93815313259!2d3.324160671837376!3d6.596380755668529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d02f6f46a07%3A0xa0a34e59d3c23b9a!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1698434398456!5m2!1sen!2sng"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
        </section>
    )
}
export default ContactUs
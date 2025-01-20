import Link from 'next/link';
import { useState } from 'react';
const OcassionAddress = () => {
    // const [selectedOccasion, setSelectedOccasion] = useState("");
    const [selectedService, setSelectedService] = useState("");
    return (
        <section className="occassion-address">
            <h1>  Where’s the event? </h1>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" /></g></svg> */}
            <input id="address-input" type="text" placeholder="Provide the full city or full address" />
            {/* <Link href={selectedService ? "/type-of-occasion" : "#"}>
                <button className="continue" disabled={!selectedService}>
                Continue
                </button>
                </Link> */}
            <div className="event">
                <Link href='/type-of-occasion'>
                    <div className="previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="14" viewBox="0 0 16 9"><path fill="gray" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
                        <span>Previous</span>
                    </div></Link>
                <Link href="number-of-guests">
                    <button className="continue">Continue</button>
                </Link>
            </div>
        </section>
    )
}
export default OcassionAddress
import { useState } from 'react';
import Link from 'next/link';

const Services = () => {
    const [selectedService, setSelectedService] = useState("");

    const services = [
        {
            id: "single", label: "Single Service",
            description: "A single experience to always remember",
            link: "/type-of-occasion?service=single",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><g fill="#182427" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40" /><path stroke-linejoin="round" d="M8 8.364L24 4l16 4.364V14H8z" /><path stroke-linecap="round" d="M10 14v24m7-24v24m7-24v24m7-24v24m7-24v24" /><path stroke-linejoin="round" d="M7 38h34v6H7z" /></g></svg>
            ),
        },

        {
            id: "multiple", label: "Multiple Service",
            description: "Ideal for holidays or other meals",
            link: "/type-of-occasion?service=multiple",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="ipTBeachUmbrella0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#555555" d="M14.34 21.412L24 24l9.66 2.588l9.659 2.589C45.657 20.45 41.848 11.526 34.546 7a20 20 0 0 0-5.37-2.318A20 20 0 0 0 22.5 4.05c-8.237.62-15.56 6.342-17.818 14.773z" /><path d="M29.176 4.681s-5.64 3.665-8.866 7.977s-4.037 9.271-4.037 9.271M29.177 4.681s3.052 5.995 3.69 11.342s-1.14 10.048-1.14 10.048" /><path d="m4.682 18.824l9.659 2.588L24 24l9.658 2.588l9.66 2.589M4 44h40M24 24l-5.5 20m4-39.949a20 20 0 0 1 6.676.63a20 20 0 0 1 5.37 2.32" /></g></mask></defs><path fill="#182427" d="M0 0h48v48H0z" mask="url(#ipTBeachUmbrella0)" /></svg>
            ),
        },
    ];

    return (
        <section className="chef-service-intro">
            <h1>What type of chef service do you need?</h1>
            <p className="tests">Define your event to see chefs, menus, and prices. This will take less than 2 minutes!</p>
            <div className="chef-service">
                {services.map((service) => (
                    <Link href={service.link} key={service.id} passHref>
                        <div className="single">
                            <label className={`custom-radio ${selectedService === service.id ? 'active' : ''}`} onClick={() => setSelectedService(service.id)}>
                                <div>
                                    {service.icon}
                                    <h2>{service.label}</h2>
                                    <p className="tests">{service.description}</p>
                                </div>
                                <input
                                    type="radio"
                                    name="service"
                                    value={service.id}
                                    checked={selectedService === service.id}
                                    readOnly
                                />
                                <span className="radio-label"></span>
                            </label>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Continue Button */}
            <Link href={selectedService ? "/type-of-occasion" : "#"}>
                <button className="continue" disabled={!selectedService}>
                    Continue
                </button>
            </Link>
            <style jsx>{`
                .chef-service {
                    display: flex;
                    gap: 20px;
                }
                
             .chef-service   .custom-radio {
                    display: flex;
                    justify-content:space-between;
                    gap:5rem;
                    // align-items: center;
                    cursor: pointer;
                }
           .chef-service  .custom-radio input {
                    display: none;
                }
              .chef-service  .radio-label {
                    width: 24px;
                    height: 24px;
                    border: 2px solid #ccc;
                    border-radius: 50%;
                    margin-right: 10px;
                    display: inline-block;
                    position: relative;
                }
             .chef-service  .custom-radio input:checked + .radio-label {
                    border-color: #0000ff;
                    background: #0000ff;
                }
             .chef-service   .custom-radio input:checked + .radio-label::after {
                    content: '';
                    width: 12px;
                    height: 12px;
                    background: #fff;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .continue {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: #0000ff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .continue:disabled {
                    background: #ccc;
                    cursor: not-allowed;
                }
            `}</style>
        </section>
    );
};

export default Services;

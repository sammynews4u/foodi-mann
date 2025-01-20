import { useState } from 'react';
import Link from 'next/link';

const Occasion = () => {
    const [selectedOccasion, setSelectedOccasion] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const occasions = [
        {
            id: "birthday", label: "Birthday", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M20.33 15.16c-7.33.75-12.78 3.67-12.78 7.17c0 4.06 7.37 7.35 16.45 7.35s16.45-3.29 16.45-7.35c0-3.5-5.46-6.42-12.78-7.17" /><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M7.55 26.41c0 1.44.38 3.55 2 4.69c1.14.81 3.46-.17 5.2.38c1.42.46 2.59 2.66 4.3 2.9c1.53.21 3.29-1.57 5-1.57s3.43 1.78 5 1.57c1.71-.24 2.89-2.44 4.31-2.89c1.74-.56 4.06.42 5.2-.39c1.6-1.14 2-3.25 2-4.69" /><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M7.55 22.33v13.44c0 4.06 7.37 7.35 16.45 7.35s16.45-3.29 16.45-7.35V22.33" /><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M20.33 14.15v8.18C20.33 23.23 22 24 24 24s3.67-.74 3.67-1.64v-8.21" /><ellipse cx="24" cy="14.15" fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" rx="3.67" ry="1.64" /><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M24 14.15c0-.9-1.05-2.1-1.05-2.86m.05 0c-.26-.77-1.75-.7-1.75-2.77s1.41-2.7 1.41-4.4a4 4 0 0 1 2.18 3.7A3.9 3.9 0 0 1 23 11.29" /></svg>
            ),
        },
        {
            id: "bachelor", label: "Bachelor/Bachelorette", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="gray" d="M21 5.77c-.15-.12-.28-.22-.41-.32l.03-.04c.78-.78.78-2.04 0-2.82s-2.04-.78-2.83 0l-.74.74a3.465 3.465 0 0 0-4.55.32L3.65 12.5a3.465 3.465 0 0 0-.32 4.55l-.74.74c-.79.79-.79 2.05 0 2.83c.78.78 2.04.78 2.82 0l.04-.03c.1.13.2.26.32.41c1.36 1.34 3.58 1.34 4.95 0l10.25-10.28A3.52 3.52 0 0 0 21 5.77M4.77 15.61a1.5 1.5 0 0 1 .29-1.71l8.84-8.84a1.5 1.5 0 0 1 1.71-.29zM19.56 9.3L9.3 19.56c-.58.59-1.53.59-2.12 0c-.58-.56-.58-1.56 0-2.12L17.44 7.18c.56-.58 1.56-.58 2.12 0c.59.59.59 1.54 0 2.12" /></svg>
            ),
        },
        {
            id: "romantic", label: "Romantic night", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="gray" d="m278.574 20.672l-28.246 43.463c-36.452-29.484-87.944-38.624-127.96-30.428c-54.457 11.15-100.166 60.347-97.895 131.46c2.394 74.955 54.71 129.71 104.89 174.823c25.09 22.554 50.84 43.086 69.928 61.535c37.685 34.062 55.942 92.366 55.942 92.366s24.534-59.502 55.942-89.572c19.692-18.7 45.676-39.61 71.324-62.93c51.298-46.644 104.404-104.034 102.094-177.618c0-122.308-121.2-121.013-167.883-78.495c19.323-10.226 40.12-12.397 58.798-8.214c34.297 7.683 62.693 35.935 64.332 88.108c1.562 49.92-39.09 98.088-88.11 142.654c-24.508 22.28-49.752 42.445-71.324 62.93c-11.456 10.884-16.74 20.514-25.174 31.795c-8.437-11.983-13.663-22.066-25.173-33.192C174.715 306.4 86.784 238.475 83.27 163.77c-.72-62.22 72.103-78.604 111.246-51.04l-45.924 25.258c67.393 11.144 124.746 37.36 185.597 75.588L278.573 20.672z" /></svg>
            ),
        },
        {
            id: "foodie", label: "Foodie adventure", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="gray" fill-rule="evenodd" d="M6.75 1A5.75 5.75 0 0 0 1 6.75v.518a2 2 0 0 0 0 3.464v1.518A2.75 2.75 0 0 0 3.75 15h8.5A2.75 2.75 0 0 0 15 12.25v-1.518a2 2 0 0 0 0-3.464V6.75A5.75 5.75 0 0 0 9.25 1zM14 8.5H2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1M13.5 7v-.25A4.25 4.25 0 0 0 9.25 2.5h-2.5A4.25 4.25 0 0 0 2.5 6.75V7zM11 11h2.5v1.25c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25V11H9l1 1z" clip-rule="evenodd" /></svg>
            ),
        },
        {
            id: "family", label: "Family reunion", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="gray" d="M18 6q-.825 0-1.412-.587T16 4t.588-1.412T18 2t1.413.588T20 4t-.587 1.413T18 6m-1 16v-8q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7t1.213.375t.737 1L22.5 16H20v6zm-4.5-10.5q-.625 0-1.062-.437T11 10t.438-1.062T12.5 8.5t1.063.438T14 10t-.437 1.063t-1.063.437M5.5 6q-.825 0-1.412-.587T3.5 4t.588-1.412T5.5 2t1.413.588T7.5 4t-.587 1.413T5.5 6m-2 16v-7H2V9q0-.825.588-1.412T4 7h3q.825 0 1.413.588T9 9v6H7.5v7zm7.5 0v-4h-1v-4q0-.625.438-1.062T11.5 12.5h2q.625 0 1.063.438T15 14v4h-1v4z" /></svg>
            ),
        },
        {
            id: "friends", label: "Friends gathering", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="gray" d="M12 16q1.2 0 2.138-.712T15.5 13.45h-7q.425 1.125 1.363 1.838T12 16m-2.5-4q.625 0 1.063-.437T11 10.5t-.437-1.062T9.5 9t-1.062.438T8 10.5t.438 1.063T9.5 12m5 0q.625 0 1.063-.437T16 10.5t-.437-1.062T14.5 9t-1.062.438T13 10.5t.438 1.063T14.5 12M7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763zM8.85 8.125L4 9.725L7.1 14.2L7 18.975l5-1.375l5 1.4l-.1-4.8L20 9.775l-4.85-1.65L12 4zM12 11.5" /></svg>
            ),
        },
        {
            id: "corporate", label: "Corporate", link: "/ocassion-address", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><defs><mask id="ipTHandbag0"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 14a6 6 0 0 1 6-6h9a6 6 0 0 1 6 6v2H14z" /><path fill="#555555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 25l19.515 4.879c.318.08.652.08.97 0L44 25v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 27v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9" /><path fill="#fff" d="M26.5 23a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" /></g></mask></defs><path fill="gray" d="M0 0h48v48H0z" mask="url(#ipTHandbag0)" /></svg>
            ),
        },
        {
            id: "others", label: "Others", link: "/ocassion-address",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M33.384 33.686a3.86 3.86 0 0 1-3.4-2.033l-2.857-5.323l-2.818 5.252a4 4 0 0 1-.46.7a3.87 3.87 0 0 1-2.956 1.404H8.358a3.86 3.86 0 0 1-3.4-5.683l6.257-11.656a3.859 3.859 0 0 1 6.8 0l2.857 5.323l2.856-5.322a3.859 3.859 0 0 1 6.8 0l2.856 5.323l2.857-5.323a3.858 3.858 0 1 1 6.8 3.65l-6.257 11.655a3.86 3.86 0 0 1-3.4 2.033" /><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" d="M20.876 33.687a3.86 3.86 0 0 1-3.404-2.035l-4.33-8.068m13.985 2.746l-1.477-2.746m-6.256.833l1.478-2.747m11.035 2.747l1.477-2.747" /></svg>
            ),
        },
    ];

    const handleOccasionChange = (id) => {
        setSelectedOccasion(id);
    };

    return (
        <section className="chef-service-intro">
            <h1>What’s the occasion?</h1>
            <p>This helps our chefs set the perfect tone and vibe for your event.</p>
            <div className="">
                <div className="chef-service occasion-content">

                    {occasions.map((occasion, index) => (
                        <div className="singl" key={index}>
                            <Link href={occasion.link} key={occasion.id} passHref>
                                <label className={`custom-radio ${selectedService === occasion.id ? 'active' : ''}`} onClick={() => setSelectedService(occasion.id)}>

                                    <div className="icon-text">
                                        {occasion.icon}
                                        <span className="occasion-name">{occasion.label}</span>
                                    </div>
                                    <input
                                        type="radio"
                                        name="occasion"
                                        value={occasion.id}
                                        checked={selectedOccasion === occasion.id}
                                        readOnly
                                    />
                                    <span className="radio-label"></span>
                                </label>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Link href='/type-of-service'>
                <div className="previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="14" viewBox="0 0 16 9"><path fill="gray" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
                    <span>Previous</span>
                </div></Link>
            <Link href={selectedService ? "/type-of-occasion" : "#"}>
                <button className="continue" disabled={!selectedService}>
                    Continue
                </button>
            </Link>
        </section>
    );
};

export default Occasion;

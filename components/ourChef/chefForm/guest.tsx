import { useState } from "react";
import Link from "next/link";

const Guest = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const occasions = [
    { id: "birthday", role: "2 people from $200", link: "/ocassion-address" },
    { id: "bachelor", role: "3 to 6 people from $180", link: "/ocassion-address" },
    { id: "romantic", role: "7 to 12 people from $140", link: "/ocassion-address" },
    { id: "foodie", role: "13+ people from $140", link: "/ocassion-address" },
  ];

  const handleOccasionChange = (id) => {
    setSelectedOccasion(id);
  };

  return (
    <section className="chef-service-intro">
      <h1>For how many guests?</h1>
      <p>The chef’s fee is fixed, so the price per person varies with group size.</p>
      <div className="guest">
        <div className="guest-content">
          {occasions.map((occasion) => (
            <label
              className={`custom-radio ${selectedOccasion === occasion.id ? "active" : ""
                }`}
              key={occasion.id}
              onClick={() => handleOccasionChange(occasion.id)}
            >
              <div>
                <span className="occasion-name">{occasion.role}</span>
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
          ))}
        </div>
        <div className="a-warning-message">Not sure? You can change it later! 😉</div>
      </div>
      <Link href='/occassion-address'>
        <div className="previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="14" viewBox="0 0 16 9"><path fill="gray" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
          <span>Previous</span>
        </div></Link>
      <Link href={selectedOccasion ? "/meal-type" : "#"}>
        <button className="continue" disabled={!selectedOccasion}>
          Continue
        </button>
      </Link>
    </section>
  );
};

export default Guest;

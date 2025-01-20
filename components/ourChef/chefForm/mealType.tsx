import { useState } from "react";
import Link from "next/link";

const MealType = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const occasions = [
    {
      id: "lunch",
      role: "Lunch",
      link: "/food-type",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="gray"
            fillRule="evenodd"
            d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M12 6.75a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5M5.25 12a6.75 6.75 0 1 1 13.5 0a6.75 6.75 0 0 1-13.5 0m-4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: "dinner",
      role: "Dinner",
      link: "/food-type",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24">
          <path
            fill="gray"
            d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" />
        </svg>
      ),
    },
  ];

  const handleOccasionChange = (id) => {
    setSelectedOccasion(id);
  };

  return (
    <section className="chef-service-intro">
      <h1>At what time?</h1>

      <div className="guest">
        <div className="guest-conten">
          {occasions.map((occasion) => (
            <label
              className={`custom-radio ${selectedOccasion === occasion.id ? "active" : ""
                }`}
              key={occasion.id}
              onClick={() => handleOccasionChange(occasion.id)}
            >
              <div className="icon-text">
                {occasion.icon}
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
      </div>
      <Link href='/number-of-guests'>
        <div className="previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="14" viewBox="0 0 16 9"><path fill="gray" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
          <span>Previous</span>
        </div></Link>
      <Link href={selectedOccasion ? "/food-types" : "#"}>
        <button className="continue" disabled={!selectedOccasion}>
          Continue
        </button>
      </Link>
    </section>
  );
};

export default MealType;

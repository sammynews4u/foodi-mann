import { useState } from "react";
import Link from "next/link";

const Price = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const occasions = [
    {
      id: "Casual",
      role: "Casual",
      description: 'Build connections around great food.',
      price: '$200 - $250 per person',
      link: "/food-type",
    },
    {
      id: "Gourmet",
      role: "Gourmet",
      description: 'Brilliant menus to impress your guests.',
      price: '$250 - $300 per person',
      link: "/food-type",
    },
    {
      id: "Chef's table",
      role: "Chef's table",
      description: 'The best of the best for your event.',
      price: '$300 - $400 per person',
      link: "/food-type",
    }
  ];

  const handleOccasionChange = (id) => {
    setSelectedOccasion(id);
  };

  return (
    <section className="chef-service-intro">
      <h1>What's your budget for this experience?</h1>
      <p>Prices vary according to the chef's expertise and menu complexity. Pick the one that fits you best!</p>
      <div className="guest">
        <div className="guest-contents">
          {occasions.map((occasion) => (
            <label
              className={`custom-radio ${selectedOccasion === occasion.id ? "active" : ""
                }`}
              key={occasion.id}
              onClick={() => handleOccasionChange(occasion.id)}
            >
              <div className="icon-text">
                {/* Add icons here if applicable */}
                <h3 className="occasion-name">{occasion.role}</h3>
                <p className="occasion-name">{occasion.description}</p>
                <p className="occasion-name">{occasion.price}</p>
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
      <div className="event">
        <Link href='/meal-type'>
          <div className="previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="14" viewBox="0 0 16 9"><path fill="gray" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
            <span>Previous</span>
          </div></Link>
        {selectedOccasion ? (
          <Link href="/restrictions">
            <button className="continue">Continue</button>
          </Link>
        ) : (
          <button className="continue disabled" disabled>
            Continue
          </button>
        )}
      </div>
    </section>
  );
};

export default Price;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Success page where you confirm data submission
const VerificationSuccess: React.FC = () => {
  const router = useRouter();
  const { country, state, city, deliveryMethod } = router.query;

  // Optional: You could use state or session storage if the data is not available via query parameters.
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    city: "",
    deliveryMethod: "",
  });

  // On initial load, set the data from the query parameters or session storage if available.
  useEffect(() => {
    if (country && state && city && deliveryMethod) {
      setFormData({
        country: country as string,
        state: state as string,
        city: city as string,
        deliveryMethod: deliveryMethod as string,
      });
    }
  }, [country, state, city, deliveryMethod]);

  return (
    <div className="verification-success">
      <h2>Success!</h2>
      <p>Your submission was successful. Here is the information you provided:</p>
      
      {/* Display the submitted information */}
      <ul>
        <li><strong>Country:</strong> {formData.country}</li>
        <li><strong>State:</strong> {formData.state}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>Delivery Method:</strong> {formData.deliveryMethod}</li>
      </ul>

      <p>Thank you for your submission! We will process your details shortly.</p>
      
      {/* Optional: You could add a button to redirect the user or go back to the home page */}
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
};

export default VerificationSuccess;

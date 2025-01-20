import React from "react";

const VerificationSuccess: React.FC = () => {
  return (
    <div className="contain-success">
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          style={{ width: "150px", height: "150px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <h1>Congratulations</h1>
        <p>Your registration has been completed successfully.</p>
      </div>
    </div>
  );
};

export default VerificationSuccess;

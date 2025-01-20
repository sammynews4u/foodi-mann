import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="date-selector">
      {/* <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Pick a date"
        className="custom-datepicker"
      />
      {selectedDate && (
        <p>
          Selected Date:{" "}
          <strong>{selectedDate.toLocaleDateString()}</strong>
        </p>
      )} */}
    </div>
  );
};

export default DateSelector;

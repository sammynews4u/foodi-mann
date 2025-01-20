import React, { useState } from "react";

const QRPop = ()=>{
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true);
      };
    const closePopup = () => {
        setShowPopup(false);
      };
    return(
        <>
    
          
           
          
            <form className="popup-form">
                <div className="name-pop">
              <label>
                Name:
                <input type="text" name="name" required className="form-control" />
              </label>
              <label>
                Email:
                <input type="email" name="email" required  className="form-control"/>
              </label></div>
              <div className="name-pop">
              <label>
                Phone:
                <input type="tel" name="phone" required  className="form-control"/>
              </label>
              <label>Country
              <input type="text" name="country" required  className="form-control"/>
  </label></div>
              <div className="name-pop">
              <label>
                Please write your requirements
                <textarea name="message" ></textarea>
              </label>
              <label>
                Upload File:
                <input type="file" name="file" />
              </label>
             </div>
              <button type="submit">Submit Now</button>
            </form>
          {/* </div> */}
        {/* </div> */}
   
 
        </>
    )
}
export default QRPop;
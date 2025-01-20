// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// const Company = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [openSideDropdown, setOpenSideDropdown] = useState(null); 
//   const dropdownRef = useRef(null);
//   const handleToggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//     setOpenSideDropdown(null); 
//   };


//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//         setOpenSideDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const handleSideDropdown = (index) => {
//     setOpenSideDropdown((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="dropdowned" ref={dropdownRef}>
//       <button className="dropdown-itemed" onClick={handleToggleDropdown}>
//         Company <i className="fa-solid fa-chevron-down com"></i>
//       </button>

//       {isDropdownOpen && (
//         <div className="dropdown-content">
//           <div
//             className="dropdown-iteming"
//             onClick={() => handleSideDropdown(1)}
//           >
//             Who we are
//             <div
//               className={`side-dropdown ${
//                 openSideDropdown === 1 ? "visible" : "hidden"
//               }`}
//             >
//               <Link href="/about" className="side-dropdown-item">About Us</Link>
//               <Link href="/careers" className="side-dropdown-item">Career</Link>
//               <Link href="contact" className="side-dropdown-item">Contact Us</Link>
//               <Link href="/blog" className="side-dropdown-item">News & Events</Link>
//             </div>
//           </div>

//           <div
//             className="dropdown-iteming"
//             onClick={() => handleSideDropdown(2)}
//           >
//             What we do
//             <div
//               className={`side-dropdown ${
//                 openSideDropdown === 2 ? "visible" : "hidden"
//               }`}
//             >
//               <Link href="/request-kiosk" className="side-dropdown-item">
//                 Request Kiosk Device
//               </Link>
//               <Link href="#" className="side-dropdown-item">
//                 Request POS Terminal
//               </Link>
//               <Link href="#" className="side-dropdown-item">
//                 Request Kitchen Order Device or KOD
//               </Link>
//               <Link href="/request-qr-code" className="side-dropdown-item">Request QR Codes</Link>
//               <Link href="#" className="side-dropdown-item">
//                 Request Food Equip. Listing
//               </Link>
//               <Link href="#" className="side-dropdown-item">
//                 Request Integrations
//               </Link>
//               <Link href="#" className="side-dropdown-item">
//                 Request Promotion
//               </Link>
//               <Link href="/offers-coupon" className="side-dropdown-item">
//                 Offers And Coupons
//               </Link>
//             </div>
//           </div>

//           <div className="dropdown-iteming"   onClick={() => handleSideDropdown(3)}>
//             Help Center
//             <div className={`side-dropdown ${
//                 openSideDropdown === 3 ? "visible" : "hidden"
//               }`} >
//               <Link href="#" className="side-dropdown-item">Order Tracking</Link>
//               <Link href="/help" className="side-dropdown-item">Get HELP</Link>
//               <Link href="/referrals" className="side-dropdown-item">Affiliate</Link>
//               <Link href="#" className="side-dropdown-item">Add Business</Link>
//               <Link href="deliver" className="side-dropdown-item">Become A DeliveryMann</Link>
//               <Link href="#" className="side-dropdown-item">Become A Partner</Link>
//             </div></div>
//             <div className="dropdown-iteming" onClick={() => handleSideDropdown(4)}>
//             Statutory
//             <div className={`side-dropdown ${
//                 openSideDropdown === 4 ? "visible" : "hidden"
//               }`} >
//               <Link href="#" className="side-dropdown-item">Private Policy</Link>
//               <Link href="#" className="side-dropdown-item">Terms & Conditions</Link>
//               <Link href="#" className="side-dropdown-item">Refund Policy</Link>
//               <Link href="#" className="side-dropdown-item">Delivery Policy</Link>
//               <Link href="#" className="side-dropdown-item">Security Policy</Link>
//               <Link href="#" className="side-dropdown-item">Cookie Policy</Link>
//             </div>
//           </div>
//         </div>
   
//       )}
//     </div>
//   );
// };

// export default Company;


import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Company = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSideDropdown, setOpenSideDropdown] = useState(null); 
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setOpenSideDropdown(null); // Close any open side dropdown when the main dropdown is toggled
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setOpenSideDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSideDropdown = (index) => {
    setOpenSideDropdown((prev) => (prev === index ? null : index)); // Toggle the side dropdown
  };

  return (
    <div className="dropdowned" ref={dropdownRef}>
      <button className="dropdown-itemed" onClick={handleToggleDropdown}>
        Company <i className="fa-solid fa-chevron-down com"></i>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {/* Who We Are */}
          <div className="dropdown-iteming" onClick={() => handleSideDropdown(1)}>
            Who we are
            <div
              className={`side-dropdown ${
                openSideDropdown === 1 ? "visible" : "hidden"
              }`}
            >
              <Link href="/about" className="side-dropdown-item">About Us</Link>
              <Link href="/careers" className="side-dropdown-item">Career</Link>
              <Link href="/contact" className="side-dropdown-item">Contact Us</Link>
              <Link href="/blog" className="side-dropdown-item">News & Events</Link>
            </div>
          </div>

          {/* What We Do */}
          <div className="dropdown-iteming" onClick={() => handleSideDropdown(2)}>
            What we do
            <div
              className={`side-dropdown ${
                openSideDropdown === 2 ? "visible" : "hidden"
              }`}
            >
              <Link href="/request-kiosk" className="side-dropdown-item">
                Request Kiosk Device
              </Link>
              <Link href="#" className="side-dropdown-item">
                Request POS Terminal
              </Link>
              <Link href="#" className="side-dropdown-item">
                Request Kitchen Order Device or KOD
              </Link>
              <Link href="/request-qr-code" className="side-dropdown-item">
                Request QR Codes
              </Link>
              <Link href="#" className="side-dropdown-item">
                Request Food Equip. Listing
              </Link>
              <Link href="#" className="side-dropdown-item">
                Request Integrations
              </Link>
              <Link href="#" className="side-dropdown-item">
                Request Promotion
              </Link>
              <Link href="/offers-coupon" className="side-dropdown-item">
                Offers And Coupons
              </Link>
            </div>
          </div>

          {/* Help Center */}
          <div className="dropdown-iteming" onClick={() => handleSideDropdown(3)}>
            Help Center
            <div
              className={`side-dropdown ${
                openSideDropdown === 3 ? "visible" : "hidden"
              }`}
            >
              <Link href="/order-tracking" className="side-dropdown-item">Order Tracking</Link>
              <Link href="/help" className="side-dropdown-item">Get HELP</Link>
              <Link href="/referrals" className="side-dropdown-item">Affiliate</Link>
              <Link href="#" className="side-dropdown-item">Add Business</Link>
              <Link href="/deliver" className="side-dropdown-item">
                Become A DeliveryMann
              </Link>
              <Link href="#" className="side-dropdown-item">Become A Partner</Link>
            </div>
          </div>

          {/* Statutory */}
          <div className="dropdown-iteming" onClick={() => handleSideDropdown(4)}>
            Statutory
            <div
              className={`side-dropdown ${
                openSideDropdown === 4 ? "visible" : "hidden"
              }`}
            >
              <Link href="#" className="side-dropdown-item">Private Policy</Link>
              <Link href="#" className="side-dropdown-item">Terms & Conditions</Link>
              <Link href="#" className="side-dropdown-item">Refund Policy</Link>
              <Link href="#" className="side-dropdown-item">Delivery Policy</Link>
              <Link href="#" className="side-dropdown-item">Security Policy</Link>
              <Link href="#" className="side-dropdown-item">Cookie Policy</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;

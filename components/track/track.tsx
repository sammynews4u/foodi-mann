
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useFormik } from 'formik';
import * as yup from "yup";
import React, { useState } from "react"
import Link from "next/link";


export const basicSchema = yup.object().shape({     
    phoneNumber: yup.number().positive().integer().required("Required"),
    order: yup.number().positive().integer().required("Required"),
    
});

const Track = ()=>{
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [countryList, setCountryList] = useState([]);
  const handleSearch = (searchTerm: string) => {
    const allCountries = PhoneInput.getCountryData(); // Gets all country data
    const filteredCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCountryList(filteredCountries);
  };

        const onSubmit = (values: any) => {
          console.log("Submitted", values);
        };
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
        phoneNumber:'',
        order:'',
        },
        validationSchema: basicSchema,
        onSubmit,
      });
    return(
      <>
        <section className="track-order">
       <div className="track-content">
        <h2>Track Your Order</h2>
        <form className="tracks">
        <div className="floating-label first-label">
    <input
      className={`form-control ${errors.order && touched.order ? "input-error" : ""}`}
      type="number"
      id="order"
      placeholder="Enter your order Id " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.order}
    />
    <label htmlFor="name">Order Id</label>
  </div>
  {/* <div className="floating-label ">
          <PhoneInput
            country={"us"} 
            value={values.phoneNumber}
            onChange={handleChange}
            inputClass={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}
          />
          {errors.phoneNumber && touched.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
            <label htmlFor="phoneNumber">Phone Number</label>
  </div> */}
  <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }} className="floating-label">
      {/* Phone Input Field */}
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={setPhone}
        searchPlaceholder="Type country name..."
        enableSearch={true}
        inputStyle={{
          width: "100%",
          height: "40px",
          fontSize: "16px",
        }}
      />

      {/* Search Box */}
      <div style={{ marginTop: "20px" }}>
        {/* <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleSearch(value);
          }}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        /> */}
        {/* <button
          onClick={() => handleSearch(search)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search Country
        </button> */}
      </div>

      {/* Search Results */}
      {countryList.length > 0 && (
        <div style={{ marginTop: "20px", maxHeight: "200px", overflowY: "auto" }}>
          {countryList.map((country) => (
            <div
              key={country.iso2}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setPhone(`+${country.dialCode}`)}
            >
              {country.name} (+{country.dialCode})
            </div>
          ))}
        </div>
      )}
    </div>
  <div>
    <Link href='/order'>
    <button className="search">Search Order</button>
    </Link>
  </div>
        </form>
       </div>
        </section>
        
        </>
    )
}
export default Track
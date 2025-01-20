import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useFormik } from "formik";
import * as yup from "yup";
import ContactBox from './contactBox'
import "react-phone-input-2/lib/style.css";





const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstname: yup.string().min(1, "Please enter your first name").required("Required"),
  lastname: yup.string().min(1, "Please enter your last name").required("Required"),
  nationality: yup.string().min(1, "Please enter your country").required("Required"),
  state: yup.string().min(1, "Please enter your state").required("Required"),
  city: yup.string().min(1, "Please enter your city").required("Required"),
  phoneNumber: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must have at least 5 characters, 1 uppercase, 1 lowercase, and 1 number.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
  date: yup.date().required("Required"),
  message: yup.string().min(1, "Please enter a message").required("Required"),
});

const onSubmit = (values: any) => {
  console.log("Submitted", values);
};

const Contact2 = () => {
  const [country, setCountry] = useState("");
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        nationality: "",
        state: "",
        city: "",
        date: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className='Contact2-intro'>
    <form onSubmit={handleSubmit}>
      <section className="contact2-section">
        <div className="contact-container">
          <div className="contact-box">
        <ContactBox/>
            </div>
        <div className="contact-form-wrapper">
        <div className="name">
        <div className="form-grouping">
              <label htmlFor="lastname">First Name</label>
              <input
                className={`form-control ${
                  errors.firstname && touched.firstname ? "input-error" : ""
                }`}
                type="text"
                id="firstname"
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
            </div>
          <div className="form-grouping">
              <label htmlFor="lastname">Last Name</label>
              <input
                className={`form-control ${
                  errors.lastname && touched.lastname ? "input-error" : ""
                }`}
                type="text"
                id="lastname"
                placeholder="Last Name "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
              {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
            </div>
          </div>
          <div className="name">
            <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
  country={"us"}
  value={values.phoneNumber}
  onChange={(value) => handleChange({ target: { name: "phoneNumber", value } })}
  inputClass={`form-control ${errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}`}
/>
{errors.phoneNumber && touched.phoneNumber && (
  <p className="error">{errors.phoneNumber}</p>
)}</div>
<div className="form-grouping">
            {/* <div className="floating-label"> */}
            <label htmlFor="state">Email</label>
              <input
                className={`form-control ${errors.email && touched.email ? "input-error" : ""}`}
                type="text"
                id="email"
                placeholder="Email "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            {/* </div> */}
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>
</div>
         <div className="name">
          <div className="form-grouping">
            {/* <div className="floating-label"> */}
            <label htmlFor="city">City</label>
              <input
                className={`form-control ${errors.city && touched.city ? "input-error" : ""}`}
                type="text"
                id="city"
                placeholder="City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
            {/* </div> */}
              {errors.city && touched.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="form-grouping">
            {/* <div className="floating-label"> */}
            <label htmlFor="state">State</label>
              <input
                className={`form-control ${errors.state && touched.state ? "input-error" : ""}`}
                type="text"
                id="state"
                placeholder="State "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              />
            {/* </div> */}
              {errors.state && touched.state && <p className="error">{errors.state}</p>}
          </div>

         </div>
          <select
            className={`form-control ${errors.nationality && touched.nationality ? "input-error" : ""}`}
            id="nationality"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nationality}
          >
            <option value="">Select A Country</option>
            <option value="Germany">Germany</option>
            <option value="Nigeria">Nigeria</option>
          </select>
          {errors.nationality && touched.nationality && (
            <p className="error">{errors.nationality}</p>
          )}

         
          

        
          <textarea
            name="message"
            placeholder="Message"
            className={`form-control ${errors.message && touched.message ? "input-error" : ""}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          
          <div className="col-sm-12 text-center">
            <button
              className="cmn--btn border-0"
              type="submit"
              id="signInBtn"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </div>
        </div>
        </div>
      </section>
    </form>
    </div>
  );
};

export default Contact2;

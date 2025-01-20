
import React, { useState } from "react";
import New from './new'
import WhyChooseUs from "components/whyChooseUs/whyChooseUs";
import WelcomeBlog from "components/welcomeBlog/welcomeBlog";
import Simple from './simple'
import BusinessBottom from './businessBottom'
import Faq from '../../containers/faq/faq'
import Pocket from './pocket'
import Image from 'next/image';
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';
import { useFormik } from 'formik';
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  name: yup.string().min(1, "Please enter your name").required("Required"),
  nationality: yup.string().min(1, "Please enter your country").required("Required"),
  state: yup.string().min(1, "Please enter your state").required("Required"),
  phoneNumber: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must have at least 5 characters, 1 uppercase, 1 lowercase, and 1 number.",
    })
    .required("Required"),
  registrationPack: yup.number().positive().integer().required("Required"),
  accountName: yup.string().min(1, "Please enter your account name").required("Required"),
  accountNumber: yup.number().positive().integer().required("Required"),
  bank: yup.string().min(1, "Please enter your bank").required("Required"),
  userName: yup.string().min(1, "Please enter your username").required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
  date: yup.date().required("Required"),
});

const BusinessHeader = () => {
    const [storeCount, setStoreCount] = useState(1);
    const increaseStoreCount = () => {
        setStoreCount((prev) => prev + 1);
    };
    const decreaseStoreCount = () => {
        if (storeCount > 1) setStoreCount((prev) => prev - 1);
    };
    const [isPromoChecked, setIsPromoChecked] = useState(false);
    const [promoCode, setPromoCode] = useState("");

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
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
        firstName: "",
        nationality: "",
        establishmentType:'',
        state: "",
        phoneNumber: "",
        identityNumber: "",
        country: "",
        email: "",
        password: "",
        birthday:'',
        establishment:'',
       lastName: "",
        establishatType: "",
        confirmPassword: "",
        city:'',
        acceptPolicy:'',
      },
      validationSchema: basicSchema,
      onSubmit,
    });
    return (
        <section className="business-intro">
            <div className="busin">
          
      <form className="business-up-form" onSubmit={handleSubmit}>
        <h1 className="test">Start selling with FoodiMann</h1>
        <p className="test">
          Register to become a partner. Sell more, increase your earnings, and manage your online business with us.
        </p>

       
  
          
        <div className="form-grouped">
          <div className="">
          <input
          className={`form-control ${errors.establishment && touched.establishment ? "input-error" : ""}`}
            type="text"
            id="establishment"
            placeholder="Establishment" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.establishment}
          />
          
          </div>
          {errors.establishment && touched.establishment && (
            <p className="error">{errors.establishment}</p>
          )}
        </div>
     
        <select
          name="establishmentType"
          className="form-control"
          value={values.establishmentType}
          onChange={handleChange}
        >
          <option value="">Types of Establishment</option>
          <option value="Restaurant">Restaurant (Café, Grills, Ice Cream, BBQ, etc.)</option>
          <option value="Retail Shop">Retail Shop (Brunch & Bakery, Gift, Beauty, etc.)</option>
          <option value="Flower">Flower</option>
          <option value="Hotel and Lounge">Hotel and Lounge</option>
          <option value="Farm Store">Farm Store</option>
          <option value="Chef">Chef</option>
          <option value="Food Equipment Store">Food Equipment Store</option>
        </select>
        {errors.establishmentType && <small className="error">{errors.establishmentType}</small>}

      
        <div className="name">
          <div className="form-grouped">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              value={values.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <small className="error">{errors.firstName}</small>}
          </div>
          <div className="form-grouped">
          <input
  type="text"
  name="lastName"
  placeholder="Last Name"
  className="form-control"
  value={values.lastName}
  onChange={handleChange}
  required
/>
            {errors.lastName && <small className="error">{errors.lastName}</small>}
          </div>
        </div>
        <select
          name="country"
          className="form-control"
          value={values.country}
          onChange={handleChange}
>
          <option value="">Select A Country</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Ikorodu">Ikorodu</option>
          <option value="Lagos Island">Lagos Island</option>
          <option value="Lagos Mainland">Lagos Mainland</option>
        </select>
        {errors.country && <small className="error">{errors.country}</small>}

        <div className="name">
          <div className="form-grouped">
            <input
              type="text"
              name="state"
              placeholder="State"
              className="form-control"
              value={values.state}
              onChange={handleChange}
              required
            />
            {errors.state && <small className="error">{errors.state}</small>}
          </div>
          <div className="form-grouped">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-control"
              value={values.city}
              onChange={handleChange}
              required
            />
            {errors.city && <small className="error">{errors.city}</small>}
          </div>
        </div>

        {/* Phone */}
       
       
        <div className="form-grouped stores">
                    <label className="checkbox-labels">Number of stores to sign up</label>
                    <div className="store-counter">
                        <button type="button" onClick={decreaseStoreCount} className="counter-btn">
                            -
                        </button>
                        <span className="store-count">{storeCount}</span>
                        <button type="button" onClick={increaseStoreCount} className="counter-btn">
                            +
                        </button>
                    </div>
                </div>
                <div className="form-grouped">
                    <textarea
                        name="establishmentLocation"
                        placeholder="Establishment Location"
                        className="form-control"
                    
                        required
                    ></textarea>
                </div>
                
                <label className="checkbox-label">
    <input
      type="checkbox"
      onChange={handleCheckboxChange}
      className="promo-checkbox"
    />
    Do you have a promotional code?
  </label>

  {isChecked && (
    <button type="button" className="apply-btn" onClick={() => alert("Button clicked!")}>
      Apply
    </button>
  )}
        <label className="checkbox-label">
                    <input
                        type="checkbox"
                        className="promo-checkbox"
                    />
                   I accept to recieve update from FoodiMann via whatsapp or similar</label>
                   <label>  platforms
                </label><br></br>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                       
                        className="promo-checkbox"
                    />
                I accept the privacy policy
                </label>
       <Link href="/business-form-registration">
        <button type="submit" className="submit-btn">
          Sign Up
        </button></Link>
        <p>Already a partner? <Link href="/login">Log in</Link></p>
        <p>Want to be a courier? <Link href="/deliver"> Register here</Link></p>
      </form>
            <div>
                <Image src="https://i.pinimg.com/736x/0e/bb/73/0ebb73095a536065905304506507cbbd.jpg" alt=""width={600}height={900}/>
                </div></div>
            <New />
            <WhyChooseUs />
            <WelcomeBlog />
            <Simple />
            <BusinessBottom />
            <Faq />
            <Pocket />
        </section>
    );
};

export default BusinessHeader;

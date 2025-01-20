import { useFormik } from 'formik';
import * as yup from "yup";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { Icon } from "react-icons-kit";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";

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
const BusinessFormContent= ()=>{
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);const [type, setType] = useState<string>("password");
    const [icon, setIcon] = useState<any>(eyeOff);
  
    const handleToggle = () => {
      if (type === "password") {
        setIcon(eye);
        setType("text");
      } else {
        setIcon(eyeOff);
        setType("password");
      }
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
      firstname: "",
      lastname: "",
      email:'',
    password:'',
    phoneNumber:'',
    confirmPassword:'',
    
    },
    validationSchema: basicSchema,
    onSubmit,
  });


    return(
        <div className="deliveries-account">
        <div className="deliveries-owner-contents">
            <h2>Owner Information</h2>
            <div className="bottom"></div>
        <div className="deliveries-owner">
            <div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.firstname && touched.firstname ? "input-error" : ""}`}
      type="text"
      id="firstname"
      placeholder="First Name " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.firstname}
    />
    <label htmlFor="name">First Name</label>
    <svg
      className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="AccountCircleIcon"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
    </svg>
  </div>
  {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
</div>
<div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.lastname && touched.lastname ? "input-error" : ""}`}
      type="text"
      id="lastname"
      placeholder="Last Name " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.lastname}
    />
    <label htmlFor="name">Last Name</label>
    <svg
      className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="AccountCircleIcon"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
    </svg>
  </div>
  {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
</div>
<div className='phones'>
          <label htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
            country={"us"} 
            value={values.phoneNumber}
            onChange={handleChange}
            inputClass={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <p className="error">{errors.phoneNumber}</p>
          )}
        </div>
        </div>
        </div>
        <div className="deliveries-owner-content">
            <h2>Account Info</h2>
            <div className="bottom"></div>
        <div className="deliveries-owner">
        <div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.email && touched.email ? "input-error" : ""}`}
      type="text"
      id="email"
      placeholder="Email" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    <label htmlFor="name">Last Name</label>
    <svg className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg>
  </div>
  {errors.email && touched.email && <p className="error">{errors.email}</p>}
</div>
        <div className="form-group">
  <div className="password input-with-icon floating-label">
 
    <input
      className={`form-control ${errors.password && touched.password ? "input-error" : ""}`}
      type={passwordVisible ? "text" : "password"}
      id="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      placeholder="Password" 
    />
    <label htmlFor="password">Password</label>
    <span className="toggle-icon" onClick={togglePasswordVisibility}>
      <Icon icon={passwordVisible ? eyeOff : eye} size={18} />
    </span>
    <svg
      className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="HttpsIcon"
    >
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
    </svg>
  </div>
  {errors.password && touched.password && (
    <p className="error">{errors.password}</p>
  )}
</div>
<div className='form-group'>
          <div className="password input-with-icon floating-label">
          <input
            className={`form-control ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}`}
            type={confirmPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            placeholder={'Confirm Password'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
           <span onClick={toggleConfirmPasswordVisibility}>
            <Icon icon={confirmPasswordVisible ? eyeOff : eye} size={18} />
          </span>
          <label htmlFor="password"> Confirm Password</label>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HttpsIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg>
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        </div>
        <Link href="/business-plan">
        <button className="next1">Next</button></Link>
        </div>
        </div>
    )
}
export default BusinessFormContent
import { useFormik } from 'formik';
import * as yup from "yup";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { Icon } from "react-icons-kit";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Image from 'next/image';
import gall from './gall.png'
import BusinessFormContent from './businessFormContent'



const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  name: yup.string().min(1, "Please enter your name").required("Required"),
  nationality: yup.string().min(1, "Please enter your country").required("Required"),
  state: yup.string().min(1, "Please enter your state").required("Required"),
  phoneNumber: yup.number().positive().integer().required("Required"),
  maxtime: yup.number().positive().integer().required("Required"),
  mintime: yup.number().positive().integer().required("Required"),
  // vat: yup.string().vat("Please enter vat").required("Required"),
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
  businessClass:yup.string().min(1, "Please enter your name").required("Required"),
});


  


const BusinessForm =()=>{
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
      nationality: "",
      state: "",
      phoneNumber: "",
      registrationPack: "",
      code: "",
      email: "",
      password: "",
      storeAddress:'',
      storeName:'',
      birthday:'',
     lastname: "",
     VAT:'',
     businessClass:'',
     businessZone:'',
     time:'',
      accountNumber: "",
      confirmPassword: "",
      establishentType:'',
      mintime:'',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

    return(
        <div className="business-form">
        <section className="business-form2-content">
        <section className="business-form2">
        <h2>Business Onboarding Form</h2>
        <div className="bottom"></div>
        <div className="business-content-form">
            <div>
        <div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.storeName && touched.storeName ? "input-error" : ""}`}
      type="text"
      id="storeName"
      placeholder="Store Name " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.storeName}
    />
    <label htmlFor="name">Store Name</label>
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-779758" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WorkIcon"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>
  </div>
  {errors.storeName && touched.storeName && <p className="error">{errors.storeName}</p>}
</div>
<div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.storeAddress && touched.storeAddress ? "input-error" : ""}`}
      type="text"
      id="storeAddress"
      placeholder="Store Address " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.storeAddress}
    />
    <label htmlFor="name">Store Address</label>
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RoomIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
  </div>
  {errors.storeAddress && touched.storeAddress && <p className="error">{errors.storeAddress}</p>}
</div>
<div className="form-group floating-label">
  <label htmlFor="select-zone" className="timed">Business Class/Type</label>
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
</div>
</div>
<div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126451.93815313259!2d3.324160671837376!3d6.596380755668529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d02f6f46a07%3A0xa0a34e59d3c23b9a!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1698434398456!5m2!1sen!2sng"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            
        </section>
         
       
        <section className="business-form2-intro">
        <section className='business-forms2'>
            <div>
         
<div className="form-group floating-label">
  <label htmlFor="select-zone" className="timed">Business Zone</label>
  <select className="form-control" id="select-zone">
    <option value="" disabled selected hidden>
    Business Zone
    </option>
    <option value="NZ">Zone 1</option>
    <option value="OM">Zone 2</option>
    <option value="PK">Zone 3</option>
  </select>
</div>
<div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.VAT && touched.VAT ? "input-error" : ""}`}
      type="text"
      id="VAT"
      placeholder="VAT/TAX " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.VAT}
    />
    <label htmlFor="name">VAT</label>
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PaidIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22z"></path></svg>
  </div>
  {errors.VAT && touched.VAT && <p className="error">{errors.VAT}</p>}
</div>
<div className="delivery-time-intro">
              <div className="delivery-time">
            <div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.mintime && touched.mintime ? "input-error" : ""}`}
      type="number"
      id="mintime"
      placeholder="Minimum Delivery Time " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.mintime}
    />
    <label htmlFor="mintime" className="timed">Minimum Delivery Time</label>
    <svg className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingIcon"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
  </div>
  {errors.mintime && touched.mintime && <p className="error">{errors.mintime}</p>}
</div>
<div className="form-group">
  <div className="floating-label input-with-icon">
    <input
      className={`form-control ${errors.maxtime && touched.maxtime ? "input-error" : ""}`}
      type="number"
      id="maxtime"
      placeholder="Maximum Delivery Time " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.maxtime}
    />
    <label htmlFor="name" className="timed">Maximum Delivery Time</label>
    <svg className="icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1r1r71b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingIcon"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
  </div>
  {errors.maxtime && touched.maxtime && <p className="error">{errors.maxtime}</p>}
</div>
<div className="form-group floating-label">
  <label htmlFor="select-zone" className="timed">Duration Type</label>
  <select className="form-control" id="select-zone">
    <option value="" disabled selected hidden>
    Duration Type
    </option>
    <option value="NZ">Minute</option>
    <option value="OM">Hour</option>
    <option value="PK">Day</option>
    <option value="PK">Week</option>
  </select>
</div>
</div>
</div>

                </div>
                <div className="profiles">
<div className='profile-container'>
        <h6>Cover Photo</h6>
        <p>JPG, JPEG, PNG Less Than 1MB (Ratio 2:1)</p>
      <div className="form-groups">
        <Image src={gall} alt="" width={40} height={40}/>
        <input type="file" id="upload" />
      </div>
    </div>
    <div className='profile-container'>
        <h6>Logo</h6>
        <p>JPG, JPEG, PNG Less Than 1MB (Ratio 2:1)</p>
      <div className="form-groups">
        <Image src={gall} alt="" width={40} height={40}/>
        <input type="file" id="upload" />
      </div>
    </div>
  </div>
            </section> 
            
            </section></section>
            <BusinessFormContent/>
            </div>
    )
}
export default BusinessForm
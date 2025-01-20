
import React, { useState } from 'react';
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
const JobApplicationForm = () => {


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
  name: "",
  surname: "",
  email:'',
salary:'',
date:'',

},
validationSchema: basicSchema,
onSubmit,
});

  return (
    <section className="job-forms">
    <form onSubmit={handleSubmit} className="Forms" style={{ maxWidth: '1200px', padding: '20px', borderRadius: '8px'}}>
      <h2>Commercial Operations Senior Specialist for FoodiMann</h2>
      <p className="tests">For the selection procedure for this job position, the company delivery Hero will process the personal data provided by you in accordance with the great regulation 
        or personal data
      </p>
      <div className="form-group">
  <div className="floating-label">
    <input
      className={`form-control ${errors.name && touched.name ? "input-error" : ""}`}
      type="text"
      id="name"
      placeholder="Name " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    <label htmlFor="name">Name</label>
  </div>
  {errors.name && touched.name && <p className="error">{errors.name}</p>}
</div>
<div className="form-group">
  <div className="floating-label">
    <input
      className={`form-control ${errors.surname && touched.surname ? "input-error" : ""}`}
      type="text"
      id="surname"
      placeholder="Surname " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    <label htmlFor="name">Surname</label>
  </div>
  {errors.surname && touched.surname && <p className="error">{errors.surname}</p>}
</div>
<div className="form-group">
  <div className="floating-label">
    <input
      className={`form-control ${errors.email && touched.email ? "input-error" : ""}`}
      type="text"
      id="email"
      placeholder="Email " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    <label htmlFor="email">Email</label>
  </div>
  {errors.email && touched.email && <p className="error">{errors.email}</p>}
</div>
<div className="form-group">
  <div className="floating-label">
    <input
      className={`form-control ${errors.salary && touched.salary ? "input-error" : ""}`}
      type="text"
      id="salary"
      placeholder="salary " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.salary}
    />
    <label htmlFor="salary">Required salary</label>
  </div>
  {errors.salary && touched.salary && <p className="error">{errors.salary}</p>}
</div>
<div className="form-group">
  <div className="floating-label">
    <input
      className={`form-control ${errors.date && touched.date ? "input-error" : ""}`}
      type="date"
      id="date"
      placeholder=" date " 
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    <label htmlFor="name">Possible start date</label>
  </div>
  {errors.name && touched.name && <p className="error">{errors.name}</p>}
</div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="resume">Attach Resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
          style={{  padding: '8px', marginTop: '5px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0000ff', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Send
      </button>
    </form>
  </section>
  );
};

export default JobApplicationForm;

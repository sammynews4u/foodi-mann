import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// This is your existing component with minimal changes to align with the task goal.
const DeliverForm2: React.FC = () => {
  const router = useRouter();
  const { country, state, city, deliveryMethod } = router.query;

  // Store any necessary state for your form
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    nationality: "",
    state: "",
    city: "",
    deliveryType: "",
  });

  // Use Formik to handle form state and validation
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      firstname: yup.string().required("First name is required"),
      lastname: yup.string().required("Last name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted:", values);
      // Once the form is successfully submitted, redirect the user to the verification success page
      router.push("/verificationSucess");
    },
  });

  // Pre-fill the form with query params once they are available
  useEffect(() => {
    if (country && state && city && deliveryMethod) {
      setInitialValues({
        firstname: "",
        lastname: "",
        email: "",
        nationality: country as string,
        state: state as string,
        city: city as string,
        deliveryType: deliveryMethod as string,
      });

      formik.setValues({
        firstname: "",
        lastname: "",
        email: "",
        nationality: country as string,
        state: state as string,
        city: city as string,
        deliveryType: deliveryMethod as string,
      });
    }
  }, [country, state, city, deliveryMethod]);

  return (
    <form onSubmit={formik.handleSubmit} className="deliver-form">
      <h2>Complete Your Profile</h2>

      {/* First Name */}
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      {formik.errors.firstname && <p className="error-message">{formik.errors.firstname}</p>}

      {/* Last Name */}
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      {formik.errors.lastname && <p className="error-message">{formik.errors.lastname}</p>}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <p className="error-message">{formik.errors.email}</p>}

      {/* Country (Readonly) */}
      <input
        type="text"
        name="nationality"
        placeholder="Country"
        value={formik.values.nationality}
        readOnly
      />

      {/* State (Readonly) */}
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formik.values.state}
        readOnly
      />

      {/* City (Readonly) */}
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formik.values.city}
        readOnly
      />

      {/* Delivery Type (Readonly) */}
      <input
        type="text"
        name="deliveryType"
        placeholder="Delivery Method"
        value={formik.values.deliveryType}
        readOnly
      />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeliverForm2;

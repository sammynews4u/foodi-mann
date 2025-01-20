import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

const DeliverForm2: React.FC = () => {
  const router = useRouter();
  const { country, state, city } = router.query;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      deliveryType: "",
      vehicleType: "",
      identityType: "",
      identityNumber: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("First name is required"),
      lastname: yup.string().required("Last name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: yup.string().required("Phone number is required"),
      deliveryType: yup.string().required("Delivery type is required"),
      vehicleType: yup.string().required("Vehicle type is required"),
      identityType: yup.string().required("Identity type is required"),
      identityNumber: yup.string().required("Identity number is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const data = { ...values, country, state, city };
      try {
        const response = await fetch("/api/deliveryman/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Registration failed.");
        router.push("/verificationSuccess");
      } catch (error: any) {
        alert("Error: " + error.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      {formik.errors.firstname && formik.touched.firstname && (
        <p className="error">{formik.errors.firstname}</p>
      )}
      <br />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      {formik.errors.lastname && formik.touched.lastname && (
        <p className="error">{formik.errors.lastname}</p>
      )}
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p className="error">{formik.errors.email}</p>
      )}
      <br />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      {formik.errors.phoneNumber && formik.touched.phoneNumber && (
        <p className="error">{formik.errors.phoneNumber}</p>
      )}
      <br />
      <input
        type="text"
        name="deliveryType"
        placeholder="Delivery Type"
        onChange={formik.handleChange}
        value={formik.values.deliveryType}
      />
      {formik.errors.deliveryType && formik.touched.deliveryType && (
        <p className="error">{formik.errors.deliveryType}</p>
      )}
      <br />
      <input
        type="text"
        name="vehicleType"
        placeholder="Vehicle Type"
        onChange={formik.handleChange}
        value={formik.values.vehicleType}
      />
      {formik.errors.vehicleType && formik.touched.vehicleType && (
        <p className="error">{formik.errors.vehicleType}</p>
      )}
      <br />
      <input
        type="text"
        name="identityType"
        placeholder="Identity Type"
        onChange={formik.handleChange}
        value={formik.values.identityType}
      />
      {formik.errors.identityType && formik.touched.identityType && (
        <p className="error">{formik.errors.identityType}</p>
      )}
      <br />
      <input
        type="text"
        name="identityNumber"
        placeholder="Identity Number"
        onChange={formik.handleChange}
        value={formik.values.identityNumber}
      />
      {formik.errors.identityNumber && formik.touched.identityNumber && (
        <p className="error">{formik.errors.identityNumber}</p>
      )}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <p className="error">{formik.errors.password}</p>
      )}
      <br />
      <input type="text" value={city} readOnly />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeliverForm2;

// install  Yup. Define a Yup validation schema for a more complex form. Include validation rules for fields like email, password, and phone number. Ensure that error messages are displayed for each validation rule.
// Implement real-time validation feedback using Material-UI's TextField component. Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(5).required("Password is required"),
  phone: Yup.number()
    .min(1000000000)
    .max(9999999999)
    .required("Phone Number is required"),
});

const initialValues = {
  email: "",
  password: "",
  phone: "",
};

export default function FormValidation() {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: validationSchema,
  });

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      {errors.email && <small>{errors.email}</small>}
      <br />
      <TextField
        type="password"
        id="password"
        label="Password"
        name="password"
        variant="outlined"
        value={values.password}
        onChange={handleChange}
      />
      <br />
      {errors.password && <small>{errors.password}</small>}
      <br />
      <TextField
        type="phone"
        id="phone"
        label="Phone Number"
        name="phone"
        variant="outlined"
        value={values.phone}
        onChange={handleChange}
      />
      <br />
      {errors.phone && <small>{errors.phone}</small>}
    </Box>
  );
}

// Create a new form and Implement form submission handling. Ensure that the form cannot be submitted if there are validation errors. Display a summary of errors if the user attempts to submit an invalid form.

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().min(5).required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function FormSubmission() {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
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

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

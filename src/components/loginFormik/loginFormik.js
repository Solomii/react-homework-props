import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
function LoginFormik() {
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail is not valid!")
      .required("E-mail is required!"),
    password: yup
      .string()
      .typeError("Error!")
      .min(6, "Password has to be longer than 6 characters!")
      .required("Password is required!"),
    toggle: yup
      .boolean()
      .oneOf([true], "Error!")
      .required("Password is required!"),
  });
  return (
    <div className="login-formik">
      <div className="login-formik-wrapper">
        <h4>SING IN TO YOUR ACCOUNT</h4>
        <Formik
          initialValues={{
            email: "",
            password: "",
            toggle: false,
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className="form">
              <p>
                <input
                  className="input"
                  type={`email`}
                  name={`email`}
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </p>
              {touched.email && errors.email && (
                <p className={"error"}>{errors.email}</p>
              )}
              <p>
                <input
                  className="input"
                  type={`password`}
                  name={`password`}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </p>
              {touched.password && errors.password && (
                <p className={"error"}>{errors.password}</p>
              )}
              <div>
                <input
                  type="checkbox"
                  checked={values.toggle}
                  onChange={handleChange("toggle")}
                />{" "}
                Keep me signed in
                {touched.toggle && errors.toggle && (
                  <p className={"error"}>{errors.toggle}</p>
                )}
              </div>
              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={`submit`}
              >
                SIGN IN
              </button>
              <p>Forgot your password?</p>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default LoginFormik;

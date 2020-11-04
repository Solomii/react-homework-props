import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
function LoginFormik() {
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введіть правильний email")
      .required("Обовя'язкове поле"),
    password: yup
      .string()
      .typeError("Щось не так!")
      .required("Обовя'язкове поле"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
          <div className={`form`}>
            <p>
              <input
                className={"input"}
                type={`email`}
                name={`email`}
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
                className={"input"}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <p className={"error"}>{errors.password}</p>
            )}
            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >
              Отправить
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}
export default LoginFormik;

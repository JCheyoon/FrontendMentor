import Button from "../Components/Button.component";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Info.stlye.scss";
import { useRef } from "react";

const Info = () => {
  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const userSchema = Yup.object({
    username: Yup.string().min(3).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Phone number is not valid")
      .required("Phone number is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    phoneNumber: "",
  };

  const formRef = useRef(null) as any;

  return (
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        innerRef={formRef}
        validationSchema={userSchema}
        validateOnChange={true}
        validateOnMount={true}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          isValid,
          touched,
        }) => {
          console.log("Form State:", { values, errors, isValid, touched });
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-box">
                <p>Name</p>
                <input
                  name="username"
                  value={values.username}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Peter Kin"
                  className={touched.username && errors.username ? "error" : ""}
                />
                {touched.username && errors.username ? (
                  <p className="error-message">{errors.username}</p>
                ) : null}
              </div>
              <div className="form-box">
                <p>Email Address</p>
                <input
                  name="email"
                  value={values.email}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. peterkin@lorem.com"
                  className={touched.email && errors.email ? "error" : ""}
                />
                {touched.email && errors.email ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>
              <div className="form-box">
                <p>Phone Number</p>
                <input
                  name="phoneNumber"
                  value={values.phoneNumber}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. +1 234 567 890"
                  className={
                    touched.phoneNumber && errors.phoneNumber ? "error" : ""
                  }
                />
                {touched.phoneNumber && errors.phoneNumber ? (
                  <p className="error-message">{errors.phoneNumber}</p>
                ) : null}
              </div>
              <Link to="/plan">
                <Button
                  title="Next Step"
                  type="submit"
                  ghost={false}
                  onSubmit={() => handleSubmit()}
                  disabled={!isValid}
                />
              </Link>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Info;

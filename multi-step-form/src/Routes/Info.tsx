import Button from "../Components/Button.component";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Info.stlye.scss";
import { useRef } from "react";

const Info = () => {
  const userSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.number()
      .required("Phone number is required")
      .positive()
      .integer(),
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
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-box">
              <p>Name</p>
              <input
                name="username"
                value={values.username}
                type="text"
                onChange={handleChange}
                placeholder="e.g. Peter Kin"
                className={errors.username ? "error" : ""}
              />
              {errors.username ? (
                <p className="error-message">This filed is required</p>
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
                className={errors.email ? "error" : ""}
              />
              {errors.email ? (
                <p className="error-message">This filed is required</p>
              ) : null}
            </div>
            <div className="form-box">
              <p>Phone Number</p>
              <input
                name="phoneNumber"
                value={values.phoneNumber}
                type="text"
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                className={errors.phoneNumber ? "error" : ""}
              />
              {errors.phoneNumber ? (
                <p className="error-message">This filed is required</p>
              ) : null}
            </div>
            <Link to="/plan">
              <Button
                title="Next Step"
                type="submit"
                ghost={false}
                onSubmit={() => handleSubmit()}
                disabled={isSubmitting}
              />
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Info;

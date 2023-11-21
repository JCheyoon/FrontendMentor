import Button from "../Components/Button.component";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const Info = () => {
  return (
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <Formik
        initialValues={{ username: "", email: "", phoneNumber: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <p>Name</p>
              <input
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Email Address</p>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <Link to="/plan">
              <Button title="Next Step" ghost={false} />
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Info;

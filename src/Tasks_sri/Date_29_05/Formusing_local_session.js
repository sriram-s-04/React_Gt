import { Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Formusing_local_session = () => {
  const [details, setDetails] = useState({
    emailId: "",
    password: "",
  });

  const schema = yup.object().shape({
    emailId: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    localStorage.setItem("details", JSON.stringify(values));
    sessionStorage.setItem("userDetails", JSON.stringify(values));
    navigate("/Login");
  };
  return (
    <>
      <Formik
        initialValues={details}
        validationSchema={schema}
        enableReinitialize
        onSubmit={(values) => onFormSubmit(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <br />
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  name="emailId"
                />
                <br />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <br />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                />
              </Form.Group>
              <br />
              <p>
                If you have an account, please <a href="/Login">log in.</a>
              </p>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formusing_local_session;

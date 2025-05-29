import { Formik } from "formik";
import React, { use, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from "yup"
import { useLocation, useNavigate } from 'react-router-dom';

const Formusing_local_session = () => {
    let detaillocation = useLocation();
  const [details,setDetails] = useState({
    email:"",
    pass:""
})
    let data = localStorage.getItem("details");
    let parsed_data = JSON.parse(data);
  const schema = yup.object().shape({
    email:yup.string().email().required(),
    pass:yup.string().min(8).required()
  })
  const navigate = useNavigate();

  const onFormSubmit = (values) => {

    (values.email == parsed_data.emailId && values.pass == parsed_data.password) ? navigate('/Home',{state:values}): alert("Invalid credentials");
  }
  return (
    <>
    <Formik
    initialValues={details}
    validationSchema={schema}
    enableReinitialize
    onSubmit={(values) => onFormSubmit(values)}>

      {({handleChange, handleSubmit, values}) => (
       <div style={{display:'flex',justifyContent:'center'}} >
        <Form onSubmit={handleSubmit} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label><br/>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email"/><br/>
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label><br/>
            <Form.Control type="password" placeholder="Password" onChange={handleChange} name="pass" />
          </Form.Group>
          <br/>
          <p>If you don't have an account, please <a href="/Formusing_local_session">sign up.</a></p>
          <Form.Group>
            <Button variant="primary" type="submit">
          Login
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

import React from 'react'
import { Formik } from "formik";
import  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from "yup"
import {useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login_traning = () => {

      const [details,setDetails] = useState({
        email:"",
        pass:""
    })
      const schema = yup.object().shape({
        email:yup.string().required(),
        pass:yup.string().min(6).required()
      })    
      const navigate = useNavigate();
    
      const onFormSubmit = (values) => {
        alert("hi")
        axios.post("http://92.205.109.210:8070/api/login", {
            name: values.email,
            pwd: values.pass
        })
        .then(response => {
            console.log(response.data);
            
            if (response.data.Message) {
                navigate("/Home");
            } else {
                alert("Invalid credentials");
            }
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
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
            <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="email"/><br/>
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label><br/>
            <Form.Control type="password" placeholder="Password" onChange={handleChange} name="pass" />
          </Form.Group>
          <br/>
          
          <Form.Group>
            <Button variant="primary" type="submit">
          Login
        </Button>
      </Form.Group>

    </Form>
    <p>If you don't have an account, please <a href="/Signup">sign up.</a></p>
    </div>
    )}
    </Formik>
  </>
  )
}

export default Login_traning
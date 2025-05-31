import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Tasks_sri/Date_30_05/Todo.css"
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';    
import { ErrorMessage, Formik } from 'formik';
import * as yup from "yup";
import axios from 'axios';

function Signup() {
    let [formData, setFormData] = React.useState({
        email: '',
        password: '',
        name: '',   
        gender: ''
    });
    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        name: yup.string().required('Name is required'),
        gender: yup.string().required('Gender is required'),
    });
    const nav= useNavigate();
    const handleFormSubmit = (values) => {

        console.log(values);
        axios.post("http://92.205.109.210:8070/api/signup",{
            name:values.name,
            pwd:values.password,
            gender:values.gender,
            mail:values.email
        })
        .then(res => console.log(res)
        )
        nav("/Login_training");



    }

  return (
    <div className='todoList_main_container'>
        <Formik
          initialValues={formData}
          validationSchema={schema} // Add your validation schema here if needed
            enableReinitialize
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label><br/>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={values.email} className='input_field' />
              <ErrorMessage name="email" component="div" className="error-message" />
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label><br/>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={values.password} className='input_field' />
              </Form.Group>
              <br/>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="name" value={values.name} className='input_field' />
              </Form.Group>
              <br/>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label><br/>
                <Form.Select name='gender'  onChange={handleChange} value={values.gender} className='input_field'>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Form.Select>
              </Form.Group>
            <br/>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
  )
}

export default Signup

//npm i axios
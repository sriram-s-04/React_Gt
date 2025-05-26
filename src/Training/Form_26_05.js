import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


const Form_26_05 = () => {

    const [details, setDetails] = useState({
        mail:"",
        password:"",
        confirmPassword:"",
        gender:"",

    })

    function handleChange(e){
        console.log({...details,[e.target.name]:e.target.value});
        
        
        setDetails({...details,[e.target.name]:e.target.value})
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(details);
        
    }

  return (
 <>
 <Form onSubmit={handleSubmit} noValidate>
      <Form.Group className="mb-3">
        <div>
            <Form.Label>Email</Form.Label>  
            <Form.Control type="email" placeholder="Enter email" name='mail' onChange={handleChange} />
        </div>
        <div>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name='password'  onChange={handleChange}/>
        </div>
        <div>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" name='confirmPassword' onChange={handleChange} />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select name='gender'  onChange={handleChange} >
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox"  label=" I Have read the terms and conditions" />
      </Form.Group>
      <Button type='submit'>submit</Button>
      </Form>
    </>
  )
}

export default Form_26_05
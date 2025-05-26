import React from 'react'
import Form from 'react-bootstrap/Form';

const Form_26_05 = () => {
  return (
 <>
      <Form.Group className="mb-3">
        <div>
            <Form.Label>Email</Form.Label>  
            <Form.Control type="email" placeholder="Enter email" />
        </div>
        <div>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
        </div>
        <div>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label=" I Have read the terms and conditions" />
      </Form.Group>
    </>
  )
}

export default Form_26_05
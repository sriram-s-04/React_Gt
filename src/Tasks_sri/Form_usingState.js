import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Form_usingState = () => {
    const [formData, setFormData] = React.useState({
        fristname: '',
        lastName: '',
        email: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    let data = localStorage.getItem("formData")
    console.log(data);
    let parsed_data = JSON.parse(data)


    
    const handleSubmits = (e) => {
        e.preventDefault();
        console.log(formData);
        localStorage.setItem('formData', JSON.stringify(formData));
        sessionStorage.setItem("userData", JSON.stringify(formData))
        localStorage.setItem("isActive",true)
        localStorage.setItem("user_id",1234)

    }

  return (
    <>
    <Form onSubmit={handleSubmits   } noValidate>
      <Form.Group className="mb-3">
        <div>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name='fristname' onChange={handleChange} />
        </div>
        <div>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name='lastName'  onChange={handleChange}/>
        </div>
        <div>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
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
        < Form.Group className="mb-3">
        <Form.Label>Hobbies</Form.Label>
        <Form.Check type="radio" label="Reading" name="hobby" value="Reading" onChange={handleChange} />
        <Form.Check type="radio" label="Traveling" name="hobby" value="Traveling" onChange={handleChange} />
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox"  label=" I Have read the terms and conditions" />
      </Form.Group>
      <Button type='submit'>submit</Button>
      </Form>
      <Button onClick={() => localStorage.removeItem("isActive")}>Logout</Button>
      <Button onClick={() => localStorage.clear()}>Logout</Button>
      {parsed_data.fristname}
    </>
  )
}

export default Form_usingState
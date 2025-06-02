import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./Form.css"; // Assuming you have a CSS file for styling

export const Nav_details = () => {
    let data = useLocation();
  return (
    <div>
        <h1>Form Details</h1>
        <hr />
        <div className='form_container'>
           {data.state.image && (
        <div className="mt-4 ">
          <img src={data.state.image} alt="Preview" className="w-48 rounded-lg shadow img_class" />
        </div>
      )}
          <p>Name:{data.state.Name} <br /></p>
          <p>Email:{data.state.email} <br /></p>
          <p>Phone Number:{data.state.phonenumber} <br /></p>
          <p>College Name:{data.state.collegeName} <br /></p>
          <p>College State:{data.state.collegeState} <br /></p>
          <p>Graduation Year:{data.state.graduationYear} <br /></p>
          <p>React Native Experience:{data.state.reactNativeExperience} <br /></p>
          <p>JavaScript Experience:{data.state.javascriptExperience} <br /></p>
        </div>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import "./Form.css"; // Assuming you have a CSS file for styling

export const Nav_details = () => {
    let {name,email,phonenumber,collegeName,collegeState,graduationYear,reactNativeExperience,javascriptExperience} = useParams()
  return (
    <div>
        <h1>Form Details</h1>
        <hr />
        <div className='form_container'>
          <p> {name} <br /></p>
          <p>{email} <br /></p>
          <p>{phonenumber} <br /></p>
          <p>{collegeName} <br /></p>
          <p>{collegeState} <br /></p>
          <p>{graduationYear} <br /></p>
          <p>{reactNativeExperience} <br /></p>
          <p>{javascriptExperience} <br /></p>
        </div>
    </div>
  )
}

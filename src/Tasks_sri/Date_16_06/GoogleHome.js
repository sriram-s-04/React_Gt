import React, { use } from 'react'
import { useLocation } from 'react-router-dom';

const GoogleHome = () => {
    const {  user } = useLocation().state || {}; // Get user data from state if available
  console.log(user);  
    return (
    <div>
      <h1>Welcome to Google Home</h1>
      {user && (
        <div>
          <h2>User Information</h2>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default GoogleHome
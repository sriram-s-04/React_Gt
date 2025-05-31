import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Home = () => {
    let successfulLogin = useLocation() || {} 
  return (
    <div>
        {/* <p>Your email: {successfulLogin.state.email } </p>
        <p>Your password: {successfulLogin.state.pass}</p> */}

    </div>
  )
}

export default Home
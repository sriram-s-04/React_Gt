import React, { useContext } from 'react'
import { dataContext } from './UseContext';

const Authentication_task2 = () => {

  let {details,setDetails,setIsAuthenticated} = useContext(dataContext);  
  return (
    <div>
      <h2>Welcome {details.emailId}</h2>
      <p>You have successfully logged in!</p>
      {/* if user is authenticated then show logout button */}
      {/* if user press logout button it should display the form of usecontext page */}

      <button onClick={() => {
  setDetails({ emailId: "", password: "" });
  setIsAuthenticated(false); // 🔁 This shows the login form again
}}>LOGOUT</button>
    </div>
  )
}

export default Authentication_task2
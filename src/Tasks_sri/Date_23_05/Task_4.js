import React from 'react'

const Task_4 = ({ age }) => {
  return (
    <div>
        
       <p>{age >= 18 ? "Eligible to Vote" : "Not Eligible"}</p>
    </div>
  )
}

export default Task_4
import React from 'react'

const Task_7 = ({details}) => {
    
    
  return (
    <div>
        {/* 7. Card with Children Prop
    - Create a `Card` component that accepts `children`.
    - Use it to wrap different types of content like images, user details, buttons */}
        <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
            <h2>Card Component</h2>
            <div>{details.chidren}</div>
        </div>
        <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
            <h2>{details.name.toUpperCase()}</h2>
            <img src={details.image.img} alt="img" />
        </div>
    </div>
  )
}

export default Task_7
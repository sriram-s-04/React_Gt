import React from 'react'

function Basics() {
    let x=90
    let name ="sriram"
    let isActive = false
    let arr = [67,78,34,12]

    let obj = {
        name:"sriram",
        age:20
    }

    let objs =[{name:"sriram", age:20},{name:"yugan",age:7},{name:"Aadhi",age:5}]
  return (
    <div>Basics
        <h1>{x}</h1>
        {isActive &&
        <h2>{name}</h2>
}

<div>{arr.map(i => (
    <li>{i}</li>
))}</div>


{obj.name}

{objs.map(i => (
    <div>
    <li>{i.name}--- {i.age}</li>
    {/* <li>{i.age}</li> */}
    </div>

))}
        
    </div>
  )
}

export default Basics
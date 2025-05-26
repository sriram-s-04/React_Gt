import React from 'react'

const day1 = () => {
   let arr =[
    {
        name:"sriram",
        age:21,
        city:"sathyamangalam"
   },
   {
        name:"sriman",
        age:25,
        city:"yelure"
   },
   {
        name:"mohinth",
        age:56,
        city:"rajanager"
   }
]
  return (
    <div>
        {arr.map((val)=>
            <div>
                {val.name}
                <br/>
                {val.age}
                <br/>
                {val.city}
                <br/>
            </div>
        )}
    </div>
  )
}

export default day1
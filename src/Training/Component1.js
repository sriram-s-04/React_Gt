import React from 'react'
import Component2 from './Component2'

function Component1({d,n}) {
    // console.log(props);
    let arr =[1,2,3]
    let obj ={x:34,y:67}
    let [a,...b]=arr

    let {x,y}=obj

  return (
    <div>Component1
        {/* {props.d}---{props.n} */}
        {d}--{n}---{a}--{b}
        <Component2 />
    </div>
  )
}

export default Component1
//props drilling
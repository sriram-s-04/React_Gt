import React, { useState } from 'react'

function UseStateHook() {
    // useState is a hook that allows you to add state to functional components
    // state management hook.
    // syn: const [state, setState] = useState(initialValue)
    // setState => to update the state value

    const [num, setNum] = useState("")
    const [result, setResult] = useState(false)


    // setNum(12)

    // console.log("executing...");
    function handleClick(){
        if(num%2==0){
                    setResult("it is even no")

        }
        else{
            setResult("odd number")
        }

    } 




  return (
    <div>UseStateHook
        <input type='text' onChange={(e) => setNum(e.target.value)}></input>
        <button onClick={()=> handleClick()} >click</button>
        {result}

    </div>
  )
}

export default UseStateHook
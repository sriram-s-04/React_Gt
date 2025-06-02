import React, { useEffect } from 'react'
import { Usestate } from '../Tasks_sri/Date_23_05/Usestate'
import { useState } from 'react'

function UseEffectHook() {
    // it is used to manages the side effects in the component
    // or life cycle management
    // useEffect(function, [])


    const [num, setNum] = useState(0)
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        console.log("from useEffect...");
        setTimeout(() => {
            setNum(num+1)
        },1000)
        
        
    },[num])

  return (
    <div>UseEffectHook
        <button onClick={() => setNum(num+1)}>click</button>
        <button onClick={() => setIsChange(! isChange)}>change</button>
        {num}--{isChange.toString()}

    </div>
  )
}

export default UseEffectHook

// stop watch
// live time diff b/w current date and any future date

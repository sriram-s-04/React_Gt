import React, { createContext } from 'react'
import USeContext2 from './USeContext2'

export let dataContext = createContext()

function UseContextHook() {
    let user = {
        name:"sriram",
        age:20
    }

    let skills =["js,html,react"]


  return (
    <dataContext.Provider  value={{user,skills}}>
    <div>UseContextHook

        <USeContext2 />
    </div>
    </dataContext.Provider>
  )
}

export default UseContextHook
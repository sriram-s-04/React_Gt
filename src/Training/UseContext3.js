import React, { useContext } from 'react'
import { dataContext } from './UseContextHook'

function UseContext3() {
     let {user,skills} = useContext(dataContext)
     console.log();
     

  return (
    <div>UseContext3
        {user.name}----{user.age}
    </div>
  )
}

export default UseContext3
import React from 'react'
import { useLocation } from 'react-router-dom'

function UseLocationHook() {

    let location = useLocation()
    console.log(location);

    let data = location.state || {}
    
    
  return (
    <div>UseLocationHook</div>
  )
}

export default UseLocationHook
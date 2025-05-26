import React from 'react'
import { useParams } from 'react-router-dom'

function UseParamsHook() {
    let {id, name} = useParams()
  return (
    <div>UseParamsHook
        {id} ----{name}
    </div>
  )
}

export default UseParamsHook
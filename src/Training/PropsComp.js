import React from 'react'
import Component1 from './Component1'
import ButtonComponent from './ButtonComponent'

function PropsComp() {
let data = "react is a js library"
let userName ="Sriram"
  return (
    <div>PropsComp
        <Component1  d={data} n={userName} />
        <ButtonComponent >click</ButtonComponent>
        <ButtonComponent><p>WARNING in [eslint] 
src\Training\Component1.js
  Line 10:10:  'x' is assigned a value but never used  no-unused-vars
  Line 10:12:  'y' is assigned a value but never used  no-unused-vars

webpack compiled with 1 warning</p></ButtonComponent>
        <ButtonComponent><button>click</button></ButtonComponent>
    </div>
  )
}

export default PropsComp
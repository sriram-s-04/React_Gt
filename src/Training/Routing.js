import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Routing() {

    let nav = useNavigate()

    let user={
        name:"sriram",
        mail:"sriram@gmail.com"
    }

    let arr =[90,78,56]
      let details = {
            user_data:user,
            data:arr
        }

    function handleNavigate(){
      

        nav('/UseLocationHook',{state:details})

    }
  return (
    <div>Routing
        <Link to='/useparamshook' state={details} ><button>usestate</button></Link>
        <button onClick={handleNavigate}>day</button>
        <Link to={`/UseParamsHook/${user.name}/${user.mail}`} ><button>use params</button></Link>

    </div>
  )
}

export default Routing
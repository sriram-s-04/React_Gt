import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectwithAPI() {
    const [todos, setTodos] = useState()

    function get_todos(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            console.log(res.data);
            setTodos(res.data)
            
        })
    }

    useEffect(()=> {
        get_todos()
    },[])

  return (
    <div>UseEffectwithAPI
        {todos && todos.map(i => (
            <li>{i.id}----{i.title}</li>
        ))}

    </div>
  )
}

export default UseEffectwithAPI
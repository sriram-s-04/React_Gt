import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
    let data = localStorage.getItem("task");
    let parsed_data = JSON.parse(data || "[]");
      const nav= useNavigate();
  return (
    <div className='List_main_container'>
        <h1>ToDo List</h1>
        <br/>
        <div >
            <ul>
            {parsed_data && parsed_data.length > 0 ? (
                parsed_data.map((tasklist, index) => <li key={index}>{tasklist}</li>)
            ) : (
                <p>No tasks available</p>
            )}
            </ul>
        </div>
        <div>
            <Button variant="primary" onClick={() => nav("/TodoList")}>
                Add Task
            </Button>
        </div>
    </div>
  )
}

export default ListPage
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { removeTodo, editTodo  } from '../../redux/slice/TodoSlice';
import { useSelector, useDispatch } from 'react-redux'; 

const ListPage = () => {
      const nav= useNavigate(); 
      const Todo=useSelector((state) => state.todo.task);
      const dispatch = useDispatch();
  return (
    <div className='List_main_container'>
        <h1>ToDo List</h1>
        <br/>
        <div >
            <ul>
            {Todo && Todo.length > 0 ? (
                Todo.map((tasklist, index) => (
                    <li key={index}>
                        {tasklist.task}
                        <button onClick={() => dispatch(editTodo({ id: tasklist.id }))}>edit</button>
                        <button onClick={() => dispatch(removeTodo({ id: tasklist.id }))}>delete</button>
                    </li>
                ))
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
import React, { useReducer, useState } from 'react'

const initialState = []


const URtask1 = () => {
  const [state,dispatch] = useReducer(reducer ,initialState )

  function reducer(state,action) {
    switch(action.type) {
      case "ADD_TASK":
        //used initialState to add a new task
        const newTask = { text: action.payload, completed: false };
        return [...state, newTask];
      case "DELETE_TASK":
        return state.filter((_, index) => index !== action.payload);
      case "MARK_COMPLETED":
        return state.map((task, index) =>
          index === action.payload ? { ...task, completed: true } : task
        );
      default:
        return state;
      }
  }
  function handleAddTask(newTask) {
    dispatch({ type: "ADD_TASK", payload: newTask });
  }
  function handleDeleteTask(index) {
    dispatch({ type: "DELETE_TASK", payload: index });
  }
  function handleMarkCompleted(index) {
    dispatch({ type: "MARK_COMPLETED", payload: index });
    
  }

  return (
    <div>
      {/* Task: To-Do List
Description:** Create a simple to-do list application where users can add, delete, and mark tasks as completed. This helps users manage daily tasks effectively.  
Concepts Covered:
- Handling user input (e.g., adding tasks via a text box).  
- Updating and displaying lists dynamically.  
- Using events like button clicks to modify tasks (edit, delete, complete).   */}
      <h1>To-Do List Application</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newTask = e.target.elements[0].value;
        handleAddTask(newTask);
        e.target.reset();
        
        }}>
        {/* Input field for adding new tasks */}
        <input type="text" placeholder="Add a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            {task.completed ? (
              <span style={{ color: 'green' }}> (Completed)</span>
              
            ) : (
              <>
              <span style={{ color: 'red' }}> (Pending)</span>
              <button onClick={() => handleMarkCompleted(index)}>Complete</button>
              </>
              
            )}
            
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul> 

</div>
  )
}

export default URtask1
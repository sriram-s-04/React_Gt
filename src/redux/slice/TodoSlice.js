  import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

  const TodoSlice = createSlice({
    name: 'todo',
    initialState: { task: [] },
    reducers: {
      addTodo: (state, action) => {
        // console.log(this.state);
        
        state.task.push(action.payload);
      },
      // removeTodo: (state, action) => {
      //     console.log("action.payload", action.payload);
      //   state.task = state.task.filter(todo => todo.id !== action.payload);

      // },
      removeTodo: (state, action) => {
        const index = state.task.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.task.splice(index, 1);
        }
      },
      editTodo:(state,action)=>{
        console.log("Editing todo:", action.payload);

        const todo = state.task.find(todo => todo.id === action.payload.id);
        if (todo) {
          console.log("Editing todo:", todo);
          // Assuming you want to edit the task text, you can modify it here
          // For example, you can prompt the user for a new task text
          // isedit=true;
          // const newTaskText = useNavigate("/TodoList", { state: { task: todo.task } });
          // if (newTaskText !== null) {
          //   todo.task = newTaskText;
          // }
        } 
      },
    },
    });

  export const { addTodo, removeTodo, editTodo, toggleTodo } = TodoSlice.actions;
  export default TodoSlice.reducer;

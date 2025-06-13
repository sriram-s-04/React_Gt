import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

function UseReducerHook() {
    // it is used to manage complex state logic in a functional component

    // const [state, dispatch] = useReducer(reducer, initialState);



    const [state, dispatch] = useReducer(reducer, {count:0})

    function reducer(state,action){

        switch(action.type){
            case "INC":
                return {count:state.count+action.input}
            case "DEC":
                return {count:state.count-1}

            
        }

    }








  return (
    <div>UseReducerHook
        <button onClick={() => dispatch({type:"INC",input:2})}>+</button>
        {state.count}
        <button onClick={() => dispatch({type:"DEC"})}>-</button>
    </div>
  )
}

export default UseReducerHook

// class Counter extends React.Component {
  

  

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }
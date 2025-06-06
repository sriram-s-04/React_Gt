import React, { useContext } from 'react'
import { dataContext } from './UseContext';

const Counter_task5 = () => {
    const { counter, increment, decrement, setCounter } = useContext(dataContext);

  return (
    <div>
        {/* ### **Task 5: Counter Context**
**Description:**  
Implement a counter context that allows multiple components to **increase, decrease, and reset a counter value** without prop drilling.

 
âœ… Sharing State Between Components  
âœ… Updating Context Values  
âœ… Using Multiple Components with Context  

--- */}

      <h2>Counter</h2>
      <p>Current Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default Counter_task5
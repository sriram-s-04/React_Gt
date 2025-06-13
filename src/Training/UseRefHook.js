import React, { useRef } from 'react'

function UseRefHook() {
    // The useRef hook is used to persist values across renders without causing re-renders.
    // It can be used to store mutable values that do not require re-rendering when changed.
    
    
    const inputRef = useRef(null);
    const divRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
        console.log(inputRef.current.value.length);
        console.log(inputRef.current);
        console.log(divRef.current.backgroundColor); // This will log the div element
        divRef.current.style.backgroundColor = 'green'; // Change the background color of the div
        divRef.current.style.height = '500px'; // Add padding to the div
        
        
    };

    console.log("rendered");
    

  return (
    <div ref={divRef} >
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>

      <div></div>
    </div>

    
  )
}

export default UseRefHook
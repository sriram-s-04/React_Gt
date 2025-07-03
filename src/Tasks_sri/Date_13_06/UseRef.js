// // | Property/Method     | Description                                  | Example                                   |
// // | ------------------- | -------------------------------------------- | ----------------------------------------- |
// // | `.value`            | Gets or sets the current value of an input   | `ref.current.value = "Hello"`             |
// // | `.focus()`          | Sets focus to the element                    | `ref.current.focus()`                     |
// // | `.blur()`           | Removes focus from the element               | `ref.current.blur()`                      |
// // | `.select()`         | Selects the text inside an input or textarea | `ref.current.select()`                    |
// // | `.scrollIntoView()` | Scrolls the element into view                | `ref.current.scrollIntoView()`            |
// // | `.click()`          | Simulates a click on the element             | `ref.current.click()`                     |
// // | `.disabled`         | Enables/disables the input or button         | `ref.current.disabled = true`             |
// // | `.value.length`     | Length of the input's current value          | `const length = ref.current.value.length` |
import React, { useRef, useState } from 'react'

const UseRef = () => {
  const inputRef = useRef(null)
  const [state, setState] = useState(0)
  const previousValueRef = useRef(state)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
        {/* ### ðŸ”¹ Task 1: Focus on Input Using Button Click

* Create an input box and a button.
* When the button is clicked, the input should be focused using `useRef`.

--- */}
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Focus Input</button>
    <br />
    <br/>

{/* ### ðŸ”¹ Task 2: Get Input Value Without Re-render

* Create an uncontrolled input using `useRef`.
* Add a button to alert the current input value without using `useState`.

--- */}
    <input ref={inputRef} type="text" />
    <button onClick={() => alert(inputRef.current.value)}>Show Input Value</button>

{/* ### ðŸ”¹ Task 3: Count Button Clicks Without Re-rendering

* Use `useRef` to count how many times a button was clicked.
* Display the count only in the console, not in the UI.

--- */}
    <button onClick={() => {
      inputRef.current.count = (inputRef.current.count || 0) + 1;
      console.log(`Button clicked ${inputRef.current.count} times`);
    }}>Click Me</button>

{/* 
### ðŸ”¹ Task 4: Scroll to a Section

* Create multiple sections in a page.
* Add buttons to scroll smoothly to specific sections using `useRef` and `.scrollIntoView()`.

--- */}
    {/* <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2>Home</h2>
      <button onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}>Go to about page</button>
    </div>
    <div id="section2" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
      <h2>About</h2>
    </div> */}

{/* ### ðŸ”¹ Task 5: Disable and Enable Input Programmatically

* Use `useRef` to disable an input on one button click and enable it on another.

--- */}
    <input ref={inputRef} type="text" />
    <button onClick={() => inputRef.current.disabled = true}>Disable Input</button>
    <button onClick={() => inputRef.current.disabled = false}>Enable Input</button>

{/* ### ðŸ”¹ Task 6: Store Previous State Value

* Create a component with a state variable.
* Use `useRef` to store the previous value of the state and display it. */}
    {/* <div>
      <h3>Current Value: {state}</h3>
      <h3>Previous Value: {previousValueRef.current}</h3>
      <button onClick={() => {
        previousValueRef.current = state;
        setState(state + 1);
      }}>Increment</button>
    </div> */}
{/* ---

### ðŸ”¹ Bonus Task: Text Selection

* Create an input with some text.
* Add a button that selects all the text inside the input using `useRef` and `.select()`. */}
    {/* <input ref={inputRef} type="text" defaultValue="Select this text" />
    <button onClick={() => inputRef.current.select()}>Select Text</button>
    <br />
    <br /> */}
    </div>
  )
}

export default UseRef
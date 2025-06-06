import React, { useContext } from 'react'
import { dataContext } from './UseContext'

const Mode_Child1 = () => {
    let {mode,toggleMode}= useContext(dataContext)
    
  return (
    <div>
        {/* ### **Task 1: Create a Theme Context (Light/Dark Mode)**
**Description:**  
Create a context to manage a theme (light or dark). Provide a button that toggles the theme, updating the background and text color accordingly.


âœ… Creating a Context  
âœ… Providing a Global State  
âœ… Using `useContext` in a component  

--- */}
        <div className={mode === "light" ? "mode_task_light" : "mode_task_dark"} >
                <button onClick={toggleMode} style={{ marginTop: "20px" }}>
                  Toggle Mode
                </button>
                <h1>{mode === "light" ? "Light Mode" : "Dark Mode"}</h1>
              </div>

    </div>
  )
}

export default Mode_Child1
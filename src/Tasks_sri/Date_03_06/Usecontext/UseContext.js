import React, { createContext, useState } from 'react'
import Mode_Child1 from './Mode_Child1';
import "../total.css";
import Authentication_task2 from './Authentication_task2';
import Language_task3 from './Language_task3';
import Card_task4 from './Card_task4';
import Counter_task5 from './Counter_task5';
export let dataContext=createContext();
const UseContext = () => {

// task1
  // const [mode, setMode] = useState("light");
  // const toggleMode = () => {
  //   setMode((e) => (e === "light" ? "dark" : "light"));
  // };
// task 2
//   const [details,setDetails] = useState(
//     {
//       emailId:"sriram",
//       password:"123456789"
//     }
//   );
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const submitbt = (e) => {
//     e.preventDefault();
//     let email = e.target.email.value;
//     let pass = e.target.pass.value;
//     // console.log(email, pass);
//     // (email == details.emailId && pass== details.password) ? (setIsAuthenticated(true), nav('/Authentication_task2')) : alert("Invalid Credentials");
//     if (email === details.emailId && pass === details.password) {
//   setIsAuthenticated(true);

// } else {
//   alert("Invalid Credentials");
// }
//     //it button state is true then pass the contect to the Authentication_task2 component
//   }
// task 3
  // const [language, setLanguage] = useState("en");

  // const languageContent = {
  //   en: "Hello, how are you?",
  //   ta: "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
  //   hi: "नमस्ते, आप कैसे हैं?",
  //   fr: "Bonjour, comment ça va?",
  //   es: "Hola, ¿cómo estás?"
  // };
// // task 4
//   const [cartItems, setCartItems] = useState([]);
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };
//   const removeFromCart = (item) => {
//     setCartItems((prevItems) => prevItems.filter((i) => i !== item));
//   };
//   const clearCart = () => {
//     setCartItems([]);
//   };
//   const cartContextValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     clearCart
//   };
// task 5
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>

{/* ### **Task 1: Create a Theme Context (Light/Dark Mode)**
**Description:**  
Create a context to manage a theme (light or dark). Provide a button that toggles the theme, updating the background and text color accordingly.


âœ… Creating a Context  
âœ… Providing a Global State  
âœ… Using `useContext` in a component  

--- */}
  
        
      {/* <dataContext.Provider value={{ mode, toggleMode }}>
          <Mode_Child1 value={{ mode, toggleMode }} />
        </dataContext.Provider> */}

{/* ### **Task 2: User Authentication Context**
**Description:**  
Build a context that manages **user authentication status**. Implement a login and logout button that updates the authentication state.


âœ… Managing Authentication Globally  
âœ… Conditional Rendering Based on Context  
âœ… Updating Context State  

--- */}
 {/* <dataContext.Provider value={{ details, setDetails , setIsAuthenticated }}>
      <div>
        {!isAuthenticated ? (
          <form onSubmit={submitbt}>
            <input type='text' placeholder='Email' name='email' /><br />
            <input type='password' placeholder='Password' name='pass' /><br />
            <button type='submit'>Login</button>
          </form>
        ) : (
          <Authentication_task2 />
        )}
      </div>
    </dataContext.Provider>
     */}


{/* ### **Task 3: Language Selector Context**
**Description:**  
Create a context that manages **language selection** (e.g., English, Tamil, Hindi). Based on the selected language, display the text accordingly.

âœ… Providing Context for Language Preference  
âœ… Changing Content Dynamically  
âœ… Handling Multi-language Support  

--- */}
{/* <dataContext.Provider value={{ language, setLanguage, languageContent }}>
        <Language_task3 />
      </dataContext.Provider> */}

{/* ### **Task 4: Cart Context for Shopping App**
**Description:**  
Create a shopping cart context that stores added products. Implement buttons to **add, remove, and clear items** from the cart.


âœ… Managing a List in Context  
âœ… Updating Context State  
âœ… Displaying Context Data in Components  

--- */}

   {/* <dataContext.Provider value={cartContextValue}>
        <Card_task4 />
      </dataContext.Provider> */}

{/* ### **Task 5: Counter Context**
**Description:**  
Implement a counter context that allows multiple components to **increase, decrease, and reset a counter value** without prop drilling.

 
âœ… Sharing State Between Components  
âœ… Updating Context Values  
âœ… Using Multiple Components with Context  

--- */}
      <dataContext.Provider value={{ counter, increment, decrement, setCounter }}>
        <h1>UseContext Hook</h1>
        <p>Use this component to implement your tasks.</p>
        <Counter_task5/>
      </dataContext.Provider>
    </div>
  )
}

export default UseContext
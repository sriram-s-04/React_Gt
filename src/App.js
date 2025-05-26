import logo from './logo.svg';
import './App.css';
import Day from './Tasks_sri/Day';
import PropsComp from './Training/PropsComp';
import Date_23_05 from './Tasks_sri/Date_23_05/Date_23_05';
import UseStateHook from './Training/UseStateHook';
import { Usestate } from './Tasks_sri/Date_23_05/Usestate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from './Training/Routing';
import UseLocationHook from './Training/UseLocationHook';
import UseParamsHook from './Training/UseParamsHook';
import Form from './Tasks_sri/Form_26_05';
function App() {
  return (
    <div className="App">
      {/* <Day/> */}
      {/* <PropsComp /> */}
      {/* <Date_23_05 /> */}
    {/* <UseStateHook />       */}
    {/* <Usestate /> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Routing />}></Route>
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/day" element={<Day />} />
        <Route path="/props" element={<PropsComp />} />
        <Route path="/date" element={<Date_23_05 />} />
        <Route path="/UseLocationHook" element={<UseLocationHook />} />
        <Route path='/UseParamsHook/:id/:name' element={<UseParamsHook />}></Route>
        <Route path='/Useparamshook' element={<UseParamsHook />}></Route>
        <Route path='/Form' element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
} 

export default App;

// What is React JS?
// React JS is a JavaScript library for building user interfaces, especially single-page applications, using reusable components.

// What is DOM?
// DOM (Document Object Model) is a programming interface for web documents, representing the structure of a webpage as a tree of objects.

// What is Virtual DOM?
// Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to efficiently update the UI by only re-rendering changed elements.

// What are features of React?
// Features include component-based architecture, virtual DOM, unidirectional data flow, JSX syntax, and strong community support.

// What is Babel?
// Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

// What is a component?
// A component is a reusable, self-contained piece of UI in React, defined as a JavaScript function or class.

// What are types of components?
// There are two main types: Functional components and Class components.

// What is the difference between class and functional components?
// Class components use ES6 classes and can have state and lifecycle methods. Functional components are simpler, use functions, and can use hooks for state and lifecycle features.

// What is a single page application?
// A single page application (SPA) loads a single HTML page and dynamically updates content without reloading the page, providing a smoother user experience.

// What is reconciliation?
// Reconciliation is the process by which React updates the DOM by comparing the new virtual DOM with the previous one and applying only the necessary changes.
// 

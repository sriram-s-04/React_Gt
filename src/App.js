import logo from "./logo.svg";
import "./App.css";
import Day from "./Tasks_sri/Day";
import PropsComp from "./Training/PropsComp";
import Date_23_05 from "./Tasks_sri/Date_23_05/Date_23_05";
import { Usestate } from "./Tasks_sri/Date_23_05/Usestate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./Training/Routing";
import UseLocationHook from "./Training/UseLocationHook";
import UseParamsHook from "./Training/UseParamsHook";
import Form from "./Training/Form_26_05";
import Form_usingState from "./Tasks_sri/Form_usingState";
import Form_clone from "./Tasks_sri/Date_26_05/Form";
import { Nav_details } from "./Tasks_sri/Date_26_05/Nav_details";
import Login from "./Tasks_sri/Date_29_05/Login";
import Formusing_local_session from "./Tasks_sri/Date_29_05/Formusing_local_session";
import Home from "./Tasks_sri/Date_29_05/Home";
import TodoList from "./Tasks_sri/Date_30_05/TodoList";
import ListPage from "./Tasks_sri/Date_30_05/ListPage";
import Signup from "./Training/Signup";
import Login_traning from "./Training/Login_traning";
import UseEffectHook from "./Training/UseEffectHook";
import StopWatch from "./Tasks_sri/Date_02_06/StopWatch";
import Live_Diffrence from "./Tasks_sri/Date_02_06/Live_Diffrence";
import UseEffectwithAPI from "./Training/UseEffectwithAPI";
import UseContextHook from "./Training/UseContextHook";
import E_comwithAPI from "./Tasks_sri/Date_03_06/E_comwithAPI";
import UseContext from "./Tasks_sri/Date_03_06/Usecontext/UseContext";
import Authentication_task2 from "./Tasks_sri/Date_03_06/Usecontext/Authentication_task2"
import Language_task3 from "./Tasks_sri/Date_03_06/Usecontext/Language_task3";
import Card_task4 from "./Tasks_sri/Date_03_06/Usecontext/Card_task4";
import Counter_task5 from "./Tasks_sri/Date_03_06/Usecontext/Counter_task5";
import UseReducerHook from "./Training/UseReducerHook";
import Useraducetasks from "./Tasks_sri/Date_05_06/Useraducetasks";
import URtask1 from "./Tasks_sri/Date_05_06/URtask1";
import URtask2 from "./Tasks_sri/Date_05_06/URtask2";
import URtask3 from "./Tasks_sri/Date_05_06/URtask3";
import URtask4 from "./Tasks_sri/Date_05_06/URtask4";
import Cart from "./Tasks_sri/Date_03_06/Cart";
import UseRefHook from "./Training/UseRefHook";

function App() {
  return (
    <div>
      {/* <Day/> */}
      {/* <PropsComp /> */}
      {/* <Date_23_05 /> */}
      {/* <UseStateHook />       */}
      {/* <Usestate /> */}
      {/* {<FormValidation />} */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Routing />}></Route>
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/day" element={<Day />} />
          <Route path="/props" element={<PropsComp />} />
          <Route path="/date" element={<Date_23_05 />} />
          <Route path="/UseLocationHook" element={<UseLocationHook />} />
          <Route
            path="/UseParamsHook/:id/:name"
            element={<UseParamsHook />}
          ></Route>
          <Route path="/Useparamshook" element={<UseParamsHook />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Form_usingState" element={<Form_usingState />}></Route>
          <Route path="/Form_clone" element={<Form_clone />}></Route>
          <Route path="/Nav_details" element={<Nav_details />}></Route>
          {/* Task 29/05 */}
          <Route
            path="/Formusing_local_session"
            element={<Formusing_local_session />}
          ></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          {/* task 30/05 */}
          <Route path="/TodoList" element={<TodoList />}></Route>
          <Route path="/ListPage" element={<ListPage />}></Route>
          {/* Training */}
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login_training" element={<Login_traning />}></Route>
          {/* Training */}
          <Route path="/useeffect" element={<UseEffectHook />}></Route>
          {/* task 02/06 */}
          <Route path="/stopwatch" element={<StopWatch />}></Route>
          <Route path="/live_difference" element={<Live_Diffrence />}></Route>
           {/* Training*/}
          <Route path="/useeffectwithapi" element={<UseEffectwithAPI />}></Route>
          <Route path="/UseContextHook" element={<UseContextHook  />}></Route>
          {/* task 03/06 */}
          <Route path="/e_comwithapi" element={<E_comwithAPI/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/UseContext" element={<UseContext/>}></Route>
          <Route path="/Authentication_task2" element={<Authentication_task2 />}></Route>
          <Route path="/Language_task3" element={<Language_task3 />}></Route>
          <Route path="/Card_task4" element={<Card_task4 />}></Route>
          
          <Route path="/Counter_task5" element={<Counter_task5 />}></Route>
          <Route path="/UseReducerHook" element={<UseReducerHook />}></Route>
          {/* task 05/06 */}
          <Route path="/Useraducetasks" element={<Useraducetasks/>}></Route>
          <Route path="/URtask1" element={<URtask1/>}></Route>
          <Route path="/URtask2" element={<URtask2/>}></Route>
          <Route path="/URtask3" element={<URtask3/>}></Route>
          <Route path="/URtask4" element={<URtask4/>}></Route>
          <Route path="/UseRefHook" element={<UseRefHook/>}></Route>
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

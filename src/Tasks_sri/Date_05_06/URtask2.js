import React, { useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const URtask2 = () => {
  const nav = useNavigate();

  function raducer(state, action) {
    switch (action.type) {
      case "SET_FIRSTNAME":
        return { ...state, fristname: action.payload }; 
      case "SET_LASTNAME":
        return { ...state, lastname: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SUBMIT_FORM":
        nav("/URtask1");
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(raducer, {
    fristname: "",
    lastname: "",
    email: "",
  });
  const fristname = (e) => {
    dispatch({ type: "SET_FIRSTNAME", payload: e.target.value });
  };
  const lastname = (e) => {
    dispatch({ type: "SET_LASTNAME", payload: e.target.value });
  };
  const email = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };
  return (
    <div>
      {/* Form Input State Management

Goal: Efficiently manage the state of multiple form input fields using `useReducer`.

Description:
This task involves building a form with several input fields (e.g., name, email, password, and age). Instead of using separate `useState` hooks for each input, you will use a single `useReducer` to manage the state of all fields in a centralized and scalable way.

Each input field will:

* Update the state when the user types.
* Be controlled by the reducer function, which updates the corresponding field based on the action.
 */}
      <Form noValidate>
        <Form.Group className="mb-3">
          <div>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="fristname"
              onChange={fristname}
            />
          </div>
          <div>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={lastname}
            />
          </div>
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={email}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label=" I Have read the terms and conditions"
          />
        </Form.Group>
        <Button
          type="submit"
          onClick={() => dispatch({ type: "SUBMIT_FORM", payload: state })}
        >
          submit
        </Button>
      </Form>
    </div>
  );
};

export default URtask2;

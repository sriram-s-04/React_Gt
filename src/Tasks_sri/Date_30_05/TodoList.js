import { Formik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import "./Todo.css";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [Tasks, setTasks] = useState({task:""});
  const [taskList, setTaskList] = useState([])
  // Validation schema using Yup for form validation
  const schema = yup.object().shape({
    task: yup.string().required("Task is required"),
  });
  //adding the task to the taskList array

  // Function to handle form submission
  // It saves the task to localStorage and sessionStorage
  const nav = useNavigate();
  const handleSubmit = (values) => {
    let list = JSON.parse( localStorage.getItem("task")) || []
    let updated_list = [...list,values.task]
    // setTaskList(updated_list)
    console.log(updated_list);
    
    localStorage.setItem("task", JSON.stringify(updated_list));
    sessionStorage.setItem("task", JSON.stringify(updated_list));
    nav("/ListPage")
    
    
  };

  return (
    <>
      <div className="todoList_main_container">
        <Formik
          initialValues={Tasks}
          validationSchema={schema}
          enableReinitialize
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h1>ToDo List </h1>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="enter the new task"
                    onChange={handleChange}
                    name="task"
                    className="input_field"
                  />
                  <br />
                </Form.Group>
                <br />
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Add Task
                  </Button>
                </Form.Group>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default TodoList;

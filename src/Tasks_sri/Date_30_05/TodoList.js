import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import "./Todo.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slice/TodoSlice";

const TodoList = () => {
  // const [Tasks, setTasks] = useState({task:""});
  // const [taskList, setTaskList] = useState([])
  // Validation schema using Yup for form validation
  const location =useLocation();
  const schema = yup.object().shape({
    task: yup.string().required("Task is required"),
  });
  //adding the task to the taskList array

  // Function to handle form submission
  // It saves the task to localStorage and sessionStorage
  const nav = useNavigate();
  //redux
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.todo.task);
  const handleSubmit = (values) => {
    const newTask = { id: Date.now(), task: values.task, completed: false };

    dispatch(addTodo(newTask));
    console.log("values", values);
    
    nav("/ListPage");
    
    
  };

  return (  
    <>
      <div className="todoList_main_containter">
        <Formik
          initialValues={Todo}
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
                    required
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

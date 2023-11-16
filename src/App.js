import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();

  const addTask = () => {
    const taskText = taskInputRef.current.value;
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      taskInputRef.current.value = "";
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const btnStyle = {
    margin: "5px",
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          class="form-control form-control-lg"
          ref={taskInputRef}
          placeholder="Add a task"
        />
        <button
          class="btn btn-secondary mb-2"
          onClick={addTask}
          style={btnStyle}
        >
          Add
        </button>
      </div>
      <ul className="task-container">
        {tasks.map((task, index) => (
          <li key={index} className="list-item">
            {task}
            <button
              class="btn btn-secondary mb-2"
              onClick={() => removeTask(index)}
              style={btnStyle}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

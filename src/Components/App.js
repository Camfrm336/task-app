import "./App.css";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import uuid from "react-uuid";

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [clicked, toggleClick] = useState(true);

  const addTaskHandler = (task) => {
    setTasks([...tasks, { id: uuid(), ...task }]);
  };

  const deleteTaskHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header toggle={toggleClick} />
      {clicked && <AddTask addTask={addTaskHandler} />}

      <TaskList tasks={tasks} deleteTask={deleteTaskHandler} />
    </div>
  );

  // return (
  //   <div>
  //     <Header />
  //     <AddTask addTask={addTaskHandler} />
  //     <TaskList tasks={tasks} deleteTask={deleteTaskHandler} />
  //     <div>
  //       <p>hey</p>
  //       {clicked ? renderShowAdd() : "False"}
  //       <button onClick={() => toggleClick(!clicked)}>Nice</button>
  //     </div>
  //   </div>
  // );
}

export default App;

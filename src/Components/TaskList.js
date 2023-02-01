import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.deleteTask(id);
  };

  const renderTaskList = props.tasks.map((task) => {
    return (
      <TaskItem task={task} clickHandler={deleteContactHandler} key={task.id} />
    );
  });
  return (
    <div>
      <h1 style={{ marginLeft: "9px", marginTop: "10px" }}>My Tasks</h1>

      <div className="ui celled list">{renderTaskList}</div>
    </div>
  );
};

export default TaskList;

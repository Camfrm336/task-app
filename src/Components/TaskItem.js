import React from "react";

const TaskItem = (props) => {
  const { id, taskName, taskDescription } = props.task;
  console.log(taskName);
  return (
    <div className="item">
      <div className="content">
        <h2 className="taskHeader">{taskName}</h2>

        <div className="description" style={{ fontSize: "15px" }}>
          {taskDescription}
        </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default TaskItem;

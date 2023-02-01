import React from "react";
import DateComponent from "./DatePicker";

class AddTask extends React.Component {
  state = {
    taskName: "",
    taskDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.taskName === "") {
      alert("You must have a task name!");
      return;
    }
    this.props.addTask(this.state);
    console.log(this.state);
    this.setState({ taskName: "", taskDescription: "" });
  };

  render() {
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="Go to the store"
              value={this.state.taskName}
              onChange={(e) => this.setState({ taskName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              style={{ resize: "none", columns: "2" }}
              rows="2"
              placeholder="Buy, milk, bread, water, cups, and plates"
              value={this.state.taskDescription}
              onChange={(e) =>
                this.setState({ taskDescription: e.target.value })
              }
            ></textarea>
          </div>

          {/* <div className="field">
            <label>Due Date</label>
            <input
              type="date"
              onChange={(e) => this.setState({ dueDate: e.target.value })}
            />
          </div> */}

          <button className="ui button blue">Add Task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;

import React, { useState } from "react";
import { connect } from "react-redux";
import { editTask, toggleTask } from "../js/Actions/actions";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    editToDo: (task) => dispatch(editTask(task)),
    toggleToDo: (id) => dispatch(toggleTask(id)),
  };
};

const Task = (props) => {
  console.log("props of Task", props);
  const [isDone, setIsDone] = useState(props.task.isDone);

  const handleToggle = (taskId) => {
    setIsDone(!isDone);
    props.toggleToDo({ id: taskId });
  };

  const handleEdit = (newDescription, id) => {
    props.editToDo({
      id,
      description: newDescription,
    });
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div style={{ width: 800 }}>
        {/* <NavLink to='/edit-task' className="btn btn-outline-dark bg-light">
          <FaEdit />
        </NavLink> */}
        <input
          className="form-control"
          type="text"
          id={props.task.id}
          value={props.task.description}
          onChange={(e) => handleEdit(e.target.value, props.task.id)}
        />
      </div>
      <button
        className={
          "btn btn-sm ml-auto " +
          (isDone ? "btn-success" : "btn-outline-success")
        }
        onClick={() => handleToggle(props.task.id)}
      >
        &#x2713;
      </button>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Task);

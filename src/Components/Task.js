import React from "react";
import { connect } from "react-redux";
import { editTask, toggleTask } from "../js/Actions/actions";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    editToDo: (task) => dispatch(editTask(task)),
    toggleToDo: (task) => dispatch(toggleTask(task)),
  };
};

const Task = (props) => {
  const handleToggle = (isDone, id) => {
    props.toggleToDo({ id, isDone });
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
      <input
        checked={props.task.isDone}
        type="checkbox"
        className={
          "btn btn-sm ml-auto " +
          (props.task.isDone ? "btn-success" : "btn-outline-success")
        }
        onChange={(e) => handleToggle(e.target.checked, props.task.id)}
      />
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Task);

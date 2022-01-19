import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Task = ({ task, onToggleIsDone, handleEdit }) => {
  const [isDone, setIsDone] = useState(task.isDone);

  const toggleIsDone = () => {
    setIsDone(!isDone);
    onToggleIsDone(task.id);
  };

  const onHandleEdit = (e) => {
    handleEdit(e.target.value, task.id);
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
          id={task.id}
          value={task.description}
          onChange={onHandleEdit}
        />
      </div>
      <button
        className={
          "btn btn-sm ml-auto " +
          (isDone ? "btn-success" : "btn-outline-success")
        }
        onClick={toggleIsDone}
      >
        &#x2713;
      </button>
    </li>
  );
};

export default Task;

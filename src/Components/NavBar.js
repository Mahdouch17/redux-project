import React from "react";
import { connect } from "react-redux";
import { FaListAlt, FaCheckSquare, FaPlusSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { completedTasks } from "../js/Actions/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    completedToDos: (filter) => dispatch(completedTasks(filter)),
  };
};

const NavBar = (props) => {
  console.log("props of navbar", props);
  const handleCompleted = (value) => {
    props.completedToDos(value);
    console.log('value in handleCompleted '+value)
  };
  return (
    <footer
      className="d-flex justify-content-between bg-secondary p-3"
      id="mainFooter"
    >
      <div className="btn-group">
        <NavLink
          onClick={()=>handleCompleted("all tasks")}
          to="/"
          className="btn btn-outline-dark bg-light"
          exact
        >
          <FaListAlt />
        </NavLink>
        <NavLink
          onClick={()=>handleCompleted("completed tasks")}
          to="/completed"
          className="btn btn-outline-dark bg-light"
        >
          <FaCheckSquare />
        </NavLink>
        <NavLink to="/add-task" className="btn btn-outline-dark bg-light" exact>
          <FaPlusSquare />
        </NavLink>
      </div>
    </footer>
  );
};

export default connect(null, mapDispatchToProps)(NavBar);

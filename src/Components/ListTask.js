import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const ListTask = ({ tasks, match }) => {
  let filteredTasks;
  switch (match.params.filter) {
    case "completed":
      filteredTasks = tasks.filter((task) => task.isDone);
      break;
    default:
      filteredTasks = tasks;
  }
  console.log(filteredTasks)
  if (filteredTasks.length === 0) {
    return (
      <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
          <li className="list-group-item">Aucune tâche à afficher</li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </>
    );
  }
};

export default connect(mapStateToProps)(ListTask);

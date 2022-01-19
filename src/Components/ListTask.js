import React from "react";
import Task from "./Task";

const ListTask = ({ tasks, match, onToggleIsDone, handleEdit }) => {
  let filteredTasks;
  switch (match.params.filter) {
    case "completed":
      filteredTasks = tasks.filter((task) => task.isDone);
      break;
    default:
      filteredTasks = tasks;
  }
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
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleIsDone={onToggleIsDone}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </>
    );
  }
};

export default ListTask;

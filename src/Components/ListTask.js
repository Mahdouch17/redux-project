import React from "react";
import { connect, useSelector } from "react-redux";
import { completedTasks } from "../js/Actions/actions";
import Task from "./Task";

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks,
//   };
// };

const ListTask = () => {
  const todos = useSelector((state) => state.tasks);
  const filterTask = useSelector((state) => state.filter);
  console.log("tasks", todos);
  console.log("filterTask", filterTask);
  const filteredTasks = (todos, filterTask) => {
    if (filterTask === 'completed tasks') {
      console.log("test1");
      return todos.filter((task) => task.isDone === true);
    } else return todos;
  };

  // switch (filterTask) {
  //   case "completed tasks":
  //     todos.filter((task) => task.isDone === true);
  //     console.log('test')
  //     break;
  //   case "all tasks":
  //   default:
  //     return todos;
  // }

  const filteredTodos = filteredTasks(todos, filterTask);
  if (filteredTodos.length === 0) {
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
          {filteredTodos.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </>
    );
  }
};

export default ListTask;

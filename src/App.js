import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";
// import EditTask from "./Components/EditTask";
import { BrowserRouter, Route, Switch } from "react-router-dom";

var initialTasks = [
  { id: 0, description: "Ranger la vaisselle", isDone: false },
  { id: 1, description: "Répondre appel d'offres", isDone: false },
  { id: 2, description: "Signer contrat", isDone: false },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onToggleIsDone = (taskId) => {
    let taskToUpdate = tasks.find((task) => task.id === taskId);
    taskToUpdate.isDone = !taskToUpdate.isDone;
    setTasks(tasks.map((task) => (task.id === taskId ? taskToUpdate : task)));
  };

  const addTask = (x) => {
    setTasks([...tasks, x]);
  };

  const handleEdit = (newDescription, id) => {
    const editedTasksList = tasks.map((task) => {
      if (task.id === id) {
        return {...task, description:newDescription}
      }
      return task;
    });
    setTasks(editedTasksList);
  };

  return (
    <section id="todo">
      <BrowserRouter>
        <Switch>
          <Route
            path="/add-task"
            render={(props) => <AddTask addTask={addTask} {...props} />}
          ></Route>
          {/* <Route
            path="/edit-task"
            component={<EditTask />}
          ></Route> */}
          <Route
            path="/:filter?"
            render={(props) => (
              <ListTask
                handleEdit={handleEdit}
                tasks={tasks}
                onToggleIsDone={onToggleIsDone}
                {...props}
              />
            )}
          ></Route>
        </Switch>
        <NavBar />
      </BrowserRouter>
    </section>
  );
};

export default App;

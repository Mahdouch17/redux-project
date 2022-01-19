import React, { useState } from "react";
import uniqueid from "uniqueid";

const AddTask = ({ addTask, history }) => {
  const [task, setTask] = useState({
    description: "",
  });
  const handleTask = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: uniqueid(),
      description: task.description,
      isDone: false,
    };
    addTask(newTask);
    history.push("/");
  };
  return (
    <section>
      <h1 className="m-3">Nouvelle tâche</h1>
      <div className="card mx-3">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label form="description">Nom de la tâche</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={task.description}
              onChange={handleTask}
            />
          </div>
          <input type="submit" value={"Créer"} className="btn btn-primary" />
        </form>
      </div>
    </section>
  );
};

export default AddTask;

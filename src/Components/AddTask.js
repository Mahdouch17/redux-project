import React, { useState } from "react";
import { connect } from "react-redux";
import newId from "../utils/newId";
import { addTask } from "../js/Actions/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (task) => dispatch(addTask(task)),
  };
};

const AddTask = (props) => {
  
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToDo({
      id: newId(),
      description,
      isDone: false,
    });
    props.history.push("/");
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input type="submit" value={"Créer"} className="btn btn-primary" />
        </form>
      </div>
    </section>
  );
};

export default connect(null, mapDispatchToProps)(AddTask);

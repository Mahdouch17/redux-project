import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  
  return (
    <section id="todo">
      <BrowserRouter>
        <Switch>
          <Route
            path="/add-task"
            render={(props) => <AddTask {...props} />}
          ></Route>
          <Route
            path="/:filter?"
            render={(props) => (
              <ListTask
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

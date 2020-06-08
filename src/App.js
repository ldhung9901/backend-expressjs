import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/navbar.component";
import ExcercisesList from "./components/excercise-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <br />
      <Switch>
        <Route path="/" exact component={ExcercisesList} />
        <Route path="/edit/:id" exact component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercise} />
        <Route path="/users" exact component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;

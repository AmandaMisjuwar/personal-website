import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Title} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

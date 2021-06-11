import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Page} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

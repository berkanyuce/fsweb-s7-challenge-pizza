import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./layouts/Home";
import Success from "./layouts/Success";



const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/pizza">
            <Main />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/success" exact>
            <Success />
          </Route>
        </Switch>
      </Router>

      
    </>
  );
};
export default App;

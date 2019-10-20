import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import LoginContainer from '../containers/LoginContainer'
import { Switch, Route, Redirect } from "react-router-dom";

export default () => (
  <div id="main" className="container-fluid">
    
    <Switch>
      <Route path="/users/login" component={LoginContainer} />
      <Redirect to="/"></Redirect>
    </Switch>
  </div>
);

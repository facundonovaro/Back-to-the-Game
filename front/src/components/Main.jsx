import React from "react";
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from "../containers/RegisterContainer"
import { Switch, Route, Redirect } from "react-router-dom";

export default () => (
  <div id="main" className="container-fluid">

    <Switch>
      <Route path="/users/register" component={RegisterContainer} />
      <Route path="/users/login" component={LoginContainer} />
      
    </Switch>
  </div>
);

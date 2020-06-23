import React from "react";
import LoginContainer from '../containers/LoginContainer'
import ProductsContainer from "../containers/ProductsContainer"

import { Switch, Route, Redirect } from "react-router-dom";

export default () => (
  <div id="main" className="container-fluid">
    
    <Switch>
      <Route path='/products' component={ProductsContainer}/>
      <Route path="/users/login" component={LoginContainer} />
      <Redirect to="/"></Redirect>
    </Switch>
  </div>
);

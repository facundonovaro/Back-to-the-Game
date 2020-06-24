import React from "react";
import LoginContainer from '../containers/LoginContainer'
import ProductsContainer from "../containers/ProductsContainer"
import RegisterContainer from "../containers/RegisterContainer"
import SingleProductContainer from "../containers/SingleProductContainer";
import AddProductContainer from "../containers/AddProductContainer";
import { Switch, Route, Redirect } from "react-router-dom";
import SingleuserContainer from "../containers/SingleuserContainer";

export default () => (
  <div id="main" className="container-fluid">
    <Switch>
      <Route exact path='/products' component={ProductsContainer} />
      <Route path="/users/register" component={RegisterContainer} />
      <Route path="/users/login" component={LoginContainer} />
      <Route exact path='/products/add' component={AddProductContainer}/>
      <Route path="/products/:id" component={SingleProductContainer}/>
      <Route path="/users/:id" component={SingleuserContainer} />
      {/* <Redirect to="/"></Redirect> */}
    </Switch>
  </div>
);

import React from "react";
import LoginContainer from "../containers/LoginContainer";
import ProductsContainer from "../containers/ProductsContainer";
import RegisterContainer from "../containers/RegisterContainer";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "../containers/NavBarContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import AddProductContainer from "../containers/AddProductContainer";
import SingleuserContainer from "../containers/SingleuserContainer";
import EditProductContainer from "../containers/EditProductContainer";
import CartContainer from "../containers/CartContainer";
import {connect} from 'react-redux'
import {cookieLogger} from '../store/actions/users'

class Main extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.cookieLogger()
  }

  render(){

    return (
      <div id="main" className="container-fluid">
        <div>
          <Route path="/" component={NavBarContainer} />
        </div>
        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/users/register" component={RegisterContainer} />
          <Route path="/users/login" component={LoginContainer} />
          <Route exact path="/products/add" component={AddProductContainer} />
          <Route path="/products/:id/edit" component={EditProductContainer} />
          <Route path="/products/:id" component={SingleProductContainer} />
          <Route path="/users/:id" component={SingleuserContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Redirect to="/products"></Redirect>
        </Switch>
      </div>
    );

  }
}
const mapStateToProps = function (state, ownProps) {
  return {
    
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    cookieLogger: ()=> dispatch(cookieLogger())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
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
import SearchContainer from "../containers/SearchContainer";
import CartContainer from "../containers/CartContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import ThankYouContainer from "../containers/ThankYouContainer";
import LastOrdersContainer from "../containers/LastOrdersContainer";
import { connect } from "react-redux";
import { cookieLogger } from "../store/actions/users";
import { CategoryContainer } from "../containers/CategoryContainer";
import { addLocalStorage, fetchCart } from "../store/actions/cart";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cookieLogger()
    if(this.props.userId){
    this.props.fetchCart();
    }
    else {
      var products = []
      for(var i = 0, len = localStorage.length; i < len; i++){
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage[key]);  
        products.push(value);
    }
      this.props.addLocalStorage(products)
    }
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div>
          <Route path="/" component={NavBarContainer} />
        </div>
        <Switch>
          <Route path="/search" component={SearchContainer} />
          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/thankyou" component={ThankYouContainer} />
          <Route path="/lastorders" component={LastOrdersContainer} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/users/register" component={RegisterContainer} />
          <Route path="/users/login" component={LoginContainer} />
          <Route exact path="/products/add" component={AddProductContainer} />
          <Route path="/products/:id/edit" component={EditProductContainer} />
          <Route path="/products/:id" component={SingleProductContainer} />
          <Route path="/users/:id" component={SingleuserContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route path="/category/:name" component={CategoryContainer}/>
          <Redirect to="/products"></Redirect>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.usersReducer.user
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    cookieLogger: () => dispatch(cookieLogger()),
    fetchCart: () => dispatch(fetchCart()),
    addLocalStorage: (newCart) => dispatch(addLocalStorage(newCart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

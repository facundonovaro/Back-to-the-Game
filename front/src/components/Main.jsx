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
import AdminContainer from "../containers/AdminContainer";
import CategoryContainer from "../containers/CategoryContainer";
import { connect } from "react-redux";
import { cookieLogger } from "../store/actions/users";
import DeleteProductContainer from "../containers/DeleteProductContainer";
import { addLocalStorage, fetchCart } from "../store/actions/cart";
/* import FacebookContainer from "../containers/FacebookContainer"; */
import ManageUsersContainer from "../containers/ManageUsersContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cookieLogger().then(() => {
      if (this.props.userId) {
        this.props.fetchCart();
      } else {
        var products = [];
        for (var i = 0, len = localStorage.length; i < len; i++) {
          var key = localStorage.key(i);
          var value = JSON.parse(localStorage[key]);
          products.push(value);
        }
        this.props.addLocalStorage(products);
      }
    });
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
          <Route exact path="/admin" component={AdminContainer} />
          <Route path="/admin/add-product" component={AddProductContainer} />
          <Route path="/admin/edit-product" component={EditProductContainer} />
          <Route path="/admin/manage-users" component={ManageUsersContainer} />
          <Route
            path="/admin/delete-product"
            component={DeleteProductContainer}
          />
          <Route path="/products/:id" component={SingleProductContainer} />
          <Route path="/users/:id" component={SingleuserContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route path="/category/:name" component={CategoryContainer} />
          {/* <Route path="/facebook" component={FacebookContainer} /> */}
          <Redirect to="/products"></Redirect>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.usersReducer.user,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    cookieLogger: () => dispatch(cookieLogger()),
    fetchCart: () => dispatch(fetchCart()),
    addLocalStorage: (newCart) => dispatch(addLocalStorage(newCart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

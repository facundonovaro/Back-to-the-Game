import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import {
  fetchCart,
  deleteCart,
  updateCart,
  addLocalStorage,
} from "../store/actions/cart";
import { cookieLogger } from "../store/actions/users";

class CartContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      totalQuantity: 0,
    };
    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleSubstractCart = this.handleSubstractCart.bind(this);
    this.handleDeleteCart = this.handleDeleteCart.bind(this);
  }
  componentDidMount() {
    this.props.cookieLogger().then(() => {
      if (this.props.user.id) {
        console.log("Está llegando acá");
        this.props.fetchCart();
      }
    });
    let total = 0;
    this.props.cart.map((product) => {
      total = total + product.quantity * product.price;
    });
    this.setState({ totalQuantity: total });
  }

  componentDidUpdate(prevProps) {
    let total = 0;
    if (this.props.cart !== prevProps.cart) {
      this.props.cart.map((product) => {
        total = total + product.quantity * product.price;
      });
      this.setState({ totalQuantity: total });
    }
  }

  handleAddCart(order) {
    if (this.props.user.id) {
      this.props.updateCart(order);
    } else {
      let newProduct = JSON.parse(localStorage.getItem(order.id));
      newProduct.quantity++;
      localStorage.setItem(order.id, JSON.stringify(newProduct));
      var products = [];
      for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage[key]);
        products.push(value);
      }
      this.props.addLocalStorage(products);
    }
  }

  handleSubstractCart(order) {
    if (this.props.user.id) {
      this.props.updateCart(order);
    } else {
      let newProduct = JSON.parse(localStorage.getItem(order.id));
      newProduct.quantity--;
      localStorage.setItem(order.id, JSON.stringify(newProduct));
      var products = [];
      for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage[key]);
        products.push(value);
      }
      this.props.addLocalStorage(products);
    }
  }

  handleDeleteCart(productId) {
    if (this.props.user.id) {
      this.props.deleteCart(productId);
    } else {
      localStorage.removeItem(productId);
      var products = [];
      for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage[key]);
        products.push(value);
      }
      this.props.addLocalStorage(products);
    }
  }

  render() {
    const { deleteCart, cart, user } = this.props;
    const { totalQuantity } = this.state;
    return (
      <div>
        <Cart
          deleteCart={deleteCart}
          cart={cart}
          user={user}
          totalQuantity={totalQuantity}
          handleAddCart={this.handleAddCart}
          handleSubstractCart={this.handleSubstractCart}
          handleDeleteCart={this.handleDeleteCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart());
    },
    deleteCart: (orderId) => {
      dispatch(deleteCart(orderId));
    },
    updateCart: (order) => {
      dispatch(updateCart(order));
    },
    addLocalStorage: (newCart) => {
      dispatch(addLocalStorage(newCart));
    },
    cookieLogger: () => dispatch(cookieLogger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

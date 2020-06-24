import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { fetchCart, deleteCart, updateCart } from "../store/actions/cart";

class CartContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCart(this.props.user);
  }

  render() {
    const { deleteCart, updateCart, cart, user } = this.props;
    return (
      <div>
        <Cart
          deleteCart={deleteCart}
          updateCart={updateCart}
          cart={cart}
          user={user}
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
    fetchCart: (user) => {
      dispatch(fetchCart(user));
    },
    deleteCart: (orderId, userId) => {
      dispatch(deleteCart(orderId, userId));
    },
    updateCart: (order) => {
      dispatch(updateCart(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

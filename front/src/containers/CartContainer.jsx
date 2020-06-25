import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { fetchCart, deleteCart, updateCart } from "../store/actions/cart";

class CartContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      totalQuantity: 0,
    };
  }
  componentDidMount() {
    let total = 0;
    this.props.fetchCart(this.props.user);
    this.props.cart.map((product) => {
      total = total + product.quantity * product.product.price;
    });
    this.setState({ totalQuantity: total });
  }

  componentDidUpdate(prevProps) {
    let total = 0;
    if (this.props.cart !== prevProps.cart) {
      this.props.cart.map((product) => {
        total = total + product.quantity * product.product.price;
      });
      this.setState({ totalQuantity: total });
    }
  }

  render() {
    const { deleteCart, updateCart, cart, user } = this.props;
    const { totalQuantity } = this.state;
    return (
      <div>
        <Cart
          deleteCart={deleteCart}
          updateCart={updateCart}
          cart={cart}
          user={user}
          totalQuantity={totalQuantity}
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

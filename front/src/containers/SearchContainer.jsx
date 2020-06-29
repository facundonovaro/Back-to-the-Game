import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { addToCart, deleteCart, fetchCart } from "../store/actions/cart";

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
    this.handleDeleteCart = this.handleDeleteCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  handlerSubmitCart(id, userId, price) {
    this.props.addToCart({ id: id, userId: userId, price: price });
  }

  handleDeleteCart(orderId) {
    this.props.deleteCart(orderId);
  }

  render() {
    const { searchedList, cart } = this.props;
    return (
      <div>
        <Products
          products={searchedList}
          handlerSubmitCart={this.handlerSubmitCart}
          handleDeleteCart={this.handleDeleteCart}
          cart={cart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchedList: state.searchReducer.list,
    cart: state.cartReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
    deleteCart: (orderId) => {
      dispatch(deleteCart(orderId));
    },
    fetchCart: () => {
      dispatch(fetchCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

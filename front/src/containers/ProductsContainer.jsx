import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { addToCart, deleteCart, fetchCart } from "../store/actions/cart";

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
    this.handleDeleteCart = this.handleDeleteCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  handlerSubmitCart(id, price) {
    this.props.addToCart({ id: id, price: price });
  }

  handleDeleteCart(orderId) {
    this.props.deleteCart(orderId);
  }
  render() {
    const { products, cart } = this.props;
    return (
      <div>
        <Products
          products={products}
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
    products: state.productsReducer.list,
    userId: state.usersReducer.user.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

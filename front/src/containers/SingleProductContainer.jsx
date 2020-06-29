import React from "react";
import { connect } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import { fetchProduct } from "../store/actions/singleProduct";
import { addToCart, deleteCart, fetchCart } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor() {
    super();
    this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
    this.handleDeleteCart = this.handleDeleteCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
    this.props.fetchCart();
  }

  handlerSubmitCart(id, price) {
    this.props.addToCart({ id: id, price: price });
  }

  handleDeleteCart(orderId) {
    this.props.deleteCart(orderId);
  }

  render() {
    const { product, cart } = this.props;
    return (
      <div>
        <SingleProduct
          product={product}
          handlerSubmitCart={this.handlerSubmitCart}
          handleDeleteCart={this.handleDeleteCart}
          cart={cart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    product: state.productReducer.product,
    cart: state.cartReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);

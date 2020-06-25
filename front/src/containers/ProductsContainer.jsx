import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { addToCart } from "../store/actions/cart";

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
  }

  handlerSubmitCart(id, userId, price) {
    this.props.addToCart({ id: id, userId: userId, price: price });
  }
  render() {
    const { products, userId } = this.props;
    return (
      <div>
        <Products
          products={products}
          handlerSubmitCart={this.handlerSubmitCart}
          userId={userId}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.list,
    userId: state.usersReducer.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productAndUserID) => {
      dispatch(addToCart(productAndUserID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

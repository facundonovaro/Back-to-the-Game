import React from "react";
import { connect } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import { fetchProduct } from "../store/actions/singleProduct";
import { addToCart } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor() {
    super();
    this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

  handlerSubmitCart(id, userId, price) {
    this.props.addToCart({ id: id, userId: userId, price: price });
  }

  render() {
    const { product, userId } = this.props;
    return (
      <div>
        <SingleProduct
          product={product}
          userId={userId}
          handlerSubmitCart={this.handlerSubmitCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    product: state.productReducer.product,
    userId: state.usersReducer.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
    addToCart: (productAndUserID) => {
      dispatch(addToCart(productAndUserID));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);

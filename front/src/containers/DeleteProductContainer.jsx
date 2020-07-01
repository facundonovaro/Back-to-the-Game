import React from "react";
import { connect } from "react-redux";
import DeleteProduct from "../components/DeleteProduct";
import { deleteProduct, fetchProducts } from "../store/actions/products";
import { fetchProduct } from "../store/actions/singleProduct";

class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChooseProduct = this.handleChooseProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleChooseProduct(e) {
    const id = e.target.value;
    this.props.fetchProduct(id);
  }

  handleDelete(id) {
    confirm("Estas seguro que querés borrar este producto?");
    this.props.deleteProduct(id);
  }
  render() {
    const { product, products } = this.props;
    return (
      <div>
        <DeleteProduct
          handleChooseProduct={this.handleChooseProduct}
          handleDelete={this.handleDelete}
          product={product}
          products={products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.list,
    product: state.productReducer.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    deleteProduct: (id) => {
      dispatch(deleteProduct(id));
    },
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductContainer);

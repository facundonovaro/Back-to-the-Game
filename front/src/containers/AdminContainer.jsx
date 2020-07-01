import React from "react";
import { connect } from "react-redux";
import Admin from "../components/Admin";
import { fetchUsers } from "../store/actions/users";

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChooseProduct = this.handleChooseProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    const { product } = this.props;
    if (product !== prevProps.product) {
      this.setState({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        img1Url: product.img1Url,
        img2Url: product.img2Url,
      });
    }
  }

  handleChooseProduct(e) {
    const id = e.target.value;
    this.props.fetchProduct(id);
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleDescriptionChange(event) {
    const value = event.target.value;
    this.setState({ description: value });
  }

  handlePriceChange(event) {
    const value = Number(event.target.value);
    this.setState({ price: value });
  }

  handleStockChange(event) {
    const value = Number(event.target.value);
    this.setState({ stock: value });
  }

  hangleImage1Change(event) {
    const value = event.target.value;
    this.setState({ img1Url: value });
  }

  handleImage2Change(event) {
    const value = event.target.value;
    this.setState({ img2Url: value });
  }

  handleSubmit() {
    event.preventDefault();
    confirm("Are you sure you want to change this product info?");
    editProduct(this.props.product.id, this.state);
    this.setState({
      name: "",
      description: "",
      price: "",
      stock: "",
      img1Url: "",
      img2Url: "",
    });
  }
  render() {
    const { products } = this.props;
    const { name, description, price, stock, img1Url, img2Url } = this.state;
    return (
      <div>
        <Admin
          products={products}
          handleChooseProduct={this.handleChooseProduct}
          handleSubmit={this.handleSubmit}
          handleImage2Change={this.handleImage2Change}
          hangleImage1Change={this.hangleImage1Change}
          handleStockChange={this.handleStockChange}
          handlePriceChange={this.handlePriceChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleNameChange={this.handleNameChange}
          nameInput={name}
          descriptionInput={description}
          priceInput={price}
          stockInput={stock}
          image1Input={img1Url}
          image2Input={img2Url}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state.productReducer ", state.productReducer);
  return {
    products: state.productsReducer.list,
    product: state.productReducer.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer);

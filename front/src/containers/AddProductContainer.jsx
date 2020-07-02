import React from "react";
import { connect } from "react-redux";
import AddProduct from "../components/AddProduct";
import { newProduct } from "../store/actions/products";
class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      stock: "",
      img1Url: "",
      img2Url: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.hangleImage1Change = this.hangleImage1Change.bind(this);
    this.handleImage2Change = this.handleImage2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleCategoryChange(event) {
    const value = event.target.value;
    this.setState({ category: value });
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
    this.props.newProduct(this.state);
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
    const { category, name, description, price, stock, img1Url, img2Url } = this.state;
    return (
      <div>
        <AddProduct
          handleCategoryChange={this.handleCategoryChange}
          handleChooseProduct={this.handleChooseProduct}
          handleSubmit={this.handleSubmit}
          handleImage2Change={this.handleImage2Change}
          hangleImage1Change={this.hangleImage1Change}
          handleStockChange={this.handleStockChange}
          handlePriceChange={this.handlePriceChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleNameChange={this.handleNameChange}
          category={category}
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

const mapDispatchToProps = (dispatch) => {
  return {
    newProduct: (product) => {
      dispatch(newProduct(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddProductContainer);

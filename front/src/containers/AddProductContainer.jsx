import React from "react";
import { connect } from "react-redux";
import AddProduct from "../components/AddProduct";
import { newProduct } from "../store/actions/products";
import { addCategories, getCategories } from "../store/actions/category";
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
      category: [],
      addCat: "",
      local: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.hangleImage1Change = this.hangleImage1Change.bind(this);
    this.handleImage2Change = this.handleImage2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleNewCat = this.handleNewCat.bind(this);
    this.handleSubmitNewCat = this.handleSubmitNewCat.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  handleCategoryChange(event) {
    const value = event.target.value;
    if (this.state.category.includes(value)) {
      const newCat = this.state.category.filter((cat) => {
        if (cat !== value) {
          return cat;
        }
      });
      this.setState({
        category: newCat,
      });
    } else {
      this.setState({
        category: [...this.state.category, event.target.value],
      });
    }
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
    console.log("CATEGORIAS", this.state.category);
    this.props.newProduct(this.state);
    this.setState({
      name: "",
      description: "",
      price: "",
      stock: "",
      img1Url: "",
      img2Url: "",
      category: [],
    });
  }

  handleNewCat(event) {
    const value = event.target.value;
    this.setState({
      addCat: value,
    });
  }

  handleSubmitNewCat(event) {
    console.log("ESTA ENTRANDO ACA");
    event.preventDefault();
    this.props.addCategories({ name: this.state.addCat });
    this.setState({
      addCat: "",
      local: !this.state.local,
    });
  }

  render() {
    const {
      category,
      name,
      description,
      price,
      stock,
      img1Url,
      img2Url,
    } = this.state;
    const { categories } = this.props;
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
          categories={categories}
          nameInput={name}
          descriptionInput={description}
          priceInput={price}
          stockInput={stock}
          image1Input={img1Url}
          image2Input={img2Url}
          handleSubmitNewCat={this.handleSubmitNewCat}
          addCat={this.state.addCat}
          handleNewCat={this.handleNewCat}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newProduct: (product) => {
      dispatch(newProduct(product));
    },
    addCategories: (cat) => {
      dispatch(addCategories(cat));
    },
    getCategories: () => {
      dispatch(getCategories());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductContainer);

import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/Navbar";
import { fetchProducts } from "../store/actions/products";
import { searchProducts } from "../store/actions/search";
import { userLogout } from "../store/actions/users";
import logo from "../assets/logo.png";
import { getCategories } from "../store/actions/category";

class NavBarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      disable: true,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmitSearch = this.handlerSubmitSearch.bind(this);
    this.userLogoutEvent = this.userLogoutEvent.bind(this);
  }

  userLogoutEvent() {
    this.props.userLogout();
    this.props.history.push("/products");
  }

  componentDidMount() {
    this.props.getCategories();
    const { fetchProducts } = this.props;
    fetchProducts(this.state.inputValue);
    // agregar loginuser?
  }

  handlerChange(evt) {
    const value = evt.target.value;
    this.setState({ inputValue: value });
    if (value.length > 0) {
      this.setState({ disable: false });
    }
    if (value.length === 0) {
      this.setState({ disable: true });
    }
  }

  handlerSubmitSearch() {
    const { searchProducts } = this.props;
    event.preventDefault();
    searchProducts(this.state.inputValue).then(() => {
      this.props.history.push("/search");
    });
    this.setState({
      inputValue: "",
    });
  }

  render() {
    const { user, categories } = this.props;
    return (
      <div>
        <NavBar
          handlerChange={this.handlerChange}
          handlerSubmitSearch={this.handlerSubmitSearch}
          userLogout={this.userLogoutEvent}
          user={user}
          disable={this.state.disable}
          logo={logo}
          inputValue={this.state.inputValue}
          categories={categories}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.usersReducer.user,
    history: ownProps.history,
    categories: state.categoryReducer.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (name) => {
      dispatch(fetchProducts(name));
    },
    userLogout: () => {
      dispatch(userLogout());
    },
    searchProducts: (name) => {dispatch(searchProducts(name))},
    getCategories: () => {dispatch(getCategories())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);

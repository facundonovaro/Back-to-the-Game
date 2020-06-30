import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { userLogin } from "../store/actions/users";
import { assignCart } from "../store/actions/cart";

const mapStateToProps = function (state, ownProps) {
  return {
    history: ownProps.history,
    message: state.usersReducer.message,
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
    assignCart: (carrito) => dispatch(assignCart(carrito))
  };
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error:false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const carrito = this.props.cart
    this.props.userLogin(this.state)
    .then((data)=>{
      if(!data.message){
        this.props.assignCart(carrito);
        localStorage.clear();
        this.props.history.push(`/products`)
      }
      else{
        this.setState({error:true})
      } 
    })
  }

  render() {
    return (
      <Login
        
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        username={this.state.username}
        password={this.state.password}
        message={this.props.message}
        error={this.state.error}

      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

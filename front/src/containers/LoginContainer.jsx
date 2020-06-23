import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { userLogin } from "../store/actions/users";

const mapStateToProps = function (state, ownProps) {
  return {
    history: ownProps.history,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    this.props.userLogin(this.state);
    this.props.history.push("/");
  }
  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        username={this.state.username}
        password={this.state.password}
      />
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

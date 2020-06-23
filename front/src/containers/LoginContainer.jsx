import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { loginUser } from "../store/actions/users";

const mapStateToProps = function (state, ownProps) {
  return {
    history: ownProps.history,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
   loginUser: (userData) => dispatch(loginUser(userData)),
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
    this.props.loginUser(this.state);
    this.props.history.push("/");
  }
  render() {
    return <Login />;
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import AllOrders from "../components/AllOrders";
import { fetchAllOrders } from "../store/actions/checkout";

const mapStateToProps = function (state) {
  return {
    orders: state.checkoutReducer.allOrders,
    user: state.usersReducer.user,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchAllOrders: () => {
      dispatch(fetchAllOrders());
    },
  };
};

class AllOrdersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllOrders();
  }

  render() {
    return <AllOrders orders={this.props.orders} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrdersContainer);

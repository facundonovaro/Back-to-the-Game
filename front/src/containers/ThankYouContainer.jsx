import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogout } from "../store/actions/users";
import ThankYou from "../components/ThankYou";
import { fetchLastOrders } from "../store/actions/checkout";

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.usersReducer.user,
    orders: state.checkoutReducer.orders,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    userLogout: () => {
      dispatch(userLogout());
    },
    fetchLastOrders: () => {
      dispatch(fetchLastOrders());
    },
  };
};

class ThankYouContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.userLogoutEvent = this.userLogoutEvent.bind(this)
    }

    componentDidMount() {
        
        this.props.fetchLastOrders();
    }

    userLogoutEvent() {
        this.props.userLogout()
        this.props.history.push('/products')
    }

    render() {
        
        return (
            <ThankYou
                username={this.props.user.username}
                userLogoutEvent={this.userLogoutEvent}
                orders={this.props.orders}
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouContainer);

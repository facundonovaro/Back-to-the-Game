import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/users'
import ThankYou from '../components/ThankYou';




const mapStateToProps = function (state, ownProps) {
    return {
        user: state.usersReducer.user,
       
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        userLogout: () => { dispatch(userLogout()) },
      
    };
};


class ThankYouContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.userLogoutEvent = this.userLogoutEvent.bind(this)
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
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouContainer);
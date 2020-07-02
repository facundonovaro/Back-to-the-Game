import React, { Component } from 'react'
import { connect } from 'react-redux'
import LastOrders from '../components/LastOrders';
import {fetchLastOrders} from '../store/actions/checkout'

const mapStateToProps = function (state, ownProps) {
    return {

        user: state.usersReducer.user,
        orders: state.checkoutReducer.orders

    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchLastOrders: ()=>{
            dispatch(fetchLastOrders())
        }
    };
};

class LastOrdersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }       
    }

    componentDidMount() {
        console.log('LLRGAAAA')
    this.props.fetchLastOrders();
  }

    render() {
        
        return (
            <LastOrders
            orders={this.props.orders}
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LastOrdersContainer);
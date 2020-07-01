import React, { Component } from 'react'
import { connect } from 'react-redux'
import LastOrders from '../components/LastOrders';
import {fetchLastOrders} from '../store/actions/checkout'

const mapStateToProps = function (state, ownProps) {
    return {

        user: state.usersReducer.user,

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
    this.props.fetchLastOrders();
  }

    render() {
        
        return (
            <LastOrders
            
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LastOrdersContainer);
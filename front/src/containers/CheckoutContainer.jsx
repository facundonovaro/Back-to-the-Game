import React, {Component} from 'react'
import {connect} from 'react-redux'
import Checkout from '../components/Checkout'
import { fetchCart } from "../store/actions/cart";
import { updateOrderStatus, updateOrderAdress } from '../store/actions/checkout';


const mapStateToProps = function (state, ownProps) {
    return {
        cart: state.cartReducer.cart,
        user: state.usersReducer.user,
      
    };
};

const mapDispatchToProps = function (dispatch) {
    return {

        fetchCart: () => {dispatch(fetchCart())},
        updateOrderAdress: (order) => dispatch(updateOrderAdress(order)),
        updateOrderStatus: (order) => dispatch(updateOrderStatus(order)) ,
        
    };
};


class CheckoutContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalQuantity: 0,
            userId: this.props.user.id,
            orderAdress: "",
            orderFinished:false,
            

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }

    componentDidMount(){

        let total = 0;
        this.props.fetchCart();
        this.props.cart.map((product) => {
            total = total + product.quantity * product.price;
        });
        this.setState({ totalQuantity: total });
    }


    handleChange(evt){
     this.setState({ 
         [evt.target.name]: evt.target.value 
        })
    }

     handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateOrderAdress(this.state)
        .then(()=>{
            this.props.updateOrderStatus(this.state)
        })
        .then(()=>{
            this.props.history.push('/thankyou')
        })
        
        
    
  }


    render(){
       
        return(
            <Checkout  
            cart={this.props.cart}
            total= {this.state.totalQuantity}
            handleSubmit = {this.handleSubmit}
            orderAdress = {this.state.orderAdress}
            handleChange = {this.handleChange}
            handleClick = {this.handleClick}
            orderFinished = {this.state.orderFinished}
            username = {this.props.user.username}
            
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
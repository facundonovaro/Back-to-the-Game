import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import { setCategory } from '../store/actions/category';
import { addToCart, deleteCart, fetchCart, addLocalStorage } from "../store/actions/cart";

class CategoryContainer extends React.Component {
    constructor() {
        super();
        this.handlerSubmitCart = this.handlerSubmitCart.bind(this);
        this.handleDeleteCart = this.handleDeleteCart.bind(this);
      }
    
    handlerSubmitCart(id, name, description, price, stock, img1Url, img2Url) {
    if(this.props.userId){
        this.props.addToCart({ id: id, price: price });
    }
    else {
        let product = {id, name, description, price, stock, img1Url, img2Url, quantity: 1}
        localStorage.setItem(id, JSON.stringify(product))
        var products = []
        for(var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage[key]);  
        products.push(value);
        }
        this.props.addLocalStorage(products)
    }
    }

    handleDeleteCart(orderId) {
    this.props.deleteCart(orderId);
    }

    componentDidMount(){
        this.props.setCategory(this.props.category)
    }

    render (){
        const { products, cart } = this.props
        return (
            <div>
                <Products
                products={products}
                handlerSubmitCart={this.handlerSubmitCart}
                handleDeleteCart={this.handleDeleteCart}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.categoryReducer.products,
        category: ownProps.match.params.name,
        cart: state.cartReducer.list,
        userId: state.usersReducer.user.id,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },
        deleteCart: (orderId) => {
            dispatch(deleteCart(orderId));
        },
        fetchCart: () => {
            dispatch(fetchCart());
        },
        addLocalStorage: (products) => {dispatch(addLocalStorage(products))
        },
        setCategory: (category) => {dispatch(setCategory(category))}
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CategoryContainer)
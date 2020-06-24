import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'

class ProductsContainer extends React.Component {

    constructor(){
        super()
        this.handlerSubmitCart = this.handlerSubmitCart.bind(this)
    }
    
    
    
    handlerSubmitCart(){
        console.log(`BOTON 'CARRITO' FUNCIONANDO Y LISTO PARA SER USADO`) //Funciona
    }
    render(){
        const {products} = this.props
        return(
            <div>
                <Products
                 products={products}
                 handlerSubmitCart={this.handlerSubmitCart} 
                />
            </div>
        )
    }
}
    const mapStateToProps = (state) =>{
        return {
            products: state.productsReducer.list
        }
    }

 export default connect (mapStateToProps, null ) (ProductsContainer)
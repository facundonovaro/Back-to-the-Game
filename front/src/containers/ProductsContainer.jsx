import React from 'react'
import {connect} from 'react-redux'
import Products  from '../components/Products'
import fetchProducts from '../store/actions/products'

class ProductsContainer extends React.Component{

   constructor(){
     super()
     this.state = {
       inputValue : ''
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.handlerSubmit = this.handlerSubmit.bind(this)
   }

   handlerChange(evt){
     console.log(this.state)
     const value = evt.target.value
     this.setState({inputValue : value})
   }

   handlerSubmit(){
     const {fetchProducts} = this.props
     event.preventDefault();
     fetchProducts(this.state.inputValue)
   }

render(){
   const {products} =  this.props
    return(
        <div>
           <Products
           handlerSubmit={this.handlerSubmit}
           products={this.props.products}
           />
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
      products: state.productsReducer.list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProducts : (name)=>{
      dispatch(fetchProducts(name))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductsContainer)
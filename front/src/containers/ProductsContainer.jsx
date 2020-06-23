import React from 'react'
import {connect} from 'react-redux'
import Products  from '../components/Products'

class ProductsContainer extends React.Component{

render(){
    return(
        <div>
           <Products/>
        </div>
    )
  }
}

export default (ProductsContainer)
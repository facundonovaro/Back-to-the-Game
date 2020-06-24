import React from 'react'
import {connect} from 'react-redux'
import NavBar  from '../components/Navbar'
import {fetchProducts} from '../store/actions/products'

class ProductsContainer extends React.Component{

   constructor(){
     super()
     this.state = {
       inputValue : ''
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.handlerSubmit = this.handlerSubmit.bind(this)
   }

   componentDidMount(){
    const {fetchProducts} = this.props
    fetchProducts(this.state.inputValue)
   }

   handlerChange(evt){
     console.log(this.state)
     const value = evt.target.value
     this.setState({inputValue : value})
   }

   handlerSubmit(){
     event.preventDefault();
     console.log(`BOTON 'BUSCAR' FUNCIONANDO Y LISTO PARA SER USADO`) // Funciona(por si no quedo claro)
   }

render(){
   const { products } =  this.props
    return(
        <div>
           <NavBar
           handlerChange={this.handlerChange}
           handlerSubmit={this.handlerSubmit}
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

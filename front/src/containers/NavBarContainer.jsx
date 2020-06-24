import React from 'react'
import {connect} from 'react-redux'
import NavBar  from '../components/Navbar'
import {fetchProducts} from '../store/actions/products'
import {userLogout} from '../store/actions/users'

class ProductsContainer extends React.Component{

   constructor(){
     super()
     this.state = {
       inputValue : ''
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.handlerSubmit = this.handlerSubmit.bind(this)
     this.userLogoutEvent =  this.userLogoutEvent.bind(this)
   }

   userLogoutEvent(){
    this.props.userLogout()
    this.props.history.push('/products')
    
    
    console.log('Esta sirviendo el userLogout')
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
           userLogout={this.userLogoutEvent}
           user={this.props.user}
           />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  return{
      products: state.productsReducer.list,
      user: state.usersReducer.user,
      history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProducts : (name)=>{
      dispatch(fetchProducts(name))
    },
    userLogout : () =>{
      dispatch(userLogout())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductsContainer)

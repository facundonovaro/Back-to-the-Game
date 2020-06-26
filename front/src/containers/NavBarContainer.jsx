import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'
import { fetchProducts } from '../store/actions/products'
import { searchProducts } from '../store/actions/search'
import { userLogout } from '../store/actions/users'

class NavbarContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmitSearch = this.handlerSubmitSearch.bind(this)
    this.userLogoutEvent = this.userLogoutEvent.bind(this)
  }

  userLogoutEvent() {
    this.props.userLogout()
    this.props.history.push('/products')
  }

  componentDidMount() {
    const { fetchProducts } = this.props
    fetchProducts(this.state.inputValue)
    // agregar loginuser?
  }

  handlerChange(evt) {
    const value = evt.target.value
    this.setState({ inputValue: value })
  }

  handlerSubmitSearch() {
    const { searchProducts } = this.props
    event.preventDefault();
    searchProducts(this.state.inputValue)
      .then(() => {
        this.props.history.push("/search")
      })
    console.log('Este click anda')

  }

  render() {
    const { user } = this.props
    return (
      <div>
        <NavBar
          handlerChange={this.handlerChange}
          handlerSubmitSearch={this.handlerSubmitSearch}
          userLogout={this.userLogoutEvent}
          user={user}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.usersReducer.user,
    history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (name) => {
      dispatch(fetchProducts(name))
    },
    userLogout: () => {
      dispatch(userLogout())
    },
    searchProducts: (name) => dispatch(searchProducts(name))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

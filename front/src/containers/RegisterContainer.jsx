import React from 'react';
import { connect } from 'react-redux';
import Register from "../components/Register"
import { registerUser } from "../store/actions/users"

const mapStateToProps = (state, ownProps) => {
    return{
    history: ownProps.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => (dispatch(registerUser(user))

        )
    }
}

class RegisterContainer extends React.Component {
    constructor() {
        super()
        this.state = { firstName: "", lastName: "", username: "", password: "", passwordValidate:false }
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handlerChange(evt) {
       
        this.setState({ [evt.target.name]: evt.target.value })
        console.log('STATEEE', this.state)
    }

    submit(e) {
        e.preventDefault()
        let strongRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,32}$/gm) ;//(1 mayus, 1 minus, 1 numero, mas de 4 caracteres)
        let password= this.state.password
        if(password.match(strongRegex)){

            this.props.registerUser(this.state)
            this.props.history.push("/users/login")
        }
        else {
            this.setState({passwordValidate:true})
        }
      
    }

    render() {
        return (
            <Register
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.username}
                password={this.state.password}
                handlerChange={this.handlerChange}
                submit={this.submit}
                passwordValidate={this.state.passwordValidate} />
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(RegisterContainer)

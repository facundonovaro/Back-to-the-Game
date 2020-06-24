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
        this.state = { firstName: "", lastName: "", username: "", password: "" }

        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handlerChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    submit(e) {
        e.preventDefault()
        this.props.registerUser(this.state)
        this.props.history.push("/users/login")
    }

    render() {
        return (
            <Register
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.username}
                password={this.state.password}
                handlerChange={this.handlerChange}
                submit={this.submit} />
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(RegisterContainer)

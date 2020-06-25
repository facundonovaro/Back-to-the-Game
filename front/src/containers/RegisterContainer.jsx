import React from 'react';
import { connect } from 'react-redux';
import Register from "../components/Register"
import { registerUser } from "../store/actions/users"

const mapStateToProps = (state, ownProps) => {
    return{
    history: ownProps.history,
    message: state.usersReducer.message,
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
        this.state = {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          passwordValidate: false,
          error:false,
        };
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handlerChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    submit(e) {
        e.preventDefault()
        let strongRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,32}$/gm) ;//(1 mayus, 1 minus, 1 numero, mas de 4 caracteres)
        let password= this.state.password

        if(password.match(strongRegex)){
            this.props.registerUser(this.state)
            .then((data) => {!data.message
                               ? this.props.history.push(`/users/login`)
                               : this.setState({ error: true });
            });   
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
            passwordValidate={this.state.passwordValidate}
            error={this.state.error}
            message={this.props.message}
          />
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(RegisterContainer)

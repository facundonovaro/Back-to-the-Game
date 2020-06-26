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
          passwordBarVariant: 'danger',
          passwordBarNow: 10,
          passwordSecurity:'',
          passwordSecurityClass:'',
          

        };
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    handlerChange(evt) {

        

        this.setState({ [evt.target.name]: evt.target.value })
        const strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm);
        const mediumRegex = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/gm);

        if(evt.target.name === 'password'){
            console.log(evt.target.value)
        if (strongRegex.test(evt.target.value)) {
            this.setState({ passwordBarNow:100, passwordBarVariant:'success',passwordSecurity:'Muy segura',passwordSecurityClass:'passwordHighSecure' });
        } else if (mediumRegex.test(evt.target.value)) {
            this.setState({ passwordBarNow: 60, passwordBarVariant: 'warning', passwordSecurity: 'Medianamente segura', passwordSecurityClass: 'passwordMediumSecure' });
        } else {
            this.setState({ passwordBarNow: 30, passwordBarVariant: 'danger', passwordSecurity: 'Poco segura', passwordSecurityClass: 'passwordLowSecure' });
        }
    }
    }

    submit(e) {
        e.preventDefault()
        let strongRegex = new RegExp(/^.{4,32}$/gm) ;//(4 digitos cualquiera)
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
                passwordBarNow={this.state.passwordBarNow}
                passwordBarVariant={this.state.passwordBarVariant}
                passwordSecurity={this.state.passwordSecurity}
                passwordSecurityClass={this.state.passwordSecurityClass}
            />
        
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(RegisterContainer)

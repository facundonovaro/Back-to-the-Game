import React from 'react';
import { connect } from 'react-redux';
import SingleUser from '../components/SingleUser';
//import { fetchUser } from '../store/actions/singleProduct';

class SingleUserContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props, "que me traee en proooops")
        return (
            <div>
                <SingleUser
                    user={this.props.user}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "stateee")
    return {
        user: state.usersReducer.user
    }
}


export default connect(mapStateToProps, null)(SingleUserContainer)
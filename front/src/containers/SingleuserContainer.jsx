import React from 'react';
import { connect } from 'react-redux';
import SingleUser from '../components/SingleUser';


class SingleUserContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        
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
    
    return {
        user: state.usersReducer.user
    }
}


export default connect(mapStateToProps, null)(SingleUserContainer)
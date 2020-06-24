import React from 'react';

const SingleUser = ({ user }) => {
    
    return (
        <div>
            <h3>{user.firstName}</h3>
            <h3>{user.username}</h3>
        </div>
    )
}

export default SingleUser
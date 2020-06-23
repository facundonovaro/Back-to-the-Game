import { combineReducers } from 'redux';
import usersReducers from './users-reducers'

export default combineReducers({
    
    users: usersReducers

});

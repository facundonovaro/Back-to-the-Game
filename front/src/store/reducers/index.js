import { combineReducers } from 'redux';
import productsReducer from './products'
import usersReducer from './users-reducers';

export default combineReducers({
    productReducer,
    usersReducer,
});


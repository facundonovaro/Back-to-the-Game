import { combineReducers } from 'redux';
import productsReducer from './products-reducer'
import usersReducer from './users-reducers';

export default combineReducers({
    productsReducer,
    usersReducer,
});


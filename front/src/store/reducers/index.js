import { combineReducers } from 'redux';
import { productReducer } from './product-reducer';
import { usersReducer } from './users-reducers';

export default combineReducers({
    productReducer,
    usersReducer,
});

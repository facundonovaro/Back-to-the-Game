import { combineReducers } from 'redux';
import productReducer from './product-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducers';

export default combineReducers({
    productReducer,
    productsReducer,
    usersReducer,

});


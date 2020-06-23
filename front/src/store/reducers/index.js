import { combineReducers } from 'redux';

import productReducer from './product-reducer'
import usersReducer from './users-reducer';

export default combineReducers({
    productReducer,
    usersReducer,

});


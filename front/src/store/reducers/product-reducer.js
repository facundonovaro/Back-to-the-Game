import { GET_PRODUCT } from '../constants';

const initialState = { 
    product: {}
}

const productReducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_PRODUCT:
            return {...state, product: action.product}
        default:
            return state;
    }
}

export default productReducer;
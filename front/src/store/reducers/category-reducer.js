import { SET_CATEGORY } from '../constants';

const initialState = { 
    products: []
}

const categoryReducer = (state = initialState, action)=> {
    switch(action.type){
        case SET_CATEGORY:
            return {products: [...state.products, action.products]}
        default:
            return state;
    }
}

export default categoryReducer;
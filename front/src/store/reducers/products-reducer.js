import { GET_ALL_PRODUCTS } from '../constants'

const initialState = {
    list: []
}

const producstReducer  = ( state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {...state, list: action.products}
            default:
                return state
    }
}
export default producstReducer;
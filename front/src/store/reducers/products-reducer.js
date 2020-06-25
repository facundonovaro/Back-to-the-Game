import { GET_ALL_PRODUCTS, ADD_PRODUCT } from '../constants'

const initialState = {
    list: [],

}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return { ...state, list: action.products }
        case ADD_PRODUCT:
            return { list: [...state.list, action.product] }
        default:
            return state
    }
}
export default productsReducer;
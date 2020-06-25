import { SEARCH_PRODUCTS } from '../constants'

const initialState = {
    list: [],

}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, list: action.searchedList }
        default:
            return state
    }
}
export default searchReducer;
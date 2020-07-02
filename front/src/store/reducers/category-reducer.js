import { SET_CATEGORY, GET_CATEGORIES, ADD_CATEGORY } from '../constants';

const initialState = {
    products: [],
    categories: []

}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, products: action.products }
        case GET_CATEGORIES:
            return { ...state, categories: action.categories }
        case ADD_CATEGORY:
            return { ...state, categories: action.categories }
        default:
            return state;
    }
}

export default categoryReducer;
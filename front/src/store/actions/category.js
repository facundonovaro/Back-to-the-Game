import axios from 'axios';
import { SET_CATEGORY, GET_CATEGORIES, ADD_CATEGORY } from '../constants';

const cartProds = (products) => {
    return {
        type: SET_CATEGORY,
        products,
    }
}

const setCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories,
    }
}

const newCategories = (categories) => {
    return {
        type: ADD_CATEGORY,
        categories,
    }
}

export const setCategory = (category) => (dispatch) => {
    axios.get(`/api/category/${category}`)
        .then(category => {
            dispatch(cartProds(category.data[0].products))
        })
}

export const addCategories = () => (dispatch) =>
    axios.post('/api/category')
        .then(categories => {
            console.log(categories.data, "CATEGORIEEEEESSS")
            return dispatch(newCategories(categories.data))
        }
        )

export const getCategories = () => (dispatch) =>
    axios.get('/api/category')
        .then(categories =>
            dispatch(setCategories(categories.data)))
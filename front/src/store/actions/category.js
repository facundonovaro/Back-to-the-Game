import axios from 'axios';
import { SET_CATEGORY, GET_CATEGORIES } from '../constants';

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

export const setCategory = (category) => (dispatch) => {
    axios.get(`/api/category/${category}`)
    .then(category => {
        dispatch(cartProds(category.data[0].products))})}

export const getCategories = () => (dispatch) =>
    axios.get('/api/category')
    .then((categories) => {
        console.log('CATEGORIES DEL BACK ', categories)
        dispatch(setCategories(categories.data))})
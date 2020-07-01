import axios from 'axios';
import { SET_CATEGORY } from '../constants';

const cartProds = (products) => {
    return {
        type: SET_CATEGORY,
        products,
    }
}

export const setCategory = (category) => (dispatch) => {
    axios.get(`/api/category/${category}`)
    .then(category => {
        dispatch(cartProds(category.data[0].products))})}
import { GET_PRODUCT } from '../constants';
import axios from "axios";

const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        product,
    }
}

export const fetchProduct = id => dispatch => 
    axios.get('/api/products/:id')
    .then(product => dispatch(getProduct(product.data)))
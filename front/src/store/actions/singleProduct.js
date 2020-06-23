import { GET_PRODUCT } from '../constants';

const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        product,
    }
}

export const fetchProduct = id => dispatch => 
    axios.get('/api/product/:id')
    .then(product => dispatch(getProduct(product.data)))
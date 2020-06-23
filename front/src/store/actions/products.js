import axios from 'axios'
import { GET_ALL_PRODUCTS } from '../constants'

const allProducts = (products) =>({
    type: GET_ALL_PRODUCTS,
    products 
});

export const fetchProducts = (products) => dispatch =>
 axios.get('/api/products')
 .then(res => res.data)
 .then(products => dispatch(allProducts(products)))
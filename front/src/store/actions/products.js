import axios from 'axios'
import { GET_ALL_PRODUCTS } from '../constants'

const allProducts = (products) =>({
    type: GET_ALL_PRODUCTS,
    products 
});

export const fetchProducts = () => dispatch =>
 axios.get('/api/products')
 .then(res => { console.log(res.data)
     return res.data} )
 .then(products => dispatch(allProducts(products)))
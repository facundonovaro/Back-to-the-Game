import axios from 'axios'
import { GET_ALL_PRODUCTS, ADD_PRODUCT } from '../constants'

const allProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    products
})

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product,
    }
}

export const fetchProducts = () => dispatch =>
    axios.get('/api/products')
        .then(res => res.data)
        .then(products => dispatch(allProducts(products)))

export const newProduct = product => dispatch =>
    axios.post('/api/products', product)
        .then(product => dispatch(addProduct(product.data)))
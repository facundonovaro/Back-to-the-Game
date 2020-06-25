import axios from 'axios'
import { GET_ALL_PRODUCTS, ADD_PRODUCT, SEARCH_PRODUCTS } from '../constants'

const allProducts = (products) =>({
    type: GET_ALL_PRODUCTS,
    products 
})

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product,
    }
}

const allSearchProducts = (products) =>({
    type: SEARCH_PRODUCTS,
    searchedList, 
})

export const fetchProducts = () => dispatch =>
 axios.get('/api/products')
 .then(res => res.data)
 .then(products => dispatch(allProducts(products)))

 export const searchProducts = (title) => dispatch =>
 axios.get(`/api/products/${title}`)
 .then(res => { console.log(res.data)
     return res.data} )
 .then(searchedList => dispatch(allSearchProducts(searchedList)))

export const newProduct = product => dispatch => 
    axios.post('/api/products', product)
    .then(product => dispatch(addProduct(product.data)))
import axios from 'axios'
import { GET_ALL_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT } from '../constants'

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

const editProduct = (product) => {
    return {
        type: EDIT_PRODUCT,
        product,
    }
}

export const fetchProducts = () => dispatch =>
 axios.get('/api/products')
 .then(res => { console.log(res.data)
     return res.data} )
 .then(products => dispatch(allProducts(products)))

export const newProduct = product => dispatch => 
    axios.post('/api/products', product)
    .then(product => dispatch(addProduct(product.data)))

export const patchProduct = id = dispatch => 
    axios.patch(`/api/products/${id}`, product)
import axios from 'axios'
import { SEARCH_PRODUCTS } from '../constants'

const allSearchProducts = (searchedList) => ({
    type: SEARCH_PRODUCTS,
    searchedList,
})

export const searchProducts = (name) => dispatch => {
    return axios.get(`/api/search/${name}`)
        .then(res => { return dispatch(allSearchProducts(res.data)) })
} 
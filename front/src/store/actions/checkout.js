import axios from 'axios'
import {GET_LAST_ORDERS} from '../constants'
import { allCart, cartList} from '../actions/cart'

const lastOrders = (orders) => ({
    type: GET_LAST_ORDERS,
    orders,
})

export const updateOrderAdress = (order) => () =>
axios.patch("/api/checkout/adress", order)

export const updateOrderStatus = (order) => (dispatch) =>
axios.patch("/api/checkout/status", order)
.then(()=>{
    dispatch(allCart([]))
})
.then(()=>{
    dispatch(cartList([]))
})

export const updateStock = (cart) => () =>
axios.patch('/api/checkout/stock', cart)


export const fetchLastOrders = () => (dispatch) =>
axios.get("/api/checkout/lastorders")
.then(res => res.data)
.then(orders => dispatch(lastOrders(orders)))

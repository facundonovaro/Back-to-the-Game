import axios from 'axios'
import {GET_LAST_ORDERS} from '../constants'

const lastOrders = (orders) => ({
    type: GET_LAST_ORDERS,
    orders,
})

export const updateOrderAdress = (order) => () =>
axios.patch("/api/checkout/adress", order)

export const updateOrderStatus = (order) => () =>
axios.patch("/api/checkout/status", order)

export const fetchLastOrders = () => (dispatch) =>
axios.get("/api/checkout/lastorders")
.then(res => res.data)
.then(orders => dispatch(lastOrders(orders)))
